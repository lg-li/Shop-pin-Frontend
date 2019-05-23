<template>
	<view>
		<view class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="addr"></view>
			<view class="input-box">
				
			</view>
			<view class="icon-btn">
				<view class="icon tongzhi" @tap="toMsg"></view>
				<view class="icon setting" @tap="toSetting"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 用户信息 -->
		<view class="user">
			<!-- 头像 -->
			<view class="left">
				<image :src="user.face" @tap="toSetting"></image>
			</view>
			<!-- 昵称,个性签名 -->
			<view class="right">
				<view class="username" @tap="toLogin">{{user.username}}</view>
				<view class="signature" @tap="toSetting">{{user.signature}}</view>
			</view>
			<!-- 二维码按钮 -->
			<view class="erweima" @tap="toMyQR">
				<view class="icon qr"></view>
			</view>
		</view>
		<!-- VIP banner -->
		<view class="VIP">
			<view class="img">
				<image src="../../static/img/VIP.png"></image>
			</view>
			<view class="title">开通VIP会员</view>
			<view class="tis">会员特权</view>
		</view>
		<!-- 订单-余额 -->
		<view class="order">
			<!-- 订单类型 -->
			<view class="list">
				<view class="box" v-for="(row,index) in orderList" :key="index" @tap="toOrderList(index)">
					<view class="img">
						<view class="icon" :class="row.icon"></view>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
			<!-- 余额 -->
			<view class="balance-info">
				<view class="left">
					<view class="box">
						<view class="num">{{user.integral}}</view>
						<view class="text">积分</view>
					</view>
					<view class="box">
						<view class="num">{{user.envelope}}</view>
						<view class="text">佣金</view>
					</view>
					<view class="box">
						<view class="num">{{user.balance}}</view>
						<view class="text">余额</view>
					</view>
				</view>
				<view class="right">
					<view class="box" @tap="toDeposit">
						<view class="img">
							<view class="icon chongzhi"></view>
						</view>
						<view class="text">充值</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="toolbar">
			<view class="title">我的工具栏</view>
			<view class="list">
				<view class="box" v-for="(row,index) in mytoolbarList" :key="index" @tap="toPage(row.url)">
					<view class="img">
						<image :src="row.img"></image>
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
				isfirst:true,
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				//个人信息,
				user:{
					username:'游客1002',
					face:'../../static/img/face.jpg',
					signature:'点击昵称跳转登录/注册页',
					integral:0,
					balance:0,
					envelope:0
				},
				// 订单类型
				orderList:[
					{text:'待付款',icon:"fukuan"},
					{text:'待发货',icon:"fahuo"},
					{text:'待收货',icon:"shouhuo"},
					{text:'待评价',icon:"pingjia"},
					{text:'退换货',icon:"tuihuo"}
				],
				// 工具栏列表
				mytoolbarList:[
					{url:'../user/keep/keep',text:'我的收藏',img:'../../static/img/user/point.png'},
					{url:'../user/coupon/coupon',text:'优惠券',img:'../../static/img/user/quan.png'}, 
					{url:'',text:'新客豪礼',img:'../../static/img/user/renw.png'},
					{url:'',text:'领红包',img:'../../static/img/user/momey.png'},
					
					{url:'../user/address/address',text:'收货地址',img:'../../static/img/user/addr.png'},
					{url:'',text:'账户安全',img:'../../static/img/user/security.png'},
					{url:'',text:'银行卡',img:'../../static/img/user/bank.png'},
					{url:'',text:'抽奖',img:'../../static/img/user/choujiang.png'},
					// {text:'客服',img:'../../static/img/user/kefu.png'},
					// {text:'签到',img:'../../static/img/user/mingxi.png'}
					
				]
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		onLoad() {
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
		},
		onReady(){
			//此处，演示,每次页面初次渲染都把登录状态重置
			uni.setStorage({
				key: 'UserInfo',
				data: false,
				success: function () {
				},
				fail:function(e){
				}
			});
		},
		onShow(){
			uni.getStorage({
				key: 'UserInfo',
				success: (res)=>{
					if(!res.data){
						if(this.isfirst){
							//this.toLogin();
						}
						return ;
					}
					this.user = res.data;
				},
				fail:(e)=>{
					//this.toLogin(); 
				}
			});
		},
		methods: {
			//消息列表
			toMsg(){
				uni.navigateTo({
					url:'../msg/msg'
				})
			},
			toOrderList(index){
				uni.navigateTo({url:'../user/order_list/order_list?tbIndex='+index}) 
			},
			toSetting(){
				uni.navigateTo({
					url:'../user/setting/setting'
				})
			},
			toMyQR(){
				uni.navigateTo({
					url:'../user/myQR/myQR'
				})
			},
			toLogin(){
				uni.showToast({title: '请登录',icon:"none"});
				uni.navigateTo({
					url:'../login/login'
				})
				this.isfirst = false;
			},
			isLogin(){
				//实际应用中,用户登录状态应该用token等方法去维持登录状态.
				const value = uni.getStorageSync('UserInfo');
				if (value) {
					return true;
				}
				return false
			},
			toDeposit(){
				uni.navigateTo({
					url:'../user/deposit/deposit'
				})
			},
			toPage(url){
				console.log("url: " + url);
				uni.navigateTo({
					url:url
				})
			}
		}
	} 
