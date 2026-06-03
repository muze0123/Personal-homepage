import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '职业历程 — 张斌',
};

const experiences = [
  {
    company: '杭州渡河之众科技有限公司',
    role: '资深产品经理',
    period: '2025.08 – 2026.05',
    points: [
      '主导跨境电商达人营销 SaaS 平台全产品线架构设计，从 0 到 1 构建达人智能运营体系，支撑 30w+ 达人资源池与日均 8w+ 高并发业务数据处理。',
      '主导达人库、批量建联、寄样管理、履约追踪、跟进合作、绩效归属、数据看板等核心模块设计落地，覆盖 TikTok、Shopee、Lazada 等多平台数据接口。',
      '围绕跨境达人营销业务场景，基于 Cursor / Claude Code 完成前端页面搭建与基础接口联调，交付可演示 Web Demo，推动项目从规划阶段进入可验证阶段。',
      '推动 AI 潜力评分、智能建联话术、周期化自动邀约等 AI Agent 功能集成，构建浏览器插件实现达人数据一键收录与 UID 自动同步。',
      '深度链接运营与销售端，支撑 4 大品牌项目数字化转型，驱动达人营销 GMV 及 ROI 双增长 10%。',
      '统筹 5 人产品团队，建立规范化需求池与跨部门协作 SOP，累计迭代 20+ 版本，按期交付率 100%。',
      '完成 SaaS 订阅分层定价模型（免费版至集团版）及渠道合作伙伴体系设计。',
    ],
  },
  {
    company: '杭州颜否文化传媒有限公司',
    role: '资深产品经理',
    period: '2023.10 – 2025.07',
    points: [
      '从 0 到 1 构建达人营销智能决策与管理平台，主导产品规划、设计、评审、验收及迭代全生命周期管理。',
      '主导核心达人智能运营平台与 AI 创作中心（AI 助手、AI 中台、智能模块）的设计与迭代，提升达人运营与内容创作效率。',
      '结合直播电商行业趋势，将 AI 智能体应用于达人营销及内容创作，打造多款 AIGC 应用服务，推动产品商业化落地。',
      '精准管理产品需求池，采用数据驱动方法提升需求响应速度，确保业务优先级一致。',
      '设计并实现复杂系统流程，产出高质量产品原型，缩短产品上线周期。',
      '推动跨部门协作，确保产品按时交付并降低上线缺陷率。',
      '编制产品培训材料，提升运营及销售团队产品认知与应用能力。',
    ],
  },
  {
    company: '杭州飞象企服网络技术有限公司',
    role: '资深产品经理',
    period: '2021.04 – 2023.08',
    points: [
      '结合公司战略，统筹电商 SaaS 平台产品全线，全面负责用户增长、体验及商业价值提升。',
      '规划电商平台及 ERP 系统产品架构与迭代路线，覆盖买家交易、供应商履约及财务结算等 B2B2C 场景。',
      '对接电商供应链资源，梳理业务流程，制定京东、猫超、虚拟商品等多渠道下单商务计划。',
      '深入调研礼品行业商家需求，设计商业化产品模式，制定行业产品规划与发展路径。',
      '主导产品设计，定义系统流程与业务逻辑，输出高质量原型及 PRD 文档。',
      '跨部门协调资源，推动需求评审、开发排期及上线验收，确保产品高效交付。',
    ],
  },
  {
    company: '杭州禾伟科技有限公司',
    role: '产品经理',
    period: '2019.02 – 2021.04',
    points: [
      '主导基于 IM 生态的企业即时通讯、组织管理认证及第三方赋能工具的产品规划与架构设计。',
      '以客户业务为导向，主导需求调研与分析，明确产品定位，输出高质量 PRD 文档。',
      '协调 UI、开发、测试团队推进跨部门协作，跟踪开发进度，确保产品质量与按期交付。',
      '持续监控产品运营数据与用户反馈，驱动多版本迭代优化，提升产品体验。',
    ],
  },
  {
    company: '杭州博彦信息技术有限公司',
    role: '运维工程师（TL）',
    period: '2017.01 – 2019.02',
    points: [
      '主导浙江菜鸟配送系统（BMS / SMS / TMS）运维管理，建立问题处理与数据分析模型，规范团队作业流程。',
      '跨部门协调资源，制定并落地高效解决方案，保障菜鸟服务商运营需求顺利推进。',
      '定期输出异常问题数据统计与运维分析报告，支撑决策优化。',
      '配置维护棱镜监控平台，实现异常数据实时预警与快速响应；组织 CP 赋能培训，提升合作伙伴技术能力。',
    ],
  },
  {
    company: '顺丰速运集团有限公司',
    role: 'IT 技术支持',
    period: '2013.03 – 2017.01',
    points: [
      '负责客户售前技术支持及第三方系统对接，主导跨境仓储系统异常处理与用户培训。',
      '统筹同城配 O2O 项目系统集成与运维保障，定期输出月度/季度电子运单数据分析报告，推动问题追踪与知识沉淀。',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="content section">
      <Reveal className="section-head">
        <span className="eyebrow">Experience</span>
        <h1 style={{ fontSize: 'var(--text-heading-lg)' }}>职业历程</h1>
        <p className={`sub ${styles.heroSub}`}>
          从顺丰 IT 支持，到运维 TL，再到产品经理与资深产品经理 —— 13
          年里完成了从「支撑岗」到「产品岗」再到「AI 产品」的演进。
        </p>
      </Reveal>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <Reveal key={i} className={styles.tlItem} delay={i * 0.05}>
            <div className={styles.tlMarker}>
              <span className={styles.tlDot} />
              {i < experiences.length - 1 && <span className={styles.tlLine} />}
            </div>
            <div className={`card-plain ${styles.tlContent}`}>
              <div className={styles.tlTop}>
                <h3>{exp.company}</h3>
                <span className={styles.tlPeriod}>{exp.period}</span>
              </div>
              <div className={styles.tlRole}>{exp.role}</div>
              <ul className={styles.tlPoints}>
                {exp.points.map((p, pi) => (
                  <li key={pi}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.expCta} delay={0.1}>
        <h2>想看具体做了什么？</h2>
        <Link href="/work" className="btn btn-primary">
          查看项目案例 →
        </Link>
      </Reveal>
    </div>
  );
}
