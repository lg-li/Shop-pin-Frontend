<template>
	<view>
		<view class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="target" v-for="(target,index) in orderbyList" @tap="select(index)" :key="index" :class="[target.selected?'on':'']">
				{{target.text}}
				<view v-if="target.orderbyicon" class="icon pin-icon"> {{target.orderbyicon[target.orderby]}} </view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<view class="pin-top-padding"></view>
		<!-- 商品列表 -->
		<pageable-product-list :product-data-source="productDataSource" ref="pageableProductList"/>
	</view>
</template>

<script>
	import PageableProductList from '../../components/pageable-product-list.vue'
	export default {
		components: {
			"pageable-product-list": PageableProductList
		},
		data() {
			return {
				productDataSource: '',
				headerTop: "0px",
				headerPosition: "fixed",
				orderbyList: [{
						text: "销量",
						selected: true,
						orderbyicon: false,
						orderby: 0
					},
					{
						text: "价格",
						selected: false,
						orderbyicon: ['arrow_upward', 'arrow_downward'],
						orderby: 0
					},
					{
						text: "好评",
						selected: false,
						orderbyicon: false,
						orderby: 0
					}
				],
				orderby: "sheng"
			};
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			if (option.categoryId != null) {
				this.categoryId = option.categoryId; //打印出上个页面传递的参数。
				uni.setNavigationBarTitle({
					title: option.categoryName
				});
				this.productDataSource = "/commons/product/by-category/" + option.categoryId + "/"
			}

			//兼容H5下排序栏位置
			// #ifdef H5
			//定时器方式循环获取高度为止，这么写的原因是onLoad中head未必已经渲染出来。
			let Timer = setInterval(() => {
				let uniHead = document.getElementsByTagName('uni-page-head');
				if (uniHead.length > 0) {
					this.headerTop = uniHead[0].offsetHeight + 'px';
					clearInterval(Timer); //清除定时器
				}
			}, 1);
			// #endif
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(() => {
				this.reload();
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			this.$refs.pageableProductList.loadNextPage()
		},
		methods: {
			reload() {
				console.log("reload");
			},
			//排序类型
			select(index) {
				let tmpTis = this.orderbyList[index].text + "排序 "
				if (this.orderbyList[index].orderbyicon) {
					let type = this.orderbyList[index].orderby == 0 ? '升序' : '降序';
					if (this.orderbyList[index].selected) {
						type = this.orderbyList[index].orderby == 0 ? '降序' : '升序';
						this.orderbyList[index].orderby = this.orderbyList[index].orderby == 0 ? 1 : 0;
					}
					tmpTis += type
				}
				this.orderbyList[index].selected = true;
				let len = this.orderbyList.length;
				for (let i = 0; i < len; i++) {
					if (i != index) {
						this.orderbyList[i].selected = false;
					}
				}
				uni.showToast({
					title: tmpTis,
					icon: "none"
				});
			}
		}

	}
</script>

<style lang="scss">
	
	.place {
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	
	
	.icon {
		font-size: 26upx;
		font-style: normal;
	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: $pin-color-primary;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: $pin-color-foreground;

			&.on {
				color: $pin-color-foreground;
				border-bottom: 5upx solid $pin-color-foreground;
				font-weight: 700;
				transition: all 0.2s;
			}


		}
	}

	.place {
		height: 100upx;
	}
	
</style>
