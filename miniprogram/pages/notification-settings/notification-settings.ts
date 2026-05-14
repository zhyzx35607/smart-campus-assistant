Component({
  data: {
    notifySystem: true,
    notifyReplies: true,
    notifyCommunity: true,
    notifyEvents: true,
    notifyMessages: true
  },
  methods: {
    onNotifySystemChange(e: WechatMiniprogram.SwitchChange) { this.setData({ notifySystem: e.detail.value }) },
    onNotifyRepliesChange(e: WechatMiniprogram.SwitchChange) { this.setData({ notifyReplies: e.detail.value }) },
    onNotifyCommunityChange(e: WechatMiniprogram.SwitchChange) { this.setData({ notifyCommunity: e.detail.value }) },
    onNotifyEventsChange(e: WechatMiniprogram.SwitchChange) { this.setData({ notifyEvents: e.detail.value }) },
    onNotifyMessagesChange(e: WechatMiniprogram.SwitchChange) { this.setData({ notifyMessages: e.detail.value }) },
    onCancel() { wx.navigateBack() },
    onReset() {
      wx.showModal({
        title: '提示',
        content: '确定要重置所有更改吗？',
        success: (res) => {
          if (res.confirm) {
            this.setData({ notifySystem: true, notifyReplies: true, notifyCommunity: true, notifyEvents: true, notifyMessages: true })
          }
        }
      })
    },
    onSave() {
      wx.showToast({ title: '通知设置已保存！', icon: 'success' })
      setTimeout(() => wx.navigateBack(), 1000)
    }
  }
})
