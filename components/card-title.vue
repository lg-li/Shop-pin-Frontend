<template>
	<view style='margin-top: 30rpx; margin-bottom: 30rpx; padding-left: 30rpx; padding-right: 30rpx; width: 100%; max-width: 100vw; height: 50rpx;'>
  <view style='float:left; font-size: 45rpx; color: #66666; z-index: 999'><i class="pin-icon">{{icon}}</i> {{text}}</view>
  <view style='float:right; font-size: 45rpx; color: #efefef; z-index: 0'>{{subText}}</view>
</view>
</template>

<script>
	export default {
		props: ['text', 'subText', 'icon'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
</style>
