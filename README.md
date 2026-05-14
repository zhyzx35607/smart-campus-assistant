# 智校通 (Smart Campus Assistant)

> 浙大城市学院智能校园问答机器人微信小程序 — 统一校园服务入口，让师生通过自然对话快速获取准确的校务信息和校园生活资讯。

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![WeChat MiniProgram](https://img.shields.io/badge/WeChat-MiniProgram-07C160)
![Platform](https://img.shields.io/badge/Platform-Mobile%20First-9333EA)

## 功能特性

### 核心功能
- **AI 智能问答** — 基于知识库的校务问答，覆盖 6 大分类（教务教学、财务报销、后勤服务、图书学术、校园生活、就业指导）
- **语音交互** — 支持语音输入提问 + TTS 语音朗读回复（FR-05）
- **文字交互** — 完整的文字输入输出作为备选方案
- **回答方式选择** — 语音模式下可选择以文字或语音获取 AI 回复

### 个性化推荐 (FR-04)
- **用户兴趣标签系统** — 自动分析问答历史，对问题分类打标签
- **个性化首页推荐** — 基于兴趣画像动态展示推荐内容
- **用户画像展示** — 个人中心展示兴趣分布和统计

### 社区生态
- **社区广场** — 经验分享 / 热点吐槽 / 组队招募
- **帖子互动** — 点赞、收藏、评论系统
- **官方回应机制** — 校方可参与帖子回应
- **搜索功能** — 热门关键词 + 全文搜索

### 用户体系
- **登录系统** — 密码登录 + 短信验证码登录
- **个人资料管理** — 头像、基本信息、学院年级等
- **通知设置** — 5 类通知开关独立控制
- **安全与隐私** — 密码修改、隐私可见度、账户注销

## 项目结构

```
smart-campus-assistant/
├── miniprogram/                  # 小程序源码目录
│   ├── app.json                  # 全局配置（页面路由、TabBar 等）
│   ├── app.ts                    # 应用入口 & 全局数据
│   ├── app.wxss                  # 全局样式
│   ├── custom-tab-bar/           # 自定义底部导航栏
│   ├── pages/
│   │   ├── index/                # 首页（搜索+公告+热议+推荐+服务矩阵）
│   │   ├── chat/                 # AI 助手（核心：聊天+语音+知识库）
│   │   ├── community/            # 社区广场（帖子流+热度排行）
│   │   ├── profile/              # 个人中心（历史+帖子+反馈+兴趣画像）
│   │   ├── login/                # 登录页（密码+短信验证码）
│   │   ├── create-post/          # 发帖页（标签+文件上传+草稿）
│   │   ├── post-detail/          # 帖子详情（评论+互动+官方回应）
│   │   ├── search/               # 搜索页（关键词+结果列表）
│   │   ├── edit-profile/         # 编辑资料
│   │   ├── notification-settings/# 通知设置
│   │   └── security-privacy/     # 安全与隐私
│   └── utils/
│       └── util.ts              # 工具函数
├── typings/                      # TypeScript 类型声明
├── project.config.json           # 项目配置文件
├── project.private.config.json   # 个人项目配置（不提交）
├── tsconfig.json                 # TypeScript 编译配置
├── package.json                  # 项目依赖
└── .gitignore                    # Git 忽略规则
```

## 技术栈

| 技术 | 说明 |
|------|------|
| **框架** | 微信小程序原生框架 |
| **语言** | TypeScript |
| **UI 方式** | 自定义组件 + WXML/WXSS |
| **导航** | 自定义 TabBar（4个Tab） |
| **状态管理** | App.globalData + 本地存储 |
| **构建工具** | 微信开发者工具内置编译器 |

## 快速开始

### 环境要求
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)（推荐 Stable 版本）
- Node.js >= 16.x
- npm 或 yarn

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/zhyzx35607/smart-campus-assistant.git
   cd smart-campus-assistant
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **打开微信开发者工具**
   - 选择「导入项目」
   - 目录选择本项目根目录
   - AppID 使用已配置的测试 AppID（或填入你自己的）

4. **编译运行**
   - 开发者工具会自动识别 `project.config.json`
   - 点击「编译」即可在模拟器中预览

## 页面一览

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/pages/index/index` | Hero搜索区、公告、热议Top5、个性化推荐、服务矩阵 |
| AI助手 | `/pages/chat/chat` | 对话界面、语音输入/输出、历史记录侧边栏、快捷提问 |
| 社区 | `/pages/community/community` | 帖子流、标签筛选、热度排行、官方回应 |
| 我的 | `/pages/profile/profile` | 用户信息、统计卡片、兴趣画像、问答历史 |
| 登录 | `/pages/login/login` | 密码登录 + 短信验证码 |

## 知识库覆盖范围

| 分类 | 覆盖内容 |
|------|---------|
| 教务教学 | 选课操作、学分认定、考试补考/重修、毕业设计开题 |
| 财务报销 | 差旅费报销流程、创业补贴申请、学费缴纳方式 |
| 后勤服务 | 宿舍报修、校园卡挂失/充值、校园网连接提速、热水供应时间 |
| 图书学术 | 图书馆开馆时间与规则、座位预约操作、借阅规定 |
| 校园生活 | 城院美食地图（花哥/肉夹馍/奶酸菜鱼）、周边购物交通 |
| 就业指导 | 校招信息查询、实习办理、三方协议签订 |

## 需求对照 (SRS)

本项目的功能实现基于《智校通校务问答机器人 SRS》需求文档：

| 需求编号 | 功能描述 | 实现状态 |
|---------|---------|---------|
| FR-01 | 校务知识问答（文字） | ✅ 已完成 |
| FR-02 | 校园生活问答 | ✅ 已完成 |
| FR-03 | 用户问答历史记录 | ✅ 已完成 |
| FR-04 | 兴趣分析与个性化推荐 | ✅ 已完成 |
| FR-05 | 语音输入 + 语音输出 | ✅ 已完成 |
| FR-06 | 移动端优先 | ✅ 已完成 |

## 待完善事项

- [ ] 接入真实 AI 大模型 API（当前为本地知识库匹配）
- [ ] 接入真实 STT 语音识别 API（当前 Demo 为模拟识别）
- [ ] 接入真实 TTS 语音合成 API（当前 Demo 含完整接口框架）
- [ ] 后端 API 服务搭建
- [ ] 云开发接入（数据库、云函数、云存储）

## License

MIT License

## 作者

浙大城市学院 · 计算机与计算科学学院

---

> 基于 AI 多模态大模型及 GraphRAG 技术驱动 🚀
