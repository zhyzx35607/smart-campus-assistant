Component({
  data: {
    currentPwd: '',
    newPwd: '',
    confirmPwd: '',
    visibilityOptions: ['公开', '仅好友', '仅自己'],
    visibilityIndex: 0,
    showActivity: true,
    hideOnline: false,
    enable2fa: false
  },
  methods: {
    onCurrentPwdInput(e: WechatMiniprogram.Input) { this.setData({ currentPwd: e.detail.value }) },
    onNewPwdInput(e: WechatMiniprogram.Input) { this.setData({ newPwd: e.detail.value }) },
    onConfirmPwdInput(e: WechatMiniprogram.Input) { this.setData({ confirmPwd: e.detail.value }) },
    onVisibilityChange(e: WechatMiniprogram.PickerChange) { this.setData({ visibilityIndex: Number(e.detail.value) }) },
    onShowActivityChange(e: WechatMiniprogram.SwitchChange) { this.setData({ showActivity: e.detail.value }) },
    onHideOnlineChange(e: WechatMiniprogram.SwitchChange) { this.setData({ hideOnline: e.detail.value }) },
    onEnable2faChange(e: WechatMiniprogram.SwitchChange) { this.setData({ enable2fa: e.detail.value }) },
    onViewDevices() {
      wx.showToast({ title: '功能开发中，即将上线！', icon: 'none' })
    },
    onDataExport() {
      wx.showModal({
        title: '数据导出',
        content: '我们将通过邮箱向您发送数据导出链接，确认要请求数据导出吗？',
        success: (res) => {
          if (res.confirm) {
            wx.showToast({ title: '数据导出请求已提交', icon: 'none' })
          }
        }
      })
    },
    onDeleteAccount() {
      wx.showModal({
        title: '危险操作',
        content: '此操作不可逆！所有数据将被永久删除，确认要注销账户吗？',
        confirmColor: '#ef4444',
        success: (res) => {
          if (res.confirm) {
            wx.showModal({
              title: '二次确认',
              content: '请输入"永久删除"以确认注销（此为模拟验证）',
              confirmColor: '#ef4444',
              success: (res2) => {
                if (res2.confirm) {
                  wx.showToast({ title: '注销请求已提交', icon: 'none' })
                }
              }
            })
          }
        }
      })
    },
    onCancel() { wx.navigateBack() },
    onReset() {
      wx.showModal({
        title: '提示',
        content: '确定要重置所有更改吗？',
        success: (res) => { if (res.confirm) wx.navigateBack() }
      })
    },
    onSave() {
      if (this.data.newPwd && this.data.newPwd !== this.data.confirmPwd) {
        wx.showToast({ title: '新密码与确认密码不一致！', icon: 'none' })
        return
      }
      wx.showToast({ title: '安全与隐私设置已保存！', icon: 'success' })
      setTimeout(() => wx.navigateBack(), 1000)
    }
  }
})
