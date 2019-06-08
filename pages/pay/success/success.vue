<template>
	<view>
		<view class="icon">
			<image src="/static/img/success.png"></image>
		</view>
		<view class="tis">
			订单支付成功
		</view>
		<view class="pay-amount">
			支付金额: {{amount}}元
		</view>
		<view class="back">
			<view class="pin-button lg" @tap="toUser">返回个人中心</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				amount:0
			};
		},
		onLoad(e) {
			this.amount = parseFloat(e.amount).toFixed(2);
		},
		methods: {
			toUser() {
				uni.switchTab({
					url: '/pages/tab-bar/user'
				});
			}
		},
	}
</script>

<style lang="scss">
	view{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
.icon{
	width: 100%;
	margin-top: 10vw;
	image{
		width: 25vw;
		height: 25vw;
	}
}
.tis{
	width: 100%;
	margin-top: 20upx;
	font-size: 48upx;
}
.pay-amount{
	width: 100%;
	margin-top: 10upx;
	font-size: 32upx;
}
.back{
	position: absolute;
	width: 100%;
	bottom: 80upx;
	.btn{
		width: 70%;
		height: 80upx;
		border-radius: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $pin-color-foreground;
		background-color: $pin-color-primary;
		box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.2);
	}
}
</style>
