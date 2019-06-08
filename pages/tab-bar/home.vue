<template>
	<view>
		<header-bar :isSearchBar="true" />
		<!-- 轮播图 -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper circular="true" autoplay="true" @change="swiperChange">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image :src="swiper.img" @tap="toSwiper(swiper)"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view class="dots" v-for="(swiper, index) in swiperList" :class="[currentSwiper >= index ? 'on' : '']" :key="index"></view>
				</view>
			</view>
		</view>
		<!-- 分类列表 -->
		<view class="category-list">
			<view class="category" v-for="(row, index) in categoryList" :key="index" @tap="toCategory(row)">
				<view class="img">
					<image :src="row.img"></image>
				</view>
				<view class="text">{{ row.name }}</view>
			</view>
		</view>
		<!-- 广告图 -->
		<!-- <view class="banner">
			<image src="../../static/img/banner.jpg"></image>
		</view> -->
		<!-- 活动区 -->
		<card-title icon="toys" text="拼团活动" sub-text="Group Promotion"/>
		<view class="promotion">
			<view class="list">
				<view class="column" v-for="(row, index) in Promotion" @tap="toPromotion(row)" :key="index">
					<view class="top">
						<view class="title">{{ row.title }}</view>
						<view class="countdown" v-if="row.countdown">
							<view>{{ row.countdown.h }}</view>
							:
							<view>{{ row.countdown.m }}</view>
							:
							<view>{{ row.countdown.s }}</view>
						</view>
					</view>
					<view class="left">
						<view class="ad">{{ row.ad }}</view>
						<view class="into">点击进入</view>
					</view>
					<view class="right">
						<image :src="row.img"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<card-title icon="whatshot" text="最热商品" sub-text="Hot Products"/>
		<pageable-product-list data-source="/commons/product/new/" ref="pageableProductList"/>

	</view>
</template>

<script>
	import HeaderBar from '../../components/header-bar.vue'
	import CardTitle from '../../components/card-title.vue'
	import PageableProductList from '../../components/pageable-product-list.vue'
	export default {
		components: {
			"header-bar": HeaderBar,
			"card-title": CardTitle,
			"pageable-product-list": PageableProductList
		},
		data() {
			return {
				currentSwiper: 0,
				// 轮播图片
				swiperList: [{
						id: 1,
						src: 'url1',
						img: '../../static/img/1.jpg'
					},
					{
						id: 2,
						src: 'url2',
						img: '../../static/img/2.jpg'
					},
					{
						id: 3,
						src: 'url3',
						img: '../../static/img/3.jpg'
					}
				],
				// 分类菜单
				categoryList: [{
						id: 1,
						name: '办公',
						img: '../../static/img/category/1.png'
					},
					{
						id: 2,
						name: '家电',
						img: '../../static/img/category/2.png'
					},
					{
						id: 3,
						name: '服饰',
						img: '../../static/img/category/3.png'
					},
					{
						id: 4,
						name: '日用',
						img: '../../static/img/category/4.png'
					},
					{
						id: 5,
						name: '蔬果',
						img: '../../static/img/category/5.png'
					},
					{
						id: 6,
						name: '运动',
						img: '../../static/img/category/6.png'
					},
					{
						id: 7,
						name: '书籍',
						img: '../../static/img/category/7.png'
					},
					{
						id: 8,
						name: '文具',
						img: '../../static/img/category/8.png'
					}
				],
				Promotion: [],
				//猜你喜欢列表
				loadingText: '正在加载...'
			};
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			this.$refs.pageableProductList.loadNextPage()
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			//开启定时器
			this.Timer();
			//加载活动专区
			this.loadPromotion();
		},
		methods: {
			//加载Promotion 并设定倒计时,,实际应用中应该是ajax加载此数据。
			loadPromotion() {
				let cutTime = new Date();
				let yy = cutTime.getFullYear(),
					mm = cutTime.getMonth() + 1,
					dd = cutTime.getDate();
				let tmpcountdown = yy + '/' + mm + '/' + dd + ' 23:59:59';
				let tmpPromotion = [{
						title: '整点秒杀',
						ad: '整天秒杀专区',
						img: '../../static/img/s1.jpg',
						countdown: false
					},
					{
						title: '限时抢购',
						ad: '每天23点上线',
						img: '../../static/img/s2.jpg',
						countdown: tmpcountdown
					} //countdown为目标时间，程序会获取当前时间倒数
				];
				//检查倒计时
				for (let i = 0; i < tmpPromotion.length; i++) {
					let row = tmpPromotion[i];
					if (row.countdown) {
						let h = '00',
							m = '00',
							s = '00';
						let currentTime = new Date();
						let cutoffTime = new Date(tmpcountdown);
						if (!(currentTime >= cutoffTime)) {
							let countTime = parseInt(
								(cutoffTime.getTime() - currentTime.getTime()) / 1000
							);
							h = parseInt(countTime / 3600);
							m = parseInt((countTime % 3600) / 60);
							s = countTime % 60;
							h = h < 10 ? '0' + h : h;
							m = m < 10 ? '0' + m : m;
							s = s < 10 ? '0' + s : s;
						}
						tmpPromotion[i].countdown = {
							h: h,
							m: m,
							s: s
						};
					}
				}
				this.Promotion = tmpPromotion;
			},
			//定时器
			Timer() {
				setInterval(() => {
					if (this.Promotion.length > 0) {
						for (let i = 0; i < this.Promotion.length; i++) {
							let row = this.Promotion[i];
							if (row.countdown) {
								if (
									!(
										row.countdown.h == 0 &&
										row.countdown.m == 0 &&
										row.countdown.s == 0
									)
								) {
									if (row.countdown.s > 0) {
										row.countdown.s--;
										row.countdown.s =
											row.countdown.s < 10 ?
											'0' + row.countdown.s :
											row.countdown.s;
									} else if (row.countdown.m > 0) {
										row.countdown.m--;
										row.countdown.m =
											row.countdown.m < 10 ?
											'0' + row.countdown.m :
											row.countdown.m;
										row.countdown.s = 59;
									} else if (row.countdown.h > 0) {
										row.countdown.h--;
										row.countdown.h =
											row.countdown.h < 10 ?
											'0' + row.countdown.h :
											row.countdown.h;
										row.countdown.m = 59;
										row.countdown.s = 59;
									}
									this.Promotion[i].countdown = row.countdown;
								}
							}
						}
					}
				}, 1000);
			},
			//轮播图跳转
			toSwiper(e) {
				uni.showToast({
					title: e.src,
					icon: 'none'
				});
			},
			//分类跳转
			toCategory(e) {
				//uni.showToast({title: e.name,icon:"none"});
				uni.navigateTo({
					url: '../product/product-list?cid=' + e.id + '&name=' + e.name
				});
			},
			//推荐商品跳转
			toPromotion(e) {
				uni.showToast({
					title: e.title,
					icon: 'none'
				});
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			}
		}
	};
