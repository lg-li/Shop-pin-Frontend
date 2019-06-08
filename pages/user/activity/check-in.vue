<template>
	<view>
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
				<view class="pin-button pin-bg-primary" @click="doCheckIn()"><i class="pin-icon">check</i> 签到</view>
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
				totalCheckInDays: 0,
				continuousCheckInDays: 0
			}
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
							that.loadMyCreditsRecord()
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
			loadMyCreditsRecord() {
				let that = this
				this.$pin.request('GET', '/commons/user/credit-record', null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							for (let i = 0; i < successData.data.creditHistory.length; i++) {
								successData.data.creditHistory[i].createTime = that.$pin.getFriendlyTimeText(successData.data.creditHistory[i]
									.createTime)
							}
							that.creditHistory = successData.data.creditHistory
							that.credit = successData.data.credit
							that.totalCheckInDays = successData.data.totalCheckInDays
							that.continuousCheckInDays = successData.data.continuousCheckInDays
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
			}
		}
	}
</script>

<style>

</style>
