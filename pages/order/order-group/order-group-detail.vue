<template>
	<view>
		<view class="pin-top-padding"></view>
		<view class="pin-card pin-padding">

			<view class="pin-card-title"> <i class="pin-icon">group</i> {{ownerUser.nickname}} 的团</view>
			<view class="pin-margin pin-text-sm"> <i class="pin-icon">info</i> 减免规则：根据每日发货截止时期收团,最后确认收货后按照比例返现. </view>
			<view class="pin-margin pin-text-sm"> <i class="pin-icon">info</i> 收团时间：{{ groupCloseTime }}</view>

			<view class="pin-flex pin-flex-wrap pin-item-start">
				<view class="pin-flex-sub pin-margin pin-text-center" v-for="index in groupLimit" :key="index" style="max-width: calc(10vw+20upx);">
					<template v-if="orderGroup.orderIndividuals[index] == null">
						<view class="pin-avatar pin-text-center pin-text-xxxl" style="display: table-cell; vertical-align: center;">
							<view style="padding-top: 30rpx; color: #888888;"><i class="pin-icon">person_add</i></view>
						</view>
						<view class="pin-text-sm"> 待加入</view>
					</template>
					<template v-else>
						<image class="pin-avatar" :src="orderGroup.orderIndividuals[index].user.avatarUrl" />
						<view class="pin-text-sm"> 团长</view>
					</template>
				</view>
			</view>

			<view class="pin-flex">
				<view class="pin-flex-sub-50 pin-text-center">
					<view class="pin-primary pin-text-xxxl">
						<text class="pin-text-xxxl">{{orderGroup.orderIndividuals.length}}</text>
						<text class="pin-text-xl">人</text>
					</view>
					<view class="pin-text-md">团内实时人数</view>
				</view>
				<view class="pin-flex-sub-50 pin-text-center">
					<view class="pin-primary pin-text-xxxl">
						<text class="pin-text-xxxl">{{tickString}}</text>
					</view>
					<view class="pin-text-md">距离收团还有</view>
				</view>
			</view>

			<view class="pin-margin pin-text-sm" v-if="amIOwner"> <i class="pin-icon">info</i> 您是本团团长,邀请更多人加入您的团单可为您和团内其他人带来满减返现</view>

			<view class="pin-margin" v-if="!amIOwner">
				<view class="pin-button pin-bg-accent lg" @click="exitGroup()"><i class="pin-icon">exit_to_app</i> 退出此团</view>
			</view>
			<view class="pin-margin">
				<button class="pin-button pin-bg-primary lg" open-type="share"><i class="pin-icon">share</i> 邀请他人参团</button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupLimit: 8,
				userId: null,
				orderGroupId: null,
				intervalId: null, // 定时器函数ID
				ownerUser: {
					nickname: '--'
				},
				amIOwner: false,
				orderGroup: {
					orderIndividuals: [{
						user: {
							nickname: '',
							avatarUrl: ''
						}
					}]
				},
				tickString: '--:--',
				groupCloseTime: ''
			}
		},
		onLoad(option) {
			if (option.orderGroupId != null) {
				this.orderGroupId = option.orderGroupId
			}
			this.userId = this.$pin.data.pinUser.id
			this.initializeConnection()
		},
		onShow() {
			let that = this
			if (this.intervalId != null) {
				// 清除已有interval
				clearInterval(this.intervalId)
			}
			this.intervalId = setInterval(function() {
				that.tick()
			}, 1000);
		},
		onHide() {
			clearInterval(this.intervalId)
			this.intervalId = null
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: '快来Pin团享受拼团返现!',
				path: 'pages/splash-screen/splash-screen'
			}
		},
		stompClient: null,
		methods: {
			tick() {
				let that = this
				if (this.orderGroup.closeTime == null) {
					return;
				}
				let closeTime = new Date(this.orderGroup.closeTime)
				if (closeTime == NaN || closeTime == null) {
					// let temp = this.data.orderGroup.groupCloseTime.replace(/-/g, '/')
					closeTime = Date.parse(temp)
				}
				let nowTime = new Date().getTime()
				let diff = closeTime - nowTime

				let countTime = (diff / 1000).toFixed(0)
				if (countTime <= 0) {
					// 重定向到订单页面
					this.tickString = "已收团"
					return
				}
				// 截取时分秒数量
				let hour = Math.floor(countTime / 3600)
				let minute = Math.floor(Math.floor(countTime % 3600) / 60)
				let second = Math.floor(countTime % 60)
				// 添加前导0
				let tickString = "";
				if (0 <= hour && hour <= 9) tickString += '0';
				tickString += hour + ':';
				if (0 <= minute && minute <= 9) tickString += '0';
				tickString += minute + ':';
				if (0 <= second && second <= 9) tickString += '0';
				tickString += second;
				this.tickString = tickString
			},
			subscribeStompEvents(connectedStompClient) {
				let that = this
				uni.hideLoading()
				console.log('发送Hello信息')
				// 订阅团内公共信息团单更新消息
				connectedStompClient.subscribe('/group/' + this.orderGroupId + '/update', function(frame, headers) {
					let body = JSON.parse(frame.body)
					that.orderGroup = body
				});
				// 订阅私人团单信息更新消息
				connectedStompClient.subscribe('/user/' + this.userId + '/update', function(frame, headers) {
					let body = JSON.parse(frame.body)
					that.orderGroup = body
					that.parseOrderGroup(body)
				});
				// 向服务端发送消息
				connectedStompClient.send("/server/customer/hello", null, JSON.stringify({
					'msg': 'Konnichiwa!'
				}));
			},
			parseOrderGroup(orderGroup) {
				this.groupCloseTime = new Date(orderGroup.closeTime).toDateString()
				let orderIndividuals = orderGroup.orderIndividuals
				let ownerUserId = orderGroup.ownerUserId
				// 提取团长信息
				console.log('parse owner' + ownerUserId)
				for (let i = 0; i < orderIndividuals.length; i++) {
					console.log(orderIndividuals[i])
					if (orderIndividuals[i].userId == ownerUserId) {
						this.ownerUser = orderIndividuals[i].user
						this.amIOwner = (orderIndividuals[i].user.id == this.userId)
						break
					}
				}
			},
			initializeConnection() {
				console.log('Initializing...')
				let socketProvider = require('../../../common/socket-provider.js').default
				console.log(socketProvider)
				this.stompClient = socketProvider.getInstance('ws://' +
					this.$pin.serverUrl +
					'/pin-websocket?src=customer&orderGroupId=' + this.orderGroupId + '&token=' + this.$pin.getToken(),
					this.subscribeStompEvents,
					failData => {
						console.log('连接失败')
						console.log(failData)
					})
				console.log(this.stompClient)
			}
		}
	}
</script>

<style>
</style>