</script>
<style lang="scss">
	
	page {
		position: relative;
	}

	.swiper {
		width: 100%;
		margin-top: 10upx;
		display: flex;
		justify-content: center;

		.swiper-box {
			width: 92%;
			height: 30.7vw;
			margin-top: 20upx;
			overflow: hidden;
			border-radius: $pin-border-radius;
			box-shadow: $pin-shadow;
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 30.7vw;

				swiper-item {
					image {
						width: 100%;
						height: 30.7vw;
					}
				}
			}

			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;

				.dots {
					width: 100%;

					&.on {
						background-color: rgba(255, 255, 255, 1);
					}
				}
			}
		}
	}

	.category-list {
		width: 92%;
		margin: 0 4%;
		padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.category {
			width: 25%;
			margin-top: 50upx;
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 9vw;
					height: 9vw;
				}
			}

			.text {
				margin-top: 16upx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 24upx;
				color: #3c3c3c;
			}
		}
	}

	.banner {
		width: 92%;
		margin: 40upx 4%;

		image {
			width: 100%;
			height: 20vw;
			border-radius: $pin-border-radius;
			box-shadow: $pin-shadow;
		}
	}

	.promotion {
		width: 92%;
		margin: 0 4%;

		.text {
			width: 100%;
			height: 60upx;
			font-size: 34upx;
			font-weight: 600;
			margin-top: -10upx;
		}

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.column {
				width: 43%;
				padding: 15upx 3%;
				background-color: #ffffff;
				border-radius: $pin-border-radius;
				box-shadow: $pin-shadow;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.top {
					width: 100%;
					height: 40upx;
					display: flex;
					align-items: center;
					margin-bottom: 5upx;

					.title {
						font-size: 30upx;
					}

					.countdown {
						margin-left: 20upx;
						display: flex;
						height: 40upx;
						display: flex;
						align-items: center;
						font-size: 20upx;

						view {
							height: 30upx;
							background-color: $pin-color-primary;
							display: flex;
							justify-content: center;
							align-items: center;
							color: $pin-color-foreground;
							border-radius: $pin-border-radius;
							margin: 0 4upx;
							padding: 0 5upx;
						}
					}
				}

				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.ad {
						margin-top: 5upx;
						width: 100%;
						font-size: 22upx;
						color: $pin-color-light-foreground;
					}

					.into {
						width: 100%;
						font-size: 24upx;
						color: $pin-color-light-foreground;
						margin-bottom: 5upx;
					}
				}

				.right {
					width: 18.86vw;
					height: 18.86vw;

					image {
						width: 18.86vw;
						height: 18.86vw;
					}
				}
			}
		}
	}

</style>
