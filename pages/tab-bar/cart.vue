<template>
	<view>
		<view v-if="orderItemList == null || orderItemList.length==0">
			<full-page-empty-state title="购物车为空" description="到处逛逛并把他们加入购物车吧" icon="shopping_cart"/>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list" v-else>
			<view class="pin-card" v-for="itemsInStore in orderItemMapByStore" :key="itemsInStore">
				<view class="pin-card-title">
					<view class="checkbox-box" @tap="allSelectByStore(itemsInStore.storeId)">
						<view class="checkbox">
							<view :class="[selectedStoreIdMap[itemsInStore.storeId]?'on':'']"></view>
						</view>
						<view class="text"><i class="pin-icon">store</i> {{itemsInStore.storeName}}</view>
					</view>

				</view>
				<view class="row" v-for="(orderItem,index) in itemsInStore.items" :key="orderItem">
					<!-- 删除按钮 -->
					<view class="menu" @tap.stop="deleteGoods(orderItem.id)">
						<view class="icon pin-icon">delete</view>
					</view>
					<!-- 商品 -->
					<view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']" @touchstart="touchStart(index,$event)"
					 @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
						<!-- checkbox -->
						<view class="checkbox-box" @tap="selected(orderItem)">
							<view class="checkbox">
								<view :class="[selectedOrderItemIdMap[orderItem.id] == true?'on':'']"></view>
							</view>
						</view>
						<!-- 商品信息 -->
						<view class="goods-info" @tap="toProduct(orderItem.product.id)">
							<view class="img">
								<image mode="aspectFill" :src="orderItem.product.imageUrls"></image>
							</view>
							<view class="info">
								<view class="title">{{orderItem.product.name}}</view>
								<view class="spec">{{orderItem.productAttributeValue.sku}}</view>
								<view class="price-number">
									<view class="price">
										<text class="pin-primary pin-text-lg">￥{{orderItem.totalPrice}}</text>
										<text class="pin-accent pin-text-xs"> (单价 ￥{{orderItem.product.price}})</text>
									</view>
									<view class="number">
										<view class="sub" @tap.stop="sub(index)">
											<view class="icon pin-icon">remove</view>
										</view>
										<view class="input" @tap.stop="discard">
											<input type="number" v-model="orderItem.amount" @input="sum($event,index)" />
										</view>
										<view class="add" @tap.stop="add(index)">
											<view class="icon pin-icon">add</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>
		<!-- 脚部菜单 -->
		<view class="footer" :style="{bottom:footerbottom}">
			<view class="checkbox-box" @tap="allSelect">
				<view class="checkbox">
					<view :class="[isAllselected?'on':'']"></view>
				</view>
				<view class="text">全选</view>
			</view>
			<view class="delete-button" @tap="deleteSelectedList" v-if="selectedOrderItemIdList.length>0">删除已选</view>
			<view class="settlement">
				<view class="sum">合计:<view class="money">￥{{sumPrice}}</view>
				</view>
				<view class="pin-button" @tap="toConfirmation">结算({{selectedOrderItemIdList.length}})</view>
			</view>
		</view>
	</view>
</template>

