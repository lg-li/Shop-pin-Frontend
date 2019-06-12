<template>
	<view>
		<view class="pin-top-padding"></view>
		<view class="pin-card">
			<view class="pin-list-item">
				<view class="list-left">
					<image class="pin-avatar" :src="store.logoUrl"></image>
				</view>
				<view class="list-right">
					<view class="list-header">
						<view class="list-title">
							{{store.name}}
						</view>
					</view>
					<view class="list-detail">
						{{store.description}}
					</view>
				</view>
			</view>
		</view>

		<!-- 商品列表 -->
		<pageable-product-list :product-data-source="dataSource" ref="pageableProductList" />
	</view>
</template>

<script>
	import PageableProductList from '../../../components/pageable-product-list.vue'
	export default {
		components: {
			"pageable-product-list": PageableProductList
		},
		data() {
			return {
				storeId: null,
				store: {},
				products: [],
				dataSource: '/commons/store/'
			}
		},
		onLoad(options) {
			this.storeId = options.storeId
			this.dataSource = '/commons/store/' + this.storeId + '/products/'
			this.loadStoreInfo(1)
		},
		onReachBottom() {
			this.$refs.pageableProductList.loadNextPage()
		},
		methods: {
			// 加载商店基本信息
			loadStoreInfo(storeId) {
				let that = this
				this.$pin.request('GET', '/commons/store/' + storeId, null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							that.store = successData.data
						} else {
							uni.showToast({
								title: '加载商品信息时出现错误'
							})
						}
					},
					failData => {
						uni.showToast({
							title: '加载商品信息时出现错误，请重试'
						})
					})
			}
		}
	}
</script>

<style>

</style>
