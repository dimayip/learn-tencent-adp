# Tencent Cloud ADP 学习工坊

> 一站式系统学习「腾讯云智能体开发平台 (Tencent Cloud Agent Development Platform)」的 140 个核心知识点。

[![PWA](https://img.shields.io/badge/PWA-ready-FBBF24)](#)
[![Stack](https://img.shields.io/badge/stack-vanilla%20js-171717)](#)
[![No build](https://img.shields.io/badge/build-not%20required-525252)](#)

面向云计算从业者、AI 应用开发者与架构师，把抽象的"大模型 + 智能体 + RAG"知识体系拆成可遍历、可测验、可追踪的结构化学习路径。

---

## ✨ 特性

- **140 个知识点** · 跨 15 个主题（产品概述 / 应用模式 / 平台架构 / 模型广场 / RAG / 工作流 / Multi-Agent / Widget / 计费 / API 等）
- **6 种学习模式**
  - 🚀 渐进学习：知识点 + 应用案例 + 答题
  - 🔁 闪卡复习：3D 翻转卡片，键盘快捷键
  - 📚 索引浏览：按分类筛选 + 搜索
  - 📊 进度追踪：分类掌握率 + 学习建议 + 复习推荐
  - 🎯 详情页：单点深入查看
  - 📥 数据管理：导入 / 导出 / 清除
- **答对自动掌握** · 测试题答对会自动将该知识点标记为"已掌握"，0 摩擦
- **PWA 支持** · 可安装、可离线、Service Worker 缓存
- **零构建** · 纯 HTML + CSS + Vanilla JS，下载即用
- **极简主义视觉** · 黄色主调（#FBBF24）、Inter 字体、8px 网格、12px 圆角
- **响应式** · 桌面 / 平板 / 手机三档断点

---

## 📁 目录结构

```
learn-tencent-adp/
├── index.html              # 首页
├── learn.html              # 渐进学习
├── flashcard.html          # 闪卡复习
├── roots.html              # 知识索引
├── root-detail.html        # 知识点详情
├── progress.html           # 学习进度
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker
├── sitemap.xml / robots.txt
├── icon-192.png / icon-512.png
├── knowledge.md            # 140 个知识点原始文档（按主题分类）
├── css/
│   └── minimal.css         # 设计系统 + 全部样式
└── js/
    ├── wordData.js         # 140 条知识点数据（含 quiz）
    ├── siteConfig.js       # 站点配置（标题、统计、文案）
    └── storage.js          # 本地存储（掌握 / 进度 / 测验记录）
```

---

## 🧠 知识点主题（共 140 项）

| 主题 | 数量 | 主题 | 数量 |
|---|---|---|---|
| 产品概述 | 10 | Multi-Agent | 6 |
| 应用模式 | 8 | 工具与 Skills | 8 |
| 平台架构 | 10 | Widget | 9 |
| 智能体核心 | 10 | 应用发布 | 7 |
| 模型广场 | 10 | 计费 | 8 |
| 知识库与 RAG | 18 | 运营监控 | 10 |
| 工作流节点 | 18 | API 开发 | 5 |
|  |  | 最佳实践 | 3 |

完整知识体系详见 [`knowledge.md`](./knowledge.md)。

---

## 🚀 本地运行

```bash
# 任意一种方式启动静态服务
cd learn-tencent-adp

# 方式 1：Python
python3 -m http.server 8765

# 方式 2：Node
npx serve .
```

打开 [http://127.0.0.1:8765](http://127.0.0.1:8765)。

> ⚠️ 由于 Service Worker 与 PWA 仅在 `http://` 或 `https://` 下生效，请勿用 `file://` 直接打开。

---

## ⌨️ 快捷键

| 场景 | 按键 | 行为 |
|---|---|---|
| 闪卡 | `空格` | 翻转卡片 |
| 闪卡 / 学习 / 详情 | `←` / `→` | 切换上下一个 |
| 闪卡 | `M` | 标记/取消"已掌握" |

---

## 🔒 数据存储

- 全部学习状态使用 **`localStorage`**，零服务端依赖。
- 命名空间前缀：`tcadp_`（mastered / progress / quizResults / visited）。
- 进度页提供 **导出 / 导入 / 清除**，方便迁移与备份。

---

## 🎨 设计语言

- **主色**：`#FBBF24`（Tailwind Amber-400）
- **字体**：Inter（300/400/500/600/700）
- **网格**：8px 系统
- **圆角**：12px
- **风格**：极简主义，弱化装饰，强化信息层级

---

## 🛠 技术栈

- **前端**：纯 HTML / CSS / Vanilla JS（无 React、无构建）
- **PWA**：Manifest + Service Worker（cache-first）
- **可访问性**：语义化标签、键盘导航、ARIA-friendly
- **SEO**：完整 meta、Open Graph、sitemap.xml、robots.txt
- **安全**：所有动态内容使用 `textContent` / `createElement`，避免 XSS

---

## 📦 部署

### Vercel

```bash
npm i -g vercel
cd learn-tencent-adp
vercel --prod
```

### 任何静态托管

将整个目录上传至 GitHub Pages / Netlify / 腾讯云 EdgeOne Pages / 阿里云 OSS / 七牛 / S3 等任一静态主机即可。

---

## 📝 学习路径推荐

1. **第 1 天**：`产品概述` + `应用模式` + `平台架构` → 建立宏观认知（28 项）
2. **第 2 天**：`智能体核心` + `模型广场` → 理解大脑与可用模型（20 项）
3. **第 3 天**：`知识库与 RAG` → 解决"幻觉"的核心机制（18 项）
4. **第 4 天**：`工作流节点` + `Multi-Agent` → 复杂业务编排（24 项）
5. **第 5 天**：`工具与 Skills` + `Widget` → 扩展能力 & 富交互（17 项）
6. **第 6 天**：`应用发布` + `计费` + `运营监控` + `API 开发` → 上线与运营（30 项）
7. **第 7 天**：`最佳实践` + 闪卡总复习

---

## 📚 内容声明

本站内容基于腾讯云官方公开文档整理（产品入口：腾讯云控制台 → 智能体开发平台 ADP）。
仅作为学习辅助资料，最终以 [腾讯云官方文档](https://cloud.tencent.com/document) 为准。

---

## 📄 License

MIT — 内容用于学习与社区交流，欢迎自由使用。
