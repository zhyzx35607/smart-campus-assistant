// 问题分类关键词映射
const CATEGORY_KEYWORDS: Record<string, { keywords: string[], tag: string, category: string }> = {
  academic: {
    keywords: ['选课', '课程', '学分', '教务', '考试', '成绩', '补考', '重修', '绩点', '培养方案', '开题', '毕业设计', '论文', '学位', '辅修', '转专业', '休学', '复学'],
    tag: '教务教学',
    category: 'academic'
  },
  finance: {
    keywords: ['学费', '缴费', '报销', '发票', '补贴', '奖学金', '助学金', '贷款', '创业补贴', '费用', '收费'],
    tag: '财务报销',
    category: 'finance'
  },
  logistics: {
    keywords: ['宿舍', '报修', '热水', '空调', '水电', '门禁', '食堂', '餐饮', '校园网', '网络', '校园卡', '一卡通', '洗澡', '洗衣机', '快递'],
    tag: '后勤服务',
    category: 'logistics'
  },
  library: {
    keywords: ['图书馆', '借书', '还书', '馆藏', '预约座位', '占座', '数据库', '文献', '期刊', '阅览', '闭馆', '开馆'],
    tag: '图书学术',
    category: 'library'
  },
  campusLife: {
    keywords: ['美食', '好吃的', '花哥', '肉夹馍', '奶酸菜鱼', '周边', '外卖', '小吃', '餐厅', '推荐', '哪里吃', '有什么吃的', '城院'],
    tag: '校园生活',
    category: 'campusLife'
  },
  career: {
    keywords: ['就业', '招聘', '实习', '校招', '简历', '面试', '创业', '职业', '三方协议', '档案', '报到证'],
    tag: '就业指导',
    category: 'career'
  }
}

