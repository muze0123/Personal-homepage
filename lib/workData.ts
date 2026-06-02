export interface WorkDetailSection {
  title: string;
  content: string;
  items?: string[];
}

export interface WorkProject {
  slug: string;
  name: string;
  role: string;
  period: string;
  industry: string;
  tags: string[];
  flagship?: boolean;
  screenshot?: string;
  demoUrl?: string;
  githubUrl?: string;
  background: string;
  whatIDid: string;
  modules: string[];
  detailSections?: WorkDetailSection[];
  aiCapability?: {
    title: string;
    items: string[];
  };
  vibeCoding?: {
    title: string;
    desc: string;
  };
  results: string[];
  nextProject: string;
}

export const workProjects: Record<string, WorkProject> = {
  dohozz: {
    slug: 'dohozz',
    name: 'DOHOZZ 达人智能运营管理平台',
    role: '产品负责人',
    period: '2025.08 – 至今',
    industry: '跨境电商 · 达人营销 SaaS',
    tags: ['SaaS', '跨境电商', 'AI Agent', 'Vibe Coding', '0→1'],
    flagship: true,
    screenshot: '/shot-dohozz-overview.png',
    demoUrl: 'https://dohozz.vercel.app',
    githubUrl: 'https://github.com/muze0123/DOHOZZ',
    background:
      '公司跨境电商业务面临找达人效率低、合作流程混乱、营销效果无追踪、多部门表格管理易出错等痛点，主导开发一站式 SaaS 平台，打造业界标准的达人营销智能决策系统。',
    whatIDid:
      '重新定义达人全生命周期管理逻辑（找达人 → 建联 → 寄样 → 转化 → 复盘），覆盖 TikTok、Shopee、Lazada 等多平台数据接口，实现业务全链路线上化。',
    modules: ['达人库', '批量建联', '寄样管理', '履约追踪', '合作单', '绩效归属', '数据看板'],
    detailSections: [
      {
        title: '0→1 平台构建',
        content:
          '主导跨境电商达人营销 SaaS 平台全产品线架构设计，从 0 到 1 构建达人智能运营体系，支撑 30w+ 达人资源池与日均 8w+ 高并发业务数据处理。',
      },
      {
        title: '全链路业务设计',
        content:
          '主导达人库、批量建联、寄样管理、履约追踪、跟进合作、绩效归属、数据看板等核心模块设计落地，覆盖 TikTok、Shopee、Lazada 等多平台数据接口。',
      },
      {
        title: 'AI 功能落地',
        content:
          '推动 AI 潜力评分、智能建联话术、周期化自动邀约等 AI Agent 功能集成，构建浏览器插件实现达人数据一键收录与 UID 自动同步，打通"发现达人→入库管理"全链路。',
      },
      {
        title: '业务赋能',
        content:
          '深度链接运营与销售端，通过业务闭环反馈机制，支撑 4 大品牌项目的数字化转型，实现 20+ 业务人员的标准化作业，在同等人力成本下，驱动达人营销 GMV 及 ROI 双增长 10%。',
      },
      {
        title: '团队与交付',
        content:
          '统筹 5 人产品团队，建立规范化需求池、评审机制及跨部门协作 SOP，累计迭代版本 20+，按期交付率 100%。',
      },
      {
        title: '商业化规划',
        content:
          '完成 SaaS 订阅分层定价模型（免费版至集团版）及渠道合作伙伴体系设计，制定从内部工具向外部商业化产品的增长路径。',
      },
    ],
    aiCapability: {
      title: 'AI 能力集成',
      items: [
        'AI 潜力评分：基于多维数据为达人智能打分，辅助筛选决策',
        '建联破冰话术：智能生成个性化邀约文案，提升建联转化率',
        '智能邀约：周期化自动邀约与跟进，降低人工运营成本',
        '浏览器插件：TikTok 达人一键收录与多维数据采集、UID 自动同步',
      ],
    },
    vibeCoding: {
      title: 'Vibe Coding · 差异化重点',
      desc: '围绕跨境达人营销业务场景，将核心模块需求拆解为页面结构与交互逻辑，基于 Cursor / Claude Code 完成前端页面搭建与基础接口联调，交付可演示 Web Demo，覆盖达人库、批量建联、寄样管理、履约追踪、跟进合作、绩效归属、数据看板等核心模块，用于在正式开发前快速验证交互路径、功能优先级与商业化卖点，推动项目从规划阶段进入可验证阶段，缩短原型验证周期。',
    },
    results: [
      '搭建达人数据中心，整合 RPA 爬虫与插件双路采集，累计收录马来西亚、菲律宾、泰国等地区达人 30w+',
      '支撑日均 8w+ 高并发业务数据处理',
      '设计可视化业务大盘，实时监控核心转化漏斗，为管理层及运营团队提供量化的决策数据支持',
      '完成 SaaS 订阅分层定价体系（免费版至集团版），制定从内部工具到外部商业化产品的增长路径',
    ],
    nextProject: 'seekark',
  },
  seekark: {
    slug: 'seekark',
    name: 'Seekark 时浪 达人营销智能运营平台',
    role: '产品经理',
    period: '2023.10 – 2025.07',
    industry: '直播电商 · 达人营销 SaaS',
    tags: ['SaaS', '直播电商', 'AIGC', '多平台', '0→1'],
    background:
      '品牌商家在多平台达人营销中面临达人筛选低效、合作流程分散、内容生产成本高、广告投放缺乏数据支撑等核心痛点，主导从 0 到 1 构建一站式达人营销智能运营 SaaS 平台。',
    whatIDid:
      '以「时浪达人 / 时浪创意 / 时浪 BI / 时浪投放」四大产品线构建完整达人营销闭环，支持抖音、小红书、快手、视频号等多平台。',
    modules: [
      '时浪达人',
      '时浪创意',
      '时浪 BI',
      '时浪投放',
      'CRM',
      '企业网盘',
      '跨境',
      '分销',
      '审批中心',
    ],
    detailSections: [
      {
        title: '时浪达人',
        content:
          '主导构建支持抖音、小红书、快手、视频号等多平台的达人营销管理工具，覆盖达人筛选、合作流程管理、营销效果追踪与绩效考核全链路，搭建可视化数据看板支撑客户业务复盘。',
        items: ['平台上线后客户达人运营效率提升 35%，营销转化率显著增长'],
      },
      {
        title: '时浪创意',
        content:
          '主导 AI 内容创作中心设计，集成 AIGC 智能对话与创作能力，支持文章、脚本、文案、图片、视频自动生成；搭建知识库与素材中心，推出智能混剪及多平台矩阵分发系统。',
        items: ['AI 赋能后内容生产效率提升 20%，制作成本大幅降低'],
      },
      {
        title: '时浪 BI',
        content:
          '基于抖店电商罗盘数据构建多维度业务数据看板，支持用户自定义数据展示，助力客户实现数据驱动运营决策。',
        items: ['助力客户市场份额增长 25%'],
      },
      {
        title: '时浪投放',
        content:
          '设计「随心推」与「千川投放助手」两款智能投放工具，集成跨平台账号管理、广告投放、数据分析与风险控制模块，广告投放效率显著提升，客户 ROI 持续优化。',
      },
    ],
    aiCapability: {
      title: 'AI 创作中心',
      items: [
        '集成 AIGC 智能对话与创作，支持文章 / 脚本 / 文案 / 图片 / 视频自动生成',
        '搭建知识库与素材中心，推出智能混剪及多平台矩阵分发系统',
      ],
    },
    results: [
      '平台上线后客户达人运营效率提升 35%，营销转化率显著增长',
      'AI 赋能后内容生产效率提升 20%，制作成本大幅降低',
      '基于抖店罗盘数据构建多维业务看板，助力客户市场份额增长 25%',
      '设计「随心推」与「千川投放助手」两款智能投放工具，持续优化客户 ROI',
      '统筹 CRM、企业网盘、跨境、分销、审批中心等多模块需求设计与迭代',
    ],
    nextProject: 'baliteng',
  },
  baliteng: {
    slug: 'baliteng',
    name: '百礼腾 数智平台',
    role: '产品经理',
    period: '2021.04 – 2023.08',
    industry: '礼品行业 · 全链路数智化 SaaS',
    tags: ['SaaS', '供应链', 'ERP', 'CRM', 'B2B2C'],
    background:
      '礼品行业企业面临需求侧、流通侧、供给侧数据割裂、供应链管理粗放、营销转化低效等痛点，主导基于头部礼企资源打造全链路数智化 SaaS 平台，帮助企业实现数字资产沉淀与商业价值最大化。',
    whatIDid:
      '构建「商品云 / 供应商云 / 商城中心 / 采销云 / 客户云 CRM / 营销云 / 方案云 / 进销存」多云协同体系，覆盖供应链与交易全流程。',
    modules: [
      '商品云',
      '供应商云',
      '商城中心',
      '采销云',
      '客户云 CRM',
      '营销云',
      '方案云',
      '进销存',
    ],
    detailSections: [
      {
        title: '商品云 & 供应商云',
        content:
          '主导商品发布、类目、品牌及属性管理模块设计，整合外部及会员供应链资源；构建供应链数智化运营平台，覆盖供应商信息、合同、订单履约及财务结算全流程。',
        items: ['供应链数字化改造后订单处理效率提升 40%，供应商响应时间大幅缩短'],
      },
      {
        title: '商城中心 & 采销云',
        content:
          '搭建企业商城，支持页面装修、商品专题与数据分析；设计采销协同模块，支持销售询价、采购寻源及样品申请，推动多渠道销售整合。',
        items: ['平台交易额实现年增长 50%'],
      },
      {
        title: '客户云 CRM & 营销云',
        content:
          '基于多维度客户数据构建精准客户画像，支持客户管理与公海管理；搭建企业营销阵地，覆盖官网、员工名片、推广海报等内容管理。',
        items: ['营销转化率提升 20%，客户留存率提升 25%'],
      },
      {
        title: '方案云 & 进销存',
        content:
          '实现方案资源资产化，提升方案制作及推广效率；主导商品交易全生命周期管理设计，覆盖销售、采购、库存及财务结算。',
        items: ['平台用户活跃度提升 30%'],
      },
    ],
    results: [
      '供应链数字化改造后订单处理效率提升 40%，供应商响应时间大幅缩短',
      '推动多渠道销售整合，平台交易额实现年增长 50%',
      '营销转化率提升 20%，客户留存率提升 25%',
      '平台用户活跃度提升 30%',
      '跨部门协作优化后产品迭代周期缩短 20%，上线速度显著提升',
      '统筹飞象云企、云商、卡券电商、商家 SaaS、企业集采商城等多产品线迭代',
    ],
    nextProject: 'im-system',
  },
  'im-system': {
    slug: 'im-system',
    name: '中航商网 即时通讯应用系统平台',
    role: '产品经理',
    period: '2020.01 – 2021.04',
    industry: '企业服务 · IM 协同系统',
    tags: ['IM', '企业协同', '私有云', '0→1', '信息安全'],
    background:
      '基于私有云架构结合网易 SaaS 与 PaaS 服务，主导为中国航空工业集团从 0 到 1 构建专属 IM 协同系统，覆盖办公、电商、员工服务、供应链与智能制造等多业务场景。',
    whatIDid:
      '从零搭建 IM 服务系统，覆盖单聊 / 群聊、多端登录、企业通讯录、消息推送等核心通讯能力，集成信道加密、敏感词过滤、文件审计等安全功能。',
    modules: [
      'IM 通讯',
      '企业通讯录',
      '公众号管理',
      '权限管理',
      '功能审计',
      '云文档 / 会议 / 邮件 SDK',
    ],
    detailSections: [
      {
        title: '商网办公客户端（APP / PC）',
        content:
          '从零搭建 IM 服务系统，覆盖单聊 / 群聊、多端登录、企业通讯录、消息推送等核心通讯能力；集成信道加密、敏感词过滤、文件审计等安全功能；配套云文档、音视频会议、企业邮件等 SDK 支持。',
        items: ['成功支撑 20w+ 用户线上协同办公，日活跃用户近 8w'],
      },
      {
        title: '公众号管理平台 & IM 管理系统',
        content:
          '主导公众号后台及企业通讯录、权限管理、功能审计、研发运维等管理模块设计；高效融合多业务平台 SDK，提升数据安全性与工作效率，助力企业信息化数字化转型落地。',
      },
    ],
    results: [
      '成功支撑 20w+ 用户线上协同办公，日活跃用户近 8w',
      '集成云文档、音视频会议、企业邮件等 SDK 支持',
      '高效融合多业务平台 SDK，提升数据安全性与工作效率，助力企业数字化转型落地',
    ],
    nextProject: 'dohozz',
  },
};

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects[slug];
}

export function getWorkProjectName(nextSlug: string): string {
  return workProjects[nextSlug]?.name || '';
}
