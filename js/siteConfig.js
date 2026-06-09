// 腾讯云智能体开发平台（Tencent Cloud ADP）网站配置
const siteConfig = {
  topic: "腾讯云智能体开发平台",
  siteName: "Tencent Cloud ADP 学习工坊",
  itemName: "知识点",
  itemCount: 140,

  hero: {
    title: [
      "140 个核心知识点",
      "系统掌握腾讯云",
      "智能体开发平台"
    ],
    subtitle: "从产品定位到 RAG、Multi-Agent、Workflow，一站式构建企业级 AI 应用",
    animation: {
      enabled: true,
      demoCount: 5
    }
  },

  stats: [
    { value: "140", label: "核心知识点" },
    { value: "16", label: "主题分类" },
    { value: "30分钟", label: "建议每日学习" }
  ],

  footer: {
    tagline: "把大模型，变成可控可运营的生产力",
    description: "面向云计算从业者的 Tencent Cloud ADP 学习工坊。从应用模式、知识库、Workflow，到 Multi-Agent、Widget、API 集成，140 个核心知识点带你完整掌握腾讯云智能体开发平台。"
  },

  cta: {
    primary: "开始学习第一个知识点 →",
    secondary: "闪卡复习"
  }
};

if (typeof window !== 'undefined') {
  window.siteConfig = siteConfig;
}
