<template>
	<view>
		<view class="empty-state-block" :class="radius?'pin-radius':''">
		</view>
		<view class="empty-state-icon">
			<view class="empty-state-icon-image">
				<i class="pin-icon empty-state-icon-inside">{{icon == null?'signal_cellular_no_sim':icon}}</i>
			</view>
		</view>
		<view class="empty-state-title">
			{{title}}
		</view>
		<view class="empty-state-description">
			{{description}}
		</view>
	</view>
</template>

<script>
	export default {
		props: ['title', 'description', 'icon', 'radius'],
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss">
	.empty-state-block {
		width: 100%;
		height: 30vh;
		background-color: $pin-color-primary !important;
		display: flex;
		justify-content: center;
	}

	.empty-state-icon {
		width: 60vw;
		height: 60vw;
		margin: -35vw auto 0 auto;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		box-shadow: $pin-shadow;
	}
	
	.empty-state-icon-image {
		width: 55vw;
		height: 55vw;
		border-radius: 50%;
		background: $pin-color-primary;
		text-align: center;
		line-height: 50vw;
	}
	
	.empty-state-icon-inside {
		font-size: 32vw;
		vertical-align: middle;
		color: $pin-color-foreground;
	}

	.empty-state-title {
		width: 100%;
		margin-top: 50upx;
		display: flex;
		justify-content: center;
		font-size: 48upx;
		color: $pin-color-light-foreground;
	}
	.empty-state-description {
		width: 100%;
		margin-top: 10upx;
		display: flex;
		justify-content: center;
		font-size: 28upx;
		color: $pin-color-light-foreground;
	}
</style>
