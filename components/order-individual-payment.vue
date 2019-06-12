<template>
	<view>
		<!--余额变动卡片-->
		<view class="pin-modal" :class="showPayment?'show':''">
			<view class="pin-dialog" :class="isBalanceInsufficient?'pin-animation-shake':''" style="animation-delay: 0.5s;">
				<view class="pin-dialog-icon"><text class="pin-icon">{{icon}}</text></view>
				<view>
					<view class="pin-bar justify-end">
						<view class='content'>{{title}}</view>
					</view>
					
					<view v-if="isBalanceInsufficient">
						<view class='pin-padding'>
							<view class='pin-text-sl pin-primary'>余额不足</view>
							<view class='pin-accent pin-text-sm'>至少需要 ￥{{orderIndividual.totalPrice}} 以支付此单</view>
						</view>
					</view>
					<view v-else>
						<view class="icon-info pin-padding pin-text-sm pin-solid-top">
							<view class="pin-text-bold">第 {{orderIndividual.id}} 号订单 </view>
							<view>包含 {{orderIndividual.orderItems[0].product.name}}
								{{orderIndividual.orderItems.length>1?'等'+orderIndividual.orderItems.length+'件商品':' 1件商品'}} </view>
						</view>
						<view class='pin-padding'>
							<view class='pin-text-sl pin-primary'>￥{{orderIndividual.totalPrice}}</view>
							<view class='pin-accent pin-text-sm'>订单总金额</view>
						</view>

						<view class="icon-info pin-padding pin-text-md" v-if="description!=null">
							{{description}}
						</view>
					</view>
					<view class="pin-bar pin-solid-top">
						<view class='action pin-margin-0 pin-flex-sub pin-accent' @tap='hideModal()'><i class="pin-icon">clear</i> 取消</view>
						<view class='action pin-margin-0 pin-flex-sub pin-primary' @tap='pay()'><i class="pin-icon">payment</i> 支付</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			showPayment: {
				type: Boolean,
				value: false
			},
			icon: {
				type: String,
				value: 'help'
			},
			title: {
				type: String,
				value: '支付'
			},
			description: {
				type: String,
				value: null
			},
			orderIndividual: {
				type: Object,
				value: null
			},
			paymentSuccessCallback: {
				type: Function,
				value: null
			},
			paymentFailCallback: {
				type: Function,
				value: null
			}
		},
		data() {
			return {
				isBalanceInsufficient: false
			};
		},
		methods: {
			hideModal() {
				console.log('hiding')
				this.showPayment = false
				this.$emit("hideModal")
			},
			pay() {
				let that = this
				this.$pin.request('POST', '/commons/payment/unified-pay', {
						orderIndividualId: this.orderIndividual.id,
						paymentType: 'BALANCE'
					},
					successData => {
						if (successData.code == that.$pin.code.success) {
							uni.showToast({
								title: '支付成功'
							})
							if (that.paymentSuccessCallback) {
								that.paymentSuccessCallback()
							}
						} else if (successData.code == that.$pin.code.repeatPayment) {
							// 重复支付
							uni.showToast({
								title: '您已支付过此订单',
								icon: 'none'
							})
							if (that.paymentSuccessCallback) {
								that.paymentSuccessCallback()
							}
						} else if (successData.code == that.$pin.code.insufficientBalance) {
							// 余额不足
							that.icon = 'error'
							that.isBalanceInsufficient = true
							if (that.paymentFailCallback) {
								that.paymentFailCallback()
							}
						}
					},
					failData => {
						uni.showToast({
							title: '支付失败，请检查设备网络状态并重试。',
							icon: 'none'
						})
					})
			}
		}
	}
</script>

<style>

</style>
