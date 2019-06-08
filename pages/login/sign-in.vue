<template>
	<view>
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src="../../static/img/logo.png"></image>
			</view>
		</view>
		<!-- 账号密码输入框 -->
		<view class="form" v-if="!recommendWechatLogin">
			<view class="username pin-shadow">
				<input placeholder="手机号或邮箱..." v-model="user" />
			</view>
			<view class="password">
				<input placeholder="密码..." v-model="password" password=true />
			</view>
			<view class="pin-button pin-bg-accent" @tap="doLogin"><i class="pin-icon">done</i> 登 录</view>
			<view class="res">
				<view @tap="toPage('sign-up')"><i class="pin-icon">person_add</i> 用户注册</view>
				<view @tap="toPage('reset-password')"><i class="pin-icon">help</i> 忘记密码</view>
			</view>
			<view class="pin-text-center" v-if="isWechatMiniProgram">
				<i class="pin-icon">info</i> 您正在使用微信小程序，推荐使用微信登录。
			</view>
		</view>
		<view class="form" v-else>
			<button open-type="getUserInfo" @getuserinfo="onGetUserInfo" class="pin-button pin-bg-accent"><i class="icon weixin"></i> 使用微信授权登录</button>
			<view class="pin-margin pin-text-right" v-if="isWechatMiniProgram"  @tap="recommendWechatLogin = false">
				<i class="pin-icon">info</i> 您正在使用微信小程序，推荐使用微信登录。
				您亦可选择 <i class="pin-icon text-xxxl">person</i> 使用 Pin 帐号密码登录
			</view>
		</view>
		<!-- 第三方登录 -->
		<view class="oauth pin-animation-slide-up" v-if="isShowOauth">
			<view class="text">— 第三方快速登录 —</view>
			<view class="list">
				<view @tap="oauthLogin('weixin')" v-if="showProvider.weixin && !isWechatMiniProgram" class="icon weixin"></view>
				<button open-type="getUserInfo" @getuserinfo="onGetUserInfo" v-if="showProvider.weixin && isWechatMiniProgram"
				 class="icon weixin"></button>
				<view @tap="oauthLogin('qq')" v-if="showProvider.qq" class="icon qq"></view>
				<view @tap="oauthLogin('sinaweibo')" v-if="showProvider.sinaweibo" class="icon sinaweibo"></view>
				<view @tap="oauthLogin('xiaomi')" v-if="showProvider.xiaomi" class="icon xiaomi"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				password: '',
				isShowOauth: false,
				showProvider: {
					weixin: false,
					qq: false,
					sinaweibo: false,
					xiaomi: false
				},
				isWechatMiniProgram: false,
				recommendWechatLogin: false
			}
		},
		onShow() {},
		onLoad() {
			//APP显示第三方登录
			// #ifdef APP-PLUS
			this.isShowOauth = true;
			// #endif
			// #ifdef MP-WEIXIN
			this.isShowOauth = true;
			this.isWechatMiniProgram = true
			this.recommendWechatLogin = true
			this.wechatLogin()
			// #endif
			this.getProvider();
		},
		methods: {
			onGetUserInfo(e) {
				console.log(e)
			},
			oauthLogin(provider) {
				let that = this
				uni.showLoading();
				//第三方登录
				uni.login({
					provider: provider,
					success: (loginRes) => {
						console.log("success: " + JSON.stringify(loginRes));
						let code = loginRes.code
						//案例直接获取用户信息，一般不是在APP端直接获取用户信息，比如微信，获取一个code，传递给后端，后端再去请求微信服务器获取用户信息
						uni.getUserInfo({
							provider: provider,
							success: (infoRes) => {
								console.log('用户信息：' + JSON.stringify(infoRes.userInfo));
								let userInfo = infoRes.userInfo
								userInfo.code = code
								that.$pin.request('POST', '/sign-in/', userInfo,
								successData=>{
									
								},
								failData => {
									
								})
							}
						});
					},
					fail: (e) => {
						console.log("fail: " + JSON.stringify(e));
					}
				});
			},
			getProvider() {
				//获取第三方登录服务
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						let len = res.provider.length;
						for (let i = 0; i < len; i++) {
							//有服务才显示按钮图标
							this.showProvider[res.provider[i]] = true;
						}
						if (res.provider.length == 0) {
							this.isShowOauth = false;
						}
					}
				});
			},
			toPage(page) {
				uni.hideKeyboard()
				uni.navigateTo({
					url: page
				});
			},
			loginSuccess() {
				uni.showToast({
					title: '登录成功'
				})
				let pages = getCurrentPages()
				console.log(pages)
				if(pages.length > 1) {
					uni.navigateBack(-1)
				} else {
					uni.switchTab({
						url: "/pages/tab-bar/home"
					})
				}
			},
			loginFailed() {
				
			},
			wechatLogin() {
				console.log("LOGINING WECHAT UNI")
				
				this.$pin.loginFromWechat(this.loginSuccess, this.loginFailed)
				
				console.log("LOGINING WECHAT")
			},
			doLogin() {
				uni.hideKeyboard();
				//验证手机号码
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.user)) && !(
						/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.user))) {
					uni.showToast({
						title: '请填写正确手机号或邮箱地址',
						icon: "none"
					});
					return false;
				}
				uni.showLoading({
					title: '登录中...'
				})
				let that = this
				this.$pin.request('POST', '/sign-in/default', {
						user: this.user,
						password: this.password
					},
					successData => {
						uni.hideLoading()
						console.log(successData)
						if (successData.code == that.$pin.code.invalidCredential) {
							// 登录失败
							uni.showToast({
								title: '登录凭据错误，请重试。',
								icon: 'none'
							})
						} else if (successData.code == that.$pin.code.success) {
							uni.setStorageSync('pin-token', successData.data)
							that.loginSuccess()
						}
					},
					failData => {
						uni.hideLoading()
					}
				)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/style.scss";
	@import "../../static/css/pin-animation.css";

	@font-face {
		font-family: "Font-login";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVwAAsAAAAACiwAAAUhAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqHTIY+ATYCJAMUCwwABCAFhG0HRhvICBEVpCGR/UgwbhrPeq6LhESdqBKaSN/kw79n/bk3aCYZKO1yZCbTFZBZqLv71CzRPvkPQPDEzrPbAAEEdy/nHLBRL1RJVpMf+cAnKX4Do/NzekpNyAm5/zlmunw+sPy2tUt22QBHAx5Q5EUGHvAdnfOh3DK8OuQd0OlAAIiIQw5IS1uPAgEstFUEAFmxdPFcCDE92AIcgaDigV1ZkBvBQaCH6csAbnB/nnyDIiIAFBwDbePAotYFaAjIY0OMFtTMsBEQdGcFwOwFMAByALAAWQfaV4Dx4zlgIEpRFg2A/DsBFDQgB2oDc8eGgkGQeEFKUZejCznt9o/HQ5OHYmxDggUCskkBBgjUUoAAgbkUoMDYkPDCyDliuQhABkgJQK6yyhT38BIY8CBxYSRMEkkMSSATwkJdISFRxmEK1/vOnrTzXjViHzwz8aKlGEYs2iibpmp+5ratsgWGNWLbfrapGoZCpmU/tfdypWk3P2UpyrXbL9yT7r9NuzXF7fWdOOu/rp+KJfM9J10u24o94tV0yTZj7Q1k2sNGbKz3FE7fJrlO6jZTvS8u0ZhJun8isa0RspKxyKuEe2NZXZZOEuakK+yhNyZTXZI887RY8YQzlSXpoBHeCI5wo155sye1OndEW2qmqrgfekbypF8gtj1yfSpZR24fvUPxWVJPRLG2DHcxzf7n0tWR1+x5R0CV6j3Gds3IOfkK9MdFr5Un3mk4rSddo6/Jd1vEsCbatsu6R7YZUv2mevIuRf9nThs/zvYVz49u+Zw5nLqge+KujIq2hXHLc265lFGtRqxMdB4ZW7GDGxWkhRXLMpfNnaPMmLeT8S2mw3TIt3Ynv5P1TWOGGMW3c6cDCdUbnElHp9An2M7UvfFrl9Se3Mpl2OsC/OPrLn+Z/t+8OYMbyc7EULKrYRH0H8RvBcrsPjrZH/r9uO9DFSlsbnuo+4UQU/18N/9U41O/hEONfOLyA79rcYXtbq65rDorfijy9epSZFw8fEWNBN4peoL0Ll7SS4QBfh0/4Jnj+Jabk3XpkHSMdxxyuKysOZ4BfiuXySHl2UXydcnnx30kioxf/vShfUSnz/oZraNzc1Nu0tJttfyZxEhcTaOb/Ofrls75Pu/7/A/zPvxwpc/TJ34YSpffeeM2qlH/jVhDV9gcvNONnb7ZJePd7ubF++dFqYkkt2sh8dkoHjBpXMs3De/mt/y3dmCZ8424T5Y6B9aQf4r8dxu+imujrYtcywuiBztmF7Bt/yXK7wSmVlUEpshvJ/7HthUAHPDGBa7l2AIACD6yMPolEHyG+Y62A8EXmZ8Xf8adtzCtX+sirIn7vGB2RM1vgnSbRt7WD193ec251eT45BSoLPg221gAwV8Wxoo0A8eK3SZfLOSwDxLwhIWfYccX6Y7Gh90o5crFAIEAOQQKByYDAwEpSBabAxwktBLgCepBlK3eWxLDWSILAZDljYCI9AEq3GPAiPRFstgfcJz+wItsCaKRYg4pSas5NDtkASXwFzSCRmWYwsErPaK+9cxFRS7+is43IUijJJmqcUTXxRb+rrMQFChHA1TobNj3BJOjFkWITAhTHscKeqFI0DA7aOYgJkAS4F5AQyAjZQ8PDqnvP0LaTY9xBT0l9ivkeM34IBVJKiBr+Vip51SqvTstE4ioAhRTTAagIqyo1+METPC8FhKCiGkQneRiYpCqKo+GVw7nWPBn9NWuwEUJQ1jCER7cseG02dIwGppNhOPnjIu1djYDAAAA') format('woff2');
	}

	.icon {
		font-family: "Font-login" !important;
		font-style: normal;
		color: $pin-color-accent-foreground;
		margin-right: 10upx;
		
		&.weixin {
			&:before {
				content: "\e615";
			}
		}

		&.qq {
			&:before {
				content: "\e752";
			}
		}

		&.sinaweibo {
			&:before {
				content: "\e63d";
			}
		}

		&.xiaomi {
			&:before {
				content: "\e661";
			}
		}
	}

	.form {
		.res {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			color: $pin-color-foreground;
		}
	}

	.oauth {
		animation-delay: 0.5s;

		@media all and (max-height: 150vw) {
			display: none;
		}

		box-shadow: $pin-shadow;
		position: absolute;
		bottom: 0;
		padding-top: 50upx;
		padding-bottom: 50upx;
		width: 100%;
		background-color: $pin-color-light;

		.text {
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: $pin-color-light-foreground;
			font-size: 28upx;
		}

		.list {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20upx 0;

			.icon {
				color: $pin-color-light-foreground;
				font-size: 80upx;
				margin: 0 30upx;
			}
		}
	}
</style>