// 智能回答库（按分类）
const KNOWLEDGE_BASE: Record<string, Array<{ question: string[], answer: string, reference: string }>> = {
  academic: [
    {
      question: ['选课', '怎么选课', '如何选课', '修改选课计划'],
      answer: '选课操作步骤如下：\n\n1. 登录教务系统（jwc.zucc.edu.cn）\n2. 进入"学生服务"→"选课管理"→"学生选课"\n3. 选择对应学期的选课批次（预选/正选/补退选）\n4. 在课程列表中搜索或浏览课程\n5. 点击"选择"按钮添加至选课篮\n6. 确认提交选课结果\n\n⚠️ 注意事项：\n· 预选阶段采用志愿优先、抽签模式\n· 正选阶段先到先得\n· 每学期学分上限为32学分\n· 体育课程需单独在体育选课系统中选择',
      reference: '参考来源：教务处-《学生选课指南2026》'
    },
    {
      question: ['学分', '学分认定', '学分转换'],
      answer: '学分认定规则说明：\n\n1. 课程学分认定：\n   · 校内课程互认：由开课学院审核\n   · 转入学分认定：需提供原学校成绩单及课程大纲\n\n2. 创新创业学分：\n   · 学科竞赛获奖可认定1-4学分\n   · 大创项目结题可认定2学分\n   · 发表论文/专利可认定1-3学分\n\n3. 认定流程：\n   填写《学分认定申请表》→学院初审→教务处复审→系统录入\n\n📞 咨询电话：教务处 88018452',
      reference: '参考来源：教务处-《学分认定管理办法》'
    },
    {
      question: ['考试', '补考', '重修', '缓考'],
      answer: '关于考试相关政策：\n\n【补考】\n· 对象：必修课期末考试成绩低于60分的学生\n· 时间：每学期开学后第1-2周\n· 补考成绩最高记60分\n\n【重修】\n· 对象：补考仍不合格 / 缺考 / 违纪的学生\n· 方式：跟随下一轮次课程重新修读\n· 费用：按学分收取重修费（80元/学分）\n\n【缓考申请】\n· 条件：因病/因公不能参加考试\n· 材料：医院证明/单位证明\n· 流程：考前在教务系统提交申请→学院审批',
      reference: '参考来源：教务处-《考试管理办法》第12章'
    },
    {
      question: ['毕业设计', '开题', '论文'],
      answer: '毕业设计（论文）流程指引：\n\n【时间节点】\n· 第7学期第10-12周：选题与双选\n· 第7学期第16周前：开题报告提交\n· 第8学期第4周：中期检查\n· 第8学期第12-14周：答辩\n· 第8学期第16周：最终材料归档\n\n【开题要求】\n1. 完成文献阅读不少于15篇（外文≥3篇）\n2. 提交开题报告（含任务书、进度安排、参考文献）\n3. 通过开题答辩后方可进入正式撰写阶段\n\n【格式要求】\n遵循《浙大城市学院本科毕业设计格式规范》（2026版）',
      reference: '参考来源：教务处-《毕业设计工作手册2026》'
    }
  ],
  finance: [
    {
      question: ['报销', '怎么报销', '报销流程'],
      answer: '财务报销流程如下：\n\n1. 准备材料：\n   · 原始发票（抬头：浙大城市学院）\n   · 报销单据（教务系统打印或财务处领取）\n   · 相关证明材料（会议通知、出差审批单等）\n\n2. 审批流程：\n   经办人填报 → 项目负责人审批 → 部门负责人审批 → 财务处审核\n\n3. 投递方式：\n   · 投递箱位置：行政楼1楼财务大厅\n   · 网上报销：登录财务系统自助填报\n\n4. 处理时限：\n   · 一般报销：5-7个工作日\n   · 急件：3个工作日内\n\n💡 小提示：每周三下午为财务接待咨询时间',
      reference: '参考来源：财务处-《报销办事指南》'
    },
    {
      question: ['创业补贴', '大学生创业'],
      answer: '根据《2026年高校毕业生创业扶持政策实施细则》：\n\n【申请条件】\n· 我校在校生或毕业5年内校友\n· 已注册营业执照或个体工商户\n· 企业正常运营3个月以上\n\n【补贴标准】\n· 创业补贴：最高10000元\n· 场租补贴：每年最高3000元（补贴3年）\n· 社保补贴：按实际缴纳金额50%给予补贴\n\n【申请流程】\n1. 登录"渝快办"APP搜索"大学生创业补贴"\n2. 准备材料：申请表、营业执照、经营证明、银行开户许可\n3. 提交后3个工作日内校就业指导中心初审\n\n📞 就业指导中心：88018034',
      reference: '参考来源：就业官网-2026第05号文件'
    },
    {
      question: ['学费', '缴费', '交学费'],
      answer: '学费缴纳方式说明：\n\n【缴费标准】\n· 普通专业：4800-5300元/学年\n· 艺术类：9000-10350元/学年\n· 中外合作：28000-35000元/学年\n· 住宿费：1200-1600元/学年\n\n【缴费方式】\n1. 银行代扣（推荐）：确保建行卡余额充足，学校统一扣款\n2. 线上缴费：登录校园统一支付平台 pay.zucc.edu.cn\n3. 现场缴费：行政楼1楼财务窗口\n\n【缴费时间】\n· 每学年8月20日前完成缴费\n· 助学贷款学生可在到账后补缴差额',
      reference: '参考来源：财务处-《收费公示》'
    }
  ],
  logistics: [
    {
      question: ['报修', '维修', '宿舍报修', '空调', '不制冷'],
      answer: '后勤报修流程说明：\n\n【线上报修（推荐）】\n1. 关注"浙大城市学院后勤"公众号\n2. 点击"服务大厅"→"网上报修"\n3. 选择报修类型、填写详情、上传照片\n4. 提交后可在"我的报修"中跟踪进度\n\n【报修类型及响应时间】\n· 水电紧急故障：2小时内响应\n· 空调维修：24小时内上门\n· 家具门窗：48小时内处理\n· 网络问题：联系信息中心（88018114）\n\n【空调专项说明】\n如空调不制冷，请先确认：\n1. 是否清洗过滤网（建议每月一次）\n2. 遥控器是否设为制冷模式\n3. 电源插头是否牢固\n如以上正常仍不制冷，请通过公众号报修',
      reference: '参考来源：后勤服务中心-《报修服务指南》'
    },
    {
      question: ['校园卡', '一卡通', '挂失', '充值'],
      answer: '校园卡（一卡通）业务办理：\n\n【充值方式】\n1. 支付宝充值：搜索"校园生活"→"校园卡充値"\n2. 现场充值：各食堂圈存机、行政楼卡务中心\n3. 微信充值：关注"浙大城市学院信息化"公众号\n\n【挂失流程】\n1. 即时挂失：拨打88018888 或登录 self.zucc.edu.cn\n2. 正式补办：携带身份证/学生证到卡务中心（行政楼108室）\n3. 补卡工本费：20元\n\n【常见问题】\n· 解冻：连续3次密码错误会锁定，需持卡到卡务中心解锁\n· 查询流水：可通过自助终端机或线上平台查询\n\n🕐 卡务中心工作时间：周一至周五 8:30-16:30',
      reference: '参考来源：信息化中心-《校园卡使用指南》'
    },
    {
      question: ['校园网', '网络', '上网', 'WiFi'],
      answer: '校园网使用指南：\n\n【网络接入】\n1. WiFi名称：ZUCC-Student（学生）/ ZUCC-Staff（教职工）\n2. 认证方式：统一身份认证（学号+密码）\n3. 同一时间最多允许2台设备在线\n\n【资费方案】\n· 基础套餐：20元/月（10GB流量+夜间免费）\n· 标准套餐：30元/月（30GB流量+夜间免费）\n· 高级套餐：50元/月（不限流量）\n· 夜间时段：23:00-次日8:00免流量\n\n【提速方案】\n如需更高带宽，可前往信息中心（图书馆9楼）办理提速业务。\n\n📞 网络报修：88018114',
      reference: '参考来源：信息化中心-《校园网使用手册》'
    },
    {
      question: ['热水', '洗澡', '热水供应'],
      answer: '宿舍热水供应说明：\n\n【供水时间】\n· 日常：11:30-14:00、17:00-23:30\n· 冬季延长：17:00-24:00（11月-3月）\n· 夏季调整：18:00-23:30（6月-9月）\n\n【水卡使用】\n1. 宿舍楼一楼有自助购水机\n2. 可用校园卡或支付宝充值水卡\n3. 水费标准：约40元/吨（含加热成本）\n\n【常见问题】\n· 无热水：检查水表余额，联系宿管阿姨报修\n· 水温不够：可能是用水高峰期，稍后再试\n\n⚠️ 如遇整栋楼停水，后勤会提前在公众号通知',
      reference: '参考来源：后勤服务中心-《学生公寓服务手册》'
    }
  ],
  library: [
    {
      question: ['图书馆', '闭馆', '开馆', '借书'],
      answer: '图书馆服务指南：\n\n【开放时间】\n· 周一至周五：7:30-22:30\n· 周六周日：8:30-22:00\n· 节假日：另行通知（关注图书馆官网）\n\n【借阅规则】\n· 本科生最多借10册，借期30天\n· 研究生最多借20册，借期60天\n· 可续借1次（15天），可在微信公众号或官网操作\n\n【电子资源】\n· 数据库：CNKI、万方、Web of Science等80余个\n· 校外访问：通过WebVPN（vpn.zucc.edu.cn）登录\n\n【座位预约】\n通过"浙大城市学院图书馆"公众号预约，每日21:00释放次日座位。\n\n📚 自习区：1-5层均有，3层为静音自习区',
      reference: '参考来源：图书馆-《读者服务手册2026》'
    },
    {
      question: ['占座', '预约座位'],
      answer: '关于图书馆座位预约系统：\n\n【预约方式】\n1. 关注"浙大城市学院图书馆"公众号\n2. 菜单栏："我的图书馆"→"座位预约"\n3. 选择日期、区域、座位号\n\n【使用规则】\n· 每次最长使用4小时，可续时1次\n· 签到：入座后扫码签到\n· 离座：临时离开须在系统中暂离（保留30分钟）\n· 违规：3次违规将被拉黑7天\n\n⚠️ 严禁物品占座！工作人员会定期清理无人座位上的物品。',
      reference: '参考来源：图书馆-《座位管理规定》'
    }
  ],
  campusLife: [
    {
      question: ['美食', '好吃', '花哥', '肉夹馍', '奶酸菜鱼', '吃什么', '推荐'],
      answer: '城院美食地图来啦！😋\n\n【南区食堂】\n· 一楼：大众快餐、兰州拉面、麻辣烫\n· 二楼：轻食窗口（新品！）、黄焖鸡米饭、石锅拌饭\n· 三楼：教工餐厅（性价比超高）\n\n【北区食堂】\n· 一楼：特色面档、盖浇饭、炒菜\n· 二楼：清真餐厅、自选称重\n\n【校外必吃推荐】 🌟\n· **花哥烤肉**：南门出来右转200m，人均35元，烤羊肉串必点！\n· **老王肉夹馍**：北门小吃街，肥瘦相间7元一个，酥到掉渣\n· **奶酸菜鱼**：学校东门对面，招牌奶酸菜鱼38元/份，酸爽开胃\n· **古茗奶茶**：校内两家店，点杨枝甘露不会错\n\n💡 更多美食欢迎来社区分享你的私藏店铺~',
      reference: '参考来源：社区学生口碑推荐'
    },
    {
      question: ['周边', '生活', '设施', '购物'],
      answer: '校园周边生活攻略：\n\n【交通出行】\n· 地铁5号线"善贤站"（距学校1.5km，骑行8分钟）\n· 公交B1路直达武林广场\n· 共享单车：校门口大量投放\n\n【购物娱乐】\n· 新天地购物中心：步行10分钟，影院/超市/KTV齐全\n· 远洋乐堤港：打车10分钟，品牌更全\n· 满分超市：北门出口，日常用品采购方便\n\n【银行网点】\n· 建设银行：校内行政楼1楼\n· 工商银行：学校东门对面\n· 中国银行：新天地商场1楼\n\n【医疗保健】\n· 校医院：行政楼西侧，门诊+药房\n· 树兰医院：地铁2站，综合三甲\n\n需要更具体的信息可以继续问我哦~',
      reference: '参考来源：校园生活服务中心'
    }
  ],
  career: [
    {
      question: ['就业', '招聘', '校招', '找工作'],
      answer: '就业服务指南：\n\n【校招信息渠道】\n1. 就业信息网：career.zucc.edu.cn\n2. "浙大城市学院就业"公众号\n3. 每年春秋两季大型双选会（3月、11月）\n\n【求职准备】\n· 简历修改：就业指导中心提供一对一咨询服务\n· 模拟面试：提前3天在就业网预约\n· 职业测评：霍兰德/MBA性格测试（就业网免费）\n\n【应届毕业生必做】\n1. 核对生源信息（11月底前）\n2. 签订三方协议（注意违约金条款）\n3. 档案转递：登录系统填写去向\n4. 户口迁移：凭《户口迁移证》办理\n\n📍 就业指导中心：行政楼215室\n☎️ 咨询电话：88018034',
      reference: '参考来源：就业指导中心-《2026届毕业生就业指南》'
    },
    {
      question: ['实习', '实习证明', '实习单位'],
      answer: '实习相关事宜说明：\n\n【实习要求】\n· 专业实习：根据培养方案要求完成规定时长\n· 毕业实习：原则上不少于8周\n\n【实习流程】\n1. 在教务系统提交实习申请\n2. 导师审核通过后获得实习批准\n3. 签订实习安全协议书\n4. 实习结束后提交实习日志和总结报告\n\n【实习平台推荐】\n· 校内：就业网实习专栏\n· 校外：实习僧、BOSS直聘、牛客网\n\n【注意事项】\n· 必须购买实习期间的人身意外险（学校统一代办）\n· 保持与辅导员定期沟通\n· 实习单位变更需及时报备',
      reference: '参考来源：教务处-《实习管理办法》'
    }
  ]
}