<script>
	import FullPageEmptyState from '../../components/full-page-empty-state.vue'
	export default {
		components: {
			"full-page-empty-state": FullPageEmptyState
		},
		data() {
			return {
				sumPrice: '0.00',
				headerPosition: "fixed",
				headerTop: 0,
				statusTop: null,
				selectedOrderItemIdList: [],
				selectedOrderItemIdMap: {},
				selectedStoreIdMap: {},
				isAllselected: false,
				orderItemMapByStore: {},
				orderItemList: [],
				//控制滑动效果
				theIndex: null,
				oldIndex: null,
				isStop: false
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			this.loadMyCartItems()
		},
		onLoad() {
			//兼容H5下结算条位置
			// #ifdef H5
			this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + 'px';
			// #endif
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
		},
		onShow() {
			this.loadMyCartItems()
		},
		methods: {
			//加入商品 参数 goods:商品数据
			joinGoods(goods) {
				/*
				 * 这里只是展示一种添加逻辑，模板并没有做从其他页面加入商品到购物车的具体动作，
				 * 在实际应用上，前端并不会直接插入记录到orderItemList这一个动作，一般是更新列表和本地列表缓存。
				 * 一般商城购物车的增删改动作是由后端来完成的,
				 * 后端记录后返回前端更新前端缓存
				 */
				let len = this.orderItemList.length;
				let isFind = false; //是否找到ID一样的商品
				for (let i = 0; i < len; i++) {
					let row = this.orderItemList[i];
					if (row.id == goods.id) { //找到商品一样的商品
						this.orderItemList[i].number++; //数量自增
						isFind = true; //找到一样的商品
						break; //跳出循环
					}
				}
				if (!isFind) {
					//没有找到一样的商品，新增一行到购物车商品列表头部
					this.orderItemList[i].unshift(goods);
				}
			},
			//控制左滑删除效果-begin
			touchStart(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			touchMove(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				if (this.isStop || Math.abs(moveX) < 5) {
					return;
				}
				if (Math.abs(moveY) > Math.abs(moveX)) {
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}

				if (moveX < 0) {
					this.theIndex = index;
					this.isStop = true;
				} else if (moveX > 0) {
					if (this.theIndex != null && this.oldIndex == this.theIndex) {
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(() => {
							this.oldIndex = null;
						}, 150)
					}
				}
			},
			touchEnd(index, $event) {
				//结束禁止触发效果
				this.isStop = false;
				//控制左滑删除效果-end
			},
			//商品跳转
			toProduct(productId) {
				uni.navigateTo({
					url: '../product/product-detail?productId=' + productId
				});
			},
			//跳转确认订单页面
			toConfirmation() {
				if (this.selectedOrderItemIdList.length < 1) {
					uni.showToast({
						title: '请选择商品以结算',
						icon: 'none'
					});
					return;
				}
				let finalSelectedOrderItemList = []
				console.log("confirm")
				for (let i = 0; i < this.orderItemList.length; i++) {
					let orderItem = this.orderItemList[i]
					console.log(orderItem)
					console.log(this.selectedOrderItemIdMap[orderItem.id])
					if (this.selectedOrderItemIdMap[orderItem.id] == true) {
						finalSelectedOrderItemList.push(orderItem)
					}
				}

				uni.setStorage({
					key: 'cart-list-to-confirm',
					data: finalSelectedOrderItemList,
					success: () => {
						uni.navigateTo({
							url: '../order/confirmation'
						})
					}
				})
			},
			//删除商品
			deleteGoods(id) {
				let items = []
				items.push(id)
				if (this.selectedOrderItemIdList.indexOf(id) != -1) {
					this.selectedOrderItemIdList.splice(index, 1);
					this.selectedOrderItemIdMap[orderItemSelected.id] = false
				}
				this.sum()
				this.deleteMyCartItems(items)
			},
			// 删除商品
			deleteSelectedList() {
				let items = this.selectedOrderItemIdList
				this.selectedOrderItemIdList = []
				this.selectedOrderItemIdMap = {}
				this.sum()
				this.deleteMyCartItems(items)
			},
			// 选中商品
			selected(orderItemSelected, disableSum) {
				let index = this.selectedOrderItemIdList.indexOf(orderItemSelected.id)
				console.log(index)
				if (index == -1) {
					// 未选中，插入
					this.selectedOrderItemIdList.push(orderItemSelected.id)
					this.selectedOrderItemIdMap[orderItemSelected.id] = true
				} else {
					// 已选中，删除
					this.selectedOrderItemIdList.splice(index, 1);
					this.selectedOrderItemIdMap[orderItemSelected.id] = false
				}
				// this.orderItemList[index].selected = this.orderItemList[index].selected ? false : true;
				// let i = this.selectedOrderItemIdList.indexOf(this.orderItemList[index].id);
				// i > -1 ? this.selectedOrderItemIdList.splice(i, 1) : this.selectedOrderItemIdList.push(this.orderItemList[index].id);
				// this.isAllselected = this.selectedOrderItemIdList.length == this.orderItemList.length;
				if (disableSum == null || disableSum == false) {
					this.sum();
				}
			},
			allSelectByStore(storeId) {
				let orderItemsInStore = this.orderItemMapByStore[storeId].items
				console.log(orderItemsInStore)
				if (this.selectedStoreIdMap[storeId] == null || this.selectedStoreIdMap[storeId] == false) {
					this.selectedStoreIdMap[storeId] = true
				} else {
					this.selectedStoreIdMap[storeId] = false
				}
				for (let i = 0; i < orderItemsInStore.length; i++) {
					let orderItemSelected = orderItemsInStore[i]
					let index = this.selectedOrderItemIdList.indexOf(orderItemSelected.id)
					console.log(index)
					if (index == -1 && this.selectedStoreIdMap[storeId]) {
						// 未选中，插入
						this.selectedOrderItemIdList.push(orderItemSelected.id)
						this.selectedOrderItemIdMap[orderItemSelected.id] = true
					} else if (!this.selectedStoreIdMap[storeId]) {
						// 已选中，删除
						this.selectedOrderItemIdList.splice(index, 1);
						this.selectedOrderItemIdMap[orderItemSelected.id] = false
					}
				}

				this.sum()
			},
			//全选
			allSelect() {
				let len = this.orderItemList.length;
				this.isAllselected = this.isAllselected || this.orderItemList.length == 0 ? false : true;
				for (let i = 0; i < len; i++) {
					let orderItemSelected = this.orderItemList[i]
					let index = this.selectedOrderItemIdList.indexOf(orderItemSelected.id)
					console.log(index)
					if (index == -1 && this.isAllselected) {
						// 未选中，插入
						this.selectedOrderItemIdList.push(orderItemSelected.id)
						this.selectedOrderItemIdMap[orderItemSelected.id] = true
						this.selectedStoreIdMap[orderItemSelected.storeId] = true
					} else if (!this.isAllselected) {
						// 已选中，删除
						this.selectedOrderItemIdList.splice(index, 1);
						this.selectedOrderItemIdMap[orderItemSelected.id] = false
						this.selectedStoreIdMap[orderItemSelected.storeId] = false
					}
				}
				this.sum();
			},
			// 减少数量
			sub(index) {
				if (this.orderItemList[index].number <= 1) {
					return;
				}
				this.orderItemList[index].number--;
				this.sum();
			},
			// 增加数量
			add(index) {
				this.orderItemList[index].number++;
				this.sum();
			},
			// 合计
			sum(e, index) {
				this.sumPrice = 0;
				let len = this.orderItemList.length;
				for (let i = 0; i < len; i++) {
					let orderItem = this.orderItemList[i]
					if (this.selectedOrderItemIdMap[orderItem.id]) {
						if (e && i == index) {
							this.sumPrice = this.sumPrice + (e.detail.value * orderItem.product.price);
						} else {
							this.sumPrice = this.sumPrice + (orderItem.amount * orderItem.product.price);
						}
					}
				}
				this.sumPrice = this.sumPrice.toFixed(2);
			},
			discard() {
				//丢弃
			},
			deleteMyCartItems(orderItemsArray) {
				let that = this
				this.$pin.request('DELETE', '/commons/order/order-items', {
						orderItems: orderItemsArray
					},
					successData => {
						that.loadMyCartItems()
					},
					failData => {

					})
			},
			loadMyCartItems() {
				let that = this
				this.$pin.request('GET', '/commons/order/order-items', null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							that.orderItemList = successData.data.orderItems
							that.parseOrderItemsByStore(successData.data.orderItems)
						} else {
							uni.showToast({
								title: '加载购物车内容失败。'
							})
						}
					},
					failData => {
						uni.showToast({
							title: '加载购物车内容失败，请重试。'
						})
					},
					() => {
						uni.stopPullDownRefresh();
					})
			},
			parseOrderItemsByStore(orderItems) {
				let orderItemMapByStore = {}
				for (let index in orderItems) {
					let item = orderItems[index]
					console.log(item)
					let storeId = item.product.store.id
					let storeName = item.product.store.name
					if (orderItemMapByStore[storeId] == null) {
						orderItemMapByStore[storeId] = {}
						orderItemMapByStore[storeId].storeId = storeId
						orderItemMapByStore[storeId].storeName = storeName
						orderItemMapByStore[storeId].items = []
					}
					orderItemMapByStore[storeId].items.push(item)
				}
				this.orderItemMapByStore = orderItemMapByStore
			}
		}
	}
