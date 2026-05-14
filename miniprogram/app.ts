App<IAppOption>({
  onLaunch() {
    wx.login({
      success: res => { console.log(res.code) }
    })

    // 从本地存储恢复用户兴趣标签
    try {
      const savedTags = wx.getStorageSync('userInterestTags')
      if (savedTags && Array.isArray(savedTags)) {
        this.globalData.userTags = savedTags
      }
    } catch (e) {
      console.error('读取标签失败:', e)
    }
  },
  globalData: {
    userInfo: {
      name: '王同学',
      studentId: '32301258',
      college: '计算机与计算科学学院',
      grade: '2023级',
      avatar: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/547714c6f57d4e1f8fcf0a8b1b06eeae.jpg'
    },
    isLoggedIn: true,
    // 用户兴趣标签（基于问答历史自动生成）
    userTags: [] as Array<{ name: string, count: number, lastAsked: string }>
  }
})
