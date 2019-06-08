<template>
	<view>
		<!-- 用户信息 -->
		<view class="user">
			<!-- 头像 -->
			<view class="left">
				<image :src="userInfo.avatarUrl" @tap="toSetting"></image>
			</view>
			<!-- 昵称,个性签名 -->
			<view class="right">
				<view class="username" @tap="toLogin">{{userInfo.nickname}}</view>
				<view class="signature" @tap="toSetting">{{userInfo.email == null?'点击完善账户设置':userInfo.email}}</view>
			</view>
			<!-- 二维码按钮 -->
			<view class="qr-code" @tap="toMyQR">
				<view class="icon pin-icon">share</view>
			</view>
		</view>
		<!-- VIP banner -->
		<view class="VIP animation-scale-down">
			<view class="img">
				<image src="../../static/img/VIP.png"></image>
			</view>
			<view class="title">Pin Premium 黑金会员</view>
			<view class="tis">查看 Premium 特权</view>
		</view>
		<!-- 订单-余额 -->
		<view class="order">
			<!-- 订单类型 -->
			<view class="list">
				<view class="box" v-for="(row,index) in orderList" :key="index" @tap="toOrderList(row.key)">
					<view class="img">
						<view class="icon pin-icon"> {{row.icon}}</view>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
			<!-- 余额 -->
			<view class="balance-info">
				<view class="left">
					<view class="box" @tap="toCheckIn()">
						<view class="num">{{hasCheckedIn ? '已签到':'未签到'}}</view>
						<view class="text">签到赢积分</view>
					</view>
					<view class="box">
						<view class="num">{{userInfo.credit}}</view>
						<view class="text">积分</view>
					</view>
					<view class="box">
						<view class="num">{{userInfo.balance}}</view>
						<view class="text">余额</view>
					</view>
				</view>
				<view class="right">
					<view class="box" @tap="toDeposit">
						<view class="img">
							<view class="icon pin-icon">monetization_on</view>
						</view>
						<view class="text">充值</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="toolbar">
			<view class="title"><i class="pin-icon">style</i> 我的工具栏</view>
			<view class="list">
				<view class="box" v-for="(row,index) in mytoolbarList" :key="index" @tap="toPage(row.url)">
					<view class="icon">
						<i class="pin-icon">{{row.icon}}</i>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place-bottom"></view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isfirst: true,
				headerTop: null,
				statusTop: null,
				//个人信息,
				userInfo: {
					avatarUrl: "",
					balance: 0,
					createIp: '',
					createTime: '',
					credit: '',
					email: '',
					gender: 1,
					id: null,
					lastLoginIp: "",
					lastLoginTime: "",
					lastPaswordEditTime: "",
					nickname: "未登录",
					phone: ''
				},
				user: {
					username: '未登录',
					avatarUrl: '../../static/img/logo.png',
					signature: '点击昵称跳转登录/注册页',
					integral: 0,
					balance: 0,
					envelope: 0
				},
				// 订单类型
				orderList: [{
						key: 0,
						text: '待付款',
						icon: "payment"
					},
					{
						key: 1,
						text: '待发货',
						icon: "move_to_inbox"
					},
					{
						key: 2,
						text: '待收货',
						icon: "local_shipping"
					},
					{
						key: 3,
						text: '待评价',
						icon: "local_florist"
					},
					{
						key: 5,
						text: '退换货',
						icon: "swap_vertical_circle"
					}
				],
				// 工具栏列表
				mytoolbarList: [{
						url: '../user/collection/collection',
						text: '我的收藏',
						icon: 'favorite'
					},
					{
						url: '../user/coupon/coupon',
						text: '优惠券',
						icon: 'local_play'
					},

					{
						url: '../user/address/address',
						text: '收货地址',
						icon: 'location_on'
					},
					{
						url: '',
						text: '账户安全',
						icon: "settings"
					},
					{
						url: '',
						text: '签到',
						icon: 'assignment_turned_in'
					},
					{
						url: '',
						text: '客服',
						icon: 'contact_phone'
					}
				],
				hasCheckedIn: false
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad() {
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			this.loadMyUserInfo()
		},
		onReady() {
			//此处，演示,每次页面初次渲染都把登录状态重置
			uni.setStorage({
				key: 'UserInfo',
				data: false,
				success: function() {},
				fail: function(e) {}
			});
		},
		onShow() {

		},
		methods: {
			//消息列表
			toMsg() {
				uni.navigateTo({
					url: '../msg/msg'
				})
			},
			toOrderList(index) {
				uni.navigateTo({
					url: '../user/order-list/order-list?tbIndex=' + index
				})
			},
			toSetting() {
				uni.navigateTo({
					url: '../user/setting/setting'
				})
			},
			toMyQR() {
				uni.navigateTo({
					url: '../user/my-qr-code/my-qr-code'
				})
			},
			toLogin() {
				uni.showToast({
					title: '请登录',
					icon: "none"
				});
				uni.navigateTo({
					url: '../login/sign-in'
				})
				this.isfirst = false;
			},
			isLogin() {
				//实际应用中,用户登录状态应该用token等方法去维持登录状态.
				const value = uni.getStorageSync('UserInfo');
				if (value) {
					return true;
				}
				return false
			},
			toDeposit() {
				uni.navigateTo({
					url: '../user/deposit/deposit'
				})
			},
			toPage(url) {
				console.log("url: " + url);
				uni.navigateTo({
					url: url
				})
			},
			toCheckIn() {
				uni.navigateTo({
					url: '../user/activity/check-in'
				})
			},
			loadMyUserInfo() {
				let that = this
				this.$pin.request('GET', '/commons/user/info', null,
					successData => {
						that.userInfo = successData.data.user
						that.hasCheckedIn = successData.data.hasCheckedIn
					},
					failData => {
						console.log(failData)
						uni.showToast({
							icon: 'none',
							title: '加载用户信息时出错'
						})
					}
				)
			}
		}
	}
