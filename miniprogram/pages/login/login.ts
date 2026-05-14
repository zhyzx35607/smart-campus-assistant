Component({
  data: {
    loginType: 'password',
    studentId: '',
    password: '',
    showPassword: false,
    rememberPwd: false,
    phone: '',
    smsCode: '',
    countdown: 0
  },
  methods: {
    switchToPassword() {
      this.setData({ loginType: 'password' })
    },
    switchToSms() {
      this.setData({ loginType: 'sms' })
    },
    onStudentIdInput(e: WechatMiniprogram.Input) {
      this.setData({ studentId: e.detail.value })
    },
    onPasswordInput(e: WechatMiniprogram.Input) {
      this.setData({ password: e.detail.value })
    },
    onPhoneInput(e: WechatMiniprogram.Input) {
      this.setData({ phone: e.detail.value })
    },
    onSmsCodeInput(e: WechatMiniprogram.Input) {
      this.setData({ smsCode: e.detail.value })
    },
    togglePassword() {
      this.setData({ showPassword: !this.data.showPassword })
    },
    onRememberChange(e: WechatMiniprogram.SwitchChange) {
      this.setData({ rememberPwd: e.detail.value })
    },
    getSmsCode() {
      if (this.data.countdown > 0) return
      if (!this.data.phone || this.data.phone.length !== 11) {
        wx.showToast({ title: '请输入正确的手机号', icon: 'none' })
        return
      }
      wx.showToast({ title: '验证码已发送', icon: 'none' })
      let count = 60
      this.setData({ countdown: count })
      const timer = setInterval(() => {
        count--
        if (count <= 0) {
          clearInterval(timer)
          this.setData({ countdown: 0 })
        } else {
          this.setData({ countdown: count })
        }
      }, 1000)
    },
    onLogin() {
      if (this.data.loginType === 'password') {
        if (!this.data.studentId) {
          wx.showToast({ title: '请输入学号', icon: 'none' })
          return
        }
        if (!this.data.password) {
          wx.showToast({ title: '请输入密码', icon: 'none' })
          return
        }
      } else {
        if (!this.data.phone) {
          wx.showToast({ title: '请输入手机号', icon: 'none' })
          return
        }
        if (!this.data.smsCode) {
          wx.showToast({ title: '请输入验证码', icon: 'none' })
          return
        }
      }
      wx.showToast({ title: '登录成功', icon: 'success' })
      setTimeout(() => {
        wx.switchTab({ url: '/pages/index/index' })
      }, 1000)
    }
  }
})
