// 基于标签的推荐问题库
const TAG_RECOMMENDATIONS: Record<string, Array<{ id: number, title: string, question: string, icon: string, tag: string, bgColor: string }>> = {
  '教务教学': [
    { id: 1, title: '选课操作指南', question: '怎么进行网上选课？', icon: '📖', tag: '教务教学', bgColor: '#eff6ff' },
    { id: 2, title: '学分认定规则', question: '创新创业学分如何认定？', icon: '🎓', tag: '教务教学', bgColor: '#eff6ff' },
    { id: 3, title: '考试补考政策', question: '补考和重修有什么区别？', icon: '📝', tag: '教务教学', bgColor: '#eff6ff' },
    { id: 4, title: '毕业设计流程', question: '毕业设计开题需要准备什么？', icon: '✍️', tag: '教务教学', bgColor: '#eff6ff' }
  ],
  '财务报销': [
    { id: 5, title: '差旅费报销', question: '差旅费报销需要什么材料？', icon: '💰', tag: '财务报销', bgColor: '#fef3c7' },
    { id: 6, title: '创业补贴申请', question: '大学生创业补贴怎么申请？', icon: '🚀', tag: '财务报销', bgColor: '#fef3c7' },
    { id: 7, title: '学费缴纳方式', question: '学费有哪些缴费方式？', icon: '💳', tag: '财务报销', bgColor: '#fef3c7' }
  ],
  '后勤服务': [
    { id: 8, title: '宿舍报修入口', question: '宿舍空调不制冷怎么办？', icon: '🔧', tag: '后勤服务', bgColor: '#f0fdf4' },
    { id: 9, title: '校园卡挂失', question: '校园卡丢了怎么补办？', icon: '💳', tag: '后勤服务', bgColor: '#f0fdf4' },
    { id: 10, title: '校园网办理', question: '校园网怎么连接和提速？', icon: '🌐', tag: '后勤服务', bgColor: '#f0fdf4' },
    { id: 11, title: '热水供应时间', question: '宿舍热水什么时候有？', icon: '🚿', tag: '后勤服务', bgColor: '#f0fdf4' }
  ],
  '图书学术': [
    { id: 12, title: '图书馆开馆时间', question: '图书馆几点开门关门？', icon: '📚', tag: '图书学术', bgColor: '#faf5ff' },
    { id: 13, title: '座位预约教程', question: '图书馆座位怎么预约？', icon: '🪑', tag: '图书学术', bgColor: '#faf5ff' },
    { id: 14, title: '借书规则说明', question: '本科生能借几本书？', icon: '📖', tag: '图书学术', bgColor: '#faf5ff' }
  ],
  '校园生活': [
    { id: 15, title: '城院美食地图', question: '城院周边有什么好吃的？', icon: '🍜', tag: '校园生活', bgColor: '#fff1f2' },
    { id: 16, title: '花哥烤肉在哪', question: '花哥烤肉怎么走？', icon: '🥩', tag: '校园生活', bgColor: '#fff1f2' },
    { id: 17, title: '奶酸菜鱼推荐', question: '哪家奶酸菜鱼好吃？', icon: '🐟', tag: '校园生活', bgColor: '#fff1f2' },
    { id: 18, title: '周边购物指南', question: '学校附近哪有商场？', icon: '🛒', tag: '校园生活', bgColor: '#fff1f2' }
  ],
  '就业指导': [
    { id: 19, title: '校招信息查询', question: '哪里可以看到招聘信息？', icon: '💼', tag: '就业指导', bgColor: '#ecfeff' },
    { id: 20, title: '实习证明办理', question: '实习需要什么手续？', icon: '🏢', tag: '就业指导', bgColor: '#ecfeff' },
    { id: 21, title: '三方协议签订', question: '三方协议怎么签？', icon: '📋', tag: '就业指导', bgColor: '#ecfeff' }
  ]
}

// 默认推荐（无标签时使用）
const DEFAULT_RECOMMENDATIONS = [
  { id: 101, title: '选课操作指南', question: '怎么进行网上选课？', icon: '📖', tag: '热门', bgColor: '#eff6ff' },
  { id: 102, title: '宿舍报修入口', question: '宿舍空调不制冷怎么办？', icon: '🔧', tag: '热门', bgColor: '#f0fdf4' },
  { id: 103, title: '城院美食地图', question: '城院周边有什么好吃的？', icon: '🍜', tag: '热门', bgColor: '#fff1f2' },
  { id: 104, title: '创业补贴申请', question: '大学生创业补贴怎么申请？', icon: '🚀', tag: '热门', bgColor: '#fef3c7' },
  { id: 105, title: '图书馆预约', question: '图书馆座位怎么预约？', icon: '🪑', tag: '热门', bgColor: '#faf5ff' }
]

