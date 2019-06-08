<template>
	<view>
		<view class="content pin-card">
			<view class="row">
				<view class="nominal">
					收件人
				</view>
				<view class="input">
					<input placeholder="请输入收件人姓名" type="text" v-model="address.realName" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					电话号码
				</view>
				<view class="input">
					<input placeholder="请输入收件人电话号码" type="text" v-model="address.phone" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					所在地区
				</view>
				<view class="input" @tap="chooseCity">
					{{address.province}} - {{address.city}} - {{address.district}}
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					详细地址
				</view>
				<view class="input">
					<textarea v-model="address.detail" auto-height="true" placeholder="输入详细地址"></textarea>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					邮政编码
				</view>
				<view class="input">
					<textarea v-model="address.postCode" auto-height="true" placeholder="输入邮编(可选)" type="number"></textarea>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					设置为默认地址
				</view>
				<view class="input switch">
					<switch color="#ffc107" :checked="address.default" @change="isDefaultChange" />
				</view>
			</view>
			<view class="row" v-if="editType=='edit'" @tap="del">
				<view class="del">
					<i class="pin-icon">delete</i> 删除收货地址
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="pin-button pin-bg-primary long-width">
				<i class="pin-icon">save</i> 保存地址
			</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValue" @onCancel="onCancel"
		 @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				address: {
					realName: "",
					phone: "",
					province: "",
					city: "",
					district: "",
					detail: "",
					postCode: "",
					default: null
				},
				editType: 'edit',
				isDefault: false,
				cityPickerValue: [0, 0, 1],
				themeColor: '#ffc107'
			};
		},
		methods: {
			onCancel(e) {
				console.log(e)
			},
			chooseCity() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.region = e;
				console.log(e)
				let labels = e.label.split("-")
				this.address.province = labels[0]
				this.address.city = labels[1]
				this.address.district = labels[2]
			},
			isDefaultChange(e) {
				this.address.default = e.detail.value;
			},
			del() {
				let that = this
				uni.showModal({
					title: '确定删除？',
					content: '你将删除此收货地址，此操作不可撤销。是否确定继续？',
					success: (res) => {
						if (res.confirm) {
							that.deleteAddress()
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			save() {
				if (this.editType != 'edit') {
					// 创建模式下ID为空
					this.address.id = null
				}
				if (!this.address.realName) {
					uni.showToast({
						title: '请输入收件人姓名',
						icon: 'none'
					});
					return;
				}
				if (!this.address.phone) {
					uni.showToast({
						title: '请输入收件人电话号码',
						icon: 'none'
					});
					return;
				}
				if (!this.address.detail) {
					uni.showToast({
						title: '请输入收件人详细地址',
						icon: 'none'
					});
					return;
				}
				if (this.address.province == '' || this.address.city == '' || this.address.district == '') {
					uni.showToast({
						title: '请选择收件省市区(县)',
						icon: 'none'
					});
					return;
				}
				uni.showLoading({
					title: '正在保存',
					mask: true
				})
				// 实际应用中请提交ajax,模板定时器模拟提交效果
				this.saveAddress()
			},
			saveAddress() {
				let that = this
				this.$pin.request(this.editType == 'edit' ? 'PUT' : 'POST', '/commons/user/address', this.address,
					successData => {
						uni.hideLoading()
						uni.showToast({
							icon: 'success',
							title: '保存地址成功'
						})
						uni.navigateBack(-1)
					},
					failData => {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: '保存地址时出错'
						})
					}
				)
			},
			deleteAddress() {
				uni.showLoading({
					title: '正在删除',
					mask: true
				})
				let that = this
				this.$pin.request('DELETE', '/commons/user/address', this.address,
					successData => {
						uni.hideLoading()
						uni.showToast({
							icon: 'success',
							title: '已删除地址'
						})
						uni.navigateBack(-1)
					},
					failData => {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: '删除地址时出错'
						})
					}
				)
			}
		},
		onLoad(e) {
			//获取传递过来的参数
			this.editType = e.type;
			if (e.type == 'edit') {
				uni.getStorage({
					key: 'address',
					success: (e) => {
						this.address = e.data
						this.cityPickerValue[0] = e.data.province;
						this.cityPickerValue[1] = e.data.city;
						this.cityPickerValue[2] = e.data.district;
					}
				})
			}

		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
	};
</script>
<style lang="scss">
	.save {
		view {
			display: flex;
		}

		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		flex-wrap: wrap;

		view {
			display: flex;
		}

		.row {
			width: 94%;
			margin: 0 3%;
			border-top: solid 1upx #eee;

			.nominal {
				width: 30%;
				height: 120upx;
				font-weight: 200;
				font-size: 30upx;
				align-items: center;
			}

			.input {
				width: 70%;
				padding: 20upx 0;
				align-items: center;
				font-size: 30upx;

				&.switch {
					justify-content: flex-end;
				}

				.textarea {
					margin: 20upx 0;
					min-height: 120upx;
				}
			}

			.del {
				width: 100%;
				height: 80upx;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				color: #ffffff;
				background-color: #f06c7a;
				box-shadow: $pin-shadow;
				border-radius: $pin-border-radius;
				margin-bottom: 20upx;
			}
		}
	}
</style>
