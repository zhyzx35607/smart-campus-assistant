Component({
  data: {
    title: '',
    titleLength: 0,
    content: '',
    contentLength: 0,
    tags: [
      { id: 1, name: '经验分享', key: 'share', selected: false },
      { id: 2, name: '热点吐槽', key: 'hot', selected: false },
      { id: 3, name: '组队招募', key: 'team', selected: false },
      { id: 4, name: '校方回应', key: 'official', selected: false },
      { id: 5, name: '学术讨论', key: 'academic', selected: false },
      { id: 6, name: '生活求助', key: 'help', selected: false }
    ],
    anonymous: false,
    allowComments: true,
    subscribe: true,
    files: [] as Array<{name: string, size: string}>
  },
  methods: {
    onTitleInput(e: WechatMiniprogram.Input) {
      this.setData({ title: e.detail.value, titleLength: e.detail.value.length })
    },
    onContentInput(e: WechatMiniprogram.Input) {
      this.setData({ content: e.detail.value, contentLength: e.detail.value.length })
    },
    onTagToggle(e: WechatMiniprogram.TouchEvent) {
      const index = e.currentTarget.dataset.index
      const tags = this.data.tags
      const selectedCount = tags.filter(t => t.selected).length
      
      if (!tags[index].selected && selectedCount >= 3) {
        wx.showToast({ title: '最多选择3个标签', icon: 'none' })
        return
      }
      tags[index].selected = !tags[index].selected
      this.setData({ tags })
    },
    onAnonymousChange(e: WechatMiniprogram.SwitchChange) {
      this.setData({ anonymous: e.detail.value })
    },
    onAllowCommentsChange(e: WechatMiniprogram.SwitchChange) {
      this.setData({ allowComments: e.detail.value })
    },
    onSubscribeChange(e: WechatMiniprogram.SwitchChange) {
      this.setData({ subscribe: e.detail.value })
    },
    onUpload() {
      wx.chooseMessageFile({
        count: 3,
        type: 'all',
        success: (res) => {
          const newFiles = res.tempFiles.map(f => ({
            name: f.name,
            size: (f.size / 1024).toFixed(1) + ' KB'
          }))
          this.setData({ files: [...this.data.files, ...newFiles] })
        }
      })
    },
    onRemoveFile(e: WechatMiniprogram.TouchEvent) {
      const index = e.currentTarget.dataset.index
      const files = this.data.files
      files.splice(index, 1)
      this.setData({ files })
    },
    saveDraft() {
      if (!this.data.title && !this.data.content) {
        wx.showToast({ title: '没有内容可保存', icon: 'none' })
        return
      }
      wx.setStorageSync('post_draft_title', this.data.title)
      wx.setStorageSync('post_draft_content', this.data.content)
      wx.showToast({ title: '草稿已保存', icon: 'success' })
    },
    previewPost() {
      if (!this.data.title.trim() && !this.data.content.trim()) {
        wx.showToast({ title: '请输入标题和内容以预览', icon: 'none' })
        return
      }
      // 获取选中的标签名
      const selectedTags = this.data.tags.filter(t => t.selected).map(t => t.name).join(' ')
      wx.showModal({
        title: this.data.title || '无标题',
        content: `标签：${selectedTags || '无'}\n\n${this.data.content || '(暂无内容)'}`,
        showCancel: false,
        confirmText: '返回编辑',
        confirmColor: '#2563eb'
      })
    },
    onCancel() {
      wx.navigateBack()
    },
    onSubmit() {
      if (!this.data.title.trim()) {
        wx.showToast({ title: '请输入帖子标题', icon: 'none' })
        return
      }
      if (!this.data.content.trim()) {
        wx.showToast({ title: '请输入帖子内容', icon: 'none' })
        return
      }
      wx.showToast({ title: '帖子发布成功！', icon: 'success' })
      setTimeout(() => {
        wx.switchTab({ url: '/pages/community/community' })
      }, 1500)
    }
  },
  lifetimes: {
    attached() {
      const savedTitle = wx.getStorageSync('post_draft_title') || ''
      const savedContent = wx.getStorageSync('post_draft_content') || ''
      if (savedTitle || savedContent) {
        this.setData({
          title: savedTitle,
          titleLength: savedTitle.length,
          content: savedContent,
          contentLength: savedContent.length
        })
      }
    }
  }
})
