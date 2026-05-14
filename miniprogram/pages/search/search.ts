Component({
  data: {
    keyword: '',
    autoFocus: false,
    hasSearched: false,
    hotKeywords: ['选课系统', '热水', '食堂', '图书馆', '创业补贴', '保研'],
    searchResults: [] as Array<any>
  },
  lifetimes: {
    attached() {
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1] as any
      const query = currentPage.options?.q || ''
      if (query) {
        this.setData({ keyword: decodeURIComponent(query), autoFocus: false })
        this.performSearch(decodeURIComponent(query))
      } else {
        this.setData({ autoFocus: true })
      }
    }
  },
  methods: {
    onKeywordInput(e: WechatMiniprogram.Input) {
      this.setData({ keyword: e.detail.value })
    },
    onKeywordTap(e: WechatMiniprogram.TouchEvent) {
      const keyword = e.currentTarget.dataset.keyword
      this.setData({ keyword })
      this.performSearch(keyword)
    },
    onSearch() {
      const keyword = this.data.keyword.trim()
      if (!keyword) {
        wx.showToast({ title: '请输入搜索关键词', icon: 'none' })
        return
      }
      this.performSearch(keyword)
    },
    performSearch(keyword: string) {
      // 模拟搜索结果
      const results = [
        {
          id: 1,
          avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/aa1981e3a6d94c17abfdbd9ea07794fc.jpg',
          author: '学霸王学长',
          time: '2026-04-07 10:30',
          tag: '#经验分享',
          tagClass: 'tag-orange',
          title: '关于 2026 年选课系统崩溃后的补救措施（亲测有效）',
          content: '今天早上选课系统又双叒叕崩了，AI 助手告诉我等半小时再试。但我发现一个偏门方法...',
          comments: 128,
          likes: 520,
          views: '3.2k'
        },
        {
          id: 2,
          avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/aa1981e3a6d94c17abfdbd9ea07794fc.jpg',
          author: '吃瓜群众甲',
          time: '2026-04-07 09:15',
          tag: '#热点吐槽',
          tagClass: 'tag-red',
          title: '【吐槽】AI 助手说今天西区有热水，结果我洗了个冷水澡！',
          content: '管理员出来挨打！AI 助手的实时动态数据是不是又延迟了？',
          comments: 89,
          likes: 312
        },
        {
          id: 3,
          avatar: '',
          author: '张同学',
          time: '1小时前',
          tag: '#组队招募',
          tagClass: 'tag-blue',
          title: '有没有 2026 春季英语竞赛组队的？差个大佬。',
          content: '',
          comments: 12,
          likes: 5
        }
      ]
      this.setData({ searchResults: results, hasSearched: true })
    },
    goToPostDetail(e: WechatMiniprogram.TouchEvent) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({ url: `/pages/post-detail/post-detail?id=${id}` })
    },
    goToCreatePost() {
      wx.navigateTo({ url: '/pages/create-post/create-post' })
    }
  }
})
