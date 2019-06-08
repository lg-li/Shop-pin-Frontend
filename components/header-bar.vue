<template>
	<view>
		<!-- 状态栏 -->
		<!-- <view class="status" :style="{ position: headerPosition,top:statusTop,opacity: afterHeaderOpacity}"></view> -->
		<!-- 顶部导航栏 -->
		<block v-if="isSearchBar">
		<!-- 搜索栏 -->
		<view class="header" :style="{ position: headerPosition,top:headerTop,opacity: afterHeaderOpacity }">
			<!-- 定位城市 -->
			<view class="addr">
				<i class="icon pin-icon">location_on</i>
				{{ city }}
			</view>
			<!-- 搜索框 -->
			<view class="input-box">
				<input placeholder="默认关键字" placeholder-style="color:#c0c0c0;" @tap="toSearch()" />
				<view class="icon pin-icon">search</view>
			</view>
			<!-- 右侧图标按钮 -->
			<view class="icon-btn">
				<view class="icon pin-icon" @tap="toMsg">notifications</view>
			</view>
		</view>
		<!-- 占位 -->
		</block>
		<block v-else>
			<!-- 普通顶栏栏 -->
			<view class="header" :style="{ position: headerPosition,top:headerTop,opacity: afterHeaderOpacity }">
				<view @click="goBack">返回</view>
				<view class="title"> {{title}} </view>
			</view>
		</block>
		<view class="place"></view>
	</view>
</template>

<script>
	//高德SDK
	import amap from '@/common/SDK/amap-wx.js';
	export default {
		props: ['isSearchBar', 'hasBack', 'title'],
		data() {
			return {
				afterHeaderOpacity: 1, //不透明度
				headerPosition: 'fixed',
				headerTop: 0,
				statusTop: null,
				city: '--'
			};
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			this.amapPlugin = new amap.AMapWX({
				//高德地图KEY，随时失效，请务必替换为自己的KEY，参考：http://ask.dcloud.net.cn/article/35070
				key: '7c235a9ac4e25e482614c6b8eac6fd8e'
			});
			//定位地址
			this.amapPlugin.getRegeo({
				success: data => {
					this.city = data[0].regeocodeData.addressComponent.city.replace(/市/g, ''); //把"市"去掉
				},
				fail: data => {
					console.log(data)
				}
			});
		},
		methods: {
			//消息列表
			toMsg() {
				uni.navigateTo({
					url: '/pages/message/messages'
				})
			},
			//搜索跳转
			toSearch() {
				uni.showToast({
					title: '建议跳转到新页面做搜索功能'
				});
			},
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">

	.icon {
		font-size: 60upx;
		font-style: normal;
		color: #000000;
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */

	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: $pin-color-primary;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */

		.addr {
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 28upx;
			color: $pin-color-foreground;

			.icon {
				height: 60upx;
				margin-right: 5upx;
				display: flex;
				align-items: center;
				font-size: 42upx;
				color: $pin-color-foreground;
			}
		}

		.input-box {
			width: 100%;
			height: 60upx;
			background-color: #f5f5f5;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;

			.icon {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 34upx;
				color: #c0c0c0;
			}

			input {
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}

		.icon-btn {
			width: 60upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;

			.icon {
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
</style>
