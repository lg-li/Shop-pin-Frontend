<template>
	<view>
		<view class="tabr" :style="{top:headerTop}">
			<view :class="{on:typeClass=='product'}" @tap="switchType('product')">商品({{productList.length}})</view>
			<view :class="{on:typeClass=='store'}" @tap="switchType('store')">店铺({{storeList.length}})</view>
			<view class="border" :class="typeClass"></view>
		</view>
		<view class="place"></view>

		<view class="list">
			<!-- 收藏列表 -->
			<view class="sub-list product" :class="subState">
				<view class="tis" v-if="productList.length==0">
					<full-page-empty-state title="收藏列表为空" description="到处逛逛并把商品加入收藏吧" />
				</view>
				<view class="row pin-card" v-for="(row,index) in productList" :key="index">
					<!-- 删除按钮 -->
					<view class="menu" @tap.stop="deleteCoupon(row.id,productList)">
						<view class="icon pin-icon">delete</view>
					</view>
					<!-- content -->
					<view class="carrier" :class="[typeClass=='product'?theIndex==index?'open':oldIndex==index?'close':'':'']"
					 @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
						<view class="product-info" @tap="toproduct(row)">
							<view class="img">
								<image :src="row.product.imageUrls"></image>
							</view>
							<view class="info">
								<view class="title">{{row.product.name}}</view>
								<view class="price-number">
									<view class="keep-num">
										905人收藏
									</view>
									<view class="price">￥{{row.product.price}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="sub-list store" :class="subState">
				<view class="tis" v-if="storeList.length==0">没有数据~</view>
				<view class="row pin-card" v-for="(row,index) in storeList" :key="index">
					<!-- 删除按钮 -->
					<view class="menu" @tap.stop="deleteCoupon(row.id,storeList)">
						<view class="icon pin-icon">delete</view>
					</view>
					<!-- content -->
					<view class="carrier" :class="[typeClass=='store'?theIndex==index?'open':oldIndex==index?'close':'':'']"
					 @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
						<view class="left">
							<image :src="row.store.logoUrl"></image>
						</view>
						<view class="right">
							<view>
								{{row.store.name}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				productList: [],
				storeList: [],
				headerTop: 0,
				//控制滑动效果
				typeClass: 'product',
				subState: '',
				theIndex: null,
				oldIndex: null,
				isStop: false
			}
		},
		onPageScroll(e) {
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad() {
			//兼容H5下排序栏位置
			// #ifdef H5
			//定时器方式循环获取高度为止，这么写的原因是onLoad中head未必已经渲染出来。
			let Timer = setInterval(() => {
				let uniHead = document.getElementsByTagName('uni-page-head');
				if (uniHead.length > 0) {
					this.headerTop = uniHead[0].offsetHeight + 'px';
					clearInterval(Timer); //清除定时器
				}
			}, 1);
			// #endif
			this.loadProductCollection()
			this.loadStoreCollection()
		},
		methods: {
			switchType(type) {
				if (this.typeClass == type) {
					return;
				}
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				})
				this.typeClass = type;
				this.subState = this.typeClass == '' ? '' : 'show' + type;
				setTimeout(() => {
					this.oldIndex = null;
					this.theIndex = null;
					this.subState = this.typeClass == 'product' ? '' : this.subState;
				}, 200)
			},
			//控制左滑删除效果-begin
			touchStart(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			touchMove(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				if (this.isStop || Math.abs(moveX) < 5) {
					return;
				}
				if (Math.abs(moveY) > Math.abs(moveX)) {
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}

				if (moveX < 0) {
					this.theIndex = index;
					this.isStop = true;
				} else if (moveX > 0) {
					if (this.theIndex != null && this.oldIndex == this.theIndex) {
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(() => {
							this.oldIndex = null;
						}, 150)
					}
				}
			},

			touchEnd(index, $event) {
				//解除禁止触发状态
				this.isStop = false;
			},

			//删除商品
			deleteCoupon(id, List) {
				let len = List.length;
				for (let i = 0; i < len; i++) {
					if (id == List[i].id) {
						List.splice(i, 1);
						break;
					}
				}
				this.oldIndex = null;
				this.theIndex = null;
			},

			discard() {
				//丢弃
			},
			loadProductCollection() {
				let that = this
				this.$pin.request('GET', '/commons/user/product-collection', null,
					successData => {
						console.log(successData)
						that.productList = successData.data.list
					},
					failData => {
						console.log(failData)
						uni.showToast({
							icon: 'none',
							title: '加载商品收藏列表出错'
						})
					}
				)
			},
			loadStoreCollection() {
				let that = this
				this.$pin.request('GET', '/commons/user/store-collection', null,
					successData => {
						console.log(successData)
						that.storeList = successData.data.list
					},
					failData => {
						console.log(failData)
						uni.showToast({
							icon: 'none',
							title: '加载店铺收藏列表出错'
						})
					}
				)
			}
		}
	}