</script>
<style lang="scss">
	page {
		position: relative;
	}

	.icon {
		font-size: 60upx;
		font-style: normal;
		color: #000000;
	}

	.checkbox-box {
		display: flex;
		align-items: center;

		.checkbox {
			width: 35upx;
			height: 35upx;
			border-radius: 100%;
			border: solid 2upx $pin-color-foreground;
			display: flex;
			justify-content: center;
			align-items: center;

			.on {
				width: 25upx;
				height: 25upx;
				border-radius: 100%;
				background-color: $pin-color-primary;
			}
		}

		.text {
			font-size: 28upx;
			margin-left: 10upx;
		}
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.title {
			font-size: 36upx;
		}

	}

	.goods-list {
		width: 100%;
		padding: 20upx 0 120upx 0;

		.row {
			border-radius: $pin-border-radius;
			width: calc(100%);
			height: calc(22vw + 40upx);
			display: flex;
			align-items: center;
			position: relative;
			overflow: hidden;
			z-index: 4;
			border: 0;

			.menu {
				.icon {
					color: #fff;
				}

				position: absolute;
				width: 30%;
				height: 100%;
				right: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: red;
				color: #fff;
				z-index: 2;
			}

			.carrier {
				@keyframes showMenu {
					0% {
						transform: translateX(0);
					}

					100% {
						transform: translateX(-30%);
					}
				}

				@keyframes closeMenu {
					0% {
						transform: translateX(-30%);
					}

					100% {
						transform: translateX(0);
					}
				}

				&.open {
					animation: showMenu 0.25s linear both;
				}

				&.close {
					animation: closeMenu 0.15s linear both;
				}

				background-color: #fff;

				.checkbox-box {
					padding-left: 20upx;
					flex-shrink: 0;
					height: 22vw;
					margin-right: 20upx;
				}

				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				display: flex;
				align-items: center;

				.goods-info {
					width: 100%;
					display: flex;
					padding-right: 20upx;

					.img {
						width: 22vw;
						height: 22vw;
						border-radius: $pin-border-radius;
						overflow: hidden;
						flex-shrink: 0;
						margin-right: 10upx;

						image {
							width: 22vw;
							height: 22vw;
						}
					}

					.info {
						width: 100%;
						height: 22vw;
						overflow: hidden;
						display: flex;
						flex-wrap: wrap;
						position: relative;

						.title {
							width: 100%;
							font-size: 28upx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							// text-align: justify;
							overflow: hidden;
						}

						.spec {
							font-size: 24upx;
							background-color: #f3f3f3;
							color: $pin-color-accent;
							height: 36upx;
							display: flex;
							align-items: center;
							padding: 0 10upx;
							border-radius: $pin-border-radius;
							margin-bottom: 20vw;
						}

						.price-number {
							position: absolute;
							width: 100%;
							bottom: 0upx;
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							font-size: 28upx;
							height: 60upx;

							.price {}

							.number {
								display: flex;
								justify-content: center;
								align-items: flex-end;

								.input {
									width: 60upx;
									height: 60upx;
									margin: 0 10upx;
									background-color: #f3f3f3;

									input {
										width: 60upx;
										height: 60upx;
										display: flex;
										justify-content: center;
										align-items: center;
										text-align: center;
										font-size: 26upx;
									}
								}

								.sub,
								.add {
									width: 45upx;
									height: 45upx;
									background-color: #f3f3f3;
									border-radius: 5upx;

									.icon {
										font-size: 22upx;
										width: 45upx;
										height: 45upx;
										display: flex;
										justify-content: center;
										align-items: center;

									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
