// 腾讯云智能体开发平台（Tencent Cloud ADP）140 个知识点
const WordRoots = [
  {
    id: 1,
    root: "Tencent Cloud ADP",
    origin: "产品概述",
    meaning: "腾讯云智能体开发平台",
    description: "Tencent Cloud Agent Development Platform 是面向企业的 AI 应用开发平台，基于 LLM 能力，提供从配置、开发、调试、评测、发布到运营的一站式智能体全生命周期管理。",
    examples: [
      { word: "ADP 控制台", meaning: "进入平台的入口", breakdown: { root: "ADP" }, explanation: "通过腾讯云控制台搜索 ADP 即可进入。" },
      { word: "智能体应用", meaning: "Agent 形态的最终产品", breakdown: { root: "应用" }, explanation: "ADP 上创建的 AI 应用对外服务。" },
      { word: "全生命周期", meaning: "覆盖搭建到运营", breakdown: { root: "生命周期" }, explanation: "ADP 一个平台覆盖 PoC 到规模化。" }
    ],
    quiz: {
      question: "Tencent Cloud ADP 的英文全称是什么？",
      options: ["AI Development Platform", "Agent Development Platform", "Application Deployment Platform", "Auto Deploy Platform"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "LKE 升级",
    origin: "产品概述",
    meaning: "ADP 的前身是大模型知识引擎",
    description: "ADP 由腾讯云『大模型知识引擎（LKE）』于 2025 年 5 月 20 日全新升级而来，从单一 RAG 引擎扩展为完整的 Agent 开发平台。",
    examples: [
      { word: "LKE", meaning: "大模型知识引擎", breakdown: { root: "Knowledge Engine" }, explanation: "ADP 的前身名称。" },
      { word: "升级时间", meaning: "2025-05-20", breakdown: { root: "时间点" }, explanation: "LKE 正式升级为 ADP 的日期。" },
      { word: "能力扩展", meaning: "RAG → Agent", breakdown: { root: "扩展" }, explanation: "从知识引擎升级为完整智能体平台。" }
    ],
    quiz: {
      question: "ADP 的前身是哪个产品？",
      options: ["TI-ONE", "LKE 大模型知识引擎", "混元大模型", "腾讯云向量数据库"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "目标用户",
    origin: "产品概述",
    meaning: "面向业务和技术双重角色",
    description: "ADP 既适合业务团队（产品/运营/客服）零代码搭建智能体，也适合技术团队通过 API/SDK 深度集成，满足不同人群的开发诉求。",
    examples: [
      { word: "业务用户", meaning: "零代码搭建", breakdown: { root: "业务" }, explanation: "通过可视化配置即可上线。" },
      { word: "技术用户", meaning: "API 深度集成", breakdown: { root: "API" }, explanation: "通过 RESTful/SSE/WebSocket 接入。" },
      { word: "运营用户", meaning: "管理知识库与评测", breakdown: { root: "运营" }, explanation: "无需写代码即可优化 Agent。" }
    ],
    quiz: {
      question: "下列哪类用户不是 ADP 主要服务对象？",
      options: ["产品运营人员", "客服团队", "前端开发者", "嵌入式裸机驱动工程师"],
      correctAnswer: 3
    }
  },
  {
    id: 4,
    root: "一站式生命周期",
    origin: "产品概述",
    meaning: "覆盖配置→运营全流程",
    description: "ADP 提供配置、开发、调试、评测、发布、运营六阶段的工具链，让企业不必拼装多个产品即可完成 Agent 全生命周期管理。",
    examples: [
      { word: "配置阶段", meaning: "选模型设 Prompt", breakdown: { root: "配置" }, explanation: "从模型广场和 Prompt 模板入手。" },
      { word: "评测阶段", meaning: "模型/Prompt 对比", breakdown: { root: "评测" }, explanation: "用裁判模型/规则做 A/B。" },
      { word: "运营阶段", meaning: "数据看板与告警", breakdown: { root: "运营" }, explanation: "通过看板持续优化。" }
    ],
    quiz: {
      question: "ADP 一站式生命周期不包含以下哪个阶段？",
      options: ["开发", "评测", "硬件采购", "运营"],
      correctAnswer: 2
    }
  },
  {
    id: 5,
    root: "典型应用场景",
    origin: "产品概述",
    meaning: "客服/知识助手/经营分析",
    description: "ADP 的典型应用包括智能客服、企业知识助手、经营分析助手、营销文案生成、数据分析助手等，多在中大型企业落地。",
    examples: [
      { word: "智能客服", meaning: "7×24 自动应答", breakdown: { root: "客服" }, explanation: "意图识别+RAG+转人工兜底。" },
      { word: "知识助手", meaning: "员工自助问答", breakdown: { root: "助手" }, explanation: "内部文档构建知识库。" },
      { word: "经营分析", meaning: "Text-to-SQL 查数据", breakdown: { root: "分析" }, explanation: "让业务自助分析。" }
    ],
    quiz: {
      question: "下列哪个不是 ADP 的典型应用？",
      options: ["智能客服", "经营分析助手", "操作系统内核", "企业知识助手"],
      correctAnswer: 2
    }
  },
  {
    id: 6,
    root: "可控可运营",
    origin: "产品概述",
    meaning: "生产级 AI 能力底座",
    description: "ADP 强调可控可运营，通过权限隔离、内容安全、回答可解释、看板告警等机制，让大模型从『玩具 Demo』变成生产级生产力工具。",
    examples: [
      { word: "可控", meaning: "权限+审批+审核", breakdown: { root: "控制" }, explanation: "全链路安全合规。" },
      { word: "可运营", meaning: "看板+告警+评测", breakdown: { root: "运营" }, explanation: "持续监控和迭代。" },
      { word: "可解释", meaning: "命中片段可追溯", breakdown: { root: "解释" }, explanation: "回答附带证据。" }
    ],
    quiz: {
      question: "ADP 的『可控可运营』理念主要解决什么问题？",
      options: ["让模型推理更快", "让 LLM 真正落地企业生产", "让前端更美观", "让模型免费"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "生态开放",
    origin: "产品概述",
    meaning: "支持主流模型与 MCP",
    description: "ADP 支持主流大模型与企业自建模型一键导入，并全面兼容 MCP 协议，具备良好的生态开放性，避免厂商锁定。",
    examples: [
      { word: "模型导入", meaning: "OpenAI 兼容协议", breakdown: { root: "导入" }, explanation: "接入第三方 LLM。" },
      { word: "MCP 兼容", meaning: "Model Context Protocol", breakdown: { root: "MCP" }, explanation: "复用 MCP 工具生态。" },
      { word: "TI-ONE 联动", meaning: "私有部署模型", breakdown: { root: "TI-ONE" }, explanation: "一键同步自训练模型。" }
    ],
    quiz: {
      question: "ADP 兼容下列哪个开放协议？",
      options: ["MQTT", "MCP（Model Context Protocol）", "AMQP", "FTP"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    root: "底层技术依托",
    origin: "产品概述",
    meaning: "混元+优图技术栈",
    description: "ADP 在模型上依托腾讯混元大模型，在文档解析上依托腾讯优图实验室的 OCR 与多模态能力，技术底座扎实。",
    examples: [
      { word: "混元大模型", meaning: "腾讯自研 LLM", breakdown: { root: "混元" }, explanation: "中文场景表现优秀。" },
      { word: "优图 OCR", meaning: "图文识别", breakdown: { root: "OCR" }, explanation: "用于文档解析。" },
      { word: "优图精调", meaning: "youtu-mrc", breakdown: { root: "精调" }, explanation: "知识问答专用模型。" }
    ],
    quiz: {
      question: "ADP 的文档解析能力主要由哪个团队提供？",
      options: ["腾讯优图实验室", "微信团队", "腾讯安全团队", "腾讯游戏团队"],
      correctAnswer: 0
    }
  },
  {
    id: 9,
    root: "YouTu-Agent 开源",
    origin: "产品概述",
    meaning: "Multi-Agent 开源参考",
    description: "ADP 的自研 Multi-Agent 判断与运行机制可参考 GitHub 上的 YouTu-Agent 开源项目，便于开发者了解底层原理。",
    examples: [
      { word: "YouTu-Agent", meaning: "开源 Agent 框架", breakdown: { root: "YouTu" } , explanation: "腾讯开源的多智能体框架。" },
      { word: "Handoff", meaning: "Agent 间转交", breakdown: { root: "Handoff" }, explanation: "YouTu-Agent 中的核心概念。" },
      { word: "运行机制", meaning: "调度+决策", breakdown: { root: "机制" }, explanation: "ADP 复用相似设计。" }
    ],
    quiz: {
      question: "ADP 的 Multi-Agent 机制可以参考哪个开源项目？",
      options: ["LangChain", "AutoGen", "YouTu-Agent", "CrewAI"],
      correctAnswer: 2
    }
  },
  {
    id: 10,
    root: "PoC 到规模化",
    origin: "产品概述",
    meaning: "支持业务全阶段",
    description: "ADP 支持企业从 PoC 试点到规模化落地的全过程，提供资源配额、并发包、独立部署等手段保障大规模可用性。",
    examples: [
      { word: "PoC", meaning: "概念验证试点", breakdown: { root: "PoC" }, explanation: "用免费额度快速验证。" },
      { word: "并发包", meaning: "高并发扩容", breakdown: { root: "并发" }, explanation: "应对峰值流量。" },
      { word: "独立部署", meaning: "云部署计费", breakdown: { root: "部署" }, explanation: "数据/性能强隔离。" }
    ],
    quiz: {
      question: "下列哪种能力帮助 ADP 应对规模化的高并发？",
      options: ["共享并发包", "屏幕保护", "音视频特效", "桌面壁纸"],
      correctAnswer: 0
    }
  },
  {
    id: 11,
    root: "Claw 模式",
    origin: "应用模式",
    meaning: "数字同事自主工作",
    description: "Claw 模式拥有独立工作空间，可自主写代码、调用 Skills/插件，像随时在线的『数字同事』，适合数据分析、内容生成等开放性任务。",
    examples: [
      { word: "独立工作空间", meaning: "类似容器沙箱", breakdown: { root: "工作空间" }, explanation: "支持文件读写。" },
      { word: "Skills 调用", meaning: "技能模板", breakdown: { root: "Skills" }, explanation: "复用专家经验。" },
      { word: "OpenClaw", meaning: "金融 Agent 案例", breakdown: { root: "OpenClaw" }, explanation: "基于 Claw 的金融助手。" }
    ],
    quiz: {
      question: "Claw 模式最大的特点是什么？",
      options: ["只能问答 FAQ", "拥有独立工作空间能自主执行任务", "只能用于客服", "只支持中文"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "标准模式",
    origin: "应用模式",
    meaning: "搭建单个智能体应用",
    description: "标准模式（Standard）用于搭建单个智能体应用，从简单问答起步，按需补充知识库和插件，是新手最常用的入门模式。",
    examples: [
      { word: "起步问答", meaning: "纯 LLM 对话", breakdown: { root: "对话" }, explanation: "无需知识库。" },
      { word: "增量配置", meaning: "按需添加能力", breakdown: { root: "增量" }, explanation: "从简单到复杂。" },
      { word: "适合场景", meaning: "单一职责助手", breakdown: { root: "单一" }, explanation: "如客服、问答。" }
    ],
    quiz: {
      question: "标准模式适合什么场景？",
      options: ["复杂多 Agent 协作", "单一职责的智能体应用", "硬件控制", "操作系统调度"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "Multi-Agent 模式",
    origin: "应用模式",
    meaning: "多智能体协作完成任务",
    description: "Multi-Agent 模式适合『一个 Agent 无法完成、需团队协作』的复杂任务，由多个子 Agent 自动分工、协同完成，配合 Handoff/Workflow/Plan-and-Execute 机制。",
    examples: [
      { word: "子 Agent", meaning: "专精角色", breakdown: { root: "Agent" }, explanation: "分别负责检索、写作、审核等。" },
      { word: "Handoff", meaning: "自由转交", breakdown: { root: "Handoff" }, explanation: "主 Agent 自主路由。" },
      { word: "复杂任务", meaning: "研究/分析/创作", breakdown: { root: "任务" }, explanation: "需要多轮拆解。" }
    ],
    quiz: {
      question: "Multi-Agent 模式最适合下列哪种任务？",
      options: ["简单的天气查询", "需要多个角色协同的复杂任务", "纯静态展示页面", "图片缩略图"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "单工作流模式",
    origin: "应用模式",
    meaning: "拖拽式流程编排",
    description: "单工作流模式（Workflow）把固化的业务流程拖拽编排成可复用流水线，适合工单审批、数据处理、固定流程类业务。",
    examples: [
      { word: "拖拽编排", meaning: "可视化设计", breakdown: { root: "拖拽" }, explanation: "无需代码。" },
      { word: "流水线", meaning: "节点链路", breakdown: { root: "Pipeline" }, explanation: "顺序执行。" },
      { word: "工单审批", meaning: "典型应用", breakdown: { root: "审批" }, explanation: "流程固定。" }
    ],
    quiz: {
      question: "单工作流模式最适合哪类场景？",
      options: ["开放式探索", "流程固定的业务", "实时聊天", "图像生成"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "模式选择原则",
    origin: "应用模式",
    meaning: "根据复杂度选模式",
    description: "选择原则：简单问答用标准模式；复杂决策用 Multi-Agent；标准固定流程用 Workflow；面向非技术用户的复杂开放任务用 Claw。",
    examples: [
      { word: "简单 → 标准", meaning: "FAQ/问答", breakdown: { root: "标准" }, explanation: "起步首选。" },
      { word: "复杂 → Multi-Agent", meaning: "需协作", breakdown: { root: "Multi-Agent" }, explanation: "多角色分工。" },
      { word: "固定 → Workflow", meaning: "流程化", breakdown: { root: "Workflow" }, explanation: "可控可复用。" }
    ],
    quiz: {
      question: "如果你的任务流程非常固定，应该选择哪种模式？",
      options: ["Claw", "Multi-Agent", "标准", "Workflow"],
      correctAnswer: 3
    }
  },
  {
    id: 16,
    root: "Multi-Agent 协同方式",
    origin: "应用模式",
    meaning: "Handoff/Workflow/PE 三种",
    description: "Multi-Agent 协同方式有三种：自由转交（Handoff）让 Agent 自主路由；工作流编排让流程更可控；Plan-and-Execute 由 Planner 拆解任务再由 Executor 执行。",
    examples: [
      { word: "Handoff", meaning: "自由转交", breakdown: { root: "Handoff" }, explanation: "适合开放对话。" },
      { word: "Workflow 编排", meaning: "预定义流程", breakdown: { root: "Workflow" }, explanation: "适合固定任务。" },
      { word: "Plan-and-Execute", meaning: "先规划后执行", breakdown: { root: "PE" }, explanation: "适合复杂任务。" }
    ],
    quiz: {
      question: "下列哪种不是 Multi-Agent 的协同方式？",
      options: ["Handoff 自由转交", "Workflow 编排", "Plan-and-Execute", "FTP 传输"],
      correctAnswer: 3
    }
  },
  {
    id: 17,
    root: "应用包导入导出",
    origin: "应用模式",
    meaning: "跨账号迁移能力",
    description: "ADP 四种模式都支持以『应用包』形式导出和导入，包含 Prompt、知识库引用、工具配置、工作流等元数据，便于跨账号、跨环境迁移。",
    examples: [
      { word: "导出包", meaning: "JSON/ZIP 格式", breakdown: { root: "导出" }, explanation: "可作为版本备份。" },
      { word: "跨账号迁移", meaning: "环境隔离", breakdown: { root: "迁移" }, explanation: "测试到生产环境。" },
      { word: "版本管理", meaning: "回滚能力", breakdown: { root: "版本" }, explanation: "保留多个快照。" }
    ],
    quiz: {
      question: "ADP 应用包的主要用途是什么？",
      options: ["仅展示", "跨账号/跨环境迁移", "替代知识库", "管理用户密码"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "应用模板",
    origin: "应用模式",
    meaning: "多行业开箱即用",
    description: "ADP 预置教育、传媒、医疗、金融、零售、政务等多行业应用模板，开箱即用，业务团队可在模板基础上快速定制。",
    examples: [
      { word: "教育模板", meaning: "智能助教", breakdown: { root: "教育" }, explanation: "辅助教学问答。" },
      { word: "金融模板", meaning: "投顾助手", breakdown: { root: "金融" }, explanation: "查行情写研报。" },
      { word: "医疗模板", meaning: "医学问答", breakdown: { root: "医疗" }, explanation: "辅助诊疗咨询。" }
    ],
    quiz: {
      question: "ADP 应用模板的价值是什么？",
      options: ["让用户从零开始", "提供行业最佳实践开箱即用", "禁用 LLM", "压缩文件"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "平台分层",
    origin: "平台架构",
    meaning: "交互/智能体/能力/基础",
    description: "ADP 平台从上到下分四层：交互层（对话/UI）、智能体层（Agent/Workflow/RAG）、能力层（模型/工具/知识库）、基础层（COS/计算/安全）。",
    examples: [
      { word: "交互层", meaning: "前端入口", breakdown: { root: "UI" }, explanation: "对话框/Widget。" },
      { word: "能力层", meaning: "复用资产", breakdown: { root: "能力" }, explanation: "模型/工具/知识库。" },
      { word: "基础层", meaning: "底层资源", breakdown: { root: "基础" }, explanation: "COS/计算/安全合规。" }
    ],
    quiz: {
      question: "ADP 智能体层包含哪些核心能力？",
      options: ["Agent/Workflow/RAG", "操作系统内核", "数据库索引", "网络协议栈"],
      correctAnswer: 0
    }
  },
  {
    id: 20,
    root: "企业（Enterprise）",
    origin: "平台架构",
    meaning: "虚拟组织最高层",
    description: "一个腾讯云主账号下默认创建 1 个企业，作为 ADP 虚拟组织的最高层级，承载工作空间、用户、资源等元数据。",
    examples: [
      { word: "默认企业", meaning: "1 主账号 1 企业", breakdown: { root: "企业" }, explanation: "自动创建。" },
      { word: "超级管理员", meaning: "企业最高权限", breakdown: { root: "管理员" }, explanation: "默认是主账号。" },
      { word: "全企业看板", meaning: "聚合数据", breakdown: { root: "看板" }, explanation: "统一统计。" }
    ],
    quiz: {
      question: "在 ADP 中，企业（Enterprise）的层级是？",
      options: ["最低层级", "虚拟组织的最高层级", "等同于工作空间", "等同于应用"],
      correctAnswer: 1
    }
  },
  {
    id: 21,
    root: "工作空间（Workspace）",
    origin: "平台架构",
    meaning: "团队/项目隔离单元",
    description: "工作空间是企业内的资源隔离单元，用于团队/项目级别的资源、权限、知识库隔离，是 ADP 多租户管理的核心。",
    examples: [
      { word: "团队空间", meaning: "按组织划分", breakdown: { root: "团队" }, explanation: "不同部门独立。" },
      { word: "权限隔离", meaning: "数据不互通", breakdown: { root: "隔离" }, explanation: "防止越权。" },
      { word: "资源限额", meaning: "用量上限", breakdown: { root: "配额" }, explanation: "防止超支。" }
    ],
    quiz: {
      question: "工作空间的主要作用是什么？",
      options: ["承载主账号", "团队/项目级资源与权限隔离", "存储模型权重", "充当 CDN"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "应用（Application）",
    origin: "平台架构",
    meaning: "用户最终使用的产品形态",
    description: "应用是在工作空间下创建的智能体实例，是终端用户使用的最终产品形态，也是发布、调用、计费的最小单元。",
    examples: [
      { word: "应用 ID", meaning: "AppKey 唯一标识", breakdown: { root: "ID" }, explanation: "API 调用必填。" },
      { word: "应用类型", meaning: "对应四种模式", breakdown: { root: "类型" }, explanation: "标准/Multi/Workflow/Claw。" },
      { word: "应用发布", meaning: "上线渠道", breakdown: { root: "发布" }, explanation: "微信/企微/API。" }
    ],
    quiz: {
      question: "在 ADP 中，应用属于哪一层？",
      options: ["企业层级", "工作空间下的智能体实例", "腾讯云主账号", "操作系统进程"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "知识库（Knowledge Base）",
    origin: "平台架构",
    meaning: "RAG 应用底座",
    description: "知识库存储企业私域文档、问答对、网页内容、数据库表等知识资产，是 RAG 应用的底座，应用通过引用知识库实现专业问答。",
    examples: [
      { word: "私域文档", meaning: "PDF/Word", breakdown: { root: "文档" }, explanation: "上传后自动解析。" },
      { word: "QA 对", meaning: "问答对", breakdown: { root: "QA" }, explanation: "高优先级命中。" },
      { word: "知识库引用", meaning: "应用绑定", breakdown: { root: "引用" }, explanation: "可绑多个 KB。" }
    ],
    quiz: {
      question: "知识库主要用于实现什么能力？",
      options: ["图像识别", "RAG 检索增强", "实时音视频", "网络代理"],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    root: "共享知识库",
    origin: "平台架构",
    meaning: "多应用复用",
    description: "共享知识库是可在多个应用间复用的公共知识库，避免重复构建，例如『公司规章制度』『产品手册』可被多个内部 Agent 共用。",
    examples: [
      { word: "公司制度库", meaning: "全员共享", breakdown: { root: "共享" }, explanation: "HR/IT 助手都用。" },
      { word: "复用收益", meaning: "降本提效", breakdown: { root: "复用" }, explanation: "减少冗余存储。" },
      { word: "权限授权", meaning: "按需开放", breakdown: { root: "权限" }, explanation: "可控范围。" }
    ],
    quiz: {
      question: "共享知识库相比普通知识库的优势是什么？",
      options: ["可被多个应用复用", "存储更便宜", "支持视频", "无大小限制"],
      correctAnswer: 0
    }
  },
  {
    id: 25,
    root: "超级管理员",
    origin: "平台架构",
    meaning: "企业最高权限角色",
    description: "腾讯云主账号在 ADP 中默认成为超级管理员，拥有最高权限，可管理企业、工作空间、用户、所有资源，是企业级别的『root』。",
    examples: [
      { word: "主账号映射", meaning: "默认角色", breakdown: { root: "主账号" }, explanation: "自动具备超管权限。" },
      { word: "全局配置", meaning: "审批/审核策略", breakdown: { root: "配置" }, explanation: "影响整个企业。" },
      { word: "用户管理", meaning: "增删子账号", breakdown: { root: "用户" }, explanation: "支持 CAM 集成。" }
    ],
    quiz: {
      question: "ADP 的超级管理员默认是谁？",
      options: ["子账号", "腾讯云主账号", "工作空间创建员", "企业 CTO"],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    root: "工作空间角色",
    origin: "平台架构",
    meaning: "多种细分角色",
    description: "工作空间内有空间创建员、空间管理员、应用开发者、知识管理员等多种角色，对应不同的功能与数据权限，支持团队协作。",
    examples: [
      { word: "空间创建员", meaning: "建空间者", breakdown: { root: "创建员" }, explanation: "拥有空间最高权限。" },
      { word: "应用开发者", meaning: "搭 Agent", breakdown: { root: "开发者" }, explanation: "聚焦构建。" },
      { word: "知识管理员", meaning: "管 KB", breakdown: { root: "管理员" }, explanation: "维护知识库。" }
    ],
    quiz: {
      question: "下列哪个不是 ADP 的工作空间角色？",
      options: ["空间管理员", "应用开发者", "知识管理员", "操作系统管理员"],
      correctAnswer: 3
    }
  },
  {
    id: 27,
    root: "权限解耦",
    origin: "平台架构",
    meaning: "功能与数据双维度",
    description: "ADP 平台权限分『功能权限』和『数据权限』两个维度，支持精细化授权，例如可以让某用户只能编辑某 1 个知识库。",
    examples: [
      { word: "功能权限", meaning: "操作能力", breakdown: { root: "功能" }, explanation: "如发布/编辑。" },
      { word: "数据权限", meaning: "可见范围", breakdown: { root: "数据" }, explanation: "限定数据。" },
      { word: "精细授权", meaning: "最小权限", breakdown: { root: "最小化" }, explanation: "符合安全原则。" }
    ],
    quiz: {
      question: "ADP 的权限设计采用哪种解耦？",
      options: ["按颜色", "功能权限与数据权限解耦", "按设备", "按时间"],
      correctAnswer: 1
    }
  },
  {
    id: 28,
    root: "应用端权限",
    origin: "平台架构",
    meaning: "终端用户访问控制",
    description: "已发布的应用可以单独配置终端用户的访问权限和消息记录权限，例如限制访问 IP、内部员工 ID 段、是否可下载历史记录。",
    examples: [
      { word: "访问限制", meaning: "IP/账号", breakdown: { root: "访问" }, explanation: "防止外泄。" },
      { word: "记录权限", meaning: "查看历史", breakdown: { root: "记录" }, explanation: "可下载或不可。" },
      { word: "终端鉴权", meaning: "AppKey 校验", breakdown: { root: "鉴权" }, explanation: "API 安全。" }
    ],
    quiz: {
      question: "应用端权限主要控制谁？",
      options: ["平台开发者", "终端使用者", "腾讯云 IDC", "数据库索引"],
      correctAnswer: 1
    }
  },
  {
    id: 29,
    root: "Agent（智能体）",
    origin: "智能体核心",
    meaning: "目标驱动的 LLM 实体",
    description: "Agent 是具备目标理解、推理决策、工具调用、记忆管理能力的 LLM 驱动实体，是 ADP 的最小智能单元。",
    examples: [
      { word: "目标理解", meaning: "意图识别", breakdown: { root: "意图" }, explanation: "听懂用户。" },
      { word: "推理决策", meaning: "选择动作", breakdown: { root: "推理" }, explanation: "决定下一步。" },
      { word: "工具调用", meaning: "Function Calling", breakdown: { root: "工具" }, explanation: "扩展能力。" }
    ],
    quiz: {
      question: "Agent 不具备下列哪种能力？",
      options: ["目标理解", "推理决策", "工具调用", "操作硬盘磁头"],
      correctAnswer: 3
    }
  },
  {
    id: 30,
    root: "Prompt（提示词）",
    origin: "智能体核心",
    meaning: "Agent 的角色与约束",
    description: "Prompt 用于定义 Agent 的角色、能力、风格、约束等指令；ADP 提供大量提示词模板，方便用户参考与微调。",
    examples: [
      { word: "角色设定", meaning: "你是金融顾问", breakdown: { root: "角色" }, explanation: "明确身份。" },
      { word: "约束指令", meaning: "只回答合规内容", breakdown: { root: "约束" }, explanation: "限定边界。" },
      { word: "Prompt 模板", meaning: "参考样例", breakdown: { root: "模板" }, explanation: "复用最佳实践。" }
    ],
    quiz: {
      question: "Prompt 在 Agent 中扮演什么角色？",
      options: ["定义模型权重", "定义 Agent 的角色与约束", "操作数据库", "压缩图片"],
      correctAnswer: 1
    }
  },
  {
    id: 31,
    root: "思考模型",
    origin: "智能体核心",
    meaning: "意图与路由决策",
    description: "思考模型负责意图识别和路由决策，影响理解准确度。可针对其单独选择更强的模型或更高的温度策略。",
    examples: [
      { word: "意图识别", meaning: "理解用户", breakdown: { root: "意图" }, explanation: "决定路由。" },
      { word: "路由决策", meaning: "选分支/Agent", breakdown: { root: "路由" }, explanation: "影响后续动作。" },
      { word: "选型策略", meaning: "强模型优先", breakdown: { root: "选型" }, explanation: "确保准确。" }
    ],
    quiz: {
      question: "思考模型主要负责什么？",
      options: ["最终回答生成", "意图识别和路由决策", "向量编码", "音视频解码"],
      correctAnswer: 1
    }
  },
  {
    id: 32,
    root: "生成模型",
    origin: "智能体核心",
    meaning: "回答生成的执行者",
    description: "生成模型负责最终回答生成，影响语言质量、专业度与风格，可与思考模型解耦选型，常见做法是『弱思考+强生成』或反之。",
    examples: [
      { word: "弱思+强生", meaning: "节省成本组合", breakdown: { root: "组合" }, explanation: "权衡质量与价格。" },
      { word: "强思+弱生", meaning: "决策密集型", breakdown: { root: "组合" }, explanation: "需要复杂判断。" },
      { word: "风格控制", meaning: "通过 Prompt", breakdown: { root: "风格" }, explanation: "决定输出语气。" }
    ],
    quiz: {
      question: "生成模型在 Agent 中主要承担什么任务？",
      options: ["最终回答生成", "意图识别", "权限校验", "图像分割"],
      correctAnswer: 0
    }
  },
  {
    id: 33,
    root: "变量（Variable）",
    origin: "智能体核心",
    meaning: "数据传递与复用容器",
    description: "变量是在对话或工作流中传递、复用数据的容器，分系统变量（如 SessionId、UserId）和自定义变量（业务参数），是 Agent 的『内存』。",
    examples: [
      { word: "系统变量", meaning: "SessionId 等", breakdown: { root: "系统" }, explanation: "平台自动注入。" },
      { word: "自定义变量", meaning: "订单号、城市", breakdown: { root: "自定义" }, explanation: "业务定义。" },
      { word: "变量作用域", meaning: "会话/全局", breakdown: { root: "作用域" }, explanation: "决定生效范围。" }
    ],
    quiz: {
      question: "下列哪个是 ADP 的系统变量？",
      options: ["SessionId", "用户输入的城市", "订单号", "天气状况"],
      correctAnswer: 0
    }
  },
  {
    id: 34,
    root: "长期记忆",
    origin: "智能体核心",
    meaning: "跨会话个性化",
    description: "长期记忆让 Agent 跨会话记住用户偏好、历史信息，实现『越用越懂你』，常用于客服、私人助理类场景。",
    examples: [
      { word: "用户偏好", meaning: "饮食、风格", breakdown: { root: "偏好" }, explanation: "下次自动适配。" },
      { word: "历史信息", meaning: "上次咨询", breakdown: { root: "历史" }, explanation: "无需重复输入。" },
      { word: "个性化", meaning: "千人千面", breakdown: { root: "个性化" }, explanation: "提升体验。" }
    ],
    quiz: {
      question: "长期记忆主要解决什么问题？",
      options: ["让模型更便宜", "跨会话保持用户偏好与历史", "让向量更短", "让模型更慢"],
      correctAnswer: 1
    }
  },
  {
    id: 35,
    root: "会话（Session）",
    origin: "智能体核心",
    meaning: "上下文窗口单位",
    description: "会话是单次连续对话的上下文窗口，由 SessionId 标识。不同会话之间默认隔离，便于并发与数据安全。",
    examples: [
      { word: "SessionId", meaning: "会话唯一标识", breakdown: { root: "Id" }, explanation: "API 必填。" },
      { word: "上下文长度", meaning: "受模型限制", breakdown: { root: "长度" }, explanation: "超出会被截断。" },
      { word: "会话隔离", meaning: "不互相干扰", breakdown: { root: "隔离" }, explanation: "保障安全。" }
    ],
    quiz: {
      question: "会话（Session）的主要作用是？",
      options: ["管理硬件设备", "维护单次连续对话的上下文", "管理 IP 地址", "替代知识库"],
      correctAnswer: 1
    }
  },
  {
    id: 36,
    root: "意图识别",
    origin: "智能体核心",
    meaning: "用户输入到业务意图的映射",
    description: "意图识别用于把用户输入分类到不同业务意图，从而路由到不同处理分支。常配合大模型意图识别节点或专用分类模型实现。",
    examples: [
      { word: "查询订单", meaning: "订单意图", breakdown: { root: "意图" }, explanation: "走订单分支。" },
      { word: "投诉", meaning: "客诉意图", breakdown: { root: "意图" }, explanation: "走人工兜底。" },
      { word: "闲聊", meaning: "兜底意图", breakdown: { root: "意图" }, explanation: "走 LLM 自由对话。" }
    ],
    quiz: {
      question: "意图识别的主要价值是什么？",
      options: ["让 UI 更美观", "实现按业务意图的路由分支", "压缩传输", "降低模型成本"],
      correctAnswer: 1
    }
  },
  {
    id: 37,
    root: "拒答问题",
    origin: "智能体核心",
    meaning: "敏感问题统一兜底",
    description: "可在 Agent 中预置敏感、违规、超出范围问题的统一拒答话术，保障内容安全合规，并提供良好的用户体验。",
    examples: [
      { word: "敏感词命中", meaning: "拒答处理", breakdown: { root: "拒答" }, explanation: "返回兜底话术。" },
      { word: "话术模板", meaning: "可自定义", breakdown: { root: "话术" }, explanation: "符合品牌调性。" },
      { word: "合规要求", meaning: "金融/医疗", breakdown: { root: "合规" }, explanation: "强制启用。" }
    ],
    quiz: {
      question: "拒答问题机制的主要作用是？",
      options: ["提升模型 IQ", "对敏感/违规问题统一兜底", "替代知识库", "压缩 Token"],
      correctAnswer: 1
    }
  },
  {
    id: 38,
    root: "澄清询问",
    origin: "智能体核心",
    meaning: "信息不足时反问用户",
    description: "当用户表述不清或缺少关键参数时，Agent 自动反问以获取必要信息，避免猜测或错误回答，提升任务完成质量。",
    examples: [
      { word: "缺参数", meaning: "缺订单号", breakdown: { root: "缺失" }, explanation: "Agent 主动询问。" },
      { word: "歧义解决", meaning: "多含义词", breakdown: { root: "歧义" }, explanation: "二次确认。" },
      { word: "提升完成率", meaning: "减少错误", breakdown: { root: "完成率" }, explanation: "更靠谱。" }
    ],
    quiz: {
      question: "澄清询问机制最适合解决什么场景？",
      options: ["用户输入信息不完整", "知识库太大", "模型推理太慢", "证书过期"],
      correctAnswer: 0
    }
  },
  {
    id: 39,
    root: "预置模型",
    origin: "模型广场",
    meaning: "开箱即用的多种模型",
    description: "ADP 模型广场内置混元、优图精调、DeepSeek 等十余种预置模型，开箱即用，覆盖通用对话、知识问答、推理等场景。",
    examples: [
      { word: "混元 Pro", meaning: "通用 LLM", breakdown: { root: "混元" }, explanation: "中文对话强。" },
      { word: "DeepSeek-R1", meaning: "推理强", breakdown: { root: "R1" }, explanation: "适合深度思考。" },
      { word: "youtu-mrc", meaning: "知识问答精调", breakdown: { root: "mrc" }, explanation: "命中知识更准。" }
    ],
    quiz: {
      question: "ADP 模型广场的预置模型不包括以下哪个？",
      options: ["混元", "youtu-mrc", "DeepSeek", "Linux 内核模块"],
      correctAnswer: 3
    }
  },
  {
    id: 40,
    root: "DeepSeek 满血版",
    origin: "模型广场",
    meaning: "DeepSeek 671B 全尺寸",
    description: "ADP 内置 DeepSeek-R1/V3 671B 全尺寸模型（俗称满血版），支持深度思考与高质量代码、数学、推理任务。",
    examples: [
      { word: "DeepSeek-R1", meaning: "推理优化", breakdown: { root: "R1" }, explanation: "支持思考链。" },
      { word: "DeepSeek-V3", meaning: "通用版", breakdown: { root: "V3" }, explanation: "对话优秀。" },
      { word: "671B", meaning: "全参数规模", breakdown: { root: "B" }, explanation: "Billion 参数。" }
    ],
    quiz: {
      question: "ADP 中的 DeepSeek 满血版指的是哪个尺寸？",
      options: ["7B", "67B", "200B", "671B"],
      correctAnswer: 3
    }
  },
  {
    id: 41,
    root: "混元大模型",
    origin: "模型广场",
    meaning: "腾讯自研通用 LLM",
    description: "腾讯混元大模型是腾讯自研的通用大语言模型，支持中文场景的高质量对话与生成，是 ADP 默认推荐模型之一。",
    examples: [
      { word: "中文优势", meaning: "母语级表现", breakdown: { root: "中文" }, explanation: "适合本土场景。" },
      { word: "多模态", meaning: "图文/语音", breakdown: { root: "多模态" }, explanation: "持续扩展。" },
      { word: "稳定 SLA", meaning: "腾讯云保障", breakdown: { root: "SLA" }, explanation: "企业级稳定。" }
    ],
    quiz: {
      question: "混元大模型由谁研发？",
      options: ["OpenAI", "Google", "腾讯", "Anthropic"],
      correctAnswer: 2
    }
  },
  {
    id: 42,
    root: "优图精调模型",
    origin: "模型广场",
    meaning: "youtu-mrc 知识问答专精",
    description: "优图精调模型（youtu-mrc）由腾讯优图实验室针对知识问答场景精调，命中知识库时回答更准确、幻觉更少。",
    examples: [
      { word: "MRC", meaning: "Machine Reading Comprehension", breakdown: { root: "MRC" }, explanation: "机器阅读理解。" },
      { word: "命中精度", meaning: "更准", breakdown: { root: "精度" }, explanation: "超过通用模型。" },
      { word: "幻觉抑制", meaning: "减少胡编", breakdown: { root: "幻觉" }, explanation: "更可信。" }
    ],
    quiz: {
      question: "youtu-mrc 模型最擅长的场景是？",
      options: ["代码生成", "图像生成", "基于知识库的问答", "视频剪辑"],
      correctAnswer: 2
    }
  },
  {
    id: 43,
    root: "TI-ONE 自定义模型",
    origin: "模型广场",
    meaning: "导入私有自训练模型",
    description: "ADP 支持一键同步腾讯云 TI-ONE 平台部署的自训练模型在线服务，让企业的私有模型也能在 Agent 框架中使用。",
    examples: [
      { word: "TI-ONE", meaning: "训练平台", breakdown: { root: "TI" }, explanation: "腾讯 AI 训练平台。" },
      { word: "在线服务", meaning: "Endpoint", breakdown: { root: "服务" }, explanation: "可直接调用。" },
      { word: "一键同步", meaning: "无缝接入", breakdown: { root: "同步" }, explanation: "无需重写。" }
    ],
    quiz: {
      question: "通过 TI-ONE 接入 ADP 的模型属于哪类？",
      options: ["公共预置模型", "企业自训练私有模型", "竞品 API", "开源数据集"],
      correctAnswer: 1
    }
  },
  {
    id: 44,
    root: "OpenAI 兼容模型",
    origin: "模型广场",
    meaning: "接入第三方/自建模型",
    description: "ADP 支持接入符合 OpenAI 协议的第三方/自建模型，例如 vLLM、LM Studio 等本地部署，扩展模型选择空间。",
    examples: [
      { word: "OpenAI 协议", meaning: "事实标准", breakdown: { root: "协议" }, explanation: "请求/响应格式统一。" },
      { word: "vLLM", meaning: "高性能推理", breakdown: { root: "vLLM" }, explanation: "可对接 ADP。" },
      { word: "自建集群", meaning: "私有部署", breakdown: { root: "自建" }, explanation: "数据不出域。" }
    ],
    quiz: {
      question: "ADP 兼容下列哪种模型协议？",
      options: ["OpenAI 兼容协议", "POP3", "IMAP", "SMTP"],
      correctAnswer: 0
    }
  },
  {
    id: 45,
    root: "Embedding 模型",
    origin: "模型广场",
    meaning: "自研 2B 向量模型",
    description: "ADP 内置自研 2B 级 Embedding 向量模型，在 C-MTEB 中文向量基准测试中达到 SOTA 水平，是高质量 RAG 的基础。",
    examples: [
      { word: "C-MTEB", meaning: "中文基准", breakdown: { root: "MTEB" }, explanation: "权威向量评测。" },
      { word: "SOTA", meaning: "最优水平", breakdown: { root: "SOTA" }, explanation: "State of the Art。" },
      { word: "向量召回", meaning: "RAG 第一步", breakdown: { root: "向量" }, explanation: "决定召回质量。" }
    ],
    quiz: {
      question: "ADP 自研 Embedding 模型在哪个基准上达到 SOTA？",
      options: ["MMLU", "C-MTEB", "HumanEval", "GSM8K"],
      correctAnswer: 1
    }
  },
  {
    id: 46,
    root: "Reranker 模型",
    origin: "模型广场",
    meaning: "基于 LLM 的长文本重排",
    description: "ADP 提供基于 LLM 的 Reranker 重排模型，支持 8K+ 长文本上下文，对召回结果重新打分，显著提升检索精度。",
    examples: [
      { word: "重排打分", meaning: "二次评估", breakdown: { root: "Rerank" }, explanation: "更准的相关度。" },
      { word: "长文本", meaning: "8K+ 上下文", breakdown: { root: "长文本" }, explanation: "适配长片段。" },
      { word: "RAG 增强", meaning: "提升答案质量", breakdown: { root: "RAG" }, explanation: "命中更准。" }
    ],
    quiz: {
      question: "Reranker 在 RAG 链路中的作用是？",
      options: ["生成最终回答", "对召回结果重新排序", "向量编码", "存储日志"],
      correctAnswer: 1
    }
  },
  {
    id: 47,
    root: "模型路由",
    origin: "模型广场",
    meaning: "不同节点配不同模型",
    description: "ADP 允许针对思考、生成、Embedding 等不同节点单独配置模型，实现成本与效果的灵活平衡，是高级用户必学技巧。",
    examples: [
      { word: "思考用强模型", meaning: "确保理解", breakdown: { root: "路由" }, explanation: "意图识别准。" },
      { word: "生成用便宜模型", meaning: "节省成本", breakdown: { root: "路由" }, explanation: "高频调用。" },
      { word: "Embedding 独立", meaning: "向量专用", breakdown: { root: "向量" }, explanation: "不同模型不混用。" }
    ],
    quiz: {
      question: "模型路由的核心目的是什么？",
      options: ["统一所有节点用同一模型", "根据节点角色匹配最佳模型", "禁用模型", "压缩 Token"],
      correctAnswer: 1
    }
  },
  {
    id: 48,
    root: "模型计费",
    origin: "模型广场",
    meaning: "Token 用量分别结算",
    description: "ADP 中不同模型按 Token 用量分别计费，可在用量看板查看明细。建议高峰期预购套餐包，避免后付费溢价。",
    examples: [
      { word: "Token 计费", meaning: "输入+输出", breakdown: { root: "Token" }, explanation: "分别计算。" },
      { word: "用量看板", meaning: "可视化报表", breakdown: { root: "看板" }, explanation: "实时查看。" },
      { word: "预付费包", meaning: "套餐订阅", breakdown: { root: "套餐" }, explanation: "更优惠。" }
    ],
    quiz: {
      question: "ADP 模型按什么计费？",
      options: ["按时长", "按调用次数", "按 Token 用量", "按 IP 数"],
      correctAnswer: 2
    }
  },
  {
    id: 49,
    root: "知识库三大内容",
    origin: "知识库与 RAG",
    meaning: "文档/QA/数据库表",
    description: "ADP 知识库支持三类内容：非结构化文档（Doc）、问答对（QA）、结构化数据库表（Table），覆盖企业常见知识形态。",
    examples: [
      { word: "文档", meaning: "PDF/Word/PPT", breakdown: { root: "Doc" }, explanation: "OCR 解析。" },
      { word: "QA 对", meaning: "FAQ", breakdown: { root: "QA" }, explanation: "高优先级。" },
      { word: "Table", meaning: "数据库表", breakdown: { root: "表" }, explanation: "Text-to-SQL。" }
    ],
    quiz: {
      question: "ADP 知识库支持的三大内容类型是？",
      options: ["视频/音频/图像", "文档/QA/数据库表", "服务器/磁盘/网卡", "Word/Excel/PPT"],
      correctAnswer: 1
    }
  },
  {
    id: 50,
    root: "支持文档格式",
    origin: "知识库与 RAG",
    meaning: "10+ 主流文件格式",
    description: "ADP 支持 pdf、doc/docx、ppt/pptx、txt、markdown、html 等 10+ 种文档格式，单文档最大 200MB，覆盖企业绝大多数文档场景。",
    examples: [
      { word: "PDF", meaning: "扫描件可 OCR", breakdown: { root: "PDF" }, explanation: "图文混排支持好。" },
      { word: "Markdown", meaning: "结构化文本", breakdown: { root: "MD" }, explanation: "适合工程文档。" },
      { word: "200MB", meaning: "单文档上限", breakdown: { root: "限额" }, explanation: "大文件可拆分。" }
    ],
    quiz: {
      question: "ADP 知识库单个文档最大允许多大？",
      options: ["20MB", "100MB", "200MB", "无限"],
      correctAnswer: 2
    }
  },
  {
    id: 51,
    root: "网页爬取",
    origin: "知识库与 RAG",
    meaning: "URL 自动入库",
    description: "ADP 支持输入 URL，由平台自动爬取页面文本和图片构建知识库，适合官网公告、博客、文档站等内容自动同步。",
    examples: [
      { word: "URL 输入", meaning: "粘贴链接", breakdown: { root: "URL" }, explanation: "支持批量。" },
      { word: "自动爬取", meaning: "周期同步", breakdown: { root: "爬取" }, explanation: "可配置定时任务。" },
      { word: "网页解析", meaning: "去广告/抽正文", breakdown: { root: "解析" }, explanation: "智能化处理。" }
    ],
    quiz: {
      question: "网页爬取功能的主要价值是？",
      options: ["渲染 3D 模型", "把网页内容自动入库", "压缩视频", "代理网络流量"],
      correctAnswer: 1
    }
  },
  {
    id: 52,
    root: "文档解析",
    origin: "知识库与 RAG",
    meaning: "OCR + 结构化抽取",
    description: "ADP 文档解析基于腾讯优图 OCR，可识别图文混排、表格、公式、印章，并做结构化抽取，是高质量 RAG 的前置关键。",
    examples: [
      { word: "图文混排", meaning: "复杂版面", breakdown: { root: "OCR" }, explanation: "保留语义。" },
      { word: "表格识别", meaning: "结构保留", breakdown: { root: "表格" }, explanation: "导出表头。" },
      { word: "公式识别", meaning: "LaTeX 输出", breakdown: { root: "公式" }, explanation: "数学/工程文档。" }
    ],
    quiz: {
      question: "ADP 文档解析的底层 OCR 来自哪个团队？",
      options: ["微信团队", "腾讯优图", "腾讯安全", "腾讯地图"],
      correctAnswer: 1
    }
  },
  {
    id: 53,
    root: "智能结构化解析",
    origin: "知识库与 RAG",
    meaning: "层级与列表识别",
    description: "ADP 自动识别标题层级、段落、有序/无序列表，输出结构化的知识片段（Chunk），保留语义层次，便于检索与渲染。",
    examples: [
      { word: "标题层级", meaning: "H1/H2/H3", breakdown: { root: "层级" }, explanation: "便于路径检索。" },
      { word: "列表识别", meaning: "有序/无序", breakdown: { root: "列表" }, explanation: "保留语义。" },
      { word: "结构化片段", meaning: "Chunk 元数据", breakdown: { root: "Chunk" }, explanation: "附带层级路径。" }
    ],
    quiz: {
      question: "智能结构化解析能识别下列哪种结构？",
      options: ["音频频谱", "标题层级和列表", "网络拓扑", "GPU 显存布局"],
      correctAnswer: 1
    }
  },
  {
    id: 54,
    root: "文档切分（Chunking）",
    origin: "知识库与 RAG",
    meaning: "长文档拆成小片段",
    description: "Chunking 把长文档切成可检索片段（chunk），是 RAG 必备步骤，可设置切分大小、重叠（overlap），影响召回效果。",
    examples: [
      { word: "切分大小", meaning: "如 512 token", breakdown: { root: "Size" }, explanation: "大小决定粒度。" },
      { word: "重叠 overlap", meaning: "片段交叠", breakdown: { root: "Overlap" }, explanation: "防止边界信息丢失。" },
      { word: "RAG 命中率", meaning: "受切分影响", breakdown: { root: "命中" }, explanation: "需调参。" }
    ],
    quiz: {
      question: "Chunking 的主要目的是？",
      options: ["压缩文档", "把长文档切成可检索片段", "渲染图像", "代理流量"],
      correctAnswer: 1
    }
  },
  {
    id: 55,
    root: "解析切分干预",
    origin: "知识库与 RAG",
    meaning: "运营手动调整边界",
    description: "当自动解析切分效果不佳时，运营可手动调整切分边界、合并/拆分 Chunk，确保关键信息不被截断，提升检索精度。",
    examples: [
      { word: "手动合并", meaning: "上下文完整", breakdown: { root: "合并" }, explanation: "避免切割语义。" },
      { word: "手动拆分", meaning: "颗粒更细", breakdown: { root: "拆分" }, explanation: "提升精度。" },
      { word: "可视化编辑", meaning: "拖拽边界", breakdown: { root: "编辑" }, explanation: "无需写代码。" }
    ],
    quiz: {
      question: "运营何时需要进行切分干预？",
      options: ["想给文档着色", "自动切分效果不理想", "替换字体", "扩展 GPU"],
      correctAnswer: 1
    }
  },
  {
    id: 56,
    root: "文档对比任务",
    origin: "知识库与 RAG",
    meaning: "新旧版本变更检测",
    description: "ADP 支持新旧版本文档对比，自动识别变更点，便于知识库版本更新时只重新嵌入变化部分，降低成本提升时效。",
    examples: [
      { word: "增量更新", meaning: "只更新变更", breakdown: { root: "增量" }, explanation: "省 Embedding 费用。" },
      { word: "变更摘要", meaning: "diff 报告", breakdown: { root: "Diff" }, explanation: "可审计。" },
      { word: "版本管理", meaning: "回滚能力", breakdown: { root: "版本" }, explanation: "保留历史。" }
    ],
    quiz: {
      question: "文档对比任务最适合下列哪个场景？",
      options: ["首次入库", "知识库的版本化更新", "图像识别", "音视频转写"],
      correctAnswer: 1
    }
  },
  {
    id: 57,
    root: "问答对（QA）",
    origin: "知识库与 RAG",
    meaning: "高优先级直接命中",
    description: "QA 即直接以『问题-答案』形式录入的知识，命中后高优先级返回，适合 FAQ、政策解读等需要稳定话术的场景。",
    examples: [
      { word: "FAQ", meaning: "常见问题", breakdown: { root: "FAQ" }, explanation: "QA 典型应用。" },
      { word: "高优命中", meaning: "优先于文档", breakdown: { root: "优先级" }, explanation: "答案稳定。" },
      { word: "话术控制", meaning: "标准答复", breakdown: { root: "话术" }, explanation: "符合规范。" }
    ],
    quiz: {
      question: "QA 对相比文档检索的优势是？",
      options: ["更便宜", "命中后高优先级返回稳定话术", "支持视频", "无需 Embedding"],
      correctAnswer: 1
    }
  },
  {
    id: 58,
    root: "从文档生成问答",
    origin: "知识库与 RAG",
    meaning: "LLM 自动抽取候选 QA",
    description: "上传文档后，ADP 可用大模型自动抽取候选 QA 对，运营审核后入库，大幅提升 QA 库构建效率。",
    examples: [
      { word: "自动抽取", meaning: "LLM 生成", breakdown: { root: "抽取" }, explanation: "节省人力。" },
      { word: "运营审核", meaning: "把关质量", breakdown: { root: "审核" }, explanation: "防错答。" },
      { word: "构建效率", meaning: "数倍提升", breakdown: { root: "效率" }, explanation: "比手写快。" }
    ],
    quiz: {
      question: "从文档生成 QA 的核心价值是？",
      options: ["让模型免费", "用 LLM 提升 QA 库构建效率", "替换 OCR", "压缩图片"],
      correctAnswer: 1
    }
  },
  {
    id: 59,
    root: "数据库知识源",
    origin: "知识库与 RAG",
    meaning: "结构化表 + Text-to-SQL",
    description: "ADP 支持接入结构化数据库表作为知识源，配合 Text-to-SQL 能力，实现自然语言查表，让业务自助查数据。",
    examples: [
      { word: "Text-to-SQL", meaning: "自然语言转 SQL", breakdown: { root: "T2SQL" }, explanation: "让业务自助。" },
      { word: "表 schema 注入", meaning: "字段说明", breakdown: { root: "Schema" }, explanation: "提升准确度。" },
      { word: "权限控制", meaning: "只读账号", breakdown: { root: "安全" }, explanation: "防误改。" }
    ],
    quiz: {
      question: "数据库知识源最适合什么场景？",
      options: ["让业务用自然语言查表", "管理用户权限", "压缩文件", "存储图像"],
      correctAnswer: 0
    }
  },
  {
    id: 60,
    root: "知识检索（RAG）",
    origin: "知识库与 RAG",
    meaning: "向量检索 + 上下文注入",
    description: "RAG 把用户问题转向量，检索知识库中相似片段，注入到 Prompt 上下文中再调用 LLM 生成答案，是大模型落地的核心范式。",
    examples: [
      { word: "向量化", meaning: "Embedding", breakdown: { root: "向量" }, explanation: "提问 → 向量。" },
      { word: "相似度检索", meaning: "TopK", breakdown: { root: "TopK" }, explanation: "找出最像的片段。" },
      { word: "上下文注入", meaning: "Prompt 拼接", breakdown: { root: "注入" }, explanation: "供模型参考。" }
    ],
    quiz: {
      question: "RAG 的核心思想是？",
      options: ["让模型记住所有知识", "检索相关片段注入 Prompt", "训练超大模型", "压缩 Token"],
      correctAnswer: 1
    }
  },
  {
    id: 61,
    root: "多路召回",
    origin: "知识库与 RAG",
    meaning: "向量+关键词融合",
    description: "ADP 支持同时使用向量检索和关键词检索（BM25），结果融合后送入 Reranker，提升对长尾、专业术语的命中率。",
    examples: [
      { word: "向量召回", meaning: "语义匹配", breakdown: { root: "向量" }, explanation: "适合表义。" },
      { word: "关键词召回", meaning: "BM25", breakdown: { root: "关键词" }, explanation: "适合术语精确匹配。" },
      { word: "融合排序", meaning: "RRF/Rerank", breakdown: { root: "融合" }, explanation: "综合两者优势。" }
    ],
    quiz: {
      question: "多路召回相比单路向量召回的优势是？",
      options: ["更便宜", "兼顾语义与关键词，召回更全面", "无需 Embedding", "无需切分"],
      correctAnswer: 1
    }
  },
  {
    id: 62,
    root: "GraphRAG",
    origin: "知识库与 RAG",
    meaning: "知识图谱增强检索",
    description: "GraphRAG 通过构建实体-关系知识图谱，支持跨实体、跨段落的关系推理，适合复杂、多跳的问答任务。",
    examples: [
      { word: "知识图谱", meaning: "实体+关系", breakdown: { root: "Graph" }, explanation: "结构化知识。" },
      { word: "多跳推理", meaning: "跨节点", breakdown: { root: "多跳" }, explanation: "回答复杂问题。" },
      { word: "实体抽取", meaning: "NER", breakdown: { root: "NER" }, explanation: "构建图谱基础。" }
    ],
    quiz: {
      question: "GraphRAG 最适合哪类问题？",
      options: ["简单 FAQ", "需要跨实体多跳推理的复杂问题", "图像识别", "视频检索"],
      correctAnswer: 1
    }
  },
  {
    id: 63,
    root: "Agentic RAG",
    origin: "知识库与 RAG",
    meaning: "Agent 主动决策检索",
    description: "Agentic RAG 由 Agent 决策何时检索、检索什么、是否补充检索，多轮自适应，能克服传统单轮 RAG 的局限。",
    examples: [
      { word: "主动决策", meaning: "判断是否检索", breakdown: { root: "决策" }, explanation: "灵活。" },
      { word: "多轮检索", meaning: "迭代补充", breakdown: { root: "多轮" }, explanation: "复杂问题逐步。" },
      { word: "Tool-style RAG", meaning: "把检索当工具", breakdown: { root: "工具化" }, explanation: "Agent 调用。" }
    ],
    quiz: {
      question: "Agentic RAG 与传统 RAG 的最大区别是？",
      options: ["更便宜", "由 Agent 主动决策检索时机和策略", "更短上下文", "禁用 LLM"],
      correctAnswer: 1
    }
  },
  {
    id: 64,
    root: "知识库 Schema",
    origin: "知识库与 RAG",
    meaning: "字段元数据定义",
    description: "为知识库定义 Schema（来源、标签、时间、部门等元数据），便于过滤检索、做权限隔离、按维度统计分析。",
    examples: [
      { word: "来源字段", meaning: "标识出处", breakdown: { root: "来源" }, explanation: "便于回溯。" },
      { word: "时间字段", meaning: "时效过滤", breakdown: { root: "时间" }, explanation: "新文档优先。" },
      { word: "标签字段", meaning: "维度过滤", breakdown: { root: "标签" }, explanation: "支持灵活筛选。" }
    ],
    quiz: {
      question: "知识库 Schema 的主要用途是？",
      options: ["定义字段元数据用于过滤检索和分析", "压缩文档", "替换 LLM", "增加图像分辨率"],
      correctAnswer: 0
    }
  },
  {
    id: 65,
    root: "知识库标签",
    origin: "知识库与 RAG",
    meaning: "维度划分与权限",
    description: "标签是知识库 Schema 的常用字段，用于划分文档/QA 的适用范围、做权限隔离，例如『销售』『内部机密』等。",
    examples: [
      { word: "范围标签", meaning: "限定适用 Agent", breakdown: { root: "范围" }, explanation: "防止越界。" },
      { word: "敏感标签", meaning: "权限隔离", breakdown: { root: "敏感" }, explanation: "限制可见。" },
      { word: "组合过滤", meaning: "多标签 AND/OR", breakdown: { root: "过滤" }, explanation: "灵活筛选。" }
    ],
    quiz: {
      question: "知识库标签的核心作用是？",
      options: ["美化界面", "划分适用范围与权限隔离", "替代 OCR", "压缩字典"],
      correctAnswer: 1
    }
  },
  {
    id: 66,
    root: "不满意回复闭环",
    origin: "知识库与 RAG",
    meaning: "用户反馈驱动迭代",
    description: "用户对回答点踩后，运营可在 ADP 后台查看完整上下文与命中片段，定位问题并迭代知识库与 Prompt，形成正向闭环。",
    examples: [
      { word: "点踩入口", meaning: "前端按钮", breakdown: { root: "点踩" }, explanation: "用户主动反馈。" },
      { word: "上下文回放", meaning: "完整对话", breakdown: { root: "回放" }, explanation: "便于定位。" },
      { word: "迭代闭环", meaning: "持续优化", breakdown: { root: "闭环" }, explanation: "运营核心动作。" }
    ],
    quiz: {
      question: "不满意回复闭环的关键价值是？",
      options: ["让用户不能反馈", "用真实反馈驱动持续优化", "取消评测", "替代知识库"],
      correctAnswer: 1
    }
  },
  {
    id: 67,
    root: "工作流定义",
    origin: "工作流节点",
    meaning: "可视化流程编排",
    description: "Workflow 由『开始 → 节点链 → 结束』组成，是 ADP 上把固化业务流程可视化编排的能力，可作为单独应用或被 Agent 调用。",
    examples: [
      { word: "拖拽设计", meaning: "无代码", breakdown: { root: "DnD" }, explanation: "降低门槛。" },
      { word: "节点链", meaning: "顺序/分支", breakdown: { root: "链路" }, explanation: "组合表达。" },
      { word: "可作工具", meaning: "供 Agent 调用", breakdown: { root: "工具化" }, explanation: "复用流程。" }
    ],
    quiz: {
      question: "Workflow 的最基本组成是？",
      options: ["开始-节点链-结束", "前端-后端-数据库", "Wifi-Switch-Router", "Sender-Receiver"],
      correctAnswer: 0
    }
  },
  {
    id: 68,
    root: "开始/结束节点",
    origin: "工作流节点",
    meaning: "流程的入口与出口",
    description: "开始节点定义流程全局输入参数，结束节点定义最终输出结构，是工作流的入口和出口，每条流程必含。",
    examples: [
      { word: "开始节点", meaning: "定义入参", breakdown: { root: "入口" }, explanation: "用户输入/系统变量。" },
      { word: "结束节点", meaning: "定义出参", breakdown: { root: "出口" }, explanation: "返回给调用方。" },
      { word: "强制节点", meaning: "必须存在", breakdown: { root: "必含" }, explanation: "无法删除。" }
    ],
    quiz: {
      question: "工作流中哪两个节点是必须存在的？",
      options: ["条件 + 循环", "开始 + 结束", "代码 + 工具", "数据库 + 知识检索"],
      correctAnswer: 1
    }
  },
  {
    id: 69,
    root: "回复节点",
    origin: "工作流节点",
    meaning: "向用户输出消息",
    description: "回复节点向用户输出文本/卡片消息，可放在流程中间（中途反馈）或末尾（最终回答），灵活性高。",
    examples: [
      { word: "中途回复", meaning: "进度提示", breakdown: { root: "中途" }, explanation: "如『正在查询订单…』。" },
      { word: "末尾回复", meaning: "最终回答", breakdown: { root: "末尾" }, explanation: "结果输出。" },
      { word: "卡片消息", meaning: "Widget", breakdown: { root: "卡片" }, explanation: "富交互。" }
    ],
    quiz: {
      question: "回复节点最适合输出什么？",
      options: ["音频频率", "文本/卡片消息", "GPU 寄存器", "硬盘扇区"],
      correctAnswer: 1
    }
  },
  {
    id: 70,
    root: "大模型节点",
    origin: "工作流节点",
    meaning: "工作流中调用 LLM",
    description: "大模型节点用于在工作流中调用 LLM 完成生成、改写、总结、抽取等任务，是 Workflow 智能化的核心节点。",
    examples: [
      { word: "生成", meaning: "写文案", breakdown: { root: "生成" }, explanation: "营销文案、邮件。" },
      { word: "改写", meaning: "Rewrite", breakdown: { root: "改写" }, explanation: "调整语气/长度。" },
      { word: "总结", meaning: "摘要", breakdown: { root: "总结" }, explanation: "长文压缩。" }
    ],
    quiz: {
      question: "大模型节点不擅长下列哪个任务？",
      options: ["生成文本", "改写润色", "总结摘要", "格式化磁盘"],
      correctAnswer: 3
    }
  },
  {
    id: 71,
    root: "大模型意图识别节点",
    origin: "工作流节点",
    meaning: "用 LLM 判断意图",
    description: "该节点用 LLM 判断用户输入对应的意图分类，从而走不同分支，是 Workflow 中分支路由的常用方式，比规则更灵活。",
    examples: [
      { word: "意图标签", meaning: "可配置", breakdown: { root: "标签" }, explanation: "如『查询/投诉』。" },
      { word: "Few-shot 示例", meaning: "提升准确率", breakdown: { root: "示例" }, explanation: "带例子让 LLM 学。" },
      { word: "兜底分支", meaning: "未识别处理", breakdown: { root: "兜底" }, explanation: "默认走闲聊。" }
    ],
    quiz: {
      question: "大模型意图识别节点的主要价值是？",
      options: ["压缩文档", "用 LLM 灵活判断意图分支", "替代 OCR", "管理 IP"],
      correctAnswer: 1
    }
  },
  {
    id: 72,
    root: "大模型知识问答节点",
    origin: "工作流节点",
    meaning: "Workflow 内 RAG",
    description: "该节点在 Workflow 中执行完整 RAG 流程：检索 + LLM 生成，输出最终答案与命中片段，是知识助手类应用的核心。",
    examples: [
      { word: "一站式 RAG", meaning: "检索+生成", breakdown: { root: "RAG" }, explanation: "无需自己拼。" },
      { word: "命中片段返回", meaning: "可解释", breakdown: { root: "片段" }, explanation: "便于审计。" },
      { word: "知识库选择", meaning: "支持多 KB", breakdown: { root: "KB" }, explanation: "灵活组合。" }
    ],
    quiz: {
      question: "知识问答节点相比『知识检索节点』的区别是？",
      options: ["前者只检索不生成", "前者完成检索+LLM 生成", "二者完全相同", "后者更慢"],
      correctAnswer: 1
    }
  },
  {
    id: 73,
    root: "知识检索节点",
    origin: "工作流节点",
    meaning: "只检索不生成",
    description: "知识检索节点仅做检索不生成，命中片段作为变量供后续节点使用，适合『先检索再综合多源信息再生成』的场景。",
    examples: [
      { word: "检索结果变量", meaning: "TopK 列表", breakdown: { root: "变量" }, explanation: "供后续使用。" },
      { word: "组合多源", meaning: "再次拼接", breakdown: { root: "组合" }, explanation: "灵活拼装。" },
      { word: "成本控制", meaning: "省一次 LLM", breakdown: { root: "成本" }, explanation: "更便宜。" }
    ],
    quiz: {
      question: "知识检索节点的输出是？",
      options: ["最终回答文本", "命中片段（供后续节点使用）", "图像", "音频"],
      correctAnswer: 1
    }
  },
  {
    id: 74,
    root: "参数提取节点",
    origin: "工作流节点",
    meaning: "从对话中抽参数",
    description: "参数提取节点从用户对话中抽取关键参数（订单号、日期、城市等），结构化输出 JSON，供后续 API 调用使用。",
    examples: [
      { word: "订单号抽取", meaning: "正则+LLM", breakdown: { root: "抽取" }, explanation: "结构化。" },
      { word: "结构化输出", meaning: "JSON", breakdown: { root: "JSON" }, explanation: "供 API 直接使用。" },
      { word: "Schema 约束", meaning: "字段定义", breakdown: { root: "Schema" }, explanation: "强约束输出。" }
    ],
    quiz: {
      question: "参数提取节点的典型输出是？",
      options: ["纯文本", "结构化 JSON 参数", "二进制流", "音频片段"],
      correctAnswer: 1
    }
  },
  {
    id: 75,
    root: "条件判断节点",
    origin: "工作流节点",
    meaning: "if/else 分支",
    description: "条件判断节点根据变量值走不同分支，类似传统编程的 if/else，支持 ==, !=, >, <, contains 等运算符。",
    examples: [
      { word: "==", meaning: "等于判断", breakdown: { root: "运算符" }, explanation: "精确匹配。" },
      { word: "contains", meaning: "包含字串", breakdown: { root: "包含" }, explanation: "模糊匹配。" },
      { word: "AND/OR", meaning: "组合条件", breakdown: { root: "组合" }, explanation: "多条件。" }
    ],
    quiz: {
      question: "条件判断节点最像传统编程中的什么结构？",
      options: ["for 循环", "if/else 分支", "try/catch", "switch case 不存在"],
      correctAnswer: 1
    }
  },
  {
    id: 76,
    root: "循环/批处理节点",
    origin: "工作流节点",
    meaning: "对集合迭代或并行",
    description: "循环节点对集合做顺序迭代，批处理节点支持并行执行（Parallel），适合批量处理、加速大数据量任务。",
    examples: [
      { word: "顺序循环", meaning: "for-each", breakdown: { root: "循环" }, explanation: "稳定但慢。" },
      { word: "并行批处理", meaning: "Parallel", breakdown: { root: "并行" }, explanation: "加速。" },
      { word: "出错处理", meaning: "继续/中断", breakdown: { root: "异常" }, explanation: "可配置。" }
    ],
    quiz: {
      question: "如果想批量处理大量数据并提升速度，应选择哪种节点？",
      options: ["条件判断", "并行批处理", "回复节点", "结束节点"],
      correctAnswer: 1
    }
  },
  {
    id: 77,
    root: "代码节点",
    origin: "工作流节点",
    meaning: "运行自定义 Python/JS",
    description: "代码节点支持执行 Python 或 JavaScript 自定义代码，处理数据转换、复杂计算、字符串操作等 LLM 不擅长的任务。",
    examples: [
      { word: "数据转换", meaning: "JSON 改造", breakdown: { root: "转换" }, explanation: "字段映射。" },
      { word: "时间计算", meaning: "日期工具", breakdown: { root: "时间" }, explanation: "用代码更准。" },
      { word: "沙箱限制", meaning: "无外网/限内存", breakdown: { root: "沙箱" }, explanation: "保障安全。" }
    ],
    quiz: {
      question: "代码节点支持的语言是？",
      options: ["Python 和 JavaScript", "C++ 和 Rust", "汇编", "Go 和 Java"],
      correctAnswer: 0
    }
  },
  {
    id: 78,
    root: "工具节点",
    origin: "工作流节点",
    meaning: "调用预置或自定义工具",
    description: "工具节点用于在 Workflow 中调用已配置的外部 API/插件，如查天气、发邮件、调用业务系统接口等，是连接业务的关键节点。",
    examples: [
      { word: "查天气", meaning: "调用 API", breakdown: { root: "API" }, explanation: "天气预报示例。" },
      { word: "发邮件", meaning: "通知动作", breakdown: { root: "通知" }, explanation: "完成业务闭环。" },
      { word: "MCP 工具", meaning: "MCP 协议", breakdown: { root: "MCP" }, explanation: "兼容生态。" }
    ],
    quiz: {
      question: "工具节点的典型用途是？",
      options: ["管理硬件", "调用外部 API/插件完成业务动作", "渲染前端", "分配 GPU"],
      correctAnswer: 1
    }
  },
  {
    id: 79,
    root: "数据库节点",
    origin: "工作流节点",
    meaning: "直连业务数据库",
    description: "数据库节点直连业务数据库执行查询/写入，配合参数提取与代码节点可实现『从对话到 SQL 执行』的全链路自助查询。",
    examples: [
      { word: "查询执行", meaning: "SELECT", breakdown: { root: "查询" }, explanation: "支持多种 DB。" },
      { word: "写入限制", meaning: "审批控制", breakdown: { root: "写入" }, explanation: "写操作建议审批。" },
      { word: "字段脱敏", meaning: "结果加工", breakdown: { root: "脱敏" }, explanation: "敏感字段隐藏。" }
    ],
    quiz: {
      question: "数据库节点的安全建议是？",
      options: ["默认开放写权限", "写入操作建议走审批+脱敏", "公开数据库密码", "禁用日志"],
      correctAnswer: 1
    }
  },
  {
    id: 80,
    root: "Agent 节点",
    origin: "工作流节点",
    meaning: "Workflow 内嵌智能体",
    description: "Agent 节点把决策能力交给智能体，让 Workflow 中的某一步具备『自主推理与多轮交互』能力，是 Workflow 与 Agent 融合的桥梁。",
    examples: [
      { word: "嵌入子 Agent", meaning: "复用 Agent", breakdown: { root: "嵌入" }, explanation: "无需重复搭建。" },
      { word: "多轮交互", meaning: "支持对话", breakdown: { root: "多轮" }, explanation: "智能化。" },
      { word: "可解释", meaning: "返回链路", breakdown: { root: "链路" }, explanation: "便于审计。" }
    ],
    quiz: {
      question: "Agent 节点的核心价值是？",
      options: ["压缩 JSON", "在 Workflow 中嵌入 Agent 实现自主决策", "替代 OCR", "管理证书"],
      correctAnswer: 1
    }
  },
  {
    id: 81,
    root: "Widget 节点",
    origin: "工作流节点",
    meaning: "输出可视化卡片",
    description: "Widget 节点输出可视化卡片/表单到前端，让 Agent 的回答超越纯文本，形成富交互体验，提升用户感知。",
    examples: [
      { word: "卡片输出", meaning: "结构化展示", breakdown: { root: "卡片" }, explanation: "如商品卡。" },
      { word: "表单收集", meaning: "用户输入", breakdown: { root: "表单" }, explanation: "结构化采集。" },
      { word: "图表展示", meaning: "ECharts", breakdown: { root: "图表" }, explanation: "数据可视化。" }
    ],
    quiz: {
      question: "Widget 节点的典型输出形态是？",
      options: ["二进制流", "可视化卡片/表单", "音频", "BIOS 配置"],
      correctAnswer: 1
    }
  },
  {
    id: 82,
    root: "变量编排节点",
    origin: "工作流节点",
    meaning: "聚合/赋值/类型转换",
    description: "变量聚合、赋值、类型转换等节点用于处理工作流中的变量编排，如把列表合并、字符串转 JSON、字段重命名等。",
    examples: [
      { word: "聚合", meaning: "Concat/Merge", breakdown: { root: "聚合" }, explanation: "合并多个变量。" },
      { word: "赋值", meaning: "Set", breakdown: { root: "赋值" }, explanation: "设置变量值。" },
      { word: "类型转换", meaning: "Stringify/Parse", breakdown: { root: "转换" }, explanation: "JSON↔字符串。" }
    ],
    quiz: {
      question: "下列哪个不是变量编排节点的常见操作？",
      options: ["聚合", "赋值", "类型转换", "格式化磁盘"],
      correctAnswer: 3
    }
  },
  {
    id: 83,
    root: "单点调试",
    origin: "工作流节点",
    meaning: "节点级测试加速迭代",
    description: "ADP 大部分工作流节点支持单点调试（Single-Step Debug），在不跑整条流程的情况下测试单节点输入输出，加速迭代。",
    examples: [
      { word: "节点输入", meaning: "Mock 数据", breakdown: { root: "Mock" }, explanation: "灵活构造。" },
      { word: "节点输出", meaning: "实时返回", breakdown: { root: "输出" }, explanation: "立即查看。" },
      { word: "迭代效率", meaning: "提升 N 倍", breakdown: { root: "效率" }, explanation: "节省整体跑全流时间。" }
    ],
    quiz: {
      question: "单点调试的主要价值是？",
      options: ["让节点更便宜", "在不跑整条流程的情况下测试节点", "替代单元测试框架", "压缩日志"],
      correctAnswer: 1
    }
  },
  {
    id: 84,
    root: "工作流异步调用",
    origin: "工作流节点",
    meaning: "长任务不阻塞调用方",
    description: "ADP 支持通过 API 异步触发工作流执行，调用方立即拿到任务 ID，再轮询/回调获取结果，适合长任务、大批量场景。",
    examples: [
      { word: "任务 ID", meaning: "异步句柄", breakdown: { root: "ID" }, explanation: "用于查询。" },
      { word: "结果回调", meaning: "Webhook", breakdown: { root: "回调" }, explanation: "完成时通知。" },
      { word: "长任务", meaning: ">30 秒", breakdown: { root: "长任务" }, explanation: "推荐异步。" }
    ],
    quiz: {
      question: "工作流异步调用的典型适用场景是？",
      options: ["实时聊天", "长耗时/大批量任务", "渲染按钮", "压缩 favicon"],
      correctAnswer: 1
    }
  },
  {
    id: 85,
    root: "Multi-Agent 适用场景",
    origin: "Multi-Agent",
    meaning: "复杂任务分工协作",
    description: "Multi-Agent 适用于单一 Agent 能力不足、需要多角色分工协作的复杂任务，例如『策划 + 写作 + 审核 + 翻译』流水线。",
    examples: [
      { word: "策划角色", meaning: "拆解任务", breakdown: { root: "策划" }, explanation: "规划。" },
      { word: "写作角色", meaning: "生成正文", breakdown: { root: "写作" }, explanation: "执行。" },
      { word: "审核角色", meaning: "把关质量", breakdown: { root: "审核" }, explanation: "质量保证。" }
    ],
    quiz: {
      question: "Multi-Agent 最不适合下列哪类任务？",
      options: ["简单一句话问答", "需多角色分工的复杂任务", "研究报告生成", "代码评审"],
      correctAnswer: 0
    }
  },
  {
    id: 86,
    root: "自由转交（Handoff）",
    origin: "Multi-Agent",
    meaning: "Agent 间灵活路由",
    description: "Handoff 让主 Agent 自主决定把对话交给哪个子 Agent 处理，适合开放对话和分支不固定的场景。",
    examples: [
      { word: "主 Agent", meaning: "调度者", breakdown: { root: "主" }, explanation: "做路由决策。" },
      { word: "子 Agent", meaning: "执行者", breakdown: { root: "子" }, explanation: "专精领域。" },
      { word: "Handoff 协议", meaning: "转交格式", breakdown: { root: "协议" }, explanation: "标准化。" }
    ],
    quiz: {
      question: "Handoff 的核心特点是？",
      options: ["路径完全固定", "Agent 自主决定转交对象", "禁用 LLM", "只能转交一次"],
      correctAnswer: 1
    }
  },
  {
    id: 87,
    root: "工作流编排协同",
    origin: "Multi-Agent",
    meaning: "用 Workflow 串多 Agent",
    description: "用 Workflow 串联多个 Agent，按预定流程协同，比 Handoff 更可控，适合流程相对固定的多 Agent 任务。",
    examples: [
      { word: "顺序串联", meaning: "A→B→C", breakdown: { root: "串联" }, explanation: "强可控。" },
      { word: "条件分支", meaning: "if 走不同 Agent", breakdown: { root: "分支" }, explanation: "灵活。" },
      { word: "结果聚合", meaning: "汇总输出", breakdown: { root: "聚合" }, explanation: "整合多 Agent。" }
    ],
    quiz: {
      question: "工作流编排协同相比 Handoff 的优势是？",
      options: ["更便宜", "流程更固定可控", "完全无约束", "不支持分支"],
      correctAnswer: 1
    }
  },
  {
    id: 88,
    root: "Plan-and-Execute",
    origin: "Multi-Agent",
    meaning: "先规划再执行",
    description: "Plan-and-Execute 由 Planner 先把目标拆解成子任务，再由 Executor 逐步执行，适合复杂、多步、需深度思考的任务。",
    examples: [
      { word: "Planner", meaning: "规划器", breakdown: { root: "Planner" }, explanation: "生成步骤。" },
      { word: "Executor", meaning: "执行器", breakdown: { root: "Executor" }, explanation: "执行步骤。" },
      { word: "Replanner", meaning: "失败时重规划", breakdown: { root: "Replan" }, explanation: "动态调整。" }
    ],
    quiz: {
      question: "Plan-and-Execute 的核心思想是？",
      options: ["边走边算无规划", "先规划后执行，必要时重规划", "只能执行一次", "跳过 LLM"],
      correctAnswer: 1
    }
  },
  {
    id: 89,
    root: "知识库检索 Agent",
    origin: "Multi-Agent",
    meaning: "RAG 专精子 Agent",
    description: "知识库检索 Agent 是专门负责 RAG 检索的子 Agent，被其他 Agent 按需调用，把检索抽象为可复用的能力单元。",
    examples: [
      { word: "RAG 服务化", meaning: "Agent 形式", breakdown: { root: "服务化" }, explanation: "复用。" },
      { word: "调用接口", meaning: "标准 Tool", breakdown: { root: "接口" }, explanation: "其他 Agent 调用。" },
      { word: "多 KB 路由", meaning: "选合适知识库", breakdown: { root: "路由" }, explanation: "按主题分发。" }
    ],
    quiz: {
      question: "知识库检索 Agent 的定位是？",
      options: ["唯一对外应用", "RAG 专精的可复用子 Agent", "前端 UI 组件", "操作系统服务"],
      correctAnswer: 1
    }
  },
  {
    id: 90,
    root: "Agent 高级设置",
    origin: "Multi-Agent",
    meaning: "描述/技能/迭代次数",
    description: "Agent 高级设置包括 Agent 描述（用于让其他 Agent 选用）、技能列表、最大迭代次数、超时、错误兜底策略等。",
    examples: [
      { word: "Agent 描述", meaning: "供路由参考", breakdown: { root: "描述" }, explanation: "影响 Handoff 决策。" },
      { word: "最大迭代", meaning: "防死循环", breakdown: { root: "迭代" }, explanation: "如 10 步上限。" },
      { word: "超时", meaning: "防卡死", breakdown: { root: "超时" }, explanation: "保障可用性。" }
    ],
    quiz: {
      question: "Agent 最大迭代次数的主要作用是？",
      options: ["增加成本", "防止 Agent 死循环导致资源耗尽", "美化界面", "替代知识库"],
      correctAnswer: 1
    }
  },
  {
    id: 91,
    root: "连接器（Connector）",
    origin: "工具与 Skills",
    meaning: "外部系统统一抽象",
    description: "Connector 是对外部系统（API、数据库、SaaS）的统一抽象，是工具的载体；定义鉴权、调用方式、参数 schema。",
    examples: [
      { word: "API Connector", meaning: "HTTP 接入", breakdown: { root: "API" }, explanation: "RESTful 接入。" },
      { word: "DB Connector", meaning: "数据库接入", breakdown: { root: "DB" }, explanation: "JDBC 风格。" },
      { word: "SaaS Connector", meaning: "云服务接入", breakdown: { root: "SaaS" }, explanation: "Notion/Slack 等。" }
    ],
    quiz: {
      question: "Connector 在 ADP 体系中的定位是？",
      options: ["前端组件", "对外部系统的统一抽象层", "操作系统驱动", "证书"],
      correctAnswer: 1
    }
  },
  {
    id: 92,
    root: "工具（Tool）",
    origin: "工具与 Skills",
    meaning: "Agent/Workflow 可调原子能力",
    description: "Tool 是可被 Agent 或 Workflow 调用的原子能力，比如『查天气』『发邮件』『查订单』，遵循 Function Calling 模式。",
    examples: [
      { word: "Function Calling", meaning: "LLM 调工具范式", breakdown: { root: "Function" }, explanation: "Schema 驱动。" },
      { word: "工具描述", meaning: "供 LLM 选用", breakdown: { root: "描述" }, explanation: "影响调用准确率。" },
      { word: "参数 Schema", meaning: "JSON Schema", breakdown: { root: "Schema" }, explanation: "强约束。" }
    ],
    quiz: {
      question: "Tool 的调用机制最贴近哪个概念？",
      options: ["TCP 三次握手", "LLM 的 Function Calling", "DNS 解析", "OS 中断"],
      correctAnswer: 1
    }
  },
  {
    id: 93,
    root: "预置插件",
    origin: "工具与 Skills",
    meaning: "150+ 高质量插件",
    description: "ADP 内置 150+ 高质量插件，覆盖搜索、图像、音视频、办公、数据等领域，开箱即用，避免企业重复造轮子。",
    examples: [
      { word: "搜索类", meaning: "联网搜索", breakdown: { root: "搜索" }, explanation: "如 youtu-mrc-standard。" },
      { word: "图像类", meaning: "OCR/识图", breakdown: { root: "图像" }, explanation: "图像理解。" },
      { word: "办公类", meaning: "邮件/日程", breakdown: { root: "办公" }, explanation: "提高效率。" }
    ],
    quiz: {
      question: "ADP 预置插件数量大约是？",
      options: ["10+", "50+", "150+", "10000+"],
      correctAnswer: 2
    }
  },
  {
    id: 94,
    root: "自定义插件",
    origin: "工具与 Skills",
    meaning: "OpenAPI 接入任意 HTTP API",
    description: "ADP 可通过 OpenAPI/JSON Schema 把任意 HTTP API 接入平台作为工具，自动转换为 Function Calling Schema。",
    examples: [
      { word: "OpenAPI 导入", meaning: "Swagger 文件", breakdown: { root: "OpenAPI" }, explanation: "一键转换。" },
      { word: "鉴权配置", meaning: "Header/OAuth", breakdown: { root: "鉴权" }, explanation: "支持多种。" },
      { word: "调试", meaning: "Try Call", breakdown: { root: "调试" }, explanation: "保证可用。" }
    ],
    quiz: {
      question: "通过 OpenAPI 接入的目的是？",
      options: ["压缩文件", "把任意 HTTP API 转成 ADP 工具", "替换知识库", "管理 IP"],
      correctAnswer: 1
    }
  },
  {
    id: 95,
    root: "MCP 协议支持",
    origin: "工具与 Skills",
    meaning: "Model Context Protocol",
    description: "ADP 全面兼容 MCP（Model Context Protocol），可接入 MCP 生态中的众多开源工具，扩展平台能力边界。",
    examples: [
      { word: "MCP Server", meaning: "工具服务端", breakdown: { root: "Server" }, explanation: "标准协议提供工具。" },
      { word: "Tool 发现", meaning: "动态注册", breakdown: { root: "发现" }, explanation: "无需手动配置每个工具。" },
      { word: "生态共享", meaning: "复用社区", breakdown: { root: "生态" }, explanation: "节省开发。" }
    ],
    quiz: {
      question: "MCP 在 ADP 中的角色是？",
      options: ["数据库协议", "标准化工具接入协议", "加密协议", "音视频协议"],
      correctAnswer: 1
    }
  },
  {
    id: 96,
    root: "联网搜索插件",
    origin: "工具与 Skills",
    meaning: "实时获取互联网信息",
    description: "ADP 内置联网搜索插件（如 youtu-mrc-standard），让模型获得实时信息，弥补 LLM 知识时效性不足的问题。",
    examples: [
      { word: "实时新闻", meaning: "今日热点", breakdown: { root: "实时" }, explanation: "突破训练截止。" },
      { word: "股价查询", meaning: "金融场景", breakdown: { root: "实时" }, explanation: "时效要求高。" },
      { word: "搜索 API", meaning: "调用搜索引擎", breakdown: { root: "API" }, explanation: "返回 TopK 链接。" }
    ],
    quiz: {
      question: "联网搜索插件主要解决什么问题？",
      options: ["让 UI 更美观", "突破 LLM 训练截止时间，获取实时信息", "压缩 Token", "禁用 LLM"],
      correctAnswer: 1
    }
  },
  {
    id: 97,
    root: "网页解析插件",
    origin: "工具与 Skills",
    meaning: "URL → 结构化数据",
    description: "网页解析插件可解析任意网页内容为结构化数据（标题、正文、图片等），供 Agent 进一步分析使用。",
    examples: [
      { word: "正文抽取", meaning: "去广告/导航", breakdown: { root: "正文" }, explanation: "保留干净文本。" },
      { word: "图片下载", meaning: "OCR 二次识别", breakdown: { root: "图片" }, explanation: "可二次处理。" },
      { word: "搭配联网搜索", meaning: "完整链路", breakdown: { root: "搭配" }, explanation: "搜索→解析→总结。" }
    ],
    quiz: {
      question: "网页解析插件最常和哪个能力配合使用？",
      options: ["音视频解码", "联网搜索", "OS 调度", "硬盘碎片整理"],
      correctAnswer: 1
    }
  },
  {
    id: 98,
    root: "Skills（技能）",
    origin: "工具与 Skills",
    meaning: "Prompt+工具+知识打包",
    description: "Skills 把一组 Prompt、工具、知识打包为可复用技能，类似『专家模板』，是 Claw 模式扩展能力的主要方式。",
    examples: [
      { word: "金融研报技能", meaning: "投研专家", breakdown: { root: "技能" }, explanation: "包含查股/写报告。" },
      { word: "数据分析技能", meaning: "分析师", breakdown: { root: "技能" }, explanation: "查表+可视化。" },
      { word: "可复用", meaning: "导入即用", breakdown: { root: "复用" }, explanation: "避免重复搭建。" }
    ],
    quiz: {
      question: "Skills 与单个 Tool 的本质区别是？",
      options: ["完全一样", "Skills 是 Prompt+工具+知识的组合", "Skills 更便宜", "Skills 不能调用 LLM"],
      correctAnswer: 1
    }
  },
  {
    id: 99,
    root: "Widget 定义",
    origin: "Widget",
    meaning: "富交互前端组件",
    description: "Widget 是 ADP 的富交互前端组件，让 Agent 输出超越纯文本，可点击、可输入、可视化，提升用户体验。",
    examples: [
      { word: "可点击", meaning: "Action", breakdown: { root: "点击" }, explanation: "触发动作。" },
      { word: "可输入", meaning: "Form", breakdown: { root: "输入" }, explanation: "结构化采集。" },
      { word: "可视化", meaning: "Chart", breakdown: { root: "图表" }, explanation: "数据看板。" }
    ],
    quiz: {
      question: "Widget 相比纯文本回答的核心优势是？",
      options: ["更便宜", "富交互+可视化", "更短", "不支持点击"],
      correctAnswer: 1
    }
  },
  {
    id: 100,
    root: "Card 卡片",
    origin: "Widget",
    meaning: "结构化信息展示",
    description: "Card 卡片用于结构化展示一组信息，常用于商品、订单、文章等，标准元素包括图、标题、副标题、按钮。",
    examples: [
      { word: "商品卡", meaning: "电商场景", breakdown: { root: "商品" }, explanation: "图+标题+价格+按钮。" },
      { word: "订单卡", meaning: "客服场景", breakdown: { root: "订单" }, explanation: "状态+操作。" },
      { word: "文章卡", meaning: "知识场景", breakdown: { root: "文章" }, explanation: "摘要+跳转。" }
    ],
    quiz: {
      question: "Card 卡片最适合下列哪种内容？",
      options: ["复杂表单", "结构化的一组信息（商品/订单等）", "实时音频", "二进制数据"],
      correctAnswer: 1
    }
  },
  {
    id: 101,
    root: "ListView 列表",
    origin: "Widget",
    meaning: "多条目集合展示",
    description: "ListView 用于展示多条目集合，常和 Card 组合使用，支持滚动、分页、点击跳转。",
    examples: [
      { word: "搜索结果", meaning: "TopK 列表", breakdown: { root: "结果" }, explanation: "经典用法。" },
      { word: "订单列表", meaning: "客服查单", breakdown: { root: "订单" }, explanation: "可点击进入详情。" },
      { word: "分页", meaning: "懒加载", breakdown: { root: "分页" }, explanation: "降低首屏负担。" }
    ],
    quiz: {
      question: "ListView 通常和哪个组件搭配使用？",
      options: ["Card", "GPU", "BIOS", "编译器"],
      correctAnswer: 0
    }
  },
  {
    id: 102,
    root: "Form 表单",
    origin: "Widget",
    meaning: "结构化用户输入",
    description: "Form 表单收集用户结构化输入，配合 Input/Select/Checkbox/DatePicker 等子组件，便于数据校验与提交。",
    examples: [
      { word: "Input 输入框", meaning: "文本", breakdown: { root: "Input" }, explanation: "收集文本。" },
      { word: "Select 下拉", meaning: "枚举选择", breakdown: { root: "Select" }, explanation: "限定选项。" },
      { word: "Validation 校验", meaning: "格式检查", breakdown: { root: "校验" }, explanation: "防错。" }
    ],
    quiz: {
      question: "Form 表单的核心价值是？",
      options: ["让 LLM 更便宜", "结构化采集用户输入并支持校验", "替换 OCR", "管理证书"],
      correctAnswer: 1
    }
  },
  {
    id: 103,
    root: "Chart 图表",
    origin: "Widget",
    meaning: "ECharts 数据可视化",
    description: "Chart 基于 ECharts 渲染折线、柱状、饼图等可视化，常用于经营分析、报表问答场景，支持点击交互。",
    examples: [
      { word: "折线图", meaning: "趋势分析", breakdown: { root: "Line" }, explanation: "时间序列。" },
      { word: "柱状图", meaning: "对比分析", breakdown: { root: "Bar" }, explanation: "维度对比。" },
      { word: "饼图", meaning: "占比分析", breakdown: { root: "Pie" }, explanation: "份额展示。" }
    ],
    quiz: {
      question: "ADP Chart 组件底层基于什么库？",
      options: ["D3.js", "ECharts", "Chart.js", "Highcharts"],
      correctAnswer: 1
    }
  },
  {
    id: 104,
    root: "Markdown 组件",
    origin: "Widget",
    meaning: "渲染富文本与代码",
    description: "Markdown 组件渲染富文本与代码块，支持高亮、表格、链接，适合输出长文档、教程、代码答案。",
    examples: [
      { word: "代码高亮", meaning: "Highlight.js", breakdown: { root: "高亮" }, explanation: "提升可读性。" },
      { word: "表格渲染", meaning: "Markdown table", breakdown: { root: "表格" }, explanation: "结构化数据。" },
      { word: "链接跳转", meaning: "锚点", breakdown: { root: "链接" }, explanation: "外部跳转。" }
    ],
    quiz: {
      question: "Markdown 组件最适合输出什么？",
      options: ["压缩文件", "富文本与代码块", "实时音视频", "二进制流"],
      correctAnswer: 1
    }
  },
  {
    id: 105,
    root: "Widget Action",
    origin: "Widget",
    meaning: "按钮/卡片点击行为",
    description: "Widget Action 定义按钮/卡片点击后触发的动作，可发送消息、跳转 URL、调用工具，构建完整交互闭环。",
    examples: [
      { word: "发消息", meaning: "回到对话", breakdown: { root: "消息" }, explanation: "触发新对话轮次。" },
      { word: "跳转 URL", meaning: "外链导航", breakdown: { root: "跳转" }, explanation: "查看详情。" },
      { word: "调用工具", meaning: "执行业务", breakdown: { root: "工具" }, explanation: "如下单/退款。" }
    ],
    quiz: {
      question: "下列哪个不是 Widget Action 的常见类型？",
      options: ["发消息", "跳转 URL", "调用工具", "格式化磁盘"],
      correctAnswer: 3
    }
  },
  {
    id: 106,
    root: "Widget 创建方式",
    origin: "Widget",
    meaning: "模板/代码/AI/导入",
    description: "ADP 提供四种 Widget 创建方式：模板创建（开箱即用）、代码创建（JSON）、自然语言生成（AI 辅助）、文件导入（迁移）。",
    examples: [
      { word: "模板创建", meaning: "选模板", breakdown: { root: "模板" }, explanation: "最快上手。" },
      { word: "代码创建", meaning: "JSON 配置", breakdown: { root: "代码" }, explanation: "灵活但门槛高。" },
      { word: "AI 生成", meaning: "自然语言", breakdown: { root: "AI" }, explanation: "无需懂 JSON。" }
    ],
    quiz: {
      question: "下列哪种不是 Widget 的创建方式？",
      options: ["模板创建", "代码创建（JSON）", "自然语言生成", "通过 GPU 渲染"],
      correctAnswer: 3
    }
  },
  {
    id: 107,
    root: "ADP-Widget SDK",
    origin: "Widget",
    meaning: "前端嵌入 SDK",
    description: "ADP-Widget SDK 是前端 SDK，可在自有 H5、小程序、原生 App 里渲染 ADP 平台输出的 Widget，便于深度集成。",
    examples: [
      { word: "H5 集成", meaning: "JS SDK", breakdown: { root: "H5" }, explanation: "嵌入网页。" },
      { word: "小程序集成", meaning: "组件包", breakdown: { root: "小程序" }, explanation: "微信生态。" },
      { word: "事件桥接", meaning: "Action 回传", breakdown: { root: "事件" }, explanation: "完成闭环。" }
    ],
    quiz: {
      question: "ADP-Widget SDK 主要面向哪些前端环境？",
      options: ["H5/小程序/原生 App", "Linux 内核", "BIOS", "MySQL"],
      correctAnswer: 0
    }
  },
  {
    id: 108,
    root: "发布渠道概览",
    origin: "应用发布",
    meaning: "微信/企微/钉钉等",
    description: "ADP 应用支持发布到微信公众号、微信客服、微信小程序、企业微信、企微机器人、钉钉机器人等多个渠道，覆盖主流办公与社交场景。",
    examples: [
      { word: "微信生态", meaning: "公众号/客服", breakdown: { root: "微信" }, explanation: "C 端流量。" },
      { word: "企微生态", meaning: "侧边栏/机器人", breakdown: { root: "企微" }, explanation: "内部协作。" },
      { word: "钉钉机器人", meaning: "群内服务", breakdown: { root: "钉钉" }, explanation: "B 端协作。" }
    ],
    quiz: {
      question: "下列哪个不是 ADP 支持的发布渠道？",
      options: ["微信公众号", "企业微信", "钉钉机器人", "广播电视"],
      correctAnswer: 3
    }
  },
  {
    id: 109,
    root: "企业微信应用发布",
    origin: "应用发布",
    meaning: "侧边栏/自建应用",
    description: "ADP 可把 Agent 嵌入企业微信侧边栏或自建应用，让员工在工作 IM 中直接获得 AI 助手能力，是 B 端最常见落地形式。",
    examples: [
      { word: "侧边栏", meaning: "聊天页右侧", breakdown: { root: "侧边栏" }, explanation: "上下文唤起。" },
      { word: "自建应用", meaning: "独立入口", breakdown: { root: "自建" }, explanation: "首页应用列表。" },
      { word: "员工身份", meaning: "免登录", breakdown: { root: "身份" }, explanation: "无需重复登录。" }
    ],
    quiz: {
      question: "企业微信发布的核心优势是？",
      options: ["让 LLM 更快", "员工免登录、上下文唤起", "支持视频特效", "压缩文件"],
      correctAnswer: 1
    }
  },
  {
    id: 110,
    root: "API/SDK 集成",
    origin: "应用发布",
    meaning: "三种对话接入方式",
    description: "ADP 提供 RESTful API、HTTP SSE、WebSocket 三种对话接入方式，覆盖低延迟、流式、双向通信等不同需求。",
    examples: [
      { word: "RESTful", meaning: "请求/响应", breakdown: { root: "REST" }, explanation: "简单一来一回。" },
      { word: "HTTP SSE", meaning: "服务器推送", breakdown: { root: "SSE" }, explanation: "流式输出。" },
      { word: "WebSocket", meaning: "全双工", breakdown: { root: "WS" }, explanation: "事件推送+控制。" }
    ],
    quiz: {
      question: "ADP 不提供下列哪种对话接入方式？",
      options: ["RESTful API", "HTTP SSE", "WebSocket", "FTP"],
      correctAnswer: 3
    }
  },
  {
    id: 111,
    root: "ADP-Chat-Client",
    origin: "应用发布",
    meaning: "官方开源前端客户端",
    description: "ADP-Chat-Client 是腾讯云官方开源的前端客户端项目，提供完整的对话 UI、流式渲染、Widget 渲染参考实现，可作为快速集成范本。",
    examples: [
      { word: "开源仓库", meaning: "GitHub", breakdown: { root: "GitHub" }, explanation: "可二次开发。" },
      { word: "完整 UI", meaning: "对话框/历史", breakdown: { root: "UI" }, explanation: "免造轮子。" },
      { word: "二次开发", meaning: "可定制", breakdown: { root: "定制" }, explanation: "适配企业品牌。" }
    ],
    quiz: {
      question: "ADP-Chat-Client 的主要价值是？",
      options: ["官方开源参考前端实现，加速集成", "替换 LLM", "压缩 Token", "管理 IP"],
      correctAnswer: 0
    }
  },
  {
    id: 112,
    root: "首字时间",
    origin: "应用发布",
    meaning: "TTFB < 1 秒",
    description: "ADP 流式响应首字延迟 < 1 秒（Time-To-First-Token），保证良好用户体验，避免长时间『等待感』。",
    examples: [
      { word: "TTFT", meaning: "Time-To-First-Token", breakdown: { root: "TTFT" }, explanation: "工业界关键指标。" },
      { word: "<1 秒", meaning: "目标 SLA", breakdown: { root: "SLA" }, explanation: "用户感知良好。" },
      { word: "感知优化", meaning: "心理体验", breakdown: { root: "感知" }, explanation: "比总时长更关键。" }
    ],
    quiz: {
      question: "ADP 的首字时间目标大约是？",
      options: ["< 1 秒", "< 10 秒", "< 60 秒", "无要求"],
      correctAnswer: 0
    }
  },
  {
    id: 113,
    root: "流式输出（SSE）",
    origin: "应用发布",
    meaning: "边生成边返回",
    description: "ADP 支持基于 HTTP SSE 的流式输出，模型边生成边返回，前端逐字显示，提升对话体感与可中断性。",
    examples: [
      { word: "Server-Sent Events", meaning: "SSE 协议", breakdown: { root: "SSE" }, explanation: "单向推送。" },
      { word: "逐字渲染", meaning: "打字机效果", breakdown: { root: "打字机" }, explanation: "感知更快。" },
      { word: "可中断", meaning: "前端关闭流", breakdown: { root: "中断" }, explanation: "节省成本。" }
    ],
    quiz: {
      question: "SSE 在 ADP 中的主要作用是？",
      options: ["上传文件", "模型生成的流式输出", "代理网络", "压缩图像"],
      correctAnswer: 1
    }
  },
  {
    id: 114,
    root: "WebSocket 双向通信",
    origin: "应用发布",
    meaning: "事件推送+客户端控制",
    description: "ADP 支持 WebSocket 双向通信，提供事件推送、打字机效果、客户端主动中断、心跳保活等高级能力，适合复杂前端。",
    examples: [
      { word: "事件推送", meaning: "Server→Client", breakdown: { root: "事件" }, explanation: "如思考完成事件。" },
      { word: "心跳保活", meaning: "Ping/Pong", breakdown: { root: "心跳" }, explanation: "防长连接断开。" },
      { word: "客户端中断", meaning: "Cancel 信号", breakdown: { root: "中断" }, explanation: "节省成本。" }
    ],
    quiz: {
      question: "WebSocket 相比 SSE 的最大优势是？",
      options: ["更便宜", "支持全双工双向通信", "无需 HTTP", "完全替换 LLM"],
      correctAnswer: 1
    }
  },
  {
    id: 115,
    root: "套餐订阅模式",
    origin: "计费",
    meaning: "包月/包年含 PU 额度",
    description: "套餐订阅模式按月/按年订阅，包含一定 PU（Processing Unit）资源额度，超出额度按量计费，适合用量稳定可预估的企业。",
    examples: [
      { word: "包月套餐", meaning: "短期试用", breakdown: { root: "月" }, explanation: "灵活退订。" },
      { word: "包年套餐", meaning: "长期成本最低", breakdown: { root: "年" }, explanation: "折扣更优惠。" },
      { word: "PU 额度", meaning: "包含资源量", breakdown: { root: "PU" }, explanation: "决定容量。" }
    ],
    quiz: {
      question: "套餐订阅模式最适合哪类企业？",
      options: ["用量极不稳定", "用量稳定可预估", "完全不使用", "只关心免费额度"],
      correctAnswer: 1
    }
  },
  {
    id: 116,
    root: "PU 资源",
    origin: "计费",
    meaning: "Processing Unit",
    description: "PU（Processing Unit）是 ADP 平台统一计费单位，模型调用、检索、文档解析等都折算为 PU 计算，便于统一管理与预算。",
    examples: [
      { word: "Token → PU", meaning: "按比例换算", breakdown: { root: "换算" }, explanation: "不同模型不同比例。" },
      { word: "检索 → PU", meaning: "按次/字符", breakdown: { root: "检索" }, explanation: "RAG 调用计入。" },
      { word: "解析 → PU", meaning: "按页/字符", breakdown: { root: "解析" }, explanation: "OCR/Embedding 计入。" }
    ],
    quiz: {
      question: "PU 在 ADP 中的角色是？",
      options: ["前端组件", "统一的计费单位", "操作系统进程", "证书"],
      correctAnswer: 1
    }
  },
  {
    id: 117,
    root: "后付费模式",
    origin: "计费",
    meaning: "用量超额按账单结算",
    description: "开通『后付费开关』后，PU 用量超出额度部分按账单结算，避免业务因配额耗尽而中断，适合突发流量大的场景。",
    examples: [
      { word: "后付费开关", meaning: "需要主动开启", breakdown: { root: "开关" }, explanation: "防止意外超支。" },
      { word: "账单结算", meaning: "次月出账", breakdown: { root: "账单" }, explanation: "腾讯云统一。" },
      { word: "稳定性优先", meaning: "防业务中断", breakdown: { root: "稳定" }, explanation: "高峰可承接。" }
    ],
    quiz: {
      question: "后付费模式的主要价值是？",
      options: ["让模型免费", "防止用量超额导致业务中断", "压缩文档", "禁用 LLM"],
      correctAnswer: 1
    }
  },
  {
    id: 118,
    root: "免费体验额度",
    origin: "计费",
    meaning: "首次开通赠送",
    description: "ADP 首次开通赠送一定额度的联网搜索、网页解析、知识库字符等资源包，便于企业快速 PoC 试用。",
    examples: [
      { word: "联网搜索额度", meaning: "首单赠送", breakdown: { root: "搜索" }, explanation: "试用真实场景。" },
      { word: "知识库字符", meaning: "存储额度", breakdown: { root: "字符" }, explanation: "支持上传文档。" },
      { word: "PoC 阶段", meaning: "免费跑通", breakdown: { root: "PoC" }, explanation: "降低门槛。" }
    ],
    quiz: {
      question: "免费体验额度的目标是？",
      options: ["让 GPU 免费", "让企业以零成本完成 PoC", "替代知识库", "禁用模型"],
      correctAnswer: 1
    }
  },
  {
    id: 119,
    root: "知识库字符包",
    origin: "计费",
    meaning: "存储扩容包",
    description: "知识库字符包按字符数购买，用于扩容知识库存储与索引能力，适合大规模文档库（数十万到亿级字符）。",
    examples: [
      { word: "字符计费", meaning: "粒度细", breakdown: { root: "字符" }, explanation: "比按文档更精准。" },
      { word: "存储+索引", meaning: "向量包含在内", breakdown: { root: "索引" }, explanation: "一次到位。" },
      { word: "弹性扩容", meaning: "随时购买", breakdown: { root: "弹性" }, explanation: "按需。" }
    ],
    quiz: {
      question: "知识库字符包的计量单位是？",
      options: ["字符数", "页数", "MB", "Token"],
      correctAnswer: 0
    }
  },
  {
    id: 120,
    root: "共享并发包",
    origin: "计费",
    meaning: "高并发扩容能力",
    description: "共享并发包允许企业额外购买并发能力包，应对高峰期请求；ADP 默认每个应用有基础并发额度，超过需扩容。",
    examples: [
      { word: "默认并发", meaning: "基础额度", breakdown: { root: "默认" }, explanation: "适合中小流量。" },
      { word: "扩容并发", meaning: "购买额外包", breakdown: { root: "扩容" }, explanation: "应对峰值。" },
      { word: "共享池", meaning: "多应用共享", breakdown: { root: "共享" }, explanation: "提升利用率。" }
    ],
    quiz: {
      question: "共享并发包主要解决什么问题？",
      options: ["让 LLM 思考更深", "高峰期并发不足导致排队/失败", "压缩 Token", "管理 IP"],
      correctAnswer: 1
    }
  },
  {
    id: 121,
    root: "扣费顺序",
    origin: "计费",
    meaning: "免费→付费→后付费",
    description: "ADP 扣费顺序为：免费体验资源包 → 付费资源包 → 后付费账单，逐级扣减，便于用户用满优惠资源。",
    examples: [
      { word: "免费包", meaning: "首先消耗", breakdown: { root: "免费" }, explanation: "尽量先用。" },
      { word: "付费包", meaning: "次序消耗", breakdown: { root: "付费" }, explanation: "节省后付费。" },
      { word: "后付费", meaning: "兜底", breakdown: { root: "后付费" }, explanation: "最贵。" }
    ],
    quiz: {
      question: "ADP 的扣费顺序是？",
      options: ["后付费→付费→免费", "免费→付费→后付费", "付费→免费→后付费", "随机"],
      correctAnswer: 1
    }
  },
  {
    id: 122,
    root: "云部署计费",
    origin: "计费",
    meaning: "独立部署按资源计费",
    description: "若选择独立部署（容器/轻量服务器/CVM）模式，按计算与存储资源计费，适合数据强隔离、合规要求高的金融/政务客户。",
    examples: [
      { word: "独立部署", meaning: "数据不出域", breakdown: { root: "独立" }, explanation: "强合规。" },
      { word: "资源计费", meaning: "CPU/内存/存储", breakdown: { root: "资源" }, explanation: "可控成本。" },
      { word: "适合行业", meaning: "金融/政务", breakdown: { root: "行业" }, explanation: "强合规。" }
    ],
    quiz: {
      question: "云部署计费最适合下列哪类客户？",
      options: ["短期试用", "数据强合规、需独立部署的金融/政务", "完全不使用 ADP", "纯 C 端用户"],
      correctAnswer: 1
    }
  },
  {
    id: 123,
    root: "应用评测",
    origin: "运营监控",
    meaning: "三种评估方式",
    description: "ADP 内置裁判模型（LLM-as-Judge）、规则、代码三种评测方式，可批量对比 Prompt/模型/工作流版本，量化 Agent 质量。",
    examples: [
      { word: "裁判模型", meaning: "LLM 评分", breakdown: { root: "Judge" }, explanation: "质量主观项。" },
      { word: "规则评测", meaning: "正则/关键词", breakdown: { root: "规则" }, explanation: "客观确定项。" },
      { word: "代码评测", meaning: "Python 自定义", breakdown: { root: "代码" }, explanation: "复杂逻辑。" }
    ],
    quiz: {
      question: "下列哪个不是 ADP 应用评测的方式？",
      options: ["裁判模型", "规则", "代码", "硬件温度"],
      correctAnswer: 3
    }
  },
  {
    id: 124,
    root: "资源看板",
    origin: "运营监控",
    meaning: "Token/PU/并发/存储",
    description: "数据报表-资源看板实时查看 Token、PU、并发、存储等资源消耗趋势，便于成本控制与容量规划。",
    examples: [
      { word: "Token 趋势", meaning: "时序曲线", breakdown: { root: "Token" }, explanation: "看是否暴涨。" },
      { word: "并发峰值", meaning: "高峰统计", breakdown: { root: "并发" }, explanation: "决定扩容。" },
      { word: "存储用量", meaning: "知识库容量", breakdown: { root: "存储" }, explanation: "提前购买。" }
    ],
    quiz: {
      question: "资源看板主要用于？",
      options: ["美化界面", "实时查看资源消耗，做容量规划", "替代知识库", "代理网络"],
      correctAnswer: 1
    }
  },
  {
    id: 125,
    root: "业务看板",
    origin: "运营监控",
    meaning: "会话量/活跃/热点",
    description: "数据报表-业务看板提供会话量、活跃用户、热点问题、点赞点踩等业务指标，是运营优化 Agent 的核心数据来源。",
    examples: [
      { word: "会话量", meaning: "总对话数", breakdown: { root: "会话" }, explanation: "规模指标。" },
      { word: "热点问题", meaning: "高频提问", breakdown: { root: "热点" }, explanation: "可针对性优化。" },
      { word: "点赞率", meaning: "正向反馈", breakdown: { root: "反馈" }, explanation: "衡量满意度。" }
    ],
    quiz: {
      question: "业务看板的核心价值是？",
      options: ["监控 GPU 温度", "通过业务指标驱动 Agent 优化", "管理证书", "压缩文件"],
      correctAnswer: 1
    }
  },
  {
    id: 126,
    root: "告警管理",
    origin: "运营监控",
    meaning: "阈值告警 + Webhook",
    description: "可配置调用失败率、延迟、用量等阈值告警，命中后通过 Webhook 推送到企微/钉钉/飞书群，让运营第一时间响应。",
    examples: [
      { word: "失败率告警", meaning: ">5% 触发", breakdown: { root: "告警" }, explanation: "保障稳定。" },
      { word: "延迟告警", meaning: "P99 异常", breakdown: { root: "延迟" }, explanation: "性能监控。" },
      { word: "Webhook 推送", meaning: "即时触达", breakdown: { root: "Webhook" }, explanation: "无感对接。" }
    ],
    quiz: {
      question: "告警管理的关键能力是？",
      options: ["美化界面", "阈值检测+Webhook 推送", "替换模型", "压缩 Token"],
      correctAnswer: 1
    }
  },
  {
    id: 127,
    root: "操作日志",
    origin: "运营监控",
    meaning: "记录所有关键操作",
    description: "ADP 操作日志记录企业内所有关键操作（创建/删除应用、修改 Prompt、发布版本等），可审计追溯，是合规审计基础。",
    examples: [
      { word: "操作类型", meaning: "增删改查", breakdown: { root: "操作" }, explanation: "完整覆盖。" },
      { word: "操作人", meaning: "子账号", breakdown: { root: "人员" }, explanation: "便于定责。" },
      { word: "时间戳", meaning: "毫秒精度", breakdown: { root: "时间" }, explanation: "时序分析。" }
    ],
    quiz: {
      question: "操作日志的主要价值是？",
      options: ["压缩文档", "审计追溯与合规", "管理 IP", "渲染 UI"],
      correctAnswer: 1
    }
  },
  {
    id: 128,
    root: "资源管控",
    origin: "运营监控",
    meaning: "子账号/空间用量上限",
    description: "企业层可为子账号或工作空间设置 PU、并发、存储等用量上限，防止某个团队失控消耗，有效控制总成本。",
    examples: [
      { word: "PU 上限", meaning: "防失控", breakdown: { root: "上限" }, explanation: "提前止损。" },
      { word: "空间隔离", meaning: "团队配额", breakdown: { root: "空间" }, explanation: "公平分配。" },
      { word: "超限提醒", meaning: "邮件/IM", breakdown: { root: "提醒" }, explanation: "防止突袭。" }
    ],
    quiz: {
      question: "资源管控的核心目的是？",
      options: ["让用户不用 ADP", "为子账号/工作空间设置用量上限防超支", "替代 LLM", "美化 UI"],
      correctAnswer: 1
    }
  },
  {
    id: 129,
    root: "审批中心",
    origin: "运营监控",
    meaning: "敏感操作审批流",
    description: "ADP 支持对发布、删除、Prompt 修改等敏感操作走审批流程，控制风险，符合大型企业的内控要求。",
    examples: [
      { word: "发布审批", meaning: "上线前审", breakdown: { root: "发布" }, explanation: "防错版上线。" },
      { word: "删除审批", meaning: "防误删", breakdown: { root: "删除" }, explanation: "保护资产。" },
      { word: "审批人配置", meaning: "组长/CTO", breakdown: { root: "审批人" }, explanation: "灵活授权。" }
    ],
    quiz: {
      question: "审批中心主要适合什么类型的企业？",
      options: ["纯个人开发者", "对内控有严格要求的大型企业", "完全不使用 ADP 的企业", "纯静态网站"],
      correctAnswer: 1
    }
  },
  {
    id: 130,
    root: "内容安全审核",
    origin: "运营监控",
    meaning: "腾讯云内容安全集成",
    description: "ADP 内置接入腾讯云内容安全（CMS），对输入与输出做合规审核，命中违规内容自动拦截或走人工复审，符合监管要求。",
    examples: [
      { word: "输入审核", meaning: "拦截违规提问", breakdown: { root: "输入" }, explanation: "前置防护。" },
      { word: "输出审核", meaning: "拦截违规回答", breakdown: { root: "输出" }, explanation: "防 LLM 幻觉违规。" },
      { word: "申诉流程", meaning: "误判处理", breakdown: { root: "申诉" }, explanation: "保障体验。" }
    ],
    quiz: {
      question: "ADP 内容安全审核覆盖哪些环节？",
      options: ["仅输入", "输入与输出双向审核", "仅输出", "不审核"],
      correctAnswer: 1
    }
  },
  {
    id: 131,
    root: "多租户隔离",
    origin: "运营监控",
    meaning: "强数据隔离",
    description: "ADP 在企业、工作空间层面做强数据隔离，避免越权访问，是多租户 SaaS 平台的安全基础。",
    examples: [
      { word: "数据隔离", meaning: "DB/存储分区", breakdown: { root: "数据" }, explanation: "物理或逻辑隔离。" },
      { word: "权限隔离", meaning: "RBAC 细粒度", breakdown: { root: "权限" }, explanation: "最小权限。" },
      { word: "网络隔离", meaning: "VPC", breakdown: { root: "网络" }, explanation: "防止跨租户。" }
    ],
    quiz: {
      question: "多租户隔离的核心目标是？",
      options: ["让 UI 更美观", "防止跨租户越权访问数据", "压缩 Token", "替换 LLM"],
      correctAnswer: 1
    }
  },
  {
    id: 132,
    root: "回答可解释",
    origin: "运营监控",
    meaning: "命中片段+评分追溯",
    description: "ADP 每条回答都附带命中文档片段、相似度评分、检索路径，便于运营定位『为什么 Agent 这样回答』，是排障与优化的关键。",
    examples: [
      { word: "命中片段", meaning: "RAG 来源", breakdown: { root: "片段" }, explanation: "可追溯。" },
      { word: "相似度评分", meaning: "TopK 分数", breakdown: { root: "评分" }, explanation: "判断检索质量。" },
      { word: "决策路径", meaning: "Agent 调用链", breakdown: { root: "路径" }, explanation: "排障利器。" }
    ],
    quiz: {
      question: "回答可解释能力主要支撑什么场景？",
      options: ["营销话术", "Agent 排障与持续优化", "硬件采购", "字体设计"],
      correctAnswer: 1
    }
  },
  {
    id: 133,
    root: "API 协议",
    origin: "API 开发",
    meaning: "腾讯云 API 3.0",
    description: "ADP 公开 API 基于腾讯云 API 3.0 规范，使用 TC3-HMAC-SHA256 签名方法 v3 鉴权，与腾讯云其他产品 API 保持一致。",
    examples: [
      { word: "TC3-HMAC-SHA256", meaning: "签名算法", breakdown: { root: "签名" }, explanation: "主流 SDK 已封装。" },
      { word: "API 3.0", meaning: "腾讯云规范", breakdown: { root: "API" }, explanation: "通用鉴权。" },
      { word: "SDK 封装", meaning: "多语言", breakdown: { root: "SDK" }, explanation: "Python/Go/JS。" }
    ],
    quiz: {
      question: "ADP 的公开 API 使用哪种签名算法？",
      options: ["MD5", "TC3-HMAC-SHA256", "Base64", "RSA-1024"],
      correctAnswer: 1
    }
  },
  {
    id: 134,
    root: "核心 API 模块",
    origin: "API 开发",
    meaning: "空间/应用/Agent/会话…",
    description: "ADP API 主要分为：空间管理、应用管理、Agent 管理、会话管理、模型管理、知识库管理、发布管理等模块，覆盖全生命周期。",
    examples: [
      { word: "应用管理 API", meaning: "CRUD 应用", breakdown: { root: "应用" }, explanation: "DevOps 化。" },
      { word: "知识库 API", meaning: "上传/检索", breakdown: { root: "KB" }, explanation: "自动化运维。" },
      { word: "会话 API", meaning: "对话调用", breakdown: { root: "Session" }, explanation: "终端集成。" }
    ],
    quiz: {
      question: "下列哪个不是 ADP 的核心 API 模块？",
      options: ["应用管理", "知识库管理", "会话管理", "操作系统调度"],
      correctAnswer: 3
    }
  },
  {
    id: 135,
    root: "对话接口",
    origin: "API 开发",
    meaning: "HTTP SSE 与 WebSocket",
    description: "对话接口分 HTTP SSE（适合简单场景）和 WebSocket（适合长会话与双向通信）两种；长会话推荐 WebSocket，避免重连。",
    examples: [
      { word: "HTTP SSE", meaning: "短会话首选", breakdown: { root: "SSE" }, explanation: "简单易用。" },
      { word: "WebSocket", meaning: "长会话首选", breakdown: { root: "WS" }, explanation: "稳定双向。" },
      { word: "心跳维护", meaning: "Ping/Pong", breakdown: { root: "心跳" }, explanation: "WebSocket 必备。" }
    ],
    quiz: {
      question: "长会话场景下推荐使用哪种对话接口？",
      options: ["HTTP SSE", "WebSocket", "FTP", "SMTP"],
      correctAnswer: 1
    }
  },
  {
    id: 136,
    root: "临时密钥（STS）",
    origin: "API 开发",
    meaning: "短期凭据避免长期密钥",
    description: "ADP 上传文件等敏感操作建议用临时密钥（STS）保障安全，避免长期 SecretKey 泄漏，是腾讯云通用安全实践。",
    examples: [
      { word: "STS", meaning: "Security Token Service", breakdown: { root: "STS" }, explanation: "短期凭据。" },
      { word: "短期凭据", meaning: "1 小时有效", breakdown: { root: "短期" }, explanation: "降低泄漏风险。" },
      { word: "前端直传", meaning: "STS 给客户端", breakdown: { root: "直传" }, explanation: "避免转发。" }
    ],
    quiz: {
      question: "STS 的主要作用是？",
      options: ["增加成本", "提供短期凭据避免长期密钥泄漏", "替换 LLM", "压缩 Token"],
      correctAnswer: 1
    }
  },
  {
    id: 137,
    root: "AppKey 与 SecretKey",
    origin: "API 开发",
    meaning: "应用唯一标识与凭据",
    description: "AppKey 是应用唯一标识，SecretKey 是鉴权凭据；调用对话/管理 API 都需要它们配合签名算法生成请求签名。",
    examples: [
      { word: "AppKey 公开", meaning: "类似 ID", breakdown: { root: "AppKey" }, explanation: "可前端持有。" },
      { word: "SecretKey 保密", meaning: "类似密码", breakdown: { root: "SecretKey" }, explanation: "严格保密。" },
      { word: "签名生成", meaning: "二者配合", breakdown: { root: "签名" }, explanation: "防伪造。" }
    ],
    quiz: {
      question: "下列对 SecretKey 的说法哪个正确？",
      options: ["可以放在前端 JS 中", "必须严格保密只放后端/STS", "随便分享", "等同 AppKey"],
      correctAnswer: 1
    }
  },
  {
    id: 138,
    root: "智能客服场景",
    origin: "最佳实践",
    meaning: "意图+RAG+人工兜底",
    description: "智能客服是最经典场景，典型架构：意图识别 → RAG 回答常见问题 → 转人工兜底处理疑难，可显著降低人力成本。",
    examples: [
      { word: "意图分流", meaning: "查询/投诉", breakdown: { root: "意图" }, explanation: "走不同分支。" },
      { word: "RAG 回答", meaning: "命中知识库", breakdown: { root: "RAG" }, explanation: "覆盖 80% 常见。" },
      { word: "转人工兜底", meaning: "20% 难题", breakdown: { root: "兜底" }, explanation: "保障体验。" }
    ],
    quiz: {
      question: "智能客服场景的最佳实践通常是？",
      options: ["纯 LLM 自由对话", "意图+RAG+人工兜底分层", "完全人工", "禁用 LLM"],
      correctAnswer: 1
    }
  },
  {
    id: 139,
    root: "企业知识助手",
    origin: "最佳实践",
    meaning: "员工自助问答",
    description: "把内部规章、产品手册、Wiki 构建为知识库，让员工通过自然语言问答提升效率，是 B 端企业最普遍的落地场景。",
    examples: [
      { word: "HR 助手", meaning: "考勤/请假", breakdown: { root: "HR" }, explanation: "解放 HR 人力。" },
      { word: "IT 助手", meaning: "故障自助", breakdown: { root: "IT" }, explanation: "减少工单。" },
      { word: "产品助手", meaning: "客户支持", breakdown: { root: "产品" }, explanation: "减少培训。" }
    ],
    quiz: {
      question: "企业知识助手的核心价值是？",
      options: ["让 LLM 学新知识", "员工自助问答提升效率", "替代财务系统", "压缩文件"],
      correctAnswer: 1
    }
  },
  {
    id: 140,
    root: "经营分析助手",
    origin: "最佳实践",
    meaning: "数据库+Text-to-SQL",
    description: "连接业务数据库 + Text-to-SQL，让业务用自然语言查询数据库（订单、销量、库存），自助分析，BI 平民化。",
    examples: [
      { word: "Text-to-SQL", meaning: "自然语言转 SQL", breakdown: { root: "T2SQL" }, explanation: "门槛降低。" },
      { word: "图表输出", meaning: "Chart Widget", breakdown: { root: "Chart" }, explanation: "直观展示。" },
      { word: "权限隔离", meaning: "只读视图", breakdown: { root: "权限" }, explanation: "数据安全。" }
    ],
    quiz: {
      question: "经营分析助手的关键技术是？",
      options: ["人脸识别", "Text-to-SQL + Chart 可视化", "三维渲染", "音视频转写"],
      correctAnswer: 1
    }
  }
];

if (typeof window !== 'undefined') {
  window.WordRoots = WordRoots;
}
