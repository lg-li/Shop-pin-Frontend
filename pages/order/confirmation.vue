<template>
	<view>
		<view class="pin-top-padding"></view>
		<!-- 收货地址 -->
		<view class="pin-card">
			<view class="pin-list-item" @tap="selectAddress">
				<view class="list-left pin-text-center pin-text-xxxl">
					<i class="pin-icon">location_on</i>
				</view>
				<view class="list-right" v-if="selectedAddress != null">
					<view class="list-header">
						<view class="list-title">
							{{selectedAddress.realName}}
						</view>
						<view class="list-sub-title">
							{{selectedAddress.phone}}
						</view>
					</view>
					<view class="list-detail">
						{{selectedAddress.province}} {{selectedAddress.detail}}
						{{selectedAddress.detailed}}
					</view>
				</view>
				<view class="list-right" v-else>
					<view class="list-header">
						<view class="list-title">
							您未创建默认地址
						</view>
					</view>
					<view class="list-detail">
						点此创建/编辑默认收货地址
					</view>
				</view>
			</view>
		</view>
		
		<!-- 购买商品列表 -->
		<view class="pin-card">
			<view class="pin-order-item-list">
				<view class="row" v-for="(row,index) in orderItemList" :key="index">
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
		</view>
		
		<!-- 提示-备注 -->
		<view class="pin-card pin-text-md">
			<view class="pin-list-item">
				<view class="list-left">
					<i class="pin-icon">card_giftcard</i> 积分
				</view>
				<view class="list-right">
					本订单可使用 {{credit}} 积分抵扣 ￥{{deduction}} 元
				</view>
			</view>
			<view class="pin-list-item">
				<view class="list-left">
					<i class="pin-icon">comment</i> 备注
				</view>
				<view class="list-right">
					<input placeholder="备注内容(选填)" v-model="userRemark" />
				</view>
			</view>
		</view>
		<!-- 明细 -->
		<view class="pin-card">
			<view class="pin-amount-detail">
				<view class="row">
					<view class="nominal">
						商品金额
					</view>
					<view class="content">
						￥{{totalPrice}}
					</view>
				</view>
				<view class="row">
					<view class="nominal">
						运费
					</view>
					<view class="content">
						+ ￥{{shippingFee}}
					</view>
				</view>
				<view class="row">
					<view class="nominal">
						积分抵扣
					</view>
					<view class="content">
						- ￥{{deduction}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="blck">
		</view>
		
		<view class="footer">
			<view class="settlement">
				<view class="sum">合计:<view class="money">￥{{sumPrice}}</view>
				</view>
				<view class="pin-button" @tap="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderItemList: [], // 订单列表
				totalPrice: 0.0, // 商品合计价格
				sumPrice: 0.0, // 用户付款价格
				shippingFee: 0.0, // 运费
				userRemark: '', // 备注
				credit: 0, // 抵扣积分
				deduction: 0.0, // 抵扣价格
				selectedAddress: null

			};
		},
		onShow() {
			// 页面显示时，加载订单信息
			uni.getStorage({
				key: 'cart-list-to-confirm',
				success: (ret) => {
					this.orderItemList = ret.data;
					this.totalPrice = 0;
					this.shippingFee = 0;
					// 合计总金额
					let len = this.orderItemList.length;
					for (let i = 0; i < len; i++) {
						this.totalPrice += (this.orderItemList[i].amount * this.orderItemList[i].product.price);
						if (!this.orderItemList[i].product.isFreeShipping) {
							this.shippingFee += this.orderItemList[i].product.shippingFee
						}
					}
					this.deduction = this.credit / 100;
					this.sumPrice = this.totalPrice + this.shippingFee;
					// 强制保留两位小数
					this.sumPrice = this.sumPrice.toFixed(2);
					this.totalPrice = this.totalPrice.toFixed(2);
					this.shippingFee = this.shippingFee.toFixed(2);
					this.deduction = this.deduction.toFixed(2);
				}
			});
			let selectedAddress = uni.getStorageSync('selectedAddress')
			if (!selectedAddress) {
				this.loadDefaultAddress()
			} else {
				this.selectedAddress = selectedAddress;
				uni.removeStorageSync('selectedAddress')
			}
		},
		onHide() {
			// 页面隐藏清除订单信息
			this.clearOrder();
		},
		onBackPress() {
			// 页面后退时候，清除订单信息
			this.clearOrder();
		},
		methods: {
			clearOrder() {
				let that = this
				uni.removeStorage({
					key: 'orderItemList',
					success: function(res) {
						that.orderItemList = [];
						console.log('remove orderItemList success');
					}
				});
			},
			loadDefaultAddress() {
				let that = this
				this.$pin.request('GET', '/commons/user/default-address', null,
					successData => {
						that.selectedAddress = successData.data.defaultAddress
					},
					failData => {
						uni.showToast({
							title: '加载默认地址失败'
						})
					})
			},
			toPay() {
				// 准备商品ID数组
				let orderItemIds = []
				for (let i = 0; i < this.orderItemList.length; i++) {
					orderItemIds.push(this.orderItemList[i].id)
				}
				uni.showLoading({
					title: '正在提交订单...'
				})

				this.$pin.request('POST', '/commons/order/order-individual', {
						addressId: this.selectedAddress.id,
						orderItemIds: orderItemIds,
						userRemark: this.userRemark
					},
					successData => {
						uni.hideLoading()
						uni.showToast({
							title: '创建订单完成'
						})
						uni.navigateTo({
							url: '../user/order/order-list?tbIndex=' + 0
						})
					},
					failData => {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: '创建订单失败'
						})
					})
			},
			//选择收货地址
			selectAddress() {
				uni.navigateTo({
					url: '../user/address/address?type=select'
				})
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