// 分类问题
function classifyQuestion(question: string): { tag: string, category: string } {
  const q = question.toLowerCase()
  for (const [, info] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const kw of info.keywords) {
      if (q.includes(kw)) {
        return { tag: info.tag, category: info.category }
      }
    }
  }
  return { tag: '其他', category: 'other' }
}

// 智能匹配回答
function getSmartAnswer(question: string): { answer: string, reference: string } | null {
  const q = question.toLowerCase()
  const { category } = classifyQuestion(question)
  const categoryAnswers = KNOWLEDGE_BASE[category]

  if (!categoryAnswers) return null

  // 遍历该分类下的所有回答
  for (const item of categoryAnswers) {
    for (const kw of item.question) {
      if (q.includes(kw.toLowerCase()) || kw.toLowerCase().includes(q.slice(0, 5))) {
        return { answer: item.answer, reference: item.reference }
      }
    }
  }

  // 如果没有精确匹配，返回该分类的默认第一个回答
  if (categoryAnswers.length > 0) {
    const defaultItem = categoryAnswers[0]
    return { answer: defaultItem.answer, reference: defaultItem.reference }
  }

  return null
}

Component({
  data: {
    showSidebar: false,
    activeHistoryId: 1,
    inputText: '',
    scrollToView: '',
    userMessages: [] as Array<{id: number, content: string}>,
    aiMessages: [] as Array<{id: number, content: string, reference?: string}>,
    msgCounter: 1,

    // ========== 语音相关状态 ==========
    isVoiceMode: false,
    isRecording: false,
    recordTime: 0,
    recordTimer: null as number | null,
    recorderManager: null as WechatMiniprogram.RecorderManager | null,
    innerAudioContext: null as WechatMiniprogram.InnerAudioContext | null,
    voiceRecognizedText: '',
    responseMode: 'text' as 'text' | 'voice',
    currentPlayingId: -1,
    waveBars: [20, 35, 25, 45, 30, 55, 25, 40, 20, 35, 28, 48, 22, 38] as number[],
    recordHint: '正在聆听...',

    todayHistory: [
      { id: 1, title: '如何申请创业补贴...', time: '刚刚' },
      { id: 2, title: '2026毕业设计开题...', time: '2小时前' }
    ],
    yesterdayHistory: [
      { id: 3, title: '图书馆借书证遗失...', time: '昨天 14:20' },
      { id: 4, title: '选修课学分查询', time: '昨天 10:05' },
      { id: 5, title: '校园网账号注销', time: '2天前' }
    ],
    earlierHistory: [] as Array<{id: number, title: string, time: string}>
  },

  lifetimes: {
    attached() {
      this.initRecorder()
      this.initAudioPlayer()
      // 添加初始用户消息和AI回复
      setTimeout(() => {
        this.setData({
          userMessages: [{ id: 0, content: '请问 2026 年大学生创业补贴怎么申请？需要准备哪些材料？' }],
          aiMessages: [{
            id: 0,
            content: '根据《2026年高校毕业生创业扶持政策实施细则》，大学生申请创业补贴的流程如下：\n\n1. 身份确认：须为我校在校生或毕业5年内的校友。\n2. 线上申报：登录"渝快办"APP，搜索"大学生创业补贴"进行申请。\n3. 材料准备：\n   · 《大学生创业补贴申请表》电子档\n   · 营业执照正副本扫描件\n   · 经营地址证明\n   · 银行开户许可证明\n4. 学校初审：提交后3个工作日内，校就业指导中心将进行真实性审核。',
            reference: '参考来源：校就业官网-2026第05号文件'
          }]
        })
      }, 100)
    },

    detached() {
      // 清理定时器和录音器
      if (this.data.recordTimer) {
        clearInterval(this.data.recordTimer)
      }
      if (this.data.recorderManager) {
        this.data.recorderManager.stop()
      }
      if (this.data.innerAudioContext) {
        this.data.innerAudioContext.stop()
        this.data.innerAudioContext.destroy()
      }
    }
  },

  methods: {
    // ====== 初始化录音器 ======
    initRecorder() {
      const recorderManager = wx.getRecorderManager()
      recorderManager.onStart(() => {
        console.log('录音开始')
      })
      recorderManager.onStop((res) => {
        console.log('录音结束，临时路径:', res.tempFilePath)
        const duration = this.data.recordTime
        if (duration < 1) {
          wx.showToast({ title: '录音时间太短', icon: 'none' })
          return
        }
        // 模拟语音识别（实际项目中应调用微信同声传译插件或云开发语音识别API）
        this.simulateSpeechRecognition(res.tempFilePath)
      })
      recorderManager.onError((err) => {
        console.error('录音错误:', err)
        wx.showToast({ title: '录音失败，请重试', icon: 'none' })
        this.setData({ isRecording: false })
        if (this.data.recordTimer) {
          clearInterval(this.data.recordTimer)
          this.setData({ recordTimer: null, recordTime: 0 })
        }
      })
      this.setData({ recorderManager })
    },

    // ====== 初始化音频播放器 ======
    initAudioPlayer() {
      const innerAudioContext = wx.createInnerAudioContext()
      innerAudioContext.onEnded(() => {
        this.setData({ currentPlayingId: -1 })
      })
      innerAudioContext.onError((err) => {
        console.error('播放错误:', err)
        wx.showToast({ title: '播放出错', icon: 'none' })
        this.setData({ currentPlayingId: -1 })
      })
      this.setData({ innerAudioContext })
    },

    // ====== 模拟语音识别（Demo用） ======
    simulateSpeechRecognition(_filePath: string) {
      wx.showLoading({ title: '识别中...', mask: true })

      // 模拟语音识别延迟，实际项目中应调用微信同声传译插件或云开发语音识别API
      setTimeout(() => {
        wx.hideLoading()

        // Demo模拟：随机生成一些示例识别文本
        const demoTexts = [
          '请问怎么报销差旅费？',
          '选课系统怎么操作？',
          '宿舍空调不制冷怎么办？',
          '图书馆几点关门？',
          '校园卡丢了怎么补办？',
          '城院有什么好吃的推荐吗？',
          '怎么申请创业补贴？',
          '校园网怎么连接？'
        ]
        const recognizedText = demoTexts[Math.floor(Math.random() * demoTexts.length)]

        this.setData({
          voiceRecognizedText: recognizedText,
          isRecording: false,
          recordTime: 0
        })
        wx.showToast({ title: '识别成功', icon: 'success' })
      }, 1500)
    },

    // ====== 开始录音 ======
    startRecord() {
      // 先检查权限
      wx.authorize({
        scope: 'scope.record',
        success: () => {
          this.doStartRecord()
        },
        fail: () => {
          wx.showModal({
            title: '需要录音权限',
            content: '请在设置中允许录音权限后重试',
            confirmText: '去设置',
            success: (res) => {
              if (res.confirm) {
                wx.openSetting()
              }
            }
          })
        }
      })
    },

    doStartRecord() {
      const options: WechatMiniprogram.RecorderManagerStartOption = {
        duration: 60000, // 最长60秒
        sampleRate: 16000,
        numberOfChannels: 1,
        encodeBitRate: 48000,
        format: 'mp3'
      }

      this.data.recorderManager!.start(options)
      this.setData({
        isRecording: true,
        recordTime: 0,
        voiceRecognizedText: '',
        recordHint: '正在聆听...'
      })

      // 录音计时 + 波形动画
      let seconds = 0
      const timer = setInterval(() => {
        seconds++
        this.setData({ recordTime: seconds })

        // 更新波形动画数据
        const newBars = this.data.waveBars.map(() =>
          Math.floor(Math.random() * 40) + 15
        )
        this.setData({ waveBars: newBars })

        // 更新提示文字
        if (seconds <= 3) {
          this.setData({ recordHint: '正在聆听...' })
        } else if (seconds <= 10) {
          this.setData({ recordHint: '说得不错，继续...' })
        } else if (seconds <= 30) {
          this.setData({ recordHint: '松手结束录音' })
        } else {
          this.setData({ recordHint: '最长60秒，可松手结束' })
        }

        if (seconds >= 60) {
          clearInterval(timer)
          this.setData({ recordTimer: null })
          this.data.recorderManager!.stop()
        }
      }, 1000)

      this.setData({ recordTimer: timer })
    },

    // ====== 停止录音 ======
    stopRecord() {
      if (!this.data.isRecording) return

      if (this.data.recordTimer) {
        clearInterval(this.data.recordTimer)
        this.setData({ recordTimer: null })
      }

      this.setData({
        isRecording: false,
        recordHint: '正在识别中...'
      })

      this.data.recorderManager!.stop()
    },

    // ====== 取消录音 ======
    cancelRecord() {
      if (!this.data.isRecording) return

      if (this.data.recordTimer) {
        clearInterval(this.data.recordTimer)
        this.setData({ recordTimer: null, recordTime: 0 })
      }

      this.data.recorderManager!.stop()
      this.setData({
        isRecording: false,
        voiceRecognizedText: ''
      })
    },

    // ====== 发送语音消息（识别后的文字） ======
    sendVoiceMessage() {
      const text = this.data.voiceRecognizedText.trim()
      if (!text) return

      // 设置到输入框并发送
      this.setData({ inputText: text, voiceRecognizedText: '' })
      this.sendMessage()
    },

    // ====== 清除语音识别结果 ======
    clearVoiceResult() {
      this.setData({ voiceRecognizedText: '' })
    },

    // ====== 切换到语音输入模式 ======
    switchToVoice() {
      this.setData({ isVoiceMode: true })
    },

    // ====== 切换到文字输入模式 ======
    switchToText() {
      this.setData({ isVoiceMode: false })
    },

    // ====== 切换回答方式（语音/文字） ======
    switchResponseMode(e: WechatMiniprogram.TouchEvent) {
      const mode = e.currentTarget.dataset.mode as 'text' | 'voice'
      this.setData({ responseMode: mode })
    },

    // ====== 朗读AI回复（TTS） ======
    playVoiceResponse(e: WechatMiniprogram.TouchEvent) {
      const id = Number(e.currentTarget.dataset.id)
      const content = e.currentTarget.dataset.content as string

      // 如果正在播放这条消息，则停止
      if (this.data.currentPlayingId === id) {
        this.data.innerAudioContext!.stop()
        this.setData({ currentPlayingId: -1 })
        return
      }

      // 停止当前播放的其他音频
      if (this.data.currentPlayingId !== -1) {
        this.data.innerAudioContext!.stop()
      }

      this.setData({ currentPlayingId: id })

      // 使用微信TTS合成语音（Demo：实际项目中可用微信云开发TTS或同声传译插件）
      // 这里使用 wx.createInnerAudioContext 配合 TTS 方案
      // 方案：调用后端 TTS API 获取音频URL，然后播放
      this.playTTS(content)
    },

    // ====== TTS播放实现 ======
    playTTS(text: string) {
      // Demo方案：由于小程序端无法直接调用浏览器TTS，
      // 我们使用一个变通方案——将文本分段并通过提示告知用户
      // 实际生产环境应接入：
      //   1. 微信云开发 云函数 + TTS API
      //   2. 微信同声传译插件的朗读功能
      //   3. 自建后端调用百度/阿里/腾讯TTS接口

      wx.showLoading({ title: '生成语音中...' })

      // 模拟TTS生成过程
      setTimeout(() => {
        wx.hideLoading()
        // 使用微信内置的背景音频管理能力播放
        // 由于Demo环境限制，这里给出完整的生产代码框架
        this.speakWithPlugin(text)
      }, 500)
    },

    // ====== 使用插件/能力朗读（核心TTS方法） ======
    speakWithPlugin(text: string) {
      // 生产环境推荐方案：
      //
      // 【方案一】微信同声传译插件（推荐）
      // 1. app.json中配置插件：
      //    "plugins": {
      //      "WechatSI": {
      //        "version": "0.3.4",
      //        "provider": "wx069ba97219f66d99"
      //      }
      //    }
      // 2. 使用方式：
      //    const plugin = requirePlugin('WechatSI')
      //    const manager = plugin.getRecordRecognitionManager()
      //    plugin.textToSpeech({
      //      lang: 'zh_CN',
      //      tts: true,
      //      content: text,
      //      success: (res: any) => {
      //        this.data.innerAudioContext!.src = res.filename
      //        this.data.innerAudioContext!.play()
      //      }
      //    })
      //
      // 【方案二】微信云开发 + 云函数TTS
      // 1. 创建云函数调用腾讯云TTS API
      // 2. 返回音频文件ID或URL
      // 3. 用innerAudioContext播放
      //
      // 【方案三】外部TTS服务
      // 1. 后端对接百度/阿里/讯飞TTS
      // 2. 返回音频流URL
      // 3. 播放

      // ---- 当前Demo实现 ----
      // 使用wx.showToast提示 + 模拟播放体验
      // 实际项目请替换为上述任一方案的代码

      const shortText = text.length > 100 ? text.substring(0, 100) + '...' : text

      // 尝试使用系统TTS能力（部分基础库支持）
      if (wx.createSelectorQuery && typeof (wx as any).createInnerAudioContext === 'function') {
        // 展示播放中的UI效果
        wx.showToast({
          title: '🔊 正在朗读...',
          icon: 'none',
          duration: 3000
        })

        // 模拟播放完毕（实际使用时替换为真实音频播放完成的回调）
        setTimeout(() => {
          this.setData({ currentPlayingId: -1 })
        }, 4000)
      } else {
        wx.showToast({ title: 'TTS引擎初始化中', icon: 'none' })
        this.setData({ currentPlayingId: -1 })
      }
    },

    // ====== 侧边栏 ======
    toggleSidebar() {
      this.setData({ showSidebar: !this.data.showSidebar })
    },

    startNewChat() {
      wx.showModal({
        title: '开启新会话',
        content: '确定要开启新会话吗？当前对话将保存到历史记录。',
        confirmText: '确定',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            // 停止当前播放
            if (this.data.currentPlayingId !== -1 && this.data.innerAudioContext) {
              this.data.innerAudioContext.stop()
            }
            this.setData({
              showSidebar: false,
              userMessages: [],
              aiMessages: [],
              inputText: '',
              scrollToView: '',
              activeHistoryId: -1,
              currentPlayingId: -1,
              voiceRecognizedText: ''
            })
            wx.showToast({ title: '已开启新会话', icon: 'success' })
          }
        }
      })
    },

    loadHistory(e: WechatMiniprogram.TouchEvent) {
      const id = Number(e.currentTarget.dataset.id)
      const allHistory = [...this.data.todayHistory, ...this.data.yesterdayHistory, ...this.data.earlierHistory]
      const item = allHistory.find(h => h.id === id)
      if (item) {
        this.setData({ showSidebar: false, activeHistoryId: id })
        wx.showToast({ title: `已加载：${item.title}`, icon: 'none' })
      }
    },

    onInput(e: WechatMiniprogram.Input) {
      this.setData({ inputText: e.detail.value })
    },

    // ====== 发送消息（增强版：智能匹配+标签记录） ======
    sendMessage() {
      const text = this.data.inputText.trim()
      if (!text) return

      const msgId = this.data.msgCounter

      // 分类并记录用户兴趣标签
      const { tag, category } = classifyQuestion(text)
      this.saveUserInterestTag(tag)

      // 智能匹配回答
      const smartResult = getSmartAnswer(text)

      const newUserMsg = { id: msgId, content: text }
      const aiMsg = smartResult || {
        id: msgId,
        content: `感谢您关于"${tag}"类问题的提问！我已收到您的消息。这是一个通用回复模板，后续将接入大模型为您提供更精准的答案。\n\n您可以尝试问以下相关问题：\n· 选课/教务相关问题\n· 报销/财务相关问题\n· 宿舍报修/后勤相关问题\n· 图书馆/学术相关问题\n· 校园生活/美食推荐`,
        reference: '参考来源：智校通知识库'
      }

      this.setData({
        userMessages: [...this.data.userMessages, newUserMsg],
        inputText: '',
        msgCounter: msgId + 1,
        isVoiceMode: false // 发送后回到文字模式
      })

      // 如果是语音模式且选择了语音回复，自动播放
      const shouldAutoPlay = this.data.responseMode === 'voice'

      setTimeout(() => {
        this.setData({
          aiMessages: [...this.data.aiMessages, {
            id: msgId,
            content: aiMsg.answer || aiMsg.content,
            reference: aiMsg.reference
          }],
          scrollToView: 'msg-bottom'
        })

        // 语音模式下自动播放回复
        if (shouldAutoPlay) {
          setTimeout(() => {
            this.playVoiceResponseCustom(msgId, aiMsg.answer || aiMsg.content)
          }, 500)
        }
      }, 800)
    },

    // ====== 自定义语音播放（供自动播放调用） ======
    playVoiceResponseCustom(id: number, content: string) {
      this.setData({ currentPlayingId: id })
      this.playTTS(content)
    },

    // ====== 保存用户兴趣标签到全局数据和本地存储 ======
    saveUserInterestTag(tag: string) {
      const app = getApp<IAppOption>()
      if (!app.globalData.userTags) {
        app.globalData.userTags = []
      }

      const tags = app.globalData.userTags

      // 检查标签是否已存在，存在则计数+1
      const existingTag = tags.find(t => t.name === tag)
      if (existingTag) {
        existingTag.count++
        existingTag.lastAsked = new Date().toISOString()
      } else {
        tags.push({
          name: tag,
          count: 1,
          lastAsked: new Date().toISOString()
        })
      }

      // 持久化到本地存储
      try {
        wx.setStorageSync('userInterestTags', tags)
      } catch (e) {
        console.error('保存标签失败:', e)
      }
    },

    onQuickAsk(e: WechatMiniprogram.TouchEvent) {
      const question = e.currentTarget.dataset.q
      this.setData({ inputText: question })
      this.sendMessage()
    },

    onFeedback(e: WechatMiniprogram.TouchEvent) {
      const type = e.currentTarget.dataset.type
      wx.showToast({
        title: type === 'helpful' ? '感谢反馈！' : '我们会继续优化',
        icon: 'none'
      })
    },

    goToCommunity() {
      wx.switchTab({ url: '/pages/community/community' })
    },

    onAttach() {
      wx.showToast({ title: '附件功能开发中', icon: 'none' })
    },

    onImage() {
      wx.chooseImage({
        count: 1,
        success: () => {
          wx.showToast({ title: '图片功能开发中', icon: 'none' })
        }
      })
    },

    onVoice() {
      this.setData({ isVoiceMode: true })
    }
  }
})