</script>
<style lang="scss">
	page{position: relative;}
	@font-face {font-family:"HMfont-home";src:url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2');}
	.icon {
		font-family:"HMfont-home" !important;
		font-size:60upx;
		font-style:normal;
		color:#000000;
		&.setting {
			&:before{content:"\e64e";}
		}
		&.tongzhi {
			&:before{content:"\e729";}
		}
		&.qr {
			&:before{content:"\e600";}
		}
		&.chongzhi {
			&:before{content:"\e648";}
		}
		&.fukuan {
			&:before{content:"\e67f";}
		}
		&.fahuo {
			&:before{content:"\e680";}
		}
		&.shouhuo {
			&:before{content:"\e6b1";}
		}
		&.pingjia {
			&:before{content:"\e66b";}
		}
		&.tuihuo {
			&:before{content:"\e66c";}
		}
	}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #f06c7a;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		
	}
	
	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #f06c7a;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.icon-btn{
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon{
				color: #fff;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}
	.place{
		background-color: #f06c7a;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.place-bottom{
		height: 300upx;
	}
	.user{
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		// position: relative;
		background-color: #f06c7a;
		padding-bottom: 120upx;
		.left{
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border: solid 1upx #fff;
			border-radius: 100%;
			image{
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
			
		}
		.right{
			width: 100%;
			.username{
				font-size: 36upx;
				color: #fff;
			}
			.signature{
				color: #eee;
				font-size: 28upx;
			}
		}
		.erweima{
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;
		
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to left, #fbbb37 0%,#fcf0d0 105%);
			.icon{
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}
	.order{
		width: 84%;
		margin: 30upx 4% 30upx 4%;
		padding: 30upx 4% 20upx 4%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.list{
			display: flex;
			border-bottom: solid 1upx #17e6a1;
			padding-bottom: 10upx;
			.box{
				width: 20%;
				.img{
					width: 100%;
					display: flex;
					justify-content: center;
					.icon{
						font-size: 50upx;
						color: #464646;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3d3d3d;
				}
			}
		}
		.balance-info{
			display: flex;
			padding: 10upx 0;
			.left{
				width: 75%;
				display: flex;
				.box{
					width: 50%;
					font-size: 28upx;
					
					.num{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						color: #f9a453;
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						color: #3d3d3d;
						font-size: 28upx;
					}
				}
			}
			.right{
				border-left: solid 1upx #17e6a1;
				width: 25%;
				.box{
					
					.img{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						.icon{
							font-size: 45upx;
							color: #e78901;
						}
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 28upx;
						color: #3d3d3d;
					}
				}
			}
		}
	}
	.VIP{
		width: 84%;
		margin: -65upx auto 20upx auto;
		padding: 30upx 4%;
		background: linear-gradient(to left, #dea96d 0%,#f6d59b 100%);
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.2);
		border-radius: 15upx;
		display: flex;
		align-items: center;
		.img{
			flex-shrink: 0;
			width: 60upx;
			height: 60upx;
			image{
				width: 60upx;
				height: 60upx;
			}
		}
		.title{
			width: 100%;
			color: #796335;
			font-size: 30upx;
		}
		.tis{
			width: 100%;
			display: flex;
			justify-content: flex-end;
			color: #fcf0d0;
			font-size: 26upx;
		}
	}
	.toolbar{
		width: 92%;
		margin: 0 4% 0 4%;
		padding: 0 0 20upx 0;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.title{
			padding-top: 10upx;
			margin: 0 0 10upx 3%;
			font-size: 30upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			.box{
				width: 25%;
				margin-bottom: 30upx;
				.img{
					width: 23vw;
					height: 10.5vw;
					display: flex;
					justify-content: center;
					
					image{
						width: 9vw;
						height: 9vw;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
					color: #3d3d3d;
				}
			}
		}
	}
</style>
