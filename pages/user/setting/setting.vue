<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row">
					<view class="title">头像</view>
					<view class="right"><view class="tis">
					<image src="/static/img/face.jpg" mode="widthFix"></image>
					</view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">昵称</view>
					<view class="right"><view class="tis">大黑哥</view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">个性签名</view>
					<view class="right"><view class="tis">这人太懒了，什么都不写</view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">收货地址</view>
					<view class="right"><view class="tis"></view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">账户安全</view>
					<view class="right"><view class="tis"></view><view class="icon jiantou"></view></view>
				</view>
			</view>
			<view class="list">
				<view class="row">
					<view class="title">通知提醒</view>
					<view class="right"><view class="tis"></view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">支付设置</view>
					<view class="right"><view class="tis"></view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">通用</view>
					<view class="right"><view class="tis"></view><view class="icon jiantou"></view></view>
				</view>
			</view>
			<view class="list">
				<view class="row">
					<view class="title">版本升级</view>
					<view class="right"><view class="tis">v1.0.0</view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">清除缓存</view>
					<view class="right"><view class="tis"></view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">问题反馈</view>
					<view class="right"><view class="tis"></view><view class="icon jiantou"></view></view>
				</view>
				<view class="row">
					<view class="title">关于商城</view>
					<view class="right"><view class="tis"></view><view class="icon jiantou"></view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			showType(tbIndex){
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f3f3f3;	
}
@font-face {
	font-family: 'HMfont-home';
	src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKQAAsAAAAABjwAAAJFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApIXAE2AiQDCAsGAAQgBYRtBy4bgAUR1Ys/sq+wcQ0AKCMxzO7s4dbxlywA4w2+QAIrUAAAAABA8Hzt9zt3d9//+00Taomhi1gSkUZTzUynEiJMh45HsUimByZ4/unc4gMVRqR1SoYZi0pw3aFbm/4hO4VNh2bJ2umnZ+Q3hAuhQ3jVPHGMDgCfuHf6W0CBzAeU4160xqAuoC4OpEDHGhRZCWXcMHaBSzgOAbykUYLUXFp6sBiscQLIvJsaweacGAyLWARXzVKDnCsHqw6SWzgLvy/fpWJB4WisnI7J2nEq3tgxrP/X+31CuUBAqx1AAyWAAempDbahEUbXeIOGLNhXpsCb9w3IXrUI++usdD8AKZB3T3x3LAKAAritnkSA5KjrQSJz++JfybXOMS/f0eF7B4itVLl1SnvltSIO9qACqdWN/RMBBLqPPHZo3Z8lA8D9FYUS09MNdg8mgT/BR01GF1p6ZVR+bbsicoYKL17gH1ujvI5VJU4bFSyJEWY3qSk0lhySoZXAwUcZXFjK4aWY+tU+YqyiEeMBitgBEMJcQRHkGpowdyRDe4FDkl+4CIuGlz5xSx95YrnZkbESbKH+gWuo145RZlHmDc0UK84KQ8YLeXQeKNK8GLlijzzHjPFtShENmqmDCzgNYyQYmDw2klqR4ZBluu5NaUOdmlHNWAm2UP/ANdRrv7PMSp+/oZlixS0NNe4X8uj6hyLNe5Cusr5Xw728Mr5NKaJBM3VwAYMwRoKhfpDHRlI7wj8cMruV7itL11d0X7cLpWZY6kTsQo1Zo6lQCgA=')
		format('woff2');
}
.icon {
	font-family: 'HMfont-home' !important;
	font-size: 35upx;
	font-style: normal;
	color: #000000;
	&.jiantou {
		&:before {
			content: '\e627';
		}
	}
}
.content{
	padding-bottom: 20upx;
	.list{
		width: 96%;
		padding-left: 4%;
		background-color: #fff;
		margin-bottom: 20upx;
		.row{
			widows: 100%;
			min-height: 90upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: solid 1upx #eee;
			&:last-child{
				border-bottom: none;
			}
			.title{
				font-size: 32upx;
				color: #333;
			}
			.right{
				display: flex;
				align-items: center;
				color: #999;
				.tis{
					font-size: 26upx;
					margin-right: 5upx;
					max-height: 120upx;
					image{
						width: 100upx;
						height: 100upx;
						border-radius: 100%;
						margin: 10upx 0;
					}
				}
				.icon{
					width: 40upx;
					color: #cecece;
				}
			}
			
		}
	}
}

</style>
