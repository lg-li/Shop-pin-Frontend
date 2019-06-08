<template>
	<view>
		<view class="product-list">
			<view class="product" v-for="product in productList" :key="product.id" @tap="toProduct(product.id)">
				<image mode="aspectFill" :src="product.imageUrls"></image>
				<view class="name">{{ product.name }}</view>
				<view class="info">
					<view class="price">￥{{ product.price }}</view>
					<view class="slogan">{{ product.keyword }}</view>
				</view>
			</view>
		</view>
		<view class="loading-text">{{ loadingText }}</view>
	</view>
</template>

<script>
	export default {
		props: ['dataSource'],
		data() {
			return {
				productList: [],
				loadingText: '加载中...',
				currentPage: 1,
				lastPage: 1,
				pageSize: 10
			};
		},
		onReady() {
			this.loadProducts()
		},
		methods: {
			//商品跳转
			toProduct(productId) {
				uni.showToast({
					title: '商品' + productId,
					icon: 'none'
				});
				uni.navigateTo({
					url: '../product/product-detail?productId=' + productId,
				});
			},
			loadProducts() {
				const dataSource = this.dataSource
				if (dataSource == null) {
					dataSource = '/commons/product/new/'
				}
				let that = this
				this.$pin.request('GET', dataSource + this.currentPage + '/' + this.pageSize, null,
					successData => {
						console.log(successData)
						that.productList = that.productList.concat(successData.data.list)
						that.lastPage = successData.data.lastPage
						that.currentPage = successData.data.pageNum
						if (this.currentPage >= this.lastPage) {
							this.loadingText = '-到底了-';
							return false;
						}
					},
					failData => {
						console.log(failData)
						uni.showToast({
							icon: 'none',
							title: '加载商品出错'
						})
					}
				)
			},
			loadNextPage() {
				let len = this.productList.length;
				if (this.currentPage >= this.lastPage) {
					this.loadingText = '-到底了-';
					return false;
				}
				this.currentPage++;
				this.loadProducts()
			},
		}
	}
</script>

<style lang="scss">
	.loading-text {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}

	.product-list {
		width: 92%;
		padding: 0 4% 3vw 4%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.product {
			width: 48%;
			background-color: #fff;
			margin: 0 0 15upx 0;
			border-radius: $pin-border-radius;
			box-shadow: $pin-shadow;

			image {
				width: 100%;
				border-radius: 20upx 20upx 0 0;
				min-height: 350upx;
				max-height: 350upx;
			}

			.name {
				width: 92%;
				padding: 10upx 4%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-align: justify;
				overflow: hidden;
				font-size: 30upx;
			}

			.info {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				width: 92%;
				padding: 10upx 4% 10upx 4%;

				.price {
					color: #e65339;
					font-size: 30upx;
					font-weight: 600;
				}

				.slogan {
					color: #807c87;
					font-size: 24upx;
				}
			}
		}
	}
</style>
