Component({
  data: {
    selected: 0,
    list: [
      { pagePath: "/pages/index/index", text: "首页", icon: "🏠" },
      { pagePath: "/pages/chat/chat", text: "AI助手", icon: "🤖" },
      { pagePath: "/pages/community/community", text: "社区", icon: "💬" },
      { pagePath: "/pages/profile/profile", text: "我的", icon: "👤" }
    ]
  },
  methods: {
    switchTab(e: WechatMiniprogram.TouchEvent) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
    }
  }
})
