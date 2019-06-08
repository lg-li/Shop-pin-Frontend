const SERVER_URL = "http://localhost:5488"
export default {
	code: {
		success: 200,
		invalidCredential: 401
	},
	request(method, url, data, successCallback, failCallback, completeCallback) {
		// 获取 token
		let token = uni.getStorageSync("pin-token")
		// 对整体请求的统一封装
		uni.request({
			method: method,
			url: SERVER_URL + url,
			data: data,
			dataType: "json",
			header: {
				'Authorization': 'Bearer ' + token
			},
			success: (res) => {
				if (res.statusCode == 403) {
					// token 过期，需要登录
					uni.removeStorageSync("pin-token")
					uni.redirectTo({
						url: '/pages/login/sign-in'
					})
					return
				}
				console.log("Succeed");
				console.log(res);
				if (successCallback) {
					successCallback(res.data)
				}
			},
			fail: (res) => {
				if (res.statusCode == 403) {
					// token 过期，需要登录
					uni.navigateTo({
						url: '/pages/login/sign-in'
					})
				}
				console.log("Failed");
				if (failCallback) {
					failCallback(res.data)
				}
			},
			complete: () => {
				if (completeCallback) {
					completeCallback()
				}
			}
		});
	},
	data: {
		isLoginInProgress: false ,// 登录操作 mutex lock
	},
	invokers: {},
	setData(key, value) {
		this.data[key] = value;
		this.invokers[key].setData({
			[key]: value
		})
	},
	getData(key, value) {
		return this.data[key]
	},
	bindData(key, value, invoker) {
		this.data[key] = value;
		this.invokers[key] = invoker
	},
	loginFromWechat(successCallback, failCallback) {
		if(this.data.isLoginInProgress) {
			console.log("登录操作正在进行，互斥锁阻止继续执行")
			return
		}
		this.data.isLoginInProgress = true
		let that = this
		uni.login({
			provider: 'wexin',
			success: (loginRes) => {
				console.log("success: " + JSON.stringify(loginRes));
				let code = loginRes.code
				//案例直接获取用户信息，一般不是在APP端直接获取用户信息，比如微信，获取一个code，传递给后端，后端再去请求微信服务器获取用户信息
				uni.getUserInfo({
					provider: 'wexin',
					success: (infoRes) => {
						console.log('用户信息：' + JSON.stringify(infoRes.userInfo));
						let userInfo = infoRes.userInfo
						userInfo.code = code
						that.request('POST', '/sign-in/wechat-mini-program', userInfo,
							successData => {
								if (successData.code == that.code.success) {
									// 保存 token 到 storage
									uni.setStorageSync('pin-token', successData.data)
									if (successCallback) {
										successCallback()
									}
								} else {
									failCallback(successData)
								}
							},
							failData => {
								if (failCallback) {
									failCallback(failData)
								}
							})
					}
				});
			},
			fail: (e) => {
				console.log("fail: " + JSON.stringify(e));
			}
		});
	},
	getFriendlyTimeText(dateTimeStamp) {
		let targetDate = new Date(dateTimeStamp)
		let result = "";
		let minute = 1000 * 60;
		let hour = minute * 60;
		let day = hour * 24;
		let halfamonth = day * 15;
		let month = day * 30;
		let now = new Date().getTime();
		let diffValue = now - targetDate.getTime();
		if (diffValue < 0) {
			return;
		}
		let monthC = diffValue / month;
		let weekC = diffValue / (7 * day);
		let dayC = diffValue / day;
		let hourC = diffValue / hour;
		let minC = diffValue / minute;
		if (weekC >= 1) {
			result = targetDate.getFullYear() + '-' + targetDate.getMonth() + '-' + targetDate.getDate() + ' ' + targetDate.getHours() + ':' + targetDate.getMinutes() + ':' + targetDate.getSeconds()
			// result = "" + parseInt(weekC) + "周前";
		} else if (dayC >= 1) {
			result = "" + parseInt(dayC) + "天前";
		} else if (hourC >= 1) {
			result = "" + parseInt(hourC) + "小时前";
		} else if (minC >= 1) {
			result = "" + parseInt(minC) + "分钟前";
		} else
			result = "刚刚";
		return result;
	}
}
