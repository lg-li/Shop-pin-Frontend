<template>
	<view>
		<view class="page">
			<view class="canvas">
				<view class="cloud">
					<view class="fly-1"></view>
					<view class="fly-2"></view>
					<view class="fly-3"></view>
				</view>
				<view class="tree">
					<image :src="'../../../static/img/watering/tree-'+ mupiao +'.png'" :class="['tree-'+ mupiao, treemove ? 'move-'+ mupiao : '']" hover-class="none" @click="tree"></image>
				</view>
				<view class="kettle">
					<view class="kettls" @click="water" hover-class="none"></view>
					<view class="flasks" v-show="watercss" :class="{'water': watercss}" ></view>
					<view class="flasms" v-show="!watercss" @click="doCheckIn" hover-class="none"></view>
					<view class="waters" v-show="waterdom"></view>
				</view>
				<view class="sumup">
					<view class="user">
						<view class="cover">
							<image :src="userInfo.avatarUrl" @click="zoom(userInfo.avatarUrl)" hover-class="none"></image>
						</view>
						<view class="info">
							<view class="name">
								<text class="name" v-text="userInfo.nickname"></text>
								<view :class="'sex-'+ userInfo.gender"></view>
							</view>
							<view class="drop" hover-class="none">
								<text v-text="credit + ' 积分'"></text>
								<view class="icon">
									<text class="plus" :class="{'pluss': pluss}">{{creditDiff}}</text> 
								</view>
							</view>
						</view>
					</view>
					<view class="speed">
						<view class="progress">
							<image class="speed-1" :src="'../../../static/img/watering/speed-1'+ [1 == mupiao ? '-h' : ''] +'.png'"></image>
							<image class="speed-2" :src="'../../../static/img/watering/speed-2'+ [2 == mupiao ? '-h' : ''] +'.png'"></image>
							<image class="speed-3" :src="'../../../static/img/watering/speed-3'+ [3 == mupiao ? '-h' : ''] +'.png'"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="pin-card pin-padding">
			<view class="pin-card-title"><i class="pin-icon">assignment_turned_in</i> 每日签到</view>
			<view class="pin-flex">
				<view class="pin-flex-sub-50 pin-text-center">
					<view class="pin-primary pin-text-xxxl">{{credit}}</view>
					<view class="pin-text-md">我的积分</view>
				</view>
				<view class="pin-flex-sub-50 pin-text-center">
					<view class="pin-primary">
						<text class="pin-text-xxxl">{{continuousCheckInDays}} </text><text class="pin-text-xl">天</text>
					</view>
					<view class="pin-text-md">连续签到</view>
				</view>
			</view>
			<view class="pin-margin">
				<view class="pin-button pin-bg-primary" @click="doCheckIn()"><i class="pin-icon">check</i> 为树浇水可签到</view>
			</view>
		</view>

		<view class="pin-card pin-padding">
			<view class="pin-card-title"><i class="pin-icon">edit</i> 我的积分动账记录</view>
			<full-page-empty-state v-if="creditHistory.length == 0" title="没有积分记录" description="快签到获取积分吧" icon="card_giftcard"
			 :radius="true" />

			<view class="pin-list-item" v-for="record in creditHistory" :key="record">
				<view class="list-left">
					<i class="pin-icon">{{creditChangeTypes[record.type].icon}}</i>
				</view>
				<view class="list-right">
					<view class="list-header">
						<view class="list-title pin-text-xl pin-primary">
							{{record.valueChange > 0?'+':''}}{{record.valueChange}}
						</view>
						<view class="list-sub-title text-md pin-accent">
							{{record.createTime}}
						</view>
					</view>
					<view class="list-detail">
						来自: {{creditChangeTypes[record.type].text}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import FullPageEmptyState from '../../../components/full-page-empty-state.vue'
	export default {
		components: {
			"full-page-empty-state": FullPageEmptyState
		},
		data() {
			return {
				creditChangeTypes: {
					0: {
						text: "签到获得",
						icon: "assignment_turned_in"
					},
					1: {
						text: "购买商品奖励",
						icon: "add_shopping_cart"
					},
					2: {
						text: "购买时抵扣订单金额",
						icon: "redeem"
					}
				},
				creditHistory: [],
				credit: 0,
				creditDiff: 0,
				totalCheckInDays: 0,
				continuousCheckInDays: 0,
				// 浇水部分
				userInfo: {
					nickname: 'Pin',	//姓名
					gender: 1,			//姓别
					avatarUrl: ''	//头像
				},
				pluss: false,		//+1动画
				mupiao: 1,			//成长进度 小1，中2 ，大3
				movetree: true,		//树动画开关
				treemove: false,	//树大小类型
				wateroff: true, 	//浇水动画开关
				watercss: false,	//水壶动画开关
				waterdom: false		//水滴动画开关
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo')
		},
		onShow() {
			this.loadMyCreditsRecord()
		},
		methods: {
			doCheckIn() {
				let that = this
				this.$pin.request('GET', '/commons/user/check-in', null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							that.loadMyCreditsRecord(true) // 签到并显示浇水动画
						} else {
							uni.showToast({
								icon: 'none',
								title: successData.message
							})
						}
					},
					failData => {
						uni.showToast({
							icon: 'none',
							title: '签到失败，请重试'
						})
					})
			},
			loadMyCreditsRecord(isWatering) {
				let that = this
				this.$pin.request('GET', '/commons/user/credit-record', null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							for (let i = 0; i < successData.data.creditHistory.length; i++) {
								successData.data.creditHistory[i].createTime = that.$pin.getFriendlyTimeText(successData.data.creditHistory[i]
									.createTime)
							}
							that.creditHistory = successData.data.creditHistory
							that.creditDiff = successData.data.credit-that.credit
							that.credit = successData.data.credit
							that.totalCheckInDays = successData.data.totalCheckInDays
							that.continuousCheckInDays = successData.data.continuousCheckInDays
							if(isWatering) {
								that.water() // 显示浇水动画
							}
						} else {
							uni.showToast({
								icon: 'none',
								title: '加载签到信息失败'
							})
						}
					},
					failData => {
						uni.showToast({
							icon: 'none',
							title: '加载签到信息失败，请重试'
						})
					})
			},
			// 浇水动画部分：点击头像放大
			zoom(o) {
				uni.previewImage({
					'urls': [o]
				});	
			},
			
			//点击树的动画
			tree() {
				if(this.movetree) {
					this.treemove = true;
					this.movetree = false;
					setTimeout(() => {
						this.movetree = true;
						this.treemove = false;
					}, 1000);
				};
			},
			
			//点击浇水动画
			water() {
				if(this.wateroff) {
					this.watercss = true;
					this.wateroff = false;
										
					setTimeout(() => {
						this.waterdom = true;
					}, 1500);
					
					setTimeout(() => {
						this.pluss = true;
						this.treemove = true;
						this.movetree = false;
					}, 2000);
					
					setTimeout(() => {
						this.waterdom = false;
						this.movetree = true;
					}, 3500);
					
					setTimeout(() => {
						this.pluss = false;
						this.wateroff = true;
						this.watercss = false;
						this.treemove = false;
						if(100 <= this.credit && 300 > this.credit) {
							this.mupiao = 2;
						};
						if(300 <= this.credit) {
							this.mupiao = 3;
						};
					}, 4000);	
				};
			}
		}
	}
