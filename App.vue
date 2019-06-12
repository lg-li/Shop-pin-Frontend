<script>
	export default {
		onLaunch: function() {
			console.log('Pin 已启动。')
			// uni.removeStorageSync("pin-token")
			let that = this
			// #ifdef MP-WEIXIN
			console.log('微信小程序自动登录检测')
			wx.getSetting({
				success: function(res) {
					if (res.authSetting['scope.userInfo']) {
						console.log('微信小程序已授权，将自动登录用户')
						// 在授权后自动使用微信登录
						that.$pin.loginFromWechat(that.loginSuccess, that.loginFailed)
					}
				}
			})
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			loginSuccess() {

			},
			loginFailed() {
				uni.showToast({
					title: '请授权微信登录',
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "./static/css/pin-animation.css";
	/*每个页面公共css */

	page {
		padding-bottom: 20upx;
		background-color: $pin-color-light;
	}

	@font-face {
		font-family: 'Material Icons';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
	}
	
	.loading-text {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}

	.pin-icon {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		padding-right: 10upx;
		padding-left: 10upx;
		-webkit-font-feature-settings: 'liga';
		-webkit-font-smoothing: antialiased;
	}

	.pin-card {
		border-radius: $pin-border-radius;
		box-shadow: $pin-shadow;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-top: 30upx;
		background-color: #ffffff;
	}

	.pin-card-title {
		font-size: 36upx;
		margin-top: 10upx;
		margin-bottom: 10upx;
		padding: 20upx;
	}

	.pin-button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: $pin-color-foreground;
		background-color: $pin-color-primary;
		border-radius: 20upx;
		box-shadow: 0upx 0upx 8upx rgba(0, 0, 0, 0.2);
		font-size: 30upx;
		padding: 15upx 40upx;
		transition: all 0.3s;
	}

	.pin-button:hover {
		transform: scale(1.05)
	}

	.pin-button:active {
		transform: scale(0.9)
	}

	.long-width {
		width: 80%
	}

	.full-width {
		width: 100%
	}

	.pin-button.lg {
		font-size: 40upx;
		padding: 20upx 60upx;
	}

	.pin-button.sm {
		font-size: 20upx;
		padding: 10upx 30upx;
	}

	.pin-bg-white {
		background-color: #ffffff;
	}

	.pin-primary {
		color: $pin-color-primary;
	}

	.pin-bg-primary {
		background-color: $pin-color-primary;
		color: $pin-color-foreground
	}

	.pin-accent {
		color: $pin-color-accent;
	}

	.pin-bg-accent {
		background-color: $pin-color-accent;
		color: $pin-color-accent-foreground
	}

	.pin-solid-top {
		border-top: #eeeeee 1px solid;
	}

	.pin-shadow {
		box-shadow: $pin-shadow;
	}

	.pin-radius {
		border-radius: $pin-border-radius;
	}

	.pin-margin {
		margin: 20upx;
	}

	.pin-margin-0 {
		margin: 0;
	}

	.pin-padding {
		padding: 20upx;
	}

	.pin-hoverable {
		transition: all 0.2s;
	}

	.pin-hoverable:hover {
		box-shadow: 0upx 16upx rgba(0, 0, 0, 0.3);
		transform: scale(1.1)
	}

	.pin-hoverable:active {
		box-shadow: 0upx 0upx 4upx rgba(0, 0, 0, 0.1);
		transform: scale(0.9)
	}

	.pin-text-bold {
		font-weight: 700
	}

	.pin-text-right {
		text-align: right
	}

	.pin-text-center {
		text-align: center
	}

	.pin-item-center {
		align-items: center
	}

	.pin-item-start {
		align-items: flex-start
	}

	.pin-flex {
		display: flex;
	}

	.pin-flex-wrap {
		flex-wrap: wrap
	}

	.pin-flex-sub {
		flex: 1;
	}

	.pin-flex-sub-50 {
		flex-basis: 50%;
	}

	.pin-avatar {
		border-radius: $pin-border-radius;
		width: 16vw;
		height: 16vw;
		min-width: 16vw;
		min-height: 16vw;
		box-shadow: $pin-shadow;
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		background-color: #ffffff;
		box-shadow: $pin-shadow;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;

		.settlement {
			width: 60%;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.sum {
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;

				.money {
					font-weight: 600;
				}
			}

			.btn {
				padding: 0 30upx;
				height: 50upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 30upx;
			}
		}

		.delete-button {
			background-color: $pin-color-accent;
			color: $pin-color-accent-foreground;
			padding: 0 30upx;
			height: 50upx;
			border-radius: $pin-border-radius;
			box-shadow: $pin-shadow;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s;
		}
	}

	.pin-top-padding {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 25vh;
		background-color: $pin-color-primary !important;
		display: flex;
		justify-content: center;
		z-index: -1;
	}


	.pin-text-xs {
		font-size: 20rpx;
	}

	.pin-text-sm {
		font-size: 24rpx;
	}

	.pin-text-md {
		font-size: 28rpx;
	}

	.pin-text-lg {
		font-size: 32rpx;
	}

	.pin-text-xl {
		font-size: 36rpx;
	}

	.pin-text-xxl {
		font-size: 44rpx;
	}

	.pin-text-xxxl {
		font-size: 56rpx;
	}

	.pin-text-sl {
		font-size: 80rpx;
	}

	.pin-text-xsl {
		font-size: 120rpx;
	}

	.pin-text-Abc {
		text-transform: Capitalize;
	}

	.pin-text-ABC {
		text-transform: Uppercase;
	}

	.pin-text-abc {
		text-transform: Lowercase;
	}

	.pin-text-price::before {
		content: "¥";
		font-size: 80%;
		margin-right: 4rpx;
	}

	.pin-text-cut {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.pin-text-bold {
		font-weight: bold;
	}

	.pin-text-center {
		text-align: center;
	}

	.pin-text-content {
		line-height: 1.6;
	}

	.pin-text-left {
		text-align: left;
	}

	.pin-text-right {
		text-align: right;
	}

	.pin-list-item {
		padding: 20upx 3%;
		margin: 30upx auto 20upx auto;
		display: flex;
		color: $pin-color-accent;

		.list-left {
			width: 16vw;
			height: auto;
			display: flex;

			image {
				width: 60upx;
				height: 60upx;
			}
		}

		.list-right {
			width: calc(100% - 16vw);
			margin-left: 20upx;
			align-items: center;

			.list-header {
				width: 100%;
				display: flex;
				font-size: 32upx;

				.list-title {
					flex-basis: 70%;
				}

				.list-sub-title {
					flex-basis: 30%;
					text-align: right
				}
			}

			.list-detail {
				width: 100%;
				font-size: 26upx;
				color: #999;
			}

		}
	}

	.pin-amount-detail {
		padding: 10upx 3%;

		.row {
			height: 60upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.nominal {
				font-size: 28upx;
			}

			.content {
				font-size: 32upx;
				font-weight: 700;
			}
		}
	}

	.pin-order-item-list {
		padding: 10upx 3%;

		.row {
			margin: 30upx 0;

			.goods-info {
				width: 100%;
				display: flex;

				.img {
					width: 22vw;
					height: 22vw;
					border-radius: 10upx;
					overflow: hidden;
					flex-shrink: 0;
					margin-right: 10upx;

					image {
						width: 22vw;
						height: 22vw;
					}
				}

				.info {
					width: 100%;
					height: 22vw;
					overflow: hidden;
					display: flex;
					flex-wrap: wrap;
					position: relative;

					.title {
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						// text-align: justify;
						overflow: hidden;
					}

					.spec {
						font-size: 24upx;
						background-color: #f3f3f3;
						color: $pin-color-accent;
						height: 40upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: $pin-border-radius;
					}

					.price-number {
						position: absolute;
						width: 100%;
						bottom: 0upx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						font-size: 28upx;
						height: 40upx;

						.price {
							color: #f06c7a;
						}

						.number {
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}
		}
	}

	/* ==================
	        模态窗口
	==================== */

	.pin-modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1110;
		opacity: 0;
		outline: 0;
		text-align: center;
		-ms-transform: scale(1.185);
		transform: scale(1.185);
		backface-visibility: hidden;
		perspective: 2000rpx;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out 0s;
		pointer-events: none;
	}

	.pin-modal::before {
		content: "\200B";
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}

	.pin-modal.show {
		opacity: 1;
		transition-duration: 0.3s;
		-ms-transform: scale(1);
		transform: scale(1);
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}

	.pin-dialog-icon {
		color: #eaeaea;
		font-size: 200upx;
		position: absolute;
		top: 100upx;
		left: 200upx;
		opacity: 0.4;
		z-index: 0;
	}

	.pin-dialog {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		margin-left: auto;
		margin-right: auto;
		width: 680rpx;
		max-width: 100%;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		overflow: hidden;
		z-index: 8;
	}

	.pin-modal.bottom-modal::before {
		vertical-align: bottom;
	}

	.pin-modal.bottom-modal .pin-dialog {
		width: 100%;
		border-radius: 0;
	}

	.pin-modal.bottom-modal {
		margin-bottom: -1000rpx;
	}

	.pin-modal.bottom-modal.show {
		margin-bottom: 0;
	}

	.pin-modal.drawer-modal {
		transform: scale(1);
		display: flex;
	}

	.pin-modal.drawer-modal .pin-dialog {
		height: 100%;
		min-width: 200rpx;
		border-radius: 0;
		margin: initial;
		transition-duration: 0.3s;
	}

	.pin-modal.drawer-modal.justify-start .pin-dialog {
		transform: translateX(-100%);
	}

	.pin-modal.drawer-modal.justify-end .pin-dialog {
		transform: translateX(100%);
	}

	.pin-modal.drawer-modal.show .pin-dialog {
		transform: translateX(0%);
	}


	.pin-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100rpx;
		justify-content: space-between;
	}

	.pin-bar .action {
		display: flex;
		align-items: center;
		height: 100rpx;
		justify-content: center;
		max-width: 100%;
	}

	.pin-bar .action.border-title {
		position: relative;
		top: -10rpx;
	}

	.pin-bar .action.border-title text[class*="bg-"]:last-child {
		position: absolute;
		bottom: -0.5rem;
		min-width: 2rem;
		height: 6rpx;
		left: 0;
	}

	.pin-bar .action.sub-title {
		position: relative;
		top: -0.2rem;
	}

	.pin-bar .action.sub-title text {
		position: relative;
		z-index: 1;
	}

	.pin-bar .action.sub-title text[class*="bg-"]:last-child {
		position: absolute;
		display: inline-block;
		bottom: -0.2rem;
		border-radius: 6rpx;
		width: 100%;
		height: 0.6rem;
		left: 0.6rem;
		opacity: 0.3;
		z-index: 0;
	}

	.pin-bar .action.sub-title text[class*="text-"]:last-child {
		position: absolute;
		display: inline-block;
		bottom: -0.7rem;
		left: 0.5rem;
		opacity: 0.2;
		z-index: 0;
		text-align: right;
		font-weight: 900;
		font-size: 36rpx;
	}

	.pin-bar.justify-center .action.border-title text:last-child,
	.pin-bar.justify-center .action.sub-title text:last-child {
		left: 0;
		right: 0;
		margin: auto;
		text-align: center;
	}

	.pin-bar .action:first-child {
		margin-left: 30rpx;
	}

	.pin-bar .action text.text-cut {
		text-align: left;
		width: 100%;
	}

	.pin-bar .pin-avatar:first-child {
		margin-left: 20rpx;
	}

	.pin-bar .action:first-child>text[class*="icon"] {
		margin-left: -0.3em;
		margin-right: 0.3em;
	}

	.pin-bar .action:last-child {
		margin-right: 30rpx;
	}

	.pin-bar .action>text[class*="icon"],
	.pin-bar .action>view[class*="icon"] {
		font-size: 36rpx;
	}

	.pin-bar .action>text[class*="icon"]+text[class*="icon"] {
		margin-left: 0.5em;
	}

	.pin-bar .content {
		position: absolute;
		text-align: center;
		width: calc(100% - 340rpx);
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		height: 60rpx;
		font-size: 32rpx;
		line-height: 60rpx;
		cursor: none;
		pointer-events: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
</style>
