<template>
	<view>
		<!-- 顶部导航 -->
		<view class="top-tab-bar" :style="{position:headerPosition,top:headerTop}">
			<view class="grid" v-for="(statusName, statusCode, statusIndex) in orderIndividualStatusNameMap" :key="statusIndex"
			 @tap="showType(statusCode)">
				<view class="text" :class="[statusCode==tabBarStatus?'on':'']">{{statusName}}</view>
			</view>
		</view>
		<view class="onorder" v-if="shownList == null||shownList.length <= 0">
			<full-page-empty-state title="没有相关订单" description="看看其它类别的订单吧" />
		</view>
		<!-- 考虑非APP端长列表和复杂的DOM使用scroll-view会卡顿，所以漂浮顶部选项卡使用page本身的滑动 -->
		<view v-else>
			<view class="pin-top-padding"></view>
			<view class="order-list">
				<view class="list">
					<view class="row" v-for="row in shownList" :key="row.id">
						<view class="store-name pin-padding">
							<i class="pin-icon">store</i> {{row.store.name}}
						</view>

						<view @tap="toIndividualDetail(row)">
							<!--单品数据循环-->
							<view class="order-info" v-for="item in row.orderItems" :key="item.id">
								<view class="left">
									<image mode="aspectFill" :src="item.productAttributeValue.imageUrl"></image>
								</view>
								<view class="right">
									<view class="name">
										{{item.product.name}}
									</view>
									<view class="spec">{{item.productAttributeValue.sku}}</view>
									<view class="price-number">
										￥ <view class="price"> {{item.totalPrice}}</view>
										× <view class="number"> {{item.amount}}</view>
									</view>
								</view>
							</view>

							<view class="detail">
								<view class="number">共 {{row.orderItems.length}} 件商品</view>
								<view class="sum">合计 ￥<view class="price">{{row.totalPrice}}</view>
								</view>
								<view class="nominal">(含运费 ￥{{row.shippingFee}})</view>
							</view>

							<view v-if="row.paid==true && row.status===0" class="pin-margin pin-text-md pin-accent">
								<view v-if="row.isGroup"><i class="pin-icon">info</i> 您已参团，最终确认收货后将根据最终成团人数获得余额返现。</view>
								<view v-else><i class="pin-icon">info</i> 您还未参团，您可在 前参团或发起团单享受返现。逾期未参团（或发起团单）将视作您放弃拼团优惠。</view>
							</view>
						</view>

						<view class="btns">
							<!--根据订单状态显示对应操作-->
							<block v-if="row.paid==false">
								<view class="default" @tap="toIndividualDetail(row)">订单详情</view>
								<view class="pay" @tap="toGroupPlayground(row)">参团并付款</view>
							</block>
							<block v-else-if="row.status===0">
								<view class="default" @tap="toIndividualDetail(row)">订单详情</view>
								<view class="pay" @tap="toGroupDetail(row)" v-if="row.isGroup">查看拼团情况</view>
								<view class="pay" @tap="toGroupPlayground(row)" v-else>现在参团享返现</view>
								<view class="default">提醒发货</view>
							</block>
							<block v-else-if="row.status===1">
								<view class="default" @tap="toIndividualDetail(row)">查看物流</view>
								<view class="pay">确认收货</view>
								<view class="pay">申请退货</view>
							</block>
							<block v-else-if="row.status===2">
								<view class="default" @tap="toIndividualDetail(row)">订单详情</view>
								<view class="pay" @tap="toIndividualDetail(row)">评价订单</view>
							</block>
							<block v-else-if="row.status===3">
								<view class="default" @tap="toIndividualDetail(row)">订单详情</view>
							</block>
							<block v-else-if="row.type>=4">
								<view class="default" @tap="toIndividualDetail(row)">查看详情</view>
							</block>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import FullPageEmptyState from '../../../components/full-page-empty-state.vue'
	const STATUS_NOT_PAID = 0;
	const STATUS_REFUND_CODE_LIMIT = 5;
	export default {
		components: {
			"full-page-empty-state": FullPageEmptyState
		},
		data() {
			return {
				headerPosition: "fixed",
				headerTop: "0px",
				typeText: {
					unpaid: '等待付款',
					back: '等待商家发货',
					unreceived: '商家已发货',
					received: '等待用户评价',
					completed: '交易已完成',
					refunds: '商品退货处理中'
				},
				orderInidividualMapByStatus: {},
				orderIndividualStatusNameMap: {
					[STATUS_NOT_PAID]: '待付款',
					1: '待发货',
					2: '已发货',
					3: '待评价',
					4: '已完成',
					5: '售后订单'
				},
				orderType: ['全部', '待付款', '待发货', '待收货', '待评价', '退换货'],
				shownList: [],
				tabBarStatus: 0,
				orderIndividualList: []
			};
		},
		onLoad(option) {
			console.log("option: " + JSON.stringify(option));
			this.tabBarStatus = parseInt(option.tbIndex);
			//兼容H5下排序栏位置
			// #ifdef H5
			let Timer = setInterval(() => {
				let uniHead = document.getElementsByTagName('uni-page-head');
				if (uniHead.length > 0) {
					this.headerTop = uniHead[0].offsetHeight + 'px';
					clearInterval(Timer); //清除定时器
				}
			}, 1);
			// #endif
		},
		onShow() {
			this.shownList = []
			this.orderInidividualMapByStatus = {}
			this.loadMyRecentOrders()
		},
		onPageScroll(e) {
			return;
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
		},
		methods: {
			showType(statusKey) {
				this.tabBarStatus = statusKey
				if (this.orderInidividualMapByStatus[statusKey] == null) {
					this.shownList = []
				} else {
					this.shownList = this.orderInidividualMapByStatus[statusKey]
				}
			},
			parseOrderIndividuals(orderIndividualList) {
				for (let i = 0; i < orderIndividualList.length; i++) {
					let currentOrderIndividual = orderIndividualList[i]
					let status = currentOrderIndividual.status + 1 // 重要 加一为未付款状态留出位置
					if (this.orderInidividualMapByStatus[status] == null) {
						this.orderInidividualMapByStatus[status] = []
					}
					if (currentOrderIndividual.paid == false) {
						// 单独处理未支付订单
						if (this.orderInidividualMapByStatus[STATUS_NOT_PAID] == null) {
							this.orderInidividualMapByStatus[STATUS_NOT_PAID] = []
						}
						this.orderInidividualMapByStatus[STATUS_NOT_PAID].push(currentOrderIndividual)
					} else if (currentOrderIndividual.status >= STATUS_REFUND_CODE_LIMIT) {
						// 售后订单
						this.orderInidividualMapByStatus[STATUS_REFUND_CODE_LIMIT].push(currentOrderIndividual)
					} else {
						// 其它状态下的常规业务流订单
						this.orderInidividualMapByStatus[status].push(currentOrderIndividual)
					}
				}
				this.showType(this.tabBarStatus)
			},
			loadMyRecentOrders() {
				uni.showLoading()
				let that = this
				this.$pin.request('GET', '/commons/order/order-individual/recent', null,
					successData => {
						that.orderIndividualList = successData.data.orderIndividuals
						that.parseOrderIndividuals(successData.data.orderIndividuals)
						uni.hideLoading()
					},
					failData => {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: '获取订单信息失败'
						})
					})
			},
			toGroupDetail(orderIndividual) {
				uni.navigateTo({
					url: '../../order/order-group/order-group-detail?orderGroupId=' + orderIndividual.orderGroupId
				})
			},
			toIndividualDetail(orderIndividual) {
				uni.setStorageSync("individual-order-detail", orderIndividual)
				uni.navigateTo({
					url: './individual-order-detail'
				})
			},
			toGroupPlayground(orderIndividual) {
				uni.showLoading({
					title: '正在获取订单...'
				})
				// 向下个页面通过全局存储传送对象
				uni.setStorageSync("playground-order-individual", orderIndividual)
				uni.navigateTo({
					url: '../../store/store-group-playground/store-group-playground?orderIndividualId=' + orderIndividual.id +
						'&storeId=' + orderIndividual.store.id
				})
				uni.hideLoading()
			},
			toPayment(row) {
				//本地模拟订单提交UI效果
				uni.showLoading({
					title: '正在获取订单...'
				})
				let paymentOrder = [];
				paymentOrder.push(row);
				setTimeout(() => {
					uni.setStorage({
						key: 'paymentOrder',
						data: paymentOrder,
						success: () => {
							uni.hideLoading();
							uni.navigateTo({
								url: '../../pay/payment/payment?amount=' + row.payment
							})
						}
					})
				}, 500)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $pin-color-light;
	}

	.top-tab-bar {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: $pin-color-primary;
		height: 80upx;
		display: flex;
		justify-content: space-around;

		.grid {
			width: 20%;
			height: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #444;
			font-size: 28upx;

			.text {
				height: 76upx;
				display: flex;
				align-items: center;

				&.on {
					font-weight: 700;
					color: $pin-color-foreground;
					border-bottom: solid 5upx $pin-color-foreground;
					transition: all 0.5s;
				}
			}
		}
	}

	.onorder {
		margin-top: 80upx;
		width: 100%;
	}

	.order-list {
		margin-top: 80upx;
		padding-top: 20upx;
		width: 100%;

		.list {
			width: 94%;
			margin: 0 auto;

			.row {
				width: calc(100% - 40upx);
				padding: 10upx 20upx;
				border-radius: $pin-border-radius;
				box-shadow: $pin-shadow;
				background-color: #fff;
				margin-bottom: 20upx;

				.store-name {
					padding: 20upx;
					padding: 5upx;
					font-size: 28upx;
					color: $pin-color-foreground;
					height: 50upx;
					display: flex;
					align-items: center;
				}

				.order-info {
					width: 100%;
					display: flex;

					.left {
						flex-shrink: 0;
						width: 25vw;
						height: 25vw;

						image {
							width: 25vw;
							height: 25vw;
							border-radius: $pin-border-radius;
						}
					}

					.right {
						width: 100%;
						margin-left: 20upx;
						position: relative;

						.name {
							width: 100%;
							font-size: 28upx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}

						.spec {
							font-size: 24upx;
							color: $pin-color-accent;
							padding-top: 20upx;
						}

						.price-number {
							position: absolute;
							bottom: 0;
							width: 100%;
							display: flex;
							justify-content: flex-end;
							font-size: 22upx;
							color: #333;
							display: flex;
							align-items: flex-end;

							.price {
								font-size: 24upx;
								margin-right: 5upx;
							}

						}
					}
				}

				.detail {
					display: flex;
					justify-content: flex-end;
					align-items: flex-end;
					height: 60upx;
					font-size: 26upx;

					.sum {
						padding: 0 8upx;
						display: flex;
						align-items: flex-end;

						.price {
							font-size: 30upx;
						}
					}

				}

				.btns {
					height: 80upx;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					view {
						min-width: 120upx;
						height: 50upx;
						padding: 0 20upx;
						border-radius: $pin-border-radius;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 28upx;
						margin-left: 20upx;
					}

					.default {
						border: solid 1upx #ccc;
						color: #666;
					}

					.pay {
						box-shadow: $pin-shadow;
						background-color: $pin-color-primary;
						color: $pin-color-foreground;
					}
				}
			}
		}
	}
</style>
