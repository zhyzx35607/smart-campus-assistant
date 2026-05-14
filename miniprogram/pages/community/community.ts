Component({
  data: {
    activeTab: 'all',
    sortBy: 'hot',
    hotRanking: [
      { id: 1, title: '考公热潮：2026国考倒计时' },
      { id: 2, title: '毕业生档案转递全攻略' },
      { id: 3, title: '南区食堂涨价传闻辟谣' },
      { id: 4, title: '智能占座系统合理性讨论' },
      { id: 5, title: '2026届保研名额预测' }
    ],
    posts: [
      {
        id: 1,
        avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/aa1981e3a6d94c17abfdbd9ea07794fc.jpg',
        author: '学霸王学长',
        authorTag: '认证：2026届学生代表',
        time: '2026-04-07 10:30',
        tag: '#经验分享',
        tagClass: 'tag-orange',
        title: '关于 2026 年选课系统崩溃后的补救措施（亲测有效）',
        content: '今天早上选课系统又双叒叕崩了，AI 助手告诉我等半小时再试。但我发现一个偏门方法：直接通过移动端内嵌的教务微应用进入选课节点 3，响应速度极快！此外，如果学分不够，记得去教务处 402 室找李老师现场登记...',
        comments: 128,
        likes: 520,
        views: '3.2k'
      },
      {
        id: 2,
        avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/aa1981e3a6d94c17abfdbd9ea07794fc.jpg',
        author: '吃瓜群众甲',
        authorTag: '',
        time: '2026-04-07 09:15',
        tag: '#热点吐槽',
        tagClass: 'tag-red',
        title: '【吐槽】AI 助手说今天西区有热水，结果我洗了个冷水澡！',
        content: '管理员出来挨打！AI 助手的实时动态数据是不是又延迟了？昨天下午就在停水维护了，今天早上我问 AI 助手，它居然还信誓旦旦告诉我水温 45 度。希望能加强 AI 对突发状况的捕捉能力！',
        images: [
          'https://modao.cc/agent-py/media/generated_images/2026-04-07/e714425a3b5f454c97253c51c6923fa2.jpg',
          'https://modao.cc/agent-py/media/generated_images/2026-04-07/e714425a3b5f454c97253c51c6923fa2.jpg'
        ],
        officialResponse: {
          author: '后勤中心 官方回应',
          content: '抱歉同学！由于网关故障，昨天的维护信息未能实时同步至 AI 语料库，我们已于 10:00 紧急修复了接口，并对 AI 进行了知识纠偏。感谢您的反馈！'
        },
        comments: 89,
        likes: 312
      },
      {
        id: 3,
        avatar: '',
        author: '张同学',
        authorTag: '',
        time: '1小时前',
        tag: '#组队招募',
        tagClass: 'tag-blue',
        title: '有没有 2026 春季英语竞赛组队的？差个大佬。',
        content: '',
        comments: 12,
        likes: 5
      }
    ]
  },
  methods: {
    onTabChange(e: WechatMiniprogram.TouchEvent) {
      this.setData({ activeTab: e.currentTarget.dataset.tab })
    },
    onSortChange(e: WechatMiniprogram.TouchEvent) {
      this.setData({ sortBy: e.currentTarget.dataset.sort })
    },
    goToSearch() {
      wx.navigateTo({ url: '/pages/search/search' })
    },
    goToCreatePost() {
      wx.navigateTo({ url: '/pages/create-post/create-post' })
    },
    goToPostDetail(e: WechatMiniprogram.TouchEvent) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({ url: `/pages/post-detail/post-detail?id=${id}` })
    },
    onHotTopic(e: WechatMiniprogram.TouchEvent) {
      const keyword = e.currentTarget.dataset.keyword
      wx.navigateTo({ url: `/pages/search/search?q=${encodeURIComponent(keyword)}` })
    },
    onCrowdParticipate() {
      wx.showToast({ title: '纠偏功能开发中', icon: 'none' })
    },
    loadMore() {
      wx.showToast({ title: '加载中...', icon: 'none' })
    }
  }
})
