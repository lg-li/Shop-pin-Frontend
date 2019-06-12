<template>
	<view>
		<view class="pin-top-padding"></view>
		<view class="pin-card pin-padding">
			<view class="pin-list-item">
				<view class="list-left">
					<image class="pin-avatar" :src="store.logoUrl"></image>
				</view>
				<view class="list-right">
					<view class="list-header">
						<view class="list-title">
							{{store.name}}
						</view>
						<view class="list-sub-title">
							拼团广场
						</view>
					</view>
					<view class="list-detail">
						{{store.description}}
					</view>
				</view>
			</view>

			<!--购买商品列表-->
			<view class="pin-order-item-list">
				<view class="row" v-for="(row,index) in orderIndividual.orderItems" :key="index">
					<view class="goods-info">
						<view class="img">
							<image mode="aspectFill" :src="row.product.imageUrls"></image>
						</view>
						<view class="info">
							<view class="title">{{row.product.name}}</view>
							<view class="spec">规格{{row.productAttributeValue.sku}}</view>
							<view class="price-number">
								<view class="price">￥{{row.product.price*row.amount}}</view>
								<view class="number">
									× {{row.amount}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="pin-margin pin-text-md">
				<i class="pin-icon">info</i> 请在下方选择一个团加入或创建一个新团以享受不同的优惠，加入团或创建团前需要支付您的订单。
			</view>
			<view class="pin-flex">
				<view class="pin-flex-sub-50 pin-text-center">
					<view class="pin-primary pin-text-xxxl">
						<text class="pin-text-xxxl">{{storeGroupPlaygroundInfo.countOfGroupInProgress}}</text>
						<text class="pin-text-xl">个</text>
					</view>
					<view class="pin-text-md">当前正在拼的团</view>
				</view>
				<view class="pin-flex-sub-50 pin-text-center">
					<view class="pin-primary">
						<text class="pin-text-xxxl">{{storeGroupPlaygroundInfo.countOfGroupFinishedToday}} </text>
						<text class="pin-text-xl">个</text>
					</view>
					<view class="pin-text-md">当日已成拼团</view>
				</view>
			</view>
			<view class="pin-margin">
				<view class="pin-button pin-bg-accent" @click="loadOrderGroupsInStore()"><i class="pin-icon">refresh</i> 刷新拼团广场</view>
			</view>
			<view class="pin-margin">
				<view class="pin-button pin-bg-primary" @click="createOrderGroup()"><i class="pin-icon">add</i> 发起拼团</view>
			</view>
		</view>



		<view class="square-card-list">
			<view class="square-card" v-for="orderGroup in availableOrderGroups" :key="orderGroup.id" @tap="joinOrderGroup(orderGroup)">

				<view class="avatar-container">
					<image mode="aspectFill" :src="orderGroup.ownerUser.avatarUrl"></image>
					<view class="count-on-avatar">
						<view class="count-on-avatar-text">
							<view>{{orderGroup.orderIndividuals.length}}/{{store.peopleLimit}}</view>
							<view>距离收团还有 {{orderGroup.tickString}}</view>
						</view>
					</view>
				</view>

				<view class="name"><i class="pin-icon">group</i>{{orderGroup.ownerUser.nickname}}的团 ({{!(orderGroup.orderIndividuals.length >= store.peopleLimit)?'可加入':'已满'}})</view>
				<view class="info">
					<view class="pin-button pin-bg-primary"><i class="pin-icon">group_add</i> 加入</view>
					<view class="slogan">{{ orderGroup.createTime }}</view>
				</view>
			</view>
		</view>

		<view class="pin-card" v-if="availableOrderGroups == null || availableOrderGroups.length == 0">
			<full-page-empty-state title="此店铺没有正在进行的团" description="快自己在广场发起一个新团吧" icon="card_giftcard" :radius="true" />
		</view>

		<order-individual-payment :showPayment="showPayment" :order-individual="orderIndividual" :description="paymentModalDescription"
		 :title="paymentModalTitle" :icon="paymentModalIcon" @paymentSuccess="paymentSuccess"
		 @paymentFail="paymentFail" v-on:hideModal="switchPaymentModal(false)" />

	</view>
</template>

<script>
	import OrderIndividualPayment from '../../../components/order-individual-payment.vue'
	import FullPageEmptyState from '../../../components/full-page-empty-state.vue'
	export default {
		components: {
			"full-page-empty-state": FullPageEmptyState,
			"order-individual-payment": OrderIndividualPayment
		},
		data() {
			return {
				showPayment: false, // 支付模态框
				paymentModalTitle: '支付',
				paymentModalDescription: '支付订单以发起团单',
				paymentModalIcon: 'help',
				paymentSuccessCallback: null,
				paymentFailCallback: null,
				storeId: null,
				orderIndividualId: null,
				orderIndividual: null,
				store: {
					name: ''
				},
				storeGroupPlaygroundInfo: {
					countOfGroupInProgress: 0,
					countOfGroupFinishedToday: 0
				},
				availableOrderGroups: [],
				intervalId: null
			}
		},
		onLoad(option) {
			if (option.storeId != null) {
				this.storeId = option.storeId
				this.orderIndividualId = option.orderIndividualId
				this.orderIndividual = uni.getStorageSync("playground-order-individual")
				// 加载此页面拼团广场的团单
				this.loadOrderGroupsInStore()
				this.loadStoreInfo(this.storeId)
			}
		},
		onShow() {
			let that = this
			if (this.intervalId != null) {
				// 清除已有interval
				clearInterval(this.intervalId)
			}
			this.intervalId = setInterval(function() {
				that.tick()
			}, 1000);
		},
		onHide() {
			clearInterval(this.intervalId)
			this.intervalId = null
		},
		methods: {
			tick() {
				if (this.availableOrderGroups == null) {
					return
				}
				let that = this
				for (let i = 0; i < this.availableOrderGroups.length; i++) {
					if (this.availableOrderGroups[i].closeTime == null) {
						return;
					}
					let closeTime = new Date(this.availableOrderGroups[i].closeTime + 8*3600*1000)
					if (closeTime == NaN || closeTime == null) {
						// let temp = this.data.orderGroup.groupCloseTime.replace(/-/g, '/')
						closeTime = Date.parse(temp)
					}
					let nowTime = new Date().getTime()
					let diff = closeTime - nowTime
					let countTime = (diff / 1000).toFixed(0)
					if (countTime <= 0) {
						// 重定向到订单页面
						this.availableOrderGroups[i].tickString = "已收团"
						continue
					}
					// 截取时分秒数量
					let hour = Math.floor(countTime / 3600)
					let minute = Math.floor(Math.floor(countTime % 3600) / 60)
					let second = Math.floor(countTime % 60)
					// 添加前导0
					let tickString = "";
					if (0 <= hour && hour <= 9) tickString += '0';
					tickString += hour + ':';
					if (0 <= minute && minute <= 9) tickString += '0';
					tickString += minute + ':';
					if (0 <= second && second <= 9) tickString += '0';
					tickString += second;
					this.availableOrderGroups[i].tickString = tickString
					console.log(tickString)
				}
				this.$forceUpdate()
			},
			loadStoreInfo(storeId) {
				let that = this
				this.$pin.request('GET', '/commons/store/' + storeId, null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							that.store = successData.data
						} else {
							uni.showToast({
								title: '加载商品信息时出现错误'
							})
						}
					},
					failData => {
						uni.showToast({
							title: '加载商品信息时出现错误，请重试'
						})
					})
			},
			loadOrderGroupsInStore() {
				let that = this
				this.$pin.request('GET', '/commons/order-group/by-store-id/' + this.storeId, null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							// 处理创建时间为友好字符串
							for (let i = 0; i < successData.data.orderGroups.length; i++) {
								successData.data.orderGroups[i].createTime = that.$pin.getFriendlyTimeText(successData.data.orderGroups[i].createTime)
								console.log(successData.data.orderGroups[i].createTime)
							}
							that.availableOrderGroups = successData.data.orderGroups
						} else {
							uni.showToast({
								title: '获取拼团广场团单失败',
								icon: 'none'
							})
						}
					},
					failData => {
						uni.showToast({
							title: '获取拼团广场团单失败，请检查您设备的网络状况。',
							icon: 'none'
						})
					})
			},
			switchPaymentModal(isShown) {
				this.showPayment = isShown
				this.$forceUpdate()
			},
			// 唤起支付并创团操作
			createOrderGroup() {
				let that = this
				this.paymentModalTitle = "支付以创建团单"
				this.paymentModalDescription = "支付您当前的订单以发起团单，发起后您可邀请朋友加入您的团以享受折扣返现。"
				this.paymentModalIcon = "library_add"
				// 设置支付成功和失败的回调函数
				this.paymentSuccessCallback = () => {
					console.log("创团时支付成功。")
					that.switchPaymentModal(false)
					// 执行创团操作
					that.finalCreateGroup(that.storeId, that.orderIndividualId)
				}
				this.paymentFailCallback = () => {
					console.log("创团时支付失败。")
					that.switchPaymentModal(false)
				}
				that.switchPaymentModal(true)
			},
			paymentSuccess() {
				this.paymentSuccessCallback()
			},
			paymentFail() {
				this.paymentFailCallback()
			},
			// 唤起支付并加团操作
			joinOrderGroup(orderGroupToAdd) {
				let that = this
				this.paymentModalTitle = "支付以加入团单"
				this.paymentModalDescription = "支付您当前的订单以加入 " + orderGroupToAdd.ownerUser.nickname + " 的团单，加入后根据团内人数您将获得一定数量的折扣返现。"
				this.paymentModalIcon = "group_add"
				// 设置支付成功和失败的回调函数
				this.paymentSuccessCallback = () => {
					console.log("加团时支付成功。")
					that.switchPaymentModal(false)
					// 执行加团操作
					that.finalJoinGroup(that.storeId, orderGroupToAdd.id, that.orderIndividualId)
				}
				this.paymentFailCallback = (() => {
					console.log("加团时支付失败。")
					that.switchPaymentModal(false)
				})
				that.switchPaymentModal(true)
			},
			// 最终创团操作
			finalCreateGroup(storeId, orderIndividualId) {
				let that = this
				uni.showLoading({
					title: "创建新团中...",
					icon: 'none'
				})
				this.$pin.request('POST', '/commons/order-group/create', {
						storeId: storeId,
						orderIndividualId: orderIndividualId
					},
					successData => {
						uni.hideLoading()
						// 创团成功
						console.log('新团单号：' + successData.data.orderGroupId)
						if (successData.data.orderGroupId != null) {
							that.toOrderGroupDetail(successData.data.orderGroupId)
						} else {
							uni.showToast({
								title: '创团出现意外错误，请重试',
								icon: 'none'
							})
						}
					},
					failData => {
						uni.hideLoading()
						// 加团失败
						uni.showToast({
							title: '创团失败，请重试',
							icon: 'none'
						})
					})
			},
			// 最终加团操作
			finalJoinGroup(storeId, orderGroupId, orderIndividualId) {
				let that = this
				uni.showLoading({
					title: "加入此团中...",
					icon: 'none'
				})
				this.$pin.request('POST', '/commons/order-group/join', {
						storeId: storeId,
						orderGroupId: orderGroupId,
						orderIndividualId: orderIndividualId
					},
					successData => {
						uni.hideLoading()
						// 加团成功
						that.toOrderGroupDetail(orderGroupId)
					},
					failData => {
						uni.hideLoading()
						// 加团失败
						uni.showToast({
							title: '加团失败，请重试',
							icon: 'none'
						})
					})
			},
			toOrderGroupDetail(orderGroupId) {
				// 重定向到查看团页面
				// pre condition: 已经加入此团
				uni.redirectTo({
					url: '../../order/order-group/order-group-detail?orderGroupId=' + orderGroupId
				})
			}
		}
	}
