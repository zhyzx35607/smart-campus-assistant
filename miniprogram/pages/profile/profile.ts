Component({
  data: {
    userInfo: {
      name: '王同学',
      studentId: '32301258',
      college: '软件工程',
      grade: '2023级',
      avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/547714c6f57d4e1f8fcf0a8b1b06eeae.jpg'
    },
    activeTab: 'qa',
    darkMode: false,
    // 用户兴趣标签（从全局数据读取）
    userTags: [] as Array<{ name: string, count: number, lastAsked: string }>,
    totalTagCount: 0,
    qaHistory: [
      {
        id: 1,
        date: '2026-04-07 14:30',
        question: '如何申请大学生创业补贴？',
        answer: '根据《2026年高校毕业生创业扶持政策实施细则》，申请流程如下...',
        status: '已答',
        hasFeedback: true
      },
      {
        id: 2,
        date: '2026-04-06 09:15',
        question: '图书馆闭馆时间调整了吗？',
        answer: '图书馆闭馆时间已调整为晚上22:30...',
        status: '已答',
        hasFeedback: false
      },
      {
        id: 3,
        date: '2026-04-05 20:00',
        question: '校园网怎么提速？',
        answer: '校园网提速可前往信息中心办理...',
        status: '待优化',
        hasFeedback: false
      }
    ],
    myPosts: [
      {
        id: 1,
        title: '关于选课系统崩溃的吐槽',
        date: '2026-04-06',
        content: '今天选课系统又崩了，希望学校能优化一下服务器...',
        likes: 23,
        comments: 8
      },
      {
        id: 2,
        title: '南区食堂新窗口推荐！',
        date: '2026-04-05',
        content: '南区食堂新开的轻食窗口真的很不错...',
        likes: 56,
        comments: 15
      }
    ],
    feedbackRecords: [
      {
        id: 1,
        title: '反馈：关于热水时间的问题',
        desc: 'AI回答的热水时间与实际不符',
        status: '已处理',
        result: '处理结果：已更新热水时间数据源'
      },
      {
        id: 2,
        title: '反馈：创业补贴材料清单不全',
        desc: 'AI回答的材料清单缺少了2项',
        status: '审核中',
        result: ''
      }
    ]
  },
  lifetimes: {
    attached() {
      this.loadUserTags()
    }
  },
  methods: {
    // 加载用户兴趣标签
    loadUserTags() {
      try {
        const app = getApp<IAppOption>()
        const tags = app.globalData.userTags || []
        // 按count降序排列
        const sortedTags = [...tags].sort((a, b) => b.count - a.count)
        const totalCount = sortedTags.reduce((sum, t) => sum + t.count, 0)
        this.setData({
          userTags: sortedTags,
          totalTagCount: totalCount
        })
      } catch (e) {
        console.error('加载标签失败:', e)
      }
    },
    // 跳转到聊天页
    goToChat() {
      wx.switchTab({ url: '/pages/chat/chat' })
    },
    onTabChange(e: WechatMiniprogram.TouchEvent) {
      this.setData({ activeTab: e.currentTarget.dataset.tab })
    },
    goToEditProfile() {
      wx.navigateTo({ url: '/pages/edit-profile/edit-profile' })
    },
    goToNotificationSettings() {
      wx.navigateTo({ url: '/pages/notification-settings/notification-settings' })
    },
    goToSecurityPrivacy() {
      wx.navigateTo({ url: '/pages/security-privacy/security-privacy' })
    },
    onDarkModeChange(e: WechatMiniprogram.SwitchChange) {
      this.setData({ darkMode: e.detail.value })
      wx.showToast({ title: '深色模式开发中', icon: 'none' })
    },
    onQaFeedback(e: WechatMiniprogram.TouchEvent) {
      const type = e.currentTarget.dataset.type
      wx.showToast({ title: type === 'helpful' ? '感谢反馈！' : '我们会继续优化', icon: 'none' })
    },
    onLogout() {
      wx.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            wx.redirectTo({ url: '/pages/login/login' })
          }
        }
      })
    }
  }
})
