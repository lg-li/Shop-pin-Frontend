export default {
	stompClient: null,
	webSocketWrapper: null,
	webSocketConnectionFactory(serverEndPointUrl) {
		let task = uni.connectSocket({
			url: serverEndPointUrl,
			complete: () => {
				console.log("Websocket 连接建立完成")
			}
		})
		return task
	},
	webSocketWrapperFactory(serverEndPointUrl) {
		let that = this
		let wrapper = {
			messageQueue: [],
			isConnected: false,
			socketTask: that.webSocketConnectionFactory(serverEndPointUrl),
			send: function(msg) {
				// 发送消息
				if (this.isConnected) {
					// 如果socket已连接则发送消息
					this.socketTask.send({
						data: msg
					})
				} else {
					// socket没有连接将消息放入队列中
					this.messageQueue.push(msg);
				}
			},
			close: function() {
				// 关闭连接
				if (this.isConnected) {
					this.socketTask.close()
				}
			},
			onclose: function() {
				this.isConnected = false
				wx.showToast({
					title: '实时网络连接被断开',
					icon: 'none'
				})
			},
			init: function() {
				let queueLength = this.messageQueue.length
				// 发送消息队列中阻塞的元素
				for (let i = 0; i < queueLength; i++) {
					const messageQueueElement = this.messageQueue.shift();
					this.send(messageQueueElement)
				}
			}
		}
		// 监听 WebSocket 连接打开事件
		wrapper.socketTask.onOpen(function(res) {
			uni.hideLoading()
			console.log("WebSocket 连接已打开")
			wrapper.isConnected = true;
			wrapper.init() // 连接成功后，将队列中的消息发送出去
			wrapper.onopen()
		})

		// 监听 WebSocket 接受到服务器的消息事件
		wrapper.socketTask.onMessage(function(res) {
			wrapper.onmessage(res);
		})

		// 监听 WebSocket 错误事件
		wrapper.socketTask.onError(function(res) {
			uni.hideLoading()
			console.log(res)
			console.log("WebSocket 错误事件")
			wrapper.onerror()
		})

		// 监听 WebSocket 连接关闭事件
		wrapper.socketTask.onClose(function(res) {
			uni.hideLoading()
			wrapper.onclose()
			console.log("WebSocket 连接关闭")
			wrapper.isConnected = false;
			// 断线重连
		})
		return wrapper
	},
	getInstance(serverEndPointUrl, finalSuccessCallback, finalFailCallback) {
		uni.showLoading({
			title: '连接中...',
		})
		// 待发送的消息队列
		let that = this;
		// 创建一个 WebSocket 连接
		// 符合WebSocket定义的对象
		this.webSocketWrapper = this.webSocketWrapperFactory(serverEndPointUrl)
		let Stomp = require('./stomp.js').Stomp;
		/**
		 * 定期发送心跳或检测服务器心跳
		 */
		Stomp.setInterval = function(interval, f) {
			return setInterval(f, interval);
		};
		// 结束定时器的循环调用
		Stomp.clearInterval = function(id) {
			return clearInterval(id);
		};
		this.stompClient = Stomp.over(this.webSocketWrapper);
		this.stompClient.connect({},
			successCallback => {
				console.log("Stomp 连接成功")
				uni.hideLoading()
				// 绑定事件
				if (finalSuccessCallback) {
					finalSuccessCallback(that.stompClient)
				} else {
					console.log("未定义成功回调函数")
				}
			},
			errorCallback => {
				uni.hideLoading()
				console.error("Stomp 连接失败")
				if (finalFailCallback) {
					finalFailCallback(errorCallback)
				} else {
					console.log("未定义失败回调函数")
				}
			})
		return this.stompClient
	}
}
