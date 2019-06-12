<template>
	<view>
		<view class="pin-top-padding"></view>
		<view class="pin-card comments info-box">
			<view class="comment pin-solid-top pin-padding" v-for="comment in comments" :key="comment.id">
				<view class="user-info">
					<view class="face">
						<image :src="comment.avatarUrl"></image>
					</view>
					<view class="username">{{comment.nickname}}
						<text class="pin-primary pin-text-md pin-padding">{{commentTypes[comment.grade]}}</text>
					</view>
				</view>
				<view class="content">
					{{comment.content}}
				</view>
				<view class="content pin-text-right">
					{{comment.sku}}
				</view>
			</view>
		</view>

		<view class="loading-text">{{ loadingText }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentTypes: {
					0: "好评",
					1: "中评",
					2: "差评"
				},
				comments: [],
				currentPage: 1,
				lastPage: 1,
				pageSize: 10,
				loadingText: '加载中...',
				productId: null
			}
		},
		onLoad(option) {
			if (option.productId != null) {
				this.productId = option.productId
				this.loadComments()
			}
		},
		onReachBottom() {
			let len = this.productList.length;
			if (this.currentPage >= this.lastPage) {
				this.loadingText = '-到底了-';
				return false;
			}
			this.currentPage++;
			this.loadComments()
		},
		methods: {
			loadComments() {
				let that = this
				this.$pin.request('GET', '/commons/product/' + this.productId + '/comment/' + this.currentPage + '/' + this.pageSize,
					null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							that.comments = successData.data.list
							that.comments = that.comments.concat(successData.data.list)
							that.lastPage = successData.data.lastPage
							that.currentPage = successData.data.pageNum
							if (that.currentPage >= that.lastPage) {
								that.loadingText = "-到底了-"
							}
						} else {
							uni.showToast({
								title: "加载评论失败。" + successData.message
							})
						}
					},
					failData => {
						uni.showToast({
							title: "加载评论失败，请重试"
						})
					})
			}
		}
	}
</script>

<style lang="scss">
	.info-box {
		padding: 20upx 4%;
		margin-bottom: 20upx;
	}

	.comments {
		.row {
			height: 40upx;
			display: flex;
			align-items: center;
			margin: 10upx;

			.text {
				font-size: 30upx;
			}

			.arrow {
				font-size: 28upx;
				position: absolute;
				right: 4%;
				color: $pin-color-foreground;

				.show {
					display: flex;
					align-items: center;

					.icon {
						color: $pin-color-primary;
					}
				}
			}
		}

		.comment {

			.user-info {
				width: 100%;
				height: 40upx;
				display: flex;
				align-items: center;

				.face {
					width: 40upx;
					height: 40upx;
					margin-right: 8upx;

					image {
						width: 40upx;
						height: 40upx;
						border-radius: 100%;
					}
				}

				.username {
					font-size: 36upx;
					color: #999;
				}
			}

			.content {
				margin-top: 10upx;
				font-size: 26upx;
			}
		}
	}
</style>
