<template>
	<view>
		<view class="logo">
			<image mode="widthFix" src="../../static/img/logo.png"></image>
		</view>
		<view class="loader-1">
			<view class="loader-inner" />
			<view class="loader-inner" />
			<view class="loader-inner" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			setTimeout(() => {
				uni.switchTab({
					url: '../tab-bar/home'
				})
			}, 3000)
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: $pin-color-primary;
	}
	
	.logo {
		text-align: center;
		
		image {
			max-width: 50%
		}
	}

	.loader-1 {
		width: 220px;
		height: 200px;
		margin: 0 auto;
	}

	.loader-1 .loader-inner {
		width: 160px;
		height: 100px;
		border-radius: 5px;
		background: $pin-color-foreground;
		margin: -50px 0 0 -80px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform-type: preserve-3d;
		animation: loading-11 2s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
	}

	.loader-1 .loader-inner:nth-child(2) {
		width: 150px;
		height: 90px;
		border-radius: 3px;
		background: $pin-color-light;
		margin: -45px 0 0 -75px;
		z-index: 1;
		animation-name: loading-12;
	}

	.loader-1 .loader-inner:nth-child(3) {
		width: 40px;
		height: 20px;
		border-radius: 0 0 5px 5px;
		background: $pin-color-accent;
		margin: 50px 0 0 -20px;
		z-index: 2;
		animation-name: loading-13;
	}

	@keyframes loading-11 {

		3%,
		97% {
			width: 160px;
			height: 100px;
			margin-top: -50px;
			margin-left: -80px;
		}

		30%,
		36% {
			width: 80px;
			height: 120px;
			margin-top: -60px;
			margin-left: -40px;
		}

		63%,
		69% {
			width: 40px;
			height: 80px;
			margin-top: -40px;
			margin-left: -20px;
		}
	}

	@keyframes loading-12 {

		3%,
		97% {
			width: 150px;
			height: 90px;
			margin-top: -45px;
			margin-left: -75px;
		}

		30%,
		36% {
			width: 70px;
			height: 96px;
			margin-top: -48px;
			margin-left: -35px;
		}

		63%,
		69% {
			width: 32px;
			height: 60px;
			margin-top: -30px;
			margin-left: -16px;
		}
	}

	@keyframes loading-13 {

		3%,
		97% {
			width: 40px;
			height: 20px;
			margin-top: 50px;
			margin-left: -20px;
		}

		30%,
		36% {
			width: 8px;
			height: 8px;
			margin-top: 49px;
			margin-left: -5px;
			border-radius: 8px;
		}

		63%,
		69% {
			width: 16px;
			height: 4px;
			margin-top: -37px;
			margin-left: -8px;
			border-radius: 10px;
		}
	}
</style>