</script>

<style lang="scss">
	.square-card-list {
		margin: 30upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.square-card {
			width: 46%;
			background-color: #fff;
			margin: 0 0 15upx 0;
			border-radius: $pin-border-radius;
			box-shadow: $pin-shadow;

			.avatar-container {
				position: relative;
				width: 100%;
				min-height: 350upx;
				max-height: 350upx;

				.count-on-avatar {
					display: inline;
					border-radius: $pin-border-radius $pin-border-radius 0 0;
					color: #ffffff;
					background-color: $pin-color-accent;
					opacity: 0.6;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					min-height: 350upx;
					max-height: 350upx;
					text-align: center;

					.count-on-avatar-text {
						padding-top: 100upx;
						vertical-align: middle;
						min-height: 350upx;
						max-height: 350upx;
					}
				}


				image {
					top: 0;
					left: 0;
					position: absolute;
					width: 100%;
					border-radius: 20upx 20upx 0 0;
					min-height: 350upx;
					max-height: 350upx;
				}
			}



			.name {
				width: 92%;
				padding: 10upx 4%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-align: justify;
				overflow: hidden;
				font-size: 28upx;
			}

			.info {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				width: 92%;
				padding: 10upx 4% 10upx 4%;

				.slogan {
					text-align: right;
					color: #807c87;
					font-size: 20upx;
				}
			}
		}
	}
</style>
