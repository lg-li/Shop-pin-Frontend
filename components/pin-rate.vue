<template>
	<view class="uni-rate">
		<view class="uni-rate-icon pin-flex-sub" v-for="(star,index) in stars" :key="index" :style="{marginLeft:margin+'px'}" @click="onClick(index)">
			<i class="pin-icon" :style="'font-size:'+ size + 'rpx; color:'+ color">{{isFill === false || isFill === 'false' ? 'star_border' : 'star'}}</i>
			<view class="uni-rate-icon-on" :style="{width:star.activeWitch}">
				<i class="pin-icon" :style="'font-size:'+ size + 'rpx; color:'+ activeColor">{{star.activeWitch == '100%'?'star':'star_half'}}</i>
			</view>
		</view>
		<view class="pin-primary pin-text-xxl pin-flex-sub pin-text-right" style="padding-right: 20upx;">{{valueSync==0?'':valueSync}}</view>
	</view>
</template>

<script>
	export default {
		name: "uni-rate",
		props: {
			rateIdentifier: {
				type: [Number, String],
				default: 0
			},
			isFill: { //星星的类型，是否镂空
				type: [Boolean, String],
				default: false
			},
			color: { //星星的颜色
				type: String,
				default: '#ececec'
			},
			activeColor: { //星星选中状态颜色
				type: String,
				default: '#ffca3e'
			},
			size: { //星星的大小
				type: [Number, String],
				default: 80
			},
			value: { //当前评分
				type: [Number, String],
				default: 0
			},
			max: { //最大评分
				type: [Number, String],
				default: 5
			},
			margin: { //星星的间距
				type: [Number, String],
				default: 0
			},
			disabled: { //是否可点击
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			console.log('data')
			return {
				maxSync: this.max,
				valueSync: this.value
			}
		},
		computed: {
			stars() {
				const max = Number(this.maxSync) ? Number(this.maxSync) : 5
				const value = Number(this.valueSync) ? Number(this.valueSync) : 0
				const starList = []
				const floorValue = Math.floor(value)
				const ceilValue = Math.ceil(value)
				for (let i = 0; i < max; i++) {
					if (floorValue > i) {
						starList.push({
							activeWitch: '100%'
						})
					} else if (ceilValue - 1 === i) {
						starList.push({
							activeWitch: (value - floorValue) * 100 + '%'
						})
					} else {
						starList.push({
							activeWitch: '0'
						})
					}
				}
				return starList
			}
		},
		methods: {
			onClick(index) {
				console.log('click' + index)
				if (this.disabled === true || this.disabled === 'true') {
					return
				}
				this.valueSync = index + 1
				this.$emit('change', {
					value: this.valueSync,
					id: this.rateIdentifier
				})
			}
		}
	}
</script>

<style lang="scss">
	.uni-rate {

		min-height: 80rpx;
		line-height: 80rpx;
		display: flex;
		flex-direction: row;

		&-icon {
			position: relative;
			display: inline-block;

			&-on {
				position: absolute;
				top: 0;
				left: 0;
				overflow: hidden;
			}

			transition: 0.5s all;
		}
	}
</style>
