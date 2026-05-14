Component({
  data: {
    liked: false,
    bookmarked: false,
    commentText: '',
    post: {
      id: 1,
      avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/aa1981e3a6d94c17abfdbd9ea07794fc.jpg',
      author: '王学长',
      authorTag: '认证：2026届学生代表',
      time: '2026-04-07 10:30',
      title: '关于 2026 年选课系统崩溃后的补救措施（亲测有效）',
      content: '今天早上选课系统又双叒叕崩了，AI 助手告诉我等半小时再试。但我发现一个偏门方法：直接通过移动端内嵌的教务微应用进入选课节点 3，响应速度极快！此外，如果学分不够，记得去教务处 402 室找李老师现场登记...',
      likes: 520,
      comments: 128,
      officialResponse: {
        author: '后勤中心 官方回应',
        content: '感谢同学的分享！关于系统卡顿问题，信息中心已紧急扩容服务器带宽，预计明天恢复正常。同时已将该同学的选课偏门方法提交给教务处评估是否合规。'
      }
    },
    commentList: [
      { id: 1, avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/8b2d6af6c1f2497e96d0d5e3b0343600.jpg', author: '张同学', content: '太有用了！我已经按照方法成功选上课了', time: '2小时前', likes: 23 },
      { id: 2, avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/aa1981e3a6d94c17abfdbd9ea07794fc.jpg', author: '李同学', content: '教务处402的李老师人超级好，上次也是找她帮忙的', time: '1小时前', likes: 15 }
    ]
  },
  methods: {
    onLike() {
      this.setData({ liked: !this.data.liked })
      if (this.data.liked) {
        this.setData({ 'post.likes': this.data.post.likes + 1 })
      } else {
        this.setData({ 'post.likes': this.data.post.likes - 1 })
      }
    },
    onBookmark() {
      this.setData({ bookmarked: !this.data.bookmarked })
      wx.showToast({ title: this.data.bookmarked ? '已收藏' : '取消收藏', icon: 'none' })
    },
    onCommentInput(e: WechatMiniprogram.Input) {
      this.setData({ commentText: e.detail.value })
    },
    onSendComment() {
      if (!this.data.commentText.trim()) {
        wx.showToast({ title: '请输入评论内容', icon: 'none' })
        return
      }
      const newComment = {
        id: this.data.commentList.length + 1,
        avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/547714c6f57d4e1f8fcf0a8b1b06eeae.jpg',
        author: '王同学',
        content: this.data.commentText,
        time: '刚刚',
        likes: 0
      }
      this.setData({
        commentList: [...this.data.commentList, newComment],
        commentText: ''
      })
      wx.showToast({ title: '评论成功', icon: 'success' })
    }
  }
})
