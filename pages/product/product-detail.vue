<template>
	<view>
		<view class="status" :style="{ opacity: afterHeaderOpacity }"></view>
		<view class="product-header">
			<!-- 头部-默认显示 -->
			<view class="before" :style="{ opacity: 1 - afterHeaderOpacity, zIndex: beforeHeaderzIndex }">
				<view class="back">
					<view class="icon xiangqian" @tap="back" v-if="showBack"></view>
				</view>
				<view class="middle"></view>
				<view class="icon-btn">
					<view class="icon pin-icon" @tap="toMsg">notifications</view>
					<view class="icon pin-icon" @tap="toCart">shopping_cart</view>
				</view>
			</view>
			<!-- 头部-滚动渐变显示 -->
			<view class="after" :style="{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex }">
				<view class="back">
					<view class="icon pin-icon" @tap="back" v-if="showBack">arrow_back</view>
				</view>
				<view class="middle">
					<view v-for="(anchor,index) in anchorlist" :class="[selectAnchor==index ?'on':'']" :key="index" @tap="toAnchor(index)">{{anchor.name}}</view>
				</view>
				<view class="icon-btn">
					<view class="icon pin-icon" @tap="toMsg">notifications</view>
					<view class="icon pin-icon" @tap="toCart">shopping_cart</view>
				</view>
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<view class="box" @tap="share">
					<view class="icon pin-icon">share</view>
					<view class="text">分享</view>
				</view>
				<view class="box" @tap="toChat">
					<view class="icon pin-icon">contact_phone</view>
					<view class="text">客服</view>
				</view>
				<view class="box" @tap="keep">
					<view class="icon pin-icon">{{isKeep?'star':'star_border'}}</view>
					<view class="text">{{isKeep?'已':''}}收藏</view>
				</view>
			</view>
			<view class="btn">
				<view class="joinCart" @tap="joinCart">加入购物车</view>
				<view class="buy" @tap="buy">立即购买</view>
			</view>
		</view>
		<!-- share弹窗 -->
		<view class="share" :class="shareClass" @touchmove.stop.prevent="discard" @tap="hideShare">
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="h1">分享</view>
				<view class="list">
					<view class="box">
						<image src="../../static/img/share/wx.png"></image>
						<view class="title">
							微信好友
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/pyq.png"></image>
						<view class="title">
							朋友圈
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/wb.png"></image>
						<view class="title">
							新浪微博
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/qq.png"></image>
						<view class="title">
							QQ
						</view>
					</view>
				</view>
				<view class="btn" @tap="hideShare">
					取消
				</view>
			</view>

		</view>
		<!-- 服务-模态层弹窗 -->
		<view class="popup service" :class="serviceClass" @touchmove.stop.prevent="discard" @tap="hideService">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="row" v-for="(item,index) in productData.service" :key="index">
						<view class="title">{{item.name}}</view>
						<view class="description">{{item.description}}</view>
					</view>
				</view>
				<view class="btn">
					<view class="button" @tap="hideService">确定</view>
				</view>
			</view>
		</view>
		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="attributeModalClass" @touchmove.stop.prevent="discard" @tap="hideSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<!--规格选择模态弹框-->
					<view class="pin-list-item">
						<view class="list-left">
							<image class="pin-avatar" :src="productAttributeValuesMap[selectedResult.skuString] == null?productDetail.immageUrls:productAttributeValuesMap[selectedResult.skuString].imageUrl"></image>
						</view>
						<view class="list-right">
							<view class="list-header">
								<view class="list-title">
									{{productDetail.name}}
								</view>
							</view>
							<view class="list-detail">
								{{productAttributeValuesMap[selectedResult.skuString] == null?'请选择规格':'库存' + productAttributeValuesMap[selectedResult.skuString].stock}}
							</view>
						</view>
					</view>
					
					<view v-for="(productAttribute) in productAttributes" :key="productAttribute">
						<view class="title">{{productAttribute.attributeName}}</view>
						<view class="attrubite-chip-list">
							<view v-for="(item) in productAttribute.attributeValues" class="attrubite-chip" :class="[(attributeSelectMap[productAttribute.attributeName]==item)?'on':'']"
							 @tap="setSelectAttribute(productAttribute.attributeName, item)" :key="item">
								{{item}}
							</view>
						</view>
					</view>

					<view class="length" v-if="selectedResult.sku!=null">
						
						<view class="text">{{productAttributeValuesMap[selectedResult.skuString].stock == 0?'此规格库存不足':''}} | 数量 ({{productDetail.unitName}})</view>
						<view class="number">
							<view class="sub" @tap.stop="sub">
								<view class="icon pin-icon">remove</view>
							</view>
							<view class="input" @tap.stop="discard">
								<input type="number" v-model="selectedResult.amount" />
							</view>
							<view class="add" @tap.stop="add">
								<view class="icon pin-icon">add</view>
							</view>
						</view>
					</view>
				</view>
				<view class="btn" v-show="productAttributeValuesMap[selectedResult.skuString] != null && productAttributeValuesMap[selectedResult.skuString].stock >0">
					<view class="button" @tap="hideSpec">加入购物车</view>
				</view>
			</view>
		</view>
		<!-- 商品主图轮播 -->
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.img" @tap="toSwiper(swiper)" mode="widthFix"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
		</view>

		<view :style="{'transform': 'translateY(-'+ afterHeaderOpacity*200 + 'px)', zIndex: beforeHeaderzIndex }">
			<view class="pin-card">
				<!-- 标题 价格 -->
				<view class="info-box product-info">
					<view class="price">￥{{productDetail.price}}</view>
					<view class="title">
						{{productDetail.name}}
					</view>
				</view>
				<!-- 服务-规则选择 -->
				<view class="info-box spec">
					<view class="row" @tap="showService">
						<view class="text">服务</view>
						<view class="content">
							<view class="serviceitem" v-for="(item,index) in productServices" :key="index">{{item.name}}</view>
						</view>
						<view class="arrow">
							<view class="icon pin-icon">keyboard_arrow_right</view>
						</view>
					</view>
					<view class="row" @tap="showSpec(false)">
						<view class="text">规格</view>
						<view class="content">
							<view>{{selectedResult.sku==null?'未选择':selectedResult.skuString}}
								({{selectedResult.amount==0?'':selectedResult.amount+productDetail.unitName}})</view>
						</view>
						<view class="arrow">
							<view class="icon pin-icon">keyboard_arrow_right</view>
						</view>
					</view>
				</view>

				<!--店铺首页-->
				<view class="info-box comments pin-solid-top" id="comments">
					<view class="row">
						<view class="text">店铺</view>
						<view class="arrow">
							<view class="show" @tap="toStore(productDetail.storeId)">
								更多本店商品
								<view class="icon pin-icon">keyboard_arrow_right</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view style="position: relative;">
				<view class="pin-card" style="position: absolute; width: 92%;">
					<!-- 评价 -->
					<view class="info-box comments" id="comments">
						<view class="row">
							<view class="text">商品评价</view>
							<view class="arrow" v-if="selectedComment != null">
								<view class="show" @tap="toComments(productDetail.id)">
									查看全部
									<view class="icon pin-icon">keyboard_arrow_right</view>
								</view>
							</view>
							<view class="arrow" v-else>
								<view class="show">
									暂无评论
									<view class="icon pin-icon">keyboard_arrow_right</view>
								</view>
							</view>
						</view>
						<view class="comment" v-if="selectedComment != null">
							<view class="user-info">
								<view class="face">
									<image :src="selectedComment.avatarUrl"></image>
								</view>
								<view class="username">{{selectedComment.nickname}}</view>
							</view>
							<view class="content">
								{{selectedComment.content}}
							</view>
						</view>
						<view class="comment" v-else>
							<view class="content">
								暂时没有用户评论此商品。
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view>
			<card-title icon="toys" text="图文详情" sub-text="Detail" />
			<view class="pin-card pin-padding" v-show="productDetail.description!=''">
				<view class="pin-margin pin-text-md">
					<text>{{productDetail.description}}</text>
				</view>
			</view>
			<!-- 详情 -->
			<view class="description">
				<view class="content">
					<rich-text :nodes="descriptionStr"></rich-text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import CardTitle from '../../components/card-title.vue'
	export default {
		components: {
			"card-title": CardTitle
		},
		data() {
			return {
				//控制渐变标题栏的参数
				beforeHeaderzIndex: 11, //层级
				afterHeaderzIndex: 10, //层级
				beforeHeaderOpacity: 1, //不透明度
				afterHeaderOpacity: 0, //不透明度
				//是否显示返回按钮
				// #ifndef MP
				showBack: true,
				// #endif
				//轮播主图数据
				swiperList: [],
				//轮播图下标
				currentSwiper: 0,
				anchorlist: [], //导航条锚点
				selectAnchor: 0, //选中锚点
				serviceClass: '', //服务弹窗css类，控制开关动画
				attributeModalClass: '', //规格弹窗css类，控制开关动画
				shareClass: '', //分享弹窗css类，控制开关动画
				// 商品信息
				productAttributes: [],
				productAttributeValuesMap: {},
				productSKUStockCache: {},
				productDetail: {},
				productServices: [{
						name: "正品保证",
						description: "此商品官方保证为正品"
					},
					{
						name: "极速退款",
						description: "此商品享受退货极速退款服务"
					},
					{
						name: "7天退换",
						description: "此商品享受7天无理由退换服务"
					}
				],
				selectedResult: {
					sku: null,
					amount: 1,
					skuString: ''
				},
				selectedComment: null,
				attributeSelectMap: {},
				selectSpec: null, //选中规格
				isKeep: false, //收藏 商品描述html
				descriptionStr: '<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>'
			};
		},
		onLoad(option) {
			// #ifdef MP
			//小程序隐藏返回按钮
			this.showBack = false;
			// #endif
			//option为object类型，会序列化上个页面传递的参数
			console.log(option.productId); //打印出上个页面传递的参数
			this.productId = option.productId
			this.loadProductDetail(option.productId)
		},
		onReady() {
			this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
		},
		onPageScroll(e) {
			//锚点切换
			this.selectAnchor = e.scrollTop >= this.anchorlist[2].top ? 2 : e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
			//导航栏渐变
			let tmpY = 375;
			e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
			this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
			this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
			//切换层级
			this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
			this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
			this.$forceUpdate()
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			uni.showToast({
				title: '触发上拉加载'
			});
		},
		methods: {
			loadProductDetail(productId) {
				let that = this
				this.$pin.request('GET', '/commons/product/' + productId, null,
					successData => {
						if (successData.code == that.$pin.code.success) {
							that.productDetail = successData.data.product
							that.selectedComment = successData.data.comment
							uni.setNavigationBarTitle({
								title: that.productDetail.name
							});
							that.swiperList.push({
								id: 1,
								img: that.productDetail.imageUrls
							})
							that.parseProductAttributes(successData.data.product.productAttributeDefinitions, successData.data.product.productAttributeValues)
						} else {
							uni.showToast({
								title: '加载商品出错，' + successData.message,
								icon: 'none'
							})
						}
					},
					failData => {
						uni.showToast({
							title: '加载商品出错，请重试',
							icon: 'none'
						})
					}
				)
			},
			parseProductAttributes(pinProductAttributeDefinitions, pinProductAttributeValues) {
				let productAttributes = [];
				for (let i = 0; i < pinProductAttributeDefinitions.length; i++) {
					productAttributes.push({
						attributeName: pinProductAttributeDefinitions[i].attributeName,
						attributeValues: pinProductAttributeDefinitions[i].attributeValues.split(';')
					})
					this.attributeSelectMap[pinProductAttributeDefinitions[i].attributeName] = null
				}
				console.log(productAttributes)
				this.productAttributes = productAttributes

				// 生成按规格属性值map的库存数据
				for (let i = 0; i < pinProductAttributeValues.length; i++) {
					this.productAttributeValuesMap[pinProductAttributeValues[i].sku] = pinProductAttributeValues[i]
				}
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			//消息列表
			toMsg() {
				uni.navigateTo({
					url: '../message/messages'
				})
			},
			// 客服
			toChat() {
				uni.navigateTo({
					url: "../message/chat/chat?name=客服008"
				})
			},
			toStore(storeId) {
				uni.navigateTo({
					url: "../store/store-index/store-index?storeId=" + storeId
				})
			},
			// 分享
			share() {
				this.shareClass = 'show';
			},
			hideShare() {
				this.shareClass = 'hide';
				setTimeout(() => {
					this.shareClass = 'none';
				}, 150);
			},
			//收藏
			keep() {
				this.isKeep = this.isKeep ? false : true;
			},
			toCart() {
				uni.switchTab({
					url: "../tab-bar/cart"
				})
			},
			// 加入购物车
			joinCart() {
				if (this.selectedResult.sku == null || this.selectedResult.skuString == '') {
					uni.showToast({
						icon: "none",
						title: "请选择规格"
					});
					this.showSpec(this.joinCart)
					return
				}
				if (this.selectedResult.amount == null || this.selectedResult.amount <= 0) {
					uni.showToast({
						icon: "none",
						title: "请至少选择一件商品加入购物车"
					});
					return
				}
				this.$pin.request('POST', '/commons/order/order-item', {
						productId: this.productDetail.id,
						skuId: this.selectedResult.sku.id,
						amount: this.selectedResult.amount
					},
					successData => {
						uni.showToast({
							title: "已加入购物车"
						});
					},
					failData => {
						uni.showToast({
							icon: "none",
							title: "加入购物车失败，请重试"
						});
					}
				)
			},
			//立即购买
			buy() {
				if (this.selectSpec == null) {
					return this.showSpec(() => {
						this.toConfirmation();
					});
				}
				this.toConfirmation();
			},
			//跳转确认订单页面
			toConfirmation() {
				let tmpList = [];
				let product = {
					id: this.productData.id,
					img: '../../static/img/product/p1.jpg',
					name: this.productData.name,
					spec: '规格:' + this.productData.spec[this.selectSpec],
					price: this.productData.price,
					number: this.productData.number
				};
				tmpList.push(product);
				uni.setStorage({
					key: 'buylist',
					data: tmpList,
					success: () => {
						uni.navigateTo({
							url: '../order/confirmation'
						})
					}
				})
			},
			//跳转评论列表
			toComments(productId) {
				uni.navigateTo({
					url: "./product-comments?productId=" + productId
				})
			},
			//选择规格
			setSelectAttribute(attributeName, selectedAttributeValue) {
				console.log(attributeName + '--' + selectedAttributeValue)
				this.attributeSelectMap[attributeName] = selectedAttributeValue;
				let productSKUString = "";
				for (let i = 0; i < this.productAttributes.length; i++) {
					let tempStr = this.attributeSelectMap[this.productAttributes[i].attributeName]
					if (tempStr != null) {
						productSKUString += tempStr
					} else {
						continue
					}
					if (i < this.productAttributes.length - 1) {
						productSKUString += ";"
					}
				}
				this.getSKUStockNum(productSKUString)
				this.selectedResult.skuString = productSKUString
				this.selectedResult.sku = this.productAttributeValuesMap[productSKUString]
				this.$forceUpdate()
			},
			getSKUStockNum(key) {
				let result = 0,
					i, j, m, items, n = [];
				//检查是否已计算过
				if (typeof this.productSKUStockCache[key] != 'undefined') {
					return this.productSKUStockCache[key];
				}
				items = key.split(";");
				//已选择数据是最小路径，直接从已端数据获取
				if (items.length === this.productAttributes.length) {
					return this.productAttributeValuesMap[key] ? this.productAttributeValuesMap[key].stock : 0;
				}
				//拼接子串
				for (i = 0; i < this.productAttributes.length; i++) {
					for (j = 0; j < this.productAttributes[i].attributeValues.length && items.length > 0; j++) {
						if (this.productAttributes[i].attributeValues[j] == items[0]) {
							break;
						}
					}
					if (j < this.productAttributes[i].attributeValues.length && items.length > 0) {
						//找到该项，跳过
						n.push(items.shift());
					} else {
						// 递归分解求值
						for (m = 0; m < this.productAttributes[i].attributeValues.length; m++) {
							result += this.getSKUStockNum(n.concat(this.productAttributes[i].attributeValues[m], items).join(";"));
						}
						break;
					}
				}

				//缓存productAttributeValuesMap
				this.productSKUStockCache[key] = result;
				return result;
			},
			//减少数量
			sub() {
				if (this.selectedResult.amount <= 1) {
					return
				}
				this.selectedResult.amount--
			},
			//增加数量
			add() {
				let stock = this.productAttributeValuesMap[this.selectedResult.skuString].stock
				if (stock == null || stock <= this.selectedResult.amount) {
					uni.showToast({
						title: '已达到库存上限',
						icon: 'none'
					})
					return
				}
				this.selectedResult.amount++;
			},
			//跳转锚点
			toAnchor(index) {
				this.selectAnchor = index;
				uni.pageScrollTo({
					scrollTop: this.anchorlist[index].top,
					duration: 200
				});
			},
			//计算锚点高度
			calcAnchor() {
				this.anchorlist = [{
						name: '主图',
						top: 0
					},
					{
						name: '评价',
						top: 0
					},
					{
						name: '详情',
						top: 0
					}
				]
				let commentsView = uni.createSelectorQuery().select("#comments");
				commentsView.boundingClientRect((data) => {
					let statusbarHeight = 0;
					//APP内还要计算状态栏高度
					// #ifdef APP-PLUS
					statusbarHeight = plus.navigator.getStatusbarHeight()
					// #endif
					let headerHeight = uni.upx2px(100);
					this.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
					this.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;

				}).exec();
			},
			//返回上一页
			back() {
				uni.navigateBack();
			},
			//服务弹窗
			showService() {
				console.log('show');
				this.serviceClass = 'show';
			},
			//关闭服务弹窗
			hideService() {
				this.serviceClass = 'hide';
				setTimeout(() => {
					this.serviceClass = 'none';
				}, 200);
			},
			//规格弹窗
			showSpec(fun) {
				this.attributeModalClass = 'show';
				this.specCallback = fun;
			},
			specCallback() {
				return;
			},
			//关闭规格弹窗
			hideSpec() {
				this.attributeModalClass = 'hide';
				this.joinCart()
				//回调
				// this.selectSpec && this.specCallback && this.specCallback();
				// this.specCallback = false;
				setTimeout(() => {
					this.attributeModalClass = 'none';
				}, 200);
			},
			discard() {
				//丢弃
			}
		}
	};
</script>

<style lang="scss">
	page {
		background-color: $pin-color-light;
	}

	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes showLayer {
		0% {
			transform: translateY(0);
			opacity: 0;
		}

		100% {
			transform: translateY(-100%);
			opacity: 1;
		}
	}

	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
			opacity: 1;
		}

		100% {
			transform: translateY(0);
			opacity: 0;
		}
	}

	.icon {
		font-size: 26upx;
		font-style: normal;
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
		background-color: #f1f1f1;
	}

	.product-header {
		background-color: transparent;
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.before,
		.after {
			width: 92%;
			padding: 0 4%;
			height: 100upx;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
			/*  #endif  */

			.back {
				width: 125upx;
				height: 60upx;
				flex-shrink: 0;

				.icon {
					margin-left: -10%;
					width: 60upx;
					height: 60upx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 42upx;
				}
			}

			.middle {
				width: 100%;
			}

			.icon-btn {
				width: 125upx;
				height: 60upx;
				flex-shrink: 0;
				display: flex;

				.icon {
					&:first-child {
						margin-right: 5upx;
					}

					width: 60upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 42upx;
				}
			}
		}

		.before {
			.back {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}

			.icon-btn {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;

				}
			}
		}

		.after {
			background-color: $pin-color-primary;

			.back {
				.icon {
					color: #666;
				}
			}

			.icon-btn {
				.icon {
					color: #666;
				}
			}

			.middle {
				font-size: 28upx;
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;

				view {
					padding: 0 3%;
					margin: 0 3%;
					display: flex;
					justify-content: center;
					align-items: center;

					&.on {
						color: $pin-color-foreground;
						border-bottom: 5upx solid $pin-color-foreground;
						font-weight: 700;
						font-size: 28upx;
						transition: all 0.5s;
					}
				}
			}
		}
	}

	.swiper-box {
		position: relative;
		width: 100%;
		height: 100vw;

		swiper {
			width: 100%;
			height: 100vw;

			swiper-item {
				image {
					width: 100%;
					height: 100vw;
				}
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}

	.info-box {
		width: 92%;
		padding: 20upx 4%;
		margin-bottom: 20upx;
	}

	.product-info {
		.price {
			font-size: 46upx;
			font-weight: 600;
			color: #f47925;
		}

		.title {
			font-size: 30upx;
		}
	}

	.spec {
		.row {
			width: 100%;
			display: flex;
			align-items: center;
			margin: 0 0 30upx 0;

			.text {
				font-size: 24upx;
				color: #a2a2a2;
				margin-right: 20upx;
			}

			.content {
				font-size: 28upx;
				display: flex;
				flex-wrap: wrap;

				.serviceitem {
					margin-right: 10upx;
				}
			}

			.arrow {
				position: absolute;
				right: 4%;

				.icon {
					color: #ccc;
				}
			}
		}
	}

	.comments {
		.row {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			margin: 10upx;

			.text {
				font-size: 30upx;
			}

			.arrow {
				font-size: 28upx;
				position: absolute;
				right: 4%;
				color: $pin-color-foreground;

				.show {
					display: flex;
					align-items: center;

					.icon {
						color: $pin-color-primary;
					}
				}
			}
		}

		.comment {
			width: 100%;

			.user-info {
				width: 100%;
				height: 40upx;
				display: flex;
				align-items: center;

				.face {
					width: 40upx;
					height: 40upx;
					margin-right: 8upx;

					image {
						width: 40upx;
						height: 40upx;
						border-radius: 100%;
					}
				}

				.username {
					font-size: 24upx;
					color: #999;
				}
			}

			.content {
				margin-top: 10upx;
				font-size: 26upx;
			}
		}
	}

	.description {
		margin-top: 20upx;

		.title {
			width: 100%;
			height: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: #999;
		}
	}

	.footer {
		position: fixed;
		bottom: 0upx;
		width: 92%;
		padding: 0 4%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.icons {
			display: flex;
			height: 80upx;
			margin-left: -4%;

			.box {
				width: 80upx;
				height: 80upx;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;

				.icon {
					font-size: 40upx;
					color: #828282;
				}

				.text {
					display: flex;
					justify-content: center;
					width: 100%;
					font-size: 22upx;
					color: #666;
				}
			}
		}

		.btn {
			height: 80upx;
			border-radius: $pin-border-radius;
			box-shadow: $pin-shadow;
			overflow: hidden;
			display: flex;
			margin-right: -2%;

			.joinCart,
			.buy {
				height: 80upx;
				padding: 0 40upx;
				display: flex;
				align-items: center;
				font-size: 28upx;
			}

			.joinCart {
				background-color: $pin-color-primary;
				color: $pin-color-foreground;
			}

			.buy {
				background-color: $pin-color-accent;
				color: $pin-color-accent-foreground;
			}
		}
	}

	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;
		display: none;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			position: fixed;
			z-index: 22;
			bottom: -80%;
			width: 92%;
			padding: 0 4%;
			height: 80%;
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;

			.content {
				overflow-y: scroll;
				width: 100%;
				padding: 20upx 0;
			}

			.btn {
				width: 100%;
				height: 100upx;

				.button {
					width: 100%;
					height: 80upx;
					border-radius: $pin-border-radius;
					color: $pin-color-foreground;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: $pin-color-primary;
					font-size: 28upx;

					:disabled {
						background-color: $pin-color-accent;
						color: $pin-color-accent-foreground;
					}
				}
			}
		}

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		&.service {
			.row {
				margin: 30upx 0;

				.title {
					font-size: 30upx;
					margin: 10upx 0;
				}

				.description {
					font-size: 28upx;
					color: #999;
				}
			}
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}

			.attrubite-chip-list {
				width: 100%;
				display: flex;
				flex-wrap: wrap;

				.attrubite-chip {
					font-size: 24upx;
					padding: 10upx 15upx;
					border-radius: 8upx;
					margin: 0 20upx 10upx 0;
					box-shadow: 0upx 0upx 8upx rgba(0, 0, 0, 0.2);

					&.on {
						box-shadow: 0upx 0upx 20upx rgba(0, 0, 0, 0.2);
						background-color: $pin-color-primary;
						transition: all 0.5s;
					}
				}
			}

			.length {
				margin-top: 30upx;
				border-top: solid 1upx #aaa;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;

				.text {
					font-size: 30upx;
				}

				.number {
					display: flex;
					justify-content: center;
					align-items: center;

					.input {
						width: 80upx;
						height: 60upx;
						margin: 0 10upx;
						background-color: #f3f3f3;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;

						input {
							width: 80upx;
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
						width: 60upx;
						height: 60upx;
						background-color: #f3f3f3;
						border-radius: 5upx;

						.icon {
							font-size: 30upx;
							width: 60upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}

		}
	}

	.share {
		display: none;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.15s linear both;
			}

			.layer {
				animation: showLayer 0.15s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.15s linear both;
			}

			.layer {
				animation: hideLayer 0.15s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			background-color: rgba(0, 0, 0, .5);
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			z-index: 11;
		}

		.layer {
			width: 92%;
			position: fixed;
			z-index: 12;
			padding: 0 4%;
			top: 100%;
			background-color: rgba(255, 255, 255, 0.9);

			.list {
				width: 100%;
				display: flex;
				padding: 10upx 0 30upx 0;

				.box {
					width: 25%;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;

					image {
						width: 13.8vw;
						height: 13.8vw;
					}

					.title {
						margin-top: 10upx;
						display: flex;
						justify-content: center;
						width: 100%;
						font-size: 26upx;
					}
				}
			}

			.btn {
				width: 100%;
				height: 100upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
				border-top: solid 1upx #666666;
			}

			.h1 {
				width: 100%;
				height: 80upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 34upx;
			}
		}
	}
</style>