</script>

<style>
	.canvas{ position: relative; display: flex; flex-direction: column; width: 750upx; height: 752upx; background: url(../../../static/img/watering/background.jpg) no-repeat; background-size: contain; overflow: hidden;}
	.canvas .cloud { margin-top: 128upx; }
	.canvas .cloud view{ margin: 40upx 0; }
	.canvas .cloud .fly-1{ width: 102upx; height: 68upx; animation: cloud-1 80s ease-in-out 0s infinite alternate; background: url(../../../static/img/watering/fly-1.png) no-repeat; background-size: contain;}
	.canvas .cloud .fly-2{ width: 72upx; height: 52upx; animation: cloud-2 60s linear 0s infinite alternate; background: url(../../../static/img/watering/fly-2.png) no-repeat; background-size: contain;}
	.canvas .cloud .fly-3{ width: 78upx; height: 56upx; animation: cloud-3 70s ease 0s infinite alternate; background: url(../../../static/img/watering/fly-3.png) no-repeat; background-size: contain;}
	
	.canvas .tree{ position: relative; display: flex; flex-direction: row; height: 160upx; justify-content: center;}
	.canvas .tree image{ position: absolute; bottom: 0; width: 280upx; height: 380upx;}
	.canvas .tree .tree-1{ width: 124upx; height: 264upx;}
	.canvas .tree .tree-3{ width: 420upx; height: 460upx;}
	
	.canvas .kettle{ display: flex; position: relative; flex-direction: row; justify-content: flex-end; width: 100%; height: 80upx;}
	.canvas .kettle view{ position: absolute;}
	.canvas .kettle .kettls{ top: -172upx; right: 20upx; width: 116upx; height: 112upx; background: url(../../../static/img/watering/kettls.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .flasks{ top: -176upx; right: 28upx; width: 113upx; height: 70upx;  background: url(../../../static/img/watering/flasks.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .flasms{ top: -176upx; right: 26upx; width: 117upx; height: 75upx;  background: url(../../../static/img/watering/flasms.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .waters{ top: -240upx; right: 316upx; width: 85upx; height: 150upx; background: url(../../../static/img/watering/waters.gif) no-repeat; background-size: contain; transition: all 2s;}
	
	.canvas .sumup{ position: absolute; bottom: 26upx; display: flex; flex-direction: row; justify-content: space-between; width: 100%; }
	.canvas .sumup .user{ display: flex; flex-direction: row;}
	.canvas .sumup .user .cover{ padding: 0 20upx;}
	.canvas .sumup .user .cover image{ width: 110upx; height: 110upx; border-radius: 50%; border: 1upx solid white;}
	
	.canvas .sumup .user .info{ display: flex; flex-direction: column; color: white; justify-content: flex-start; padding-top: 16upx; font-weight: bold; text-shadow: 4upx 4upx 2upx #085828;}
	.canvas .sumup .user .info .name{ font-size: 30upx; color: white;}
	.canvas .sumup .user .info .name .sex-1{ width: 25upx; height: 31upx; background: url(../../../static/img/watering/male.png) no-repeat; background-size: contain;}
	.canvas .sumup .user .info .name .sex-2{ width: 21upx; height: 34upx; background: url(../../../static/img/watering/women.png) no-repeat; background-size: contain;}
	.canvas .sumup .user .info .name view{ margin-left: 12upx; display: inline-block; vertical-align: middle;}
	.canvas .sumup .user .info .drop{ margin-top: 10upx; line-height: 32upx; font-size: 26upx;}
	.canvas .sumup .user .info .drop .icon{ position: relative; display: inline-block; margin-left: 10upx; width: 20upx; height: 30upx; vertical-align: bottom; background: url(../../../static/img/watering/water.png) no-repeat bottom right; background-size: contain;}
	.canvas .sumup .user .info .drop .plus{ position: absolute; top: 0upx; right: -12upx; font-size: 32upx; opacity: 0; color: #ffbe2d;}
	
	.canvas .sumup .speed{ display: flex; flex-direction: row; padding: 16upx 32upx; height: 100upx; align-items: flex-end;}
	.canvas .sumup .speed .progress{ display: flex; flex-direction: row; justify-content: space-between; align-items: flex-end;  width: 208upx; height: 30upx; border-radius: 14upx; background: linear-gradient(#9587ce, #7182d8);}
	.canvas .sumup .speed .speed-1{ width: 44upx; height: 50upx; margin-left: -8upx;}
	.canvas .sumup .speed .speed-2{ width: 44upx; height: 60upx;}
	.canvas .sumup .speed .speed-3{ width: 58upx; height: 68upx; margin-right: -12upx;}
	
	@keyframes cloud-1{
		0%   { opacity: .8; transform: translate3d(200%, 0, 0);}
		50%  { opacity: .6; transform: translate3d(800%, 0, 0) scale(1.3);}
		100% { opacity: .8; transform: translate3d(-120%, 0, 0);}
	}
	@keyframes cloud-2{
		0%   { opacity: .8; transform: translate3d(820%, 0, 0);}
		50%  { opacity: .6; transform: translate3d(-120%, 0, 0);}
		100% { opacity: .8; transform: translate3d(1080%, 0, 0) scale(1.3);}
	}
	@keyframes cloud-3{
		0%   { opacity: .6; transform: translate3d(-120%, 0, 0) scale(1.3);}
		100% { opacity: .8; transform: translate3d(1000%, 0, 0);}
	}
	
	@keyframes move-1{
		0%{height: 268upx;}
		10%{height: 280upx;}
		20%{height: 295upx;}
		40%{height: 275upx;}
		70%{height: 285upx;}
		100%{height: 264upx;}
	} .move-1{ animation: move-1 1s; }
	
	@keyframes move-2{
		0%{height: 385upx;}
		10%{height: 390upx;}
		20%{height: 400upx;}
		40%{height: 380upx;}
		70%{height: 395upx;}
		100%{height: 380upx;}
	} .move-2{ animation: move-2 1s; }
	
	@keyframes move-3{
		0%{height: 475upx;}
		10%{height: 490upx;}
		20%{height: 500upx;}
		40%{height: 470upx;}
		70%{height: 490upx;}
		100%{height: 460upx;}
	} .move-3{ animation: move-3 1s; }
	
	@keyframes water{
		0%  { opacity: .5;transform: translate3d(0, 0, 0);}
		20% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5);}
		30% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(-35deg);}
		80% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(-35deg);}
		100%{ opacity: 0;transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(0deg);}
	} .water{ animation: water 4s ease-in-out forwards;}
	
	@keyframes pluss{
		0%{opacity: 0.8; top: -10upx;}
		80%{opacity: 1;top: -80upx;}
		100%{opacity: 0;top: -120upx;}
	} .pluss{animation: pluss 2s;}
</style>
