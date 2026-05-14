Component({
  data: {
    avatarUrl: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/547714c6f57d4e1f8fcf0a8b1b06eeae.jpg',
    bioLength: 0,
    colleges: ['计算机与计算科学学院', '工程学院', '商学院', '法学院', '信电学院'],
    collegeIndex: 0,
    grades: ['2023级', '2024级', '2025级', '2026级', '2027级'],
    gradeIndex: 0,
    provinces: ['请选择省份', '浙江省', '江苏省', '上海市', '北京市', '广东省', '山东省', '四川省', '湖北省', '河南省', '湖南省', '安徽省', '江西省', '福建省'],
    provinceIndex: 0,
    // 自定义picker
    showPickerPopup: false,
    pickerType: '',
    pickerTitle: '',
    pickerRange: [] as string[],
    pickerValue: [0],
    pickerTempIndex: 0,
    formData: {
      fullname: '王同学',
      studentId: '32301258',
      email: 'wang@zucc.edu.cn',
      phone: '13800138000',
      gender: 'secret',
      bio: '热爱编程，喜欢探索新技术。曾担任校学生会技术部部长，熟悉Python和Web开发。',
      hometown: ''
    }
  },
  lifetimes: {
    attached() {
      this.setData({ bioLength: this.data.formData.bio.length })
    }
  },
  methods: {
    onFullnameInput(e: WechatMiniprogram.Input) { this.setData({ 'formData.fullname': e.detail.value }) },
    onEmailInput(e: WechatMiniprogram.Input) { this.setData({ 'formData.email': e.detail.value }) },
    onPhoneInput(e: WechatMiniprogram.Input) { this.setData({ 'formData.phone': e.detail.value }) },
    onHometownInput(e: WechatMiniprogram.Input) { this.setData({ 'formData.hometown': e.detail.value }) },
    onBioInput(e: WechatMiniprogram.Input) {
      const val = e.detail.value
      this.setData({ 'formData.bio': val, bioLength: val.length })
    },
    onCollegeChange(e: WechatMiniprogram.PickerChange) { this.setData({ collegeIndex: Number(e.detail.value) }) },
    onGradeChange(e: WechatMiniprogram.PickerChange) { this.setData({ gradeIndex: Number(e.detail.value) }) },
    onProvinceChange(e: WechatMiniprogram.PickerChange) { this.setData({ provinceIndex: Number(e.detail.value) }) },
    // 自定义选择器
    showPicker(e: WechatMiniprogram.TouchEvent) {
      const type = e.currentTarget.dataset.type as string
      let range: string[] = []
      let title = ''
      let currentIndex = 0

      switch (type) {
        case 'college':
          range = this.data.colleges
          title = '选择学院'
          currentIndex = this.data.collegeIndex
          break
        case 'grade':
          range = this.data.grades
          title = '选择年级'
          currentIndex = this.data.gradeIndex
          break
        case 'province':
          range = this.data.provinces
          title = '选择家乡省份'
          currentIndex = this.data.provinceIndex
          break
        default:
          return
      }

      this.setData({
        showPickerPopup: true,
        pickerType: type,
        pickerTitle: title,
        pickerRange: range,
        pickerValue: [currentIndex],
        pickerTempIndex: currentIndex
      })
    },
    hidePicker() {
      this.setData({ showPickerPopup: false })
    },
    onPickerChange(e: WechatMiniprogram.PickerChange) {
      this.setData({
        pickerValue: e.detail.value,
        pickerTempIndex: e.detail.value[0]
      })
    },
    confirmPicker() {
      const type = this.data.pickerType
      const idx = this.data.pickerTempIndex

      switch (type) {
        case 'college': this.setData({ collegeIndex: idx }); break
        case 'grade': this.setData({ gradeIndex: idx }); break
        case 'province': this.setData({ provinceIndex: idx }); break
      }

      this.setData({ showPickerPopup: false })
    },
    onGenderChange(e: WechatMiniprogram.TouchEvent) {
      this.setData({ 'formData.gender': e.currentTarget.dataset.value })
    },
    onUploadAvatar() {
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.setData({ avatarUrl: res.tempFilePaths[0] })
        }
      })
    },
    onDefaultAvatar() {
      this.setData({ avatarUrl: 'https://modao.cc/agent-py/media/generated_images/2026-04-07/547714c6f57d4e1f8fcf0a8b1b06eeae.jpg' })
    },
    onCancel() { wx.navigateBack() },
    onReset() {
      wx.showModal({
        title: '提示',
        content: '确定要重置所有更改吗？',
        success: (res) => { if (res.confirm) wx.navigateBack() }
      })
    },
    onSave() {
      if (!this.data.formData.fullname) {
        wx.showToast({ title: '请输入姓名', icon: 'none' })
        return
      }
      wx.showToast({ title: '个人资料已保存！', icon: 'success' })
      setTimeout(() => wx.navigateBack(), 1000)
    }
  }
})
