<template>
	<view>
		<header-bar :isSearchBar="true" />
		<view class="category-list">
			<!-- 左侧分类导航 -->
			<scroll-view scroll-y="true" class="left">
				<view class="row" v-for="(category,index) in categoryList" :key="category.id" :class="[index==showCategoryIndex?'on':'']"
				 @tap="showCategory(index)">
					<view class="text">
						<view class="block"></view>
						{{category.categoryName}}
					</view>
				</view>
			</scroll-view>
			<!-- 右侧子导航 -->
			<scroll-view scroll-y="true" class="right">
				<view class="category" v-for="(category,index) in categoryList" :key="category.id" v-show="index==showCategoryIndex">
					<!-- <view class="banner">
						<image :src="category.banner"></image>
					</view> -->
					<view class="list">
						<view class="box" v-for="(box,i) in category.subCategories" :key="i" @tap="toCategory(box)">
							<image :src="box.imageUrl"></image>
							<view class="text">{{box.categoryName}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import HeaderBar from '../../components/header-bar.vue'
	export default {
		components: {
			"header-bar": HeaderBar
		},
		data() {
			return {
				showCategoryIndex: 0,
				headerPosition: "fixed",
				//分类列表
				categoryList: []
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		onLoad() {
			this.loadCategories()
		},
		methods: {
			//分类切换显示
			showCategory(index) {
				this.showCategoryIndex = index;
			},
			toCategory(e) {
				//uni.showToast({title: e.name,icon:"none"});
				uni.navigateTo({
					url: '../product/product-list?categoryId=' + e.id + '&categoryName=' + e.categoryName
				});
			},
			loadCategories() {
				let that = this
				this.$pin.request('GET', '/commons/product/category/all', null,
					successData => {
						that.categoryList = successData.data.list
					},
					failData => {
						console.log(failData)
						uni.showToast({
							icon: 'none',
							title: '加载商品分类时出错'
						})
					}
				)
			}
		}
	}
</script>
<style lang="scss">

	.category-list {
		width: 100%;
		background-color: #fff;
		display: flex;

		.left,
		.right {
			position: absolute;

			top: 100upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			bottom: 0upx;
		}

		.left {
			width: 24%;
			left: 0upx;
			background-color: #f2f2f2;

			.row {
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;

				.text {
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #3c3c3c;

					.block {
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}

				&.on {
					transition: all 0.5s;
					height: 100upx;
					background-color: #fff;
					.text {
						font-size: 30upx;
						font-weight: 600;
						color: #2d2d2d;
						.block {
							width: 10upx;
							height: 80%;
							top: 10%;
							background-color: $pin-color-primary;
						}
					}
				}
			}
		}

		.right {
			width: 76%;
			left: 24%;

			.category {
				width: 94%;
				padding: 20upx 3%;

				.banner {
					width: 100%;
					height: 24.262vw;
					border-radius: 10upx;
					overflow: hidden;
					box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.3);

					image {
						width: 100%;
						height: 24.262vw;
					}
				}

				.list {
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;

					.box {
						width: calc(71.44vw / 3);
						margin-bottom: 30upx;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;

						image {
							border-radius: $pin-border-radius;
							width: 60%;
							height: calc(71.44vw / 3 * 0.6);
						}

						.text {
							margin-top: 5upx;
							width: 100%;
							display: flex;
							justify-content: center;
							font-size: 26upx;
						}
					}
				}
			}
		}
	}
</style>
