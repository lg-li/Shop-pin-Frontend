<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let that = this
			// #ifdef MP-WEIXIN
			wx.getSetting({
				success: function(res) {
					if (res.authSetting['scope.userInfo']) {
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

<style>
	/*每个页面公共css */
</style>
