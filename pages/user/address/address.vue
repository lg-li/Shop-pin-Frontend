<template>
	<view>
		<full-page-empty-state v-if="addressList.length == 0" title="没有收货地址" description="点击下方创建一个吧" icon="location_on" />
		<view class="content">
			<view class="list">
				<view class="row pin-card" v-for="(row,index) in addressList" :key="index" @tap="select(row)">
					<view class="left">
						<view class="head">
							{{row.realName[0]}}
						</view>
					</view>
					<view class="center">
						<view class="name-tel">
							<view class="name">{{row.realName}}</view>
							<view class="tel">{{row.phone}}</view>
							<view class="default" v-if="row.isDefault">
								默认
							</view>
						</view>
						<view class="address">
							{{row.province}} {{row.city}} {{row.district}} {{row.detail}}
						</view>
					</view>
					<view class="right">
						<view class="icon pin-icon" @tap.stop="edit(row)">
							edit
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add">
			<view class="pin-button pin-bg-primary long-width" @tap="add">
				<i class="pin-icon">add</i> 新增地址
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
				isSelect: false,
				addressList: []
			};
		},
		onShow() {
			this.loadMyAddress()
		},
		onLoad(e) {
			if (e.type == 'select') {
				this.isSelect = true;
			}
		},
		methods: {
			edit(row) {
				uni.setStorage({
					key: 'address',
					data: row,
					success() {
						uni.navigateTo({
							url: "edit/edit?type=edit"
						})
					}
				});

			},
			add() {
				uni.navigateTo({
					url: "edit/edit?type=add"
				})
			},
			select(address) {
				//是否需要返回地址(从订单确认页跳过来选收货地址)
				if (!this.isSelect) {
					return;
				}
				uni.setStorage({
					key: 'selectedAddress',
					data: address,
					success() {
						uni.navigateBack();
					}
				})
			},
			loadMyAddress() {
				let that = this
				this.$pin.request('GET', '/commons/user/address', null,
					successData => {
						console.log(successData)
						that.addressList = successData.data.list
					},
					failData => {
						console.log(failData)
						uni.showToast({
							icon: 'none',
							title: '加载地址列表出错'
						})
					}
				)
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

	.content {
		display: flex;
	}

	.add {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		justify-content: center;
		align-items: center;
	}

	.list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;

		.row {
			display: flex;
			width: 96%;
			padding: 20upx 2%;

			.left {
				display: flex;
				width: 90upx;
				flex-shrink: 0;
				align-items: center;

				.head {
					display: flex;
					width: 70upx;
					height: 70upx;
					background: linear-gradient(to right, #ccc, #aaa);
					color: #fff;
					justify-content: center;
					align-items: center;
					border-radius: 60upx;
					font-size: 35upx;
				}
			}

			.center {
				display: flex;
				width: 100%;
				flex-wrap: wrap;

				.name-tel {
					display: flex;
					width: 100%;
					align-items: baseline;

					.name {
						font-size: 34upx;
					}

					.tel {
						margin-left: 30upx;
						font-size: 24upx;
						color: #777;
					}

					.default {
						font-size: 22upx;
						background-color: $pin-color-primary;
						color: $pin-color-foreground;
						padding: 0 18upx;
						border-radius: 24upx;
						margin-left: 20upx;
					}
				}

				.address {
					width: 100%;
					font-size: 24upx;
					align-items: baseline;
					color: #777;
				}
			}

			.right {
				display: flex;
				flex-shrink: 0;
				align-items: center;
				margin-left: 20upx;

				.icon {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80upx;
					height: 60upx;
					font-size: 40upx;
					color: $pin-color-light-foreground;
				}
			}
		}
	}
</style>