Component({
  data: {
    dateInfo: '',
    hotSearches: ['CET-4报名入口', '图书馆闭馆调整', '春季运动会', '校园网提速方案'],
    announcements: [
      {
        id: 1,
        tag: '教务',
        tagClass: 'tag-blue',
        title: '关于2026年春季学期期中教学检查工作的通知',
        desc: '请各学院于4月15日前提交相关自查报告...',
        time: '10分钟前'
      },
      {
        id: 2,
        tag: '后勤',
        tagClass: 'tag-green',
        title: '西区学生公寓热水系统维护停水通告',
        desc: '因管道升级，4月8日13:00-17:00将暂停热水供应...',
        time: '1小时前'
      },
      {
        id: 3,
        tag: '学术',
        tagClass: 'tag-purple',
        title: '【弘深讲坛】第128期：生成式AI在科研中的前沿应用',
        desc: '主讲人：李华教授（国家级领军人才） 时间：周四 19:00',
        time: '3小时前'
      }
    ],
    hotTopics: [
      { id: 1, title: '2026届校招大厂投递指南', trend: 'up' },
      { id: 2, title: '食堂二楼新开的轻食窗口测评', trend: 'up' },
      { id: 3, title: '图书馆AI占座插件违法通告', trend: 'down' },
      { id: 4, title: '选修课《数字游民生活方式》', trend: 'flat' },
      { id: 5, title: '校园巴士最新线路规划', trend: 'up' }
    ],
    services: [
      { id: 1, name: '教务教学', desc: '课程、考试、学分', icon: '🎓', bgColor: '#eff6ff' },
      { id: 2, name: '后勤报修', desc: '宿舍维修、班车', icon: '🔧', bgColor: '#f0fdf4' },
      { id: 3, name: '图书学术', desc: '馆藏查询、预约', icon: '📚', bgColor: '#faf5ff' },
      { id: 4, name: '校园卡', desc: '充值、挂失、流水', icon: '💳', bgColor: '#fff7ed' },
      { id: 5, name: '心理咨询', desc: '在线评估、预约', icon: '❤️', bgColor: '#fff1f2' },
      { id: 6, name: '勤工俭学', desc: '校内岗位、奖助', icon: '💼', bgColor: '#ecfeff' },
      { id: 7, name: '场馆申请', desc: '体育馆、多功能厅', icon: '🏟️', bgColor: '#eef2ff' },
      { id: 8, name: '更多服务', desc: '敬请期待', icon: '➕', bgColor: '#f8fafc' }
    ],
    // 个性化推荐数据
    personalizedRecs: [] as Array<{ id: number, title: string, question: string, icon: string, tag: string, bgColor: string }>,
    userTopInterest: ''
  },

  lifetimes: {
    attached() {
      this.updateDateInfo()
      this.loadPersonalizedRecommendations()
    }
  },

  methods: {
    // 更新日期时间信息
    updateDateInfo() {
      const now = new Date()
      const weekDays = ['日', '一', '二', '三', '四', '五', '六']
      const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      const dateStr = `${now.getFullYear()}年${months[now.getMonth()]}月${now.getDate()}日 · 星期${weekDays[now.getDay()]}`
      // 模拟天气
      this.setData({
        dateInfo: `${dateStr} · 晴 ${Math.floor(15 + Math.random() * 15)}°C`
      })
    },

    // 加载个性化推荐
    loadPersonalizedRecommendations() {
      try {
        const app = getApp<IAppOption>()
        const userTags = app.globalData.userTags || []

        if (userTags.length === 0) {
          // 没有标签时显示默认推荐
          this.setData({ personalizedRecs: DEFAULT_RECOMMENDATIONS })
          return
        }

        // 按count排序获取用户最感兴趣的标签
        const sortedTags = [...userTags].sort((a, b) => b.count - a.count)
        const topTag = sortedTags[0]
        this.setData({ userTopInterest: topTag.name })

        // 获取该标签的推荐内容，混合其他兴趣标签的内容
        let recs: typeof DEFAULT_RECOMMENDATIONS = []
        const maxPerTag = 3

        for (let i = 0; i < Math.min(sortedTags.length, 2); i++) {
          const tagName = sortedTags[i].name
          const tagRecs = TAG_RECOMMENDATIONS[tagName]
          if (tagRecs) {
            recs = [...recs, ...tagRecs.slice(0, maxPerTag)]
          }
        }

        // 如果推荐不够，补充默认推荐
        if (recs.length < 4) {
          const existingIds = new Set(recs.map(r => r.id))
          const additional = DEFAULT_RECOMMENDATIONS.filter(r => !existingIds.has(r.id))
          recs = [...recs, ...additional.slice(0, 4 - recs.length)]
        }

        this.setData({ personalizedRecs: recs.slice(0, 6) })
      } catch (e) {
        console.error('加载推荐失败:', e)
        this.setData({ personalizedRecs: DEFAULT_RECOMMENDATIONS })
      }
    },

    goToChat() {
      wx.switchTab({ url: '/pages/chat/chat' })
    },

    // 语音提问快捷入口
    goToChatWithVoice() {
      wx.switchTab({
        url: '/pages/chat/chat',
        success: () => {
          // 切换到聊天页后延迟设置语音模式
          setTimeout(() => {
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 1] as any
            if (currentPage && currentPage.setData) {
              currentPage.setData({ isVoiceMode: true })
            }
          }, 300)
        }
      })
    },

    goToSearch() {
      wx.navigateTo({ url: '/pages/search/search' })
    },

    goToCommunity() {
      wx.switchTab({ url: '/pages/community/community' })
    },

    onHotSearch(e: WechatMiniprogram.TouchEvent) {
      const keyword = e.currentTarget.dataset.keyword
      wx.navigateTo({ url: `/pages/search/search?q=${encodeURIComponent(keyword)}` })
    },

    // 点击推荐问题，跳转到聊天页并发送
    onRecTap(e: WechatMiniprogram.TouchEvent) {
      const question = e.currentTarget.dataset.q as string
      wx.switchTab({
        url: '/pages/chat/chat',
        success: () => {
          setTimeout(() => {
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 1] as any
            if (currentPage && currentPage.setData && currentPage.sendMessage) {
              currentPage.setData({ inputText: question })
              currentPage.sendMessage()
            }
          }, 400)
        }
      })
    }
  }
})
