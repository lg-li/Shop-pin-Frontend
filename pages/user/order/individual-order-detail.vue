<template>
	<view>
		<view class="pin-top-padding"></view>

		<card-title :icon="statusIcon" :text="statusName" :sub-text="statusSubName" />
		<!-- 详情卡片 -->
		<view class="pin-card">

			<!--操作选项按钮区域-->
			<view class="pin-padding">
				<view v-if="orderIndividual.status == 0">
					<view class="pin-button pin-bg-primary" v-if="orderIndividual.paid && orderIndividual.isGroup" @tap="toGroupDetail()">
						<i class="pin-icon">group</i> 查看正在参加的团单详情
					</view>
					<view class="pin-button pin-bg-primary" v-else-if="!orderIndividual.paid" @tap="toGroupPlayground()">
						<i class="pin-icon">payment</i> 参团并支付订单
					</view>
				</view>

				<view v-else-if="orderIndividual.status == 1">
					<view class="pin-button pin-bg-primary" @tap="confirmReceipt()">
						<i class="pin-icon">done</i> 确认收货
					</view>
				</view>

				<view v-else-if="orderIndividual.status == 2">
					<view class="pin-button pin-bg-primary" @tap="toCommentOnOrder()">
						<i class="pin-icon">local_florist</i> 立即评价
					</view>
				</view>
			</view>

			<!--地址信息区域-->
			<view class="pin-list-item">
				<view class="list-left pin-text-center pin-text-sl">
					<i class="pin-icon">location_on</i>
				</view>
				<view class="list-right">
					<view class="list-header">
						<view class="list-title">
							{{orderIndividual.receiverName}}
						</view>
						<view class="list-sub-title">
							{{orderIndividual.receiverPhone}}
						</view>
					</view>
					<view class="list-detail">
						{{orderIndividual.deliveryAddress}}
					</view>
				</view>
			</view>

			<!-- 发货信息 -->
			<view v-if="orderIndividual.status >= 1">
				<view class="pin-list-item">
					<view class="list-left pin-text-center pin-text-sl">
						<i class="pin-icon">archive</i>
					</view>
					<view class="list-right" v-if="orderIndividual.deliveryType == 'EXPRESS'">
						<view class="list-header">
							<view class="list-title">
								{{deliveryTypes[orderIndividual.deliveryType]}}
							</view>
							<view class="list-sub-title">
								{{orderIndividual.deliveryName}}
							</view>
						</view>
						<view class="list-detail">
							运单号 {{orderIndividual.deliveryId}}
						</view>
					</view>
					<view class="list-right" v-else-if="orderIndividual.deliveryType == 'ONLINE'">
						<view class="list-header">
							<view class="list-title">
								{{deliveryTypes[orderIndividual.deliveryType]}}
							</view>
							<view class="list-sub-title">
								已发货
							</view>
						</view>
						<view class="list-detail">
							请联系卖家获取虚拟物品的方式，确认收货前请确认您确实收到虚拟商品。
						</view>
					</view>
					<view class="list-right" v-else-if="orderIndividual.deliveryType == 'OFFLINE'">
						<view class="list-header">
							<view class="list-title">
								{{deliveryTypes[orderIndividual.deliveryType]}}
							</view>
							<view class="list-sub-title">
								已发货
							</view>
						</view>
						<view class="list-detail">
							请联系卖家进行线下面交，并在检查货品无误后确认收货。
						</view>
					</view>
				</view>

				<!--物流地图-->
				<view v-if="orderIndividual.status == 1">
					<map id="myMap" style="width: 100%; height: 300px;" longitude="116.313972" latitude="39.980014" scale='16' subkey="A66BZ-KHDCF-YISJ6-JSDHP-DQKT7-YJBAX">
					</map>
				</view>
			</view>

			<!--商品信息区域-->
			<view class="pin-order-item-list">
				<view class="row" v-for="(orderItem,index) in orderIndividual.orderItems" :key="index">
					<view class="goods-info">
						<view class="img">
							<image mode="aspectFill" :src="orderItem.productAttributeValue.imageUrl"></image>
						</view>
						<view class="info">
							<view class="title">{{orderItem.product.name}}</view>
							<view class="spec">规格 {{orderItem.productAttributeValue.sku}}</view>
							<view class="price-number">
								<view class="price">￥{{orderItem.product.price*orderItem.amount}}</view>
								<view class="number">
									× {{orderItem.amount}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!--订单综合信息区域-->
			<view class="pin-amount-detail">
				<view class="row">
					<view class="nominal">订单号：{{orderIndividual.id}}</view>
				</view>
				<view class="row">
					<view class="nominal">下单时间：{{orderIndividual.createTime}}</view>
				</view>
				<view class="row">
					<view class="nominal">订单类型：{{orderIndividual.isGroup?'团内订单':'个人单'}}</view>
				</view>
				<view class="row">
					<view class="nominal">订单备注：{{(orderIndividual.userRemark==null||orderIndividual.userRemark=="")?'无备注':orderIndividual.userRemark}}</view>
				</view>
				<template v-if="orderIndividual.paid">
					<view class="row">
						<view class="nominal">支付金额：￥{{orderIndividual.payPrice}} （余额抵扣：￥{{orderIndividual.balancePaidPrice}}）</view>
					</view>
					<view class="row">
						<view class="nominal">支付时间：{{orderIndividual.payTime}}</view>
					</view>
				</template>
			</view>
		</view>

		<!-- 订单金额明细区域 -->
		<view class="pin-card">
			<view class="pin-amount-detail">
				<view class="row">
					<view class="nominal">
						运费
					</view>
					<view class="content">
						<template v-if="orderIndividual.isFreeShipping">
							免运费
						</template>
						<template v-else>
							+ ￥{{orderIndividual.shippingFee}}
						</template>
					</view>
				</view>
				<view class="row">
					<view class="nominal">
						余额抵扣
					</view>
					<view class="content">
						- ￥{{orderIndividual.balancePaidPrice}}
					</view>
				</view>
				<view class="row">
					<view class="nominal">
						总价
					</view>
					<view class="content">
						￥{{orderIndividual.totalPrice}}
					</view>
				</view>
			</view>
		</view>

		<view class="blck"></view>

	</view>
</template>

<script>
	import CardTitle from '../../../components/card-title.vue'
	export default {
		components: {
			"card-title": CardTitle,
		},
		data() {
			return {
				statusIcon: 'payment',
				statusName: '--',
				statusSubName: '--',
				deliveryTypes: {
					"EXPRESS": "快递配送",
					"ONLINE": "虚拟物品",
					"OFFLINE": "线下面交"
				},
				orderIndividual: {
					balancePaidPrice: 499,
					confirmReceiptTime: null,
					createTime: 1560262936000,
					deliverTime: null,
					deliveryAddress: "重庆市市辖区渝北区123123",
					deliveryId: "3434343",
					deliveryName: "奔腾物流",
					deliveryType: "EXPRESS",
					gainedCredit: 0,
					group: true,
					id: 10,
					isGroup: true,
					merchantRemark: null,
					orderGroupId: 9,
					orderItems: [{
						id: 17,
						amount: 1,
						id: 17,
						isSubmitted: true,
						orderIndividualId: 10,
						product: {
							categoryId: 22,
							cost: 450,
							createTime: 1559019600000,
							creditToGive: 450,
							description: "作为老牌的工资装品牌之一，DICKIES的马蹄LOGO传递着坚韧、顽强的精神理念，品牌灵魂融入了一种不愿妥协的美国文化气息。热烈的红、张扬的黄、沉静的蓝三色聚合而成的品牌马蹄LOGO，明亮欢快的色调给人温暖的力量",
							id: 14,
							imageUrls: "https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i4/711882582/O1CN01wEA53J1Uwb9MnHu7u_!!711882582.jpg_430x430q90.jpg",
							info: "袖部字母印花oversize 卫衣DK006460",
							isFreeShipping: true,
							isHot: false,
							isNew: true,
							isShown: true,
							keyword: "卫衣",
							name: "Dickies胸口logo印花卫衣",
							price: 499,
							priceBeforeDiscount: 499,
							productAttributeDefinitions: null,
							productAttributeValues: null,
							shippingFee: 0,
							soldCount: 97,
							stockCount: 485,
							store: null,
							storeId: 9,
							unitName: "件",
							visitCount: 500
						},
						productAttributeValue: {
							id: 286,
							productId: 14,
							sku: "黑色;XXL",
							stock: 485,
							price: 499,
							cost: 450,
							id: 286,
							imageUrl: "//img.alicdn.com/imgextra/i2/711882582/O1CN01F9C6YK1Uwb8tQ4tdR_!!711882582.jpg_430x430q90.jpg",
							price: 499,
							productId: 14,
							sku: "黑色;XXL",
							stock: 485
						},
						productId: 14,
						skuId: 286,
						submitted: true,
						totalCost: 450,
						totalPrice: 499,
						userId: 8
					}],
					paid: true,
					payPrice: 0,
					payTime: 1560262952000,
					payType: "BALANCE",
					receiverName: "LLG",
					receiverPhone: "18640381898",
					refundApplyTime: null,
					refundPrice: 0,
					refundReasonExplain: null,
					refundReasonImage: null,
					refundRefuseReason: null,
					refundStatus: 0,
					shippingFee: 0,
					status: 1,
					store: {
						createTime: 1559019600000,
						description: "官方dickies正品 假一赔十",
						email: "www.xxxx@000.com",
						id: 9,
						logoUrl: "https://gdp.alicdn.com/imgextra//ae/81/T1Sx6QXmxaXXb1upjX.jpg",
						name: "dickies官方旗舰店",
						ownerUserId: 28,
						peopleLimit: 5,
						phone: "021-38711880"
					},
					storeId: 9,
					totalCost: 450,
					totalPrice: 499,
					totalProductNumber: 1,
					user: null,
					userId: 8,
					userRemark: ""
				}
			};
		},
		onLoad(option) {
			this.orderIndividual = uni.getStorageSync("individual-order-detail")
		},
		onShow() {
			// 页面显示时，加载订单信息
			this.refreshStatusTitle()
		},
		onHide() {
			// 页面隐藏清除订单信息
			// this.clearOrder();
		},
		onBackPress() {
			// 页面后退时候，清除订单信息
			this.clearOrder();
		},
		methods: {
			refreshStatusTitle() {
				if (!this.orderIndividual.paid) {
					this.statusIcon = 'payment'
					this.statusName = '待付款'
					this.statusSubName = 'Payment Pending'
				} else if (this.orderIndividual.status == 0) {
					this.statusIcon = 'hourglass_empty'
					this.statusName = '待发货 ' + this.orderIndividual.isGroup ? '已拼团' : '可拼团'
					this.statusSubName = 'Shipping Pending'
				} else if (this.orderIndividual.status == 1) {
					this.statusIcon = 'local_shipping'
					this.statusName = '已发货'
					this.statusSubName = 'On Shipping'
				} else if (this.orderIndividual.status == 2) {
					this.statusIcon = 'local_florist'
					this.statusName = '待评价'
					this.statusSubName = 'Comment Pending'
				} else if (this.orderIndividual.status == 3) {
					this.statusIcon = 'done'
					this.statusName = '已完成'
					this.statusSubName = 'Finished'
				} else if (this.orderIndividual.status == 4) {
					this.statusIcon = 'done'
					this.statusName = '已完成'
					this.statusSubName = 'Finished'
				} else if (this.orderIndividual.status == 5) {
					this.statusIcon = 'done'
					this.statusName = '已完成'
					this.statusSubName = 'Finished'
				}
			},
			toGroupPlayground() {
				uni.showLoading({
					title: '正在获取订单...'
				})
				// 向下个页面通过全局存储传送对象
				uni.setStorageSync("playground-order-individual", this.orderIndividual)
				uni.navigateTo({
					url: '../../store/store-group-playground/store-group-playground?orderIndividualId=' + this.orderIndividual.id +
						'&storeId=' + this.orderIndividual.store.id
				})
				uni.hideLoading()
			},
			toGroupDetail() {
				uni.navigateTo({
					url: '../../order/order-group/order-group-detail?orderGroupId=' + this.orderIndividual.orderGroupId
				})
			},
			toCommentOnOrder() {
				uni.navigateTo({
					url: './comment-on-order?' + this.orderIndividual.orderGroupId
				})
			},
			confirmReceipt() {
				let that = this
				this.$pin.request('POST', '/commons/order/order-individual/confirm-receipt', {
						orderIndividualId: this.orderIndividual.id
					},
					successData => {
						if (successData.code == that.$pin.code.success) {
							that.orderIndividual.status = 2
							that.refreshStatusTitle()
						} else {
							uni.showToast({
								title: '很抱歉，此订单无法确认收货。原因: ' + successData.message,
								icon: 'none'
							})
						}
					},
					failData => {
						uni.showToast({
							title: '暂时无法确认收货，请重试',
							icon: 'none'
						})
					})
			},
			clearOrder() {
				let that = this
				uni.removeStorage({
					key: 'individual-order-detail',
					success: function(res) {
						console.log('remove orderItemList success');
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.blck {
		width: 100%;
		height: 100upx;
	}
</style>
