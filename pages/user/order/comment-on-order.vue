<template>
	<view>
		<view class="pin-top-padding"></view>
		<view class="pin-card" v-for="(comment,index) in comments" :key="comment.id">
			<view class="pin-list-item">
				<view class="list-left">
					<image class="pin-avatar" :src="comment.orderItem.productAttributeValue.imageUrl"></image>
				</view>
				<view class="list-right">
					<view class="list-header">
						<view class="list-title">
							{{comment.orderItem.product.name}}
						</view>
						<view class="list-sub-title">
							<i class="pin-icon">comment</i> 评价
						</view>
					</view>
					<view class="list-detail">
						{{comment.orderItem.productAttributeValue.sku}}
					</view>
				</view>
			</view>

			<view class="pin-margin pin-padding pin-text-md pin-shadow">
				<view>
					<textarea v-model="comments[index].content" auto-height="true" placeholder="对其他客户有参考意义的内容..."></textarea>
				</view>
			</view>

			<view class="pin-padding">
				<view>
					<pin-checkbox style="width: 100%; height: auto;" :index-identifier="index" :list="commentTypes" @change="onCommentTypeChange"></pin-checkbox>
				</view>
				<view>
					<text class="pin-text-md"><i class="pin-icon">store</i> 店铺服务评分</text>
					<pin-rate :rate-identifier="index" max="5" :value="comment.serviceScore" @change="onServiceRateChange"></pin-rate>
				</view>
				<view>
					<text class="pin-text-md"><i class="pin-icon">assessment</i> 产品服务评分</text>
					<pin-rate :rate-identifier="index" max="5" :value="comment.productScore" @change="onProductRateChange"></pin-rate>
				</view>
			</view>
		</view>

		<view class="pin-card">
			<view class="pin-button pin-bg-primary" @tap="submitComments">
				<i class="pin-icon">done</i> 提交评价
			</view>
		</view>
	</view>
</template>

<script>
	import pinRate from "../../../components/pin-rate.vue"
	import pinCheckbox from "../../../components/pin-checkbox/pin-checkbox.vue"
	export default {
		components: {
			pinRate
		},
		data() {
			return {
				orderIndividual: {},
				comments: [],
				commentTypes: [{ // 开始日期
					name: '好评',
					value: 0,
					checked: 1
				}, {
					name: '中评',
					value: 1,
					checked: 0
				}, {
					name: '差评',
					value: 2,
					checked: 0
				}]
			}
		},
		onLoad() {
			this.orderIndividual = uni.getStorageSync("individual-order-detail")
			this.prepareComments()
		},
		methods: {
			prepareComments() {
				let orderItems = this.orderIndividual.orderItems
				const orderIndividualId = this.orderIndividual.id
				for (let i = 0; i < orderItems.length; i++) {
					this.comments.push({
						orderIndividualId: orderIndividualId,
						orderItem: orderItems[i],
						skuId: orderItems[i].productAttributeValue.id,
						serviceScore: 0,
						productScore: 0,
						grade: 0,
						content: '',
						imagesUrls: []
					})
				}
			},
			onCommentTypeChange(e) {
				console.log(e.value + '-' + e.id)
				this.comments[e.id].grade = e.value
			},
			onServiceRateChange(e) {
				console.log(e.value + '-' + e.id)
				this.comments[e.id].serviceScore = e.value
				this.$forceUpdate()
			},
			onProductRateChange(e) {
				console.log(e.value + '-' + e.id)
				this.comments[e.id].productScore = e.value
				this.$forceUpdate()
			},
			submitComments() {
				let that = this
				this.$pin.request('POST', '/commons/user/add-comment', {
						comments: this.comments
					},
					successData => {
						if (successData.code == that.$pin.code.success) {
							uni.showToast({
								title: '评价成功',
								duration: 1000
							})
							setTimeout(() => {
								uni.navigateBack(-1)
							}, 1000)
						} else {
							uni.showToast({
								title: '此订单暂时无法评论。' + successData.message,
								icon: 'none'
							})
						}
					},
					failSuccess => {
						uni.showToast({
							title: '此订单暂时无法评论，请重试。',
							icon: 'none'
						})
					})
			}
		}
	}
</script>

<style>

</style>