</script>
<style lang="scss">
	@import "../../static/css/pin-animation.css";

	page {
		position: relative;
	}

	.icon {
		font-size: 60upx;
		font-style: normal;
		color: $pin-color-accent;

		&.setting {
			&:before {
				content: "\e64e";
			}
		}

		&.qr {
			&:before {
				content: "\e600";
			}
		}

		&.chongzhi {
			&:before {
				content: "\e648";
			}
		}

		&.fukuan {
			&:before {
				content: "\e67f";
			}
		}

		&.fahuo {
			&:before {
				content: "\e680";
			}
		}

		&.shouhuo {
			&:before {
				content: "\e6b1";
			}
		}

		&.pingjia {
			&:before {
				content: "\e66b";
			}
		}

		&.tuihuo {
			&:before {
				content: "\e66c";
			}
		}
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: $pin-color-primary;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}

	.user {
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		// position: relative;
		background-color: $pin-color-primary;
		padding-bottom: 120upx;

		.left {
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border: solid 10upx #fff;
			border-radius: 100%;

			image {
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
		}

		.right {
			width: 100%;

			.username {
				font-size: 36upx;
				color: #000000;
			}

			.signature {
				color: #333333;
				font-size: 28upx;
			}
		}

		.qr-code {
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #eaeaea;

			.icon {
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}

	.order {
		width: 84%;
		margin: 30upx 4% 30upx 4%;
		padding: 30upx 4% 20upx 4%;
		background-color: #fff;
		border-radius: $pin-border-radius;
		box-shadow: $pin-shadow;

		.list {
			display: flex;
			border-bottom: solid 1upx #eaeaea;
			padding-bottom: 10upx;

			.box {
				width: 20%;

				.img {
					width: 100%;
					display: flex;
					justify-content: center;

					.icon {
						font-size: 50upx;
						color: #464646;
					}
				}

				.text {
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3d3d3d;
				}
			}
		}

		.balance-info {
			display: flex;
			padding: 10upx 0;

			.left {
				width: 75%;
				display: flex;

				.box {
					width: 50%;

					.num {
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						color: $pin-color-primary;
						font-size: 36upx;
					}

					.text {
						width: 100%;
						display: flex;
						justify-content: center;
						color: $pin-color-accent;
						font-size: 28upx;
					}
				}
			}

			.right {
				border-left: solid 1upx #eaeaea;
				width: 25%;

				.box {

					.img {
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;

						.icon {
							font-size: 45upx;
							color: $pin-color-primary;
						}
					}

					.text {
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 28upx;
						color: $pin-color-accent;
					}
				}
			}
		}
	}

	.VIP {
		width: 84%;
		margin: -65upx auto 20upx auto;
		padding: 30upx 4%;
		background: linear-gradient(to left, #212121 0%, #565656 100%);
		border-radius: $pin-border-radius;
		box-shadow: $pin-shadow;
		display: flex;
		align-items: center;

		.img {
			flex-shrink: 0;
			width: 60upx;
			height: 60upx;

			image {
				width: 60upx;
				height: 60upx;
			}
		}

		.title {
			width: 100%;
			color: #ffffff;
			font-size: 28upx;
		}

		.tis {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			color: #fcf0d0;
			font-size: 26upx;
		}
	}

	.toolbar {
		width: 92%;
		margin: 0 4% 0 4%;
		padding: 0 0 20upx 0;
		background-color: #fff;
		border-radius: $pin-border-radius;
		box-shadow: $pin-shadow;

		.title {
			padding-top: 10upx;
			margin: 0 0 10upx 3%;
			font-size: 30upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}

		.list {
			display: flex;
			flex-wrap: wrap;

			.box {
				width: 25%;
				margin-bottom: 30upx;

				.icon {
					width: 23vw;
					height: 10.5vw;
					display: flex;
					justify-content: center;

					i {
						font-size: 9vw;
					}
				}

				.text {
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
					color: $pin-color-foreground;
				}
			}
		}
	}
</style>