</script>
<style lang="scss">
	view {
		display: flex;
		flex-wrap: wrap;
	}
	
	.place {
		min-height: 80upx;
		width: 100%;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	
	.icon {
		font-size: 60upx;
		font-style: normal;
		color: #000000;
	}

	.hidden {
		display: none !important;
	}
	
	.tabr {
		background-color: $pin-color-primary;
		width: 94%;
		height: 95upx;
		padding: 0 3%;
		position: fixed;
		top: 0;
		z-index: 10;

		view {
			width: 50%;
			height: 90upx;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: $pin-color-foreground;
		}

		.on {
			color: $pin-color-foreground;
		}

		.border {
			height: 5upx;
			background-color: $pin-color-foreground;
			transition: all .3s ease-out;

			&.store {
				transform: translate3d(100%, 0, 0);
			}
		}

	}

	.list {
		width: 100%;
		display: block;
	}

	@keyframes showproduct {
		0% {
			transform: translateX(-100%);
		}

		100% {
			transform: translateX(0);
		}
	}

	@keyframes showstore {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	.sub-list {
		&.store {
			position: absolute;
			top: 0;
			left: 100%;
			display: none;
		}

		&.showproduct {
			display: flex;
			animation: showproduct 0.20s linear both;
		}

		&.showstore {
			display: flex;
			animation: showstore 0.20s linear both;
		}

		width: 100%;
		padding: 20upx 0 120upx 0;

		.tis {
			width: 100%;
			height: 60upx;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
		}

		&.store {
			.row {
				height: 20vw;

				.left {
					width: 20vw;
					height: 20vw;
					align-items: center;

					image {
						width: 20vw;
						height: 20vw;
						border-radius: $pin-border-radius;
					}
				}

				.right {
					padding-left: 20upx;
					height: 20vw;
					align-items: center;
					font-size: 32upx;
				}
			}
		}

		.row {
			width: 100%;
			height: 30vw;
			align-items: center;
			position: relative;
			overflow: hidden;
			border-bottom: solid 1upx #dedede;

			.menu {
				.icon {
					color: #fff;
					font-size: 50upx;
				}

				position: absolute;
				width: 28%;
				height: 100%;
				right: 0;
				justify-content: center;
				align-items: center;
				background-color: red;
				color: #fff;
				z-index: 2;
			}

			.carrier {
				@keyframes showMenu {
					0% {
						transform: translateX(0);
					}

					100% {
						transform: translateX(-28%);
					}
				}

				@keyframes closeMenu {
					0% {
						transform: translateX(-28%);
					}

					100% {
						transform: translateX(0);
					}
				}

				&.open {
					animation: showMenu 0.25s linear both;
				}

				&.close {
					animation: closeMenu 0.15s linear both;
				}

				background-color: #fff;

				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				flex-wrap: nowrap;

				.product-info {
					width: calc(100% - 40upx);
					flex-wrap: nowrap;

					.img {
						width: 30vw;
						max-height: 30vw;
						border-radius: 10upx;
						overflow: hidden;
						flex-shrink: 0;
						margin-right: 20upx;

						image {
							width: 30vw;
							height: 30vw;
						}
					}

					.info {
						padding: 20upx;
						width: 100%;
						max-height: calc(30vw - 40upx);
						overflow: hidden;
						flex-wrap: wrap;
						align-content: space-between;
						position: relative;

						.title {
							width: 100%;
							font-size: 36upx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}

						.price-number {
							width: 100%;
							justify-content: space-between;
							align-items: baseline;

							.keep-num {
								font-size: 26upx;
								color: #999;
							}

							.price {
								font-size: 30upx;
								color: #f06c7a;
							}
						}
					}
				}
			}

		}
	}
</style>
