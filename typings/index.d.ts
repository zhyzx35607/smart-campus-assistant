/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: {
      name: string
      studentId: string
      college: string
      grade: string
      avatar: string
    }
    isLoggedIn: boolean
    userTags?: Array<{
      name: string
      count: number
      lastAsked: string
    }>
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}
