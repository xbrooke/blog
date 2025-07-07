<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.47.0/tabler-icons.min.css">


<style scoped>
  .profile-header {
    margin-bottom: 24px;
    text-align: center;
    padding: 0 8px;
  }
  .profile-header-img {
    border-radius: 50%;
    display: block;
    margin: 0 auto 12px;
    width: 100px;
    max-width: 28vw;
    min-width: 64px;
  }
  .profile-header h1 {
    margin: 0 0 8px;
    font-size: 2.1rem;
    line-height: 1.2;
  }
  .profile-header .profile-meta {
    margin: 0 0 4px;
    color: #666;
    font-size: 1rem;
  }
  .profile-header .profile-contact {
    margin: 0;
    font-size: 15px;
    color: #444;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .profile-header .profile-contact span {
    display: flex;
    align-items: center;
    margin-right: 16px;
    margin-bottom: 4px;
  }
  .profile-header .profile-contact a {
    color: #1a73e8;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    word-break: break-all;
  }
  @media (max-width: 600px) {
    .profile-header {
      padding: 0 2vw;
    }
    .profile-header h1 {
      font-size: 1.4rem;
    }
    .profile-header .profile-meta {
      font-size: 0.98rem;
    }
    .profile-header .profile-contact {
      font-size: 13.5px;
      gap: 4px;
    }
    .profile-header .profile-contact a {
      font-size: 14px;
    }
    .profile-header-img {
      width: 72px;
      min-width: 48px;
    }
  }
  h3 {
    margin-bottom: 15px !important;
    margin-top: 38px !important;
  }
  .main-content-wrap {
    max-width: 820px;
    margin: 0 auto 0 auto;
    padding: 0 18px 32px 18px;
    background: var(--vp-c-bg, #fff);
    border-radius: 18px;
    box-shadow: none;
    transition: background 0.2s;
  }
  @media (max-width: 900px) {
    .main-content-wrap {
      max-width: 100vw;
      border-radius: 0;
      box-shadow: none;
      padding: 0 4vw 24px 4vw;
    }
  }
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 1fr));
    gap: 18px;
    margin-bottom: 24px;
    margin-top: 2px;
  }
  .skill-card {
    background: var(--vp-c-bg, #fff);
    border: 1.2px solid var(--vp-c-divider);
    border-radius: 12px;
    padding: 18px 12px 14px 12px;
    text-align: center;
    box-shadow: none;
    transition: border 0.18s, background 0.18s, color 0.18s;
    font-size: 15.5px;
    color: var(--vp-c-text-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80px;
  }
  .skill-card strong {
    font-size: 1.08em;
    color: var(--vp-c-text-1);
    margin-bottom: 4px;
    display: block;
    letter-spacing: 0.5px;
    font-weight: 600;
  }
  .skill-card i {
    font-size: 22px;
    margin-bottom: 6px;
    color: var(--vp-c-text-1);
    opacity: 0.82;
  }
  /* 统一卡片悬停/聚焦效果（无背景变浅） */
  .work-highlight-card:hover, .work-highlight-card:focus,
  .work-exp-card:hover, .work-exp-card:focus,
  .skill-card:hover, .skill-card:focus {
    border-color: var(--vp-c-text-1);
    color: var(--vp-c-text-1);
    box-shadow: 0 2px 12px 0 rgba(30,41,59,0.08);
    transform: translateY(-2px) scale(1.03);
  }
  @media (max-width: 700px) {
    .skills-grid {
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .skill-card {
      font-size: 14.5px;
      padding: 13px 6px 10px 6px;
      min-height: 60px;
    }
    .main-content-wrap, .work-highlight-card, .work-exp-card, .skill-card, .nav-outline-link {
      font-variant-numeric: tabular-nums;
    }
    .main-content-wrap strong, .main-content-wrap p, .main-content-wrap li, .main-content-wrap div,
    .work-highlight-card strong, .work-highlight-card p, .work-highlight-card li, .work-highlight-card div,
    .work-exp-card strong, .work-exp_card p, .work-exp-card li, .work-exp-card div,
    .skill-card strong, .skill-card p, .skill-card li, .skill-card div,
    .nav-outline-link {
      font-weight: 600;
    }
  }
</style>
<div class="main-content-wrap">
<div class="profile-header">
  <img src="/img/xb.png" alt="头像" class="profile-header-img" />
  <h1>徐斌</h1>
  <p class="profile-meta">1995年10月 ｜ 深圳宝安 ｜ 共青团员</p>
  <p class="profile-contact">
    <span>
      <i class="ti ti-phone" style="font-size: 16px; color: #1a73e8; margin-right: 4px;"></i>
      <a href="tel:19270080959">19270080959</a>
    </span>
    <span>
      <i class="ti ti-mail" style="font-size: 16px; color: #1a73e8; margin-right: 4px;"></i>
      <a href="mailto:bb@sosun.cc">bb@sosun.cc</a>
    </span>
  </p>
</div>

---

### 基本信息

<div style="display: grid; grid-template-columns: repeat(3, auto); gap: 24px; align-items: center; margin-bottom: 24px;">
  <div><strong>民族：</strong>汉族</div>
  <div><strong>身高：</strong>180cm</div>
  <div><strong>学历：</strong>全日制专科</div>
  <div><strong>毕业院校：</strong>江西现代学院</div>
  <div><strong>专业：</strong>室内设计</div>
  <div><strong>求职意向：</strong>运营岗位</div>
  <div><strong>期望工资：</strong>10000+元/月</div>
</div>

---

### 教育背景

**2015.07 - 2018.07**  
江西现代学院 ｜ 室内设计

---


<div class="section-title-spacer"></div>

### 工作亮点



<style scoped>
  .work-highlights-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    margin-bottom: 28px;
  }
  .work-highlight-card {
    background: var(--vp-c-bg, #fff);
    border: 1.2px solid var(--vp-c-divider);
    border-radius: 14px;
    box-shadow: none;
    padding: 18px 18px 14px 18px;
    display: flex;
    flex-direction: column;
    min-height: 110px;
    transition: border 0.18s, background 0.18s, color 0.18s;
    color: var(--vp-c-text-1);
    position: relative;
  }
  .work-highlight-card strong {
    font-size: 1.08em;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--vp-c-text-1);
    letter-spacing: 0.5px;
    display: block;
  }
  .work-highlight-card p {
    margin: 0 0 4px 0;
    font-size: 1em;
    color: var(--vp-c-text-2);
  }
  @media (max-width: 700px) {
    .work-highlights-cards {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 18px;
    }
    .work-highlight-card {
      font-size: 14.5px;
      padding: 13px 10px 10px 10px;
      min-height: 80px;
    }
  }
</style>
<div class="work-highlights-cards">
  <div class="work-highlight-card">
    <strong>小红书平台运营</strong>
    <p>主导两手硬家装小红书账号搭建与内容矩阵，持续产出优质内容，每月吸引 20+ 新客户，签单产值超 300w+。</p>
    <p>服务广州格梵装饰，打造多篇爆款内容，涨粉 3w+，单篇点赞 4w+、收藏 6.9w，变现超 100w+。</p>
  </div>
  <div class="work-highlight-card">
    <strong>短视频与视频号运营</strong>
    <p>负责抖音/视频号等平台宅配装饰子品牌账号从0到1搭建，策划短视频内容，带来 150w+ 转化。</p>
  </div>
  <div class="work-highlight-card">
    <strong>好好住平台代运营</strong>
    <p>为设计机构代运营，10+ 案例入选精选，中户型榜 Top1、复古榜 Top2，2023 年机构榜 Top1，持续带来高意向客户咨询。</p>
  </div>
  <div class="work-highlight-card">
    <strong>住小帮账号成长</strong>
    <p>运营设计师“徐大兵”账号，广州口碑榜第2，优选榜第3，产值超 180 万，提升品牌影响力与转化。</p>
  </div>
</div>

---

<div class="section-title-spacer"></div>

### 工作经历


<style scoped>
  .work-exp-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 18px;
    margin-bottom: 28px;
  }
  .work-exp-card {
    background: var(--vp-c-bg, #fff);
    border: 1.2px solid var(--vp-c-divider);
    border-radius: 14px;
    box-shadow: none;
    padding: 18px 18px 14px 18px;
    min-height: 110px;
    transition: border 0.18s, background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.12s;
    color: var(--vp-c-text-1);
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .work-exp-card strong {
    font-size: 1.08em;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--vp-c-text-1);
    letter-spacing: 0.5px;
    display: block;
  }
  .work-exp-card .exp-role {
    color: var(--vp-c-text-2);
    font-size: 0.98em;
    margin-bottom: 4px;
  }
  .work-exp-card ul {
    margin: 0 0 4px 1.2em;
    padding: 0;
    font-size: 1em;
    line-height: 1.7;
    color: var(--vp-c-text-2);
  }

  .nav-outline-link {
    padding: 18px 0;
    border-radius: 14px;
    color: var(--vp-c-text-1);
    text-decoration: none;
    font-weight: 600;
    font-size: 17px;
    border: 1.2px solid var(--vp-c-divider);
    background: var(--vp-c-bg);
    transition: border 0.18s, background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.12s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    box-shadow: none;
  }
  @media (max-width: 900px) {
    .work-exp-cards {
      gap: 10px;
    }
    .work-exp-card {
      font-size: 14.5px;
      padding: 13px 10px 10px 10px;
      min-height: 80px;
    }
  }
</style>
<div class="work-exp-cards">
  <div class="work-exp-card">
    <strong>广州两手硬装饰</strong>
    <div class="exp-role">渠道主管（2020.06 - 至今）</div>
    <ul>
      <li>制定年度运营及投放计划，确保投产比可控</li>
      <li>复盘数据，调整策略，提升内容转化效率</li>
      <li>深圳账号从0搭建，短视频、运营点评、土巴兔、住小帮、小红书等平台</li>
      <li>负责子品牌账号搭建与短视频脚本策划</li>
      <li>跟踪客户数据及平台机制，优化部门动作</li>
    </ul>
  </div>
  <div class="work-exp-card">
    <strong>华浔品味装饰总部</strong>
    <div class="exp-role">新媒体运营（2019.09 - 2020.06）</div>
    <ul>
      <li>撰写品牌新闻稿，策划整合营销活动</li>
      <li>执行多平台广告投放及投产分析</li>
      <li>处理平台负面评价，跟进客户反馈</li>
      <li>搭建小红书账号，引入有效流量</li>
    </ul>
  </div>
  <div class="work-exp-card">
    <strong>华浔品味装饰总部</strong>
    <div class="exp-role">设计师助理（2017.11 - 2019.07）</div>
    <ul>
      <li>协助邀约客户、量房、谈单与签单</li>
      <li>参与方案制作、施工图纸绘制及现场跟进</li>
    </ul>
  </div>
</div>



---

<div class="section-title-spacer"></div>

### 技能特长

<div class="skills-grid">
  <div class="skill-card"><i class="ti ti-photo" aria-hidden="true"></i><strong>Photoshop</strong>专业图像编辑与处理</div>
  <div class="skill-card"><i class="ti ti-video" aria-hidden="true"></i><strong>Premiere</strong>视频剪辑与后期制作</div>
  <div class="skill-card"><i class="ti ti-scissors" aria-hidden="true"></i><strong>剪映</strong>短视频快速剪辑工具</div>
  <div class="skill-card"><i class="ti ti-ruler-measure" aria-hidden="true"></i><strong>AutoCAD</strong>熟练使用室内设计制图</div>
  <div class="skill-card"><i class="ti ti-file-text" aria-hidden="true"></i><strong>Office 办公工具</strong>Word / Excel / PPT 熟练操作</div>
  <div class="skill-card"><i class="ti ti-code" aria-hidden="true"></i><strong>HTML / Markdown</strong>基础网页维护与排版</div>
  <div class="skill-card"><i class="ti ti-bulb" aria-hidden="true"></i><strong>内容策划 / 脚本撰写 / 账号矩阵运营</strong></div>
</div>


---


<div class="section-title-spacer"></div>

### 自我评价

深度新媒体从业者，擅长账号从0到1搭建与长期运营，内容策略敏感且执行力强。具备家装行业经验与用户共情能力，关注数据与平台机制变化，善于结合节点调整内容节奏与形式，注重实效与转化。

---

> 本简历由本人整理并维护。如需获取 PDF 简历，欢迎通过邮箱沟通：<a href="mailto:bb@sosun.cc">bb@sosun.cc</a>

---

## 点击快速了解运营平台

<style scoped>
  .section-title-spacer {
    height: 16px;
  }
.nav-outline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
  margin-top: 24px;
  justify-content: center;
  margin-bottom: 18px;
}
.nav-outline-link {
  padding: 18px 0;
   border-radius: 14px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  border: 1.2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  transition: border 0.18s, background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.12s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  box-shadow: none;
}
.nav-outline-link:hover, .nav-outline-link:focus {
  border-color: var(--vp-c-text-1);
  color: var(--vp-c-text-1);
  box-shadow: 0 2px 12px 0 rgba(30,41,59,0.08);
  transform: translateY(-2px) scale(1.03);
}
</style>

<div class="nav-outline">
  <a href="/brooke/01" class="nav-outline-link">小红书运营</a>
  <a href="/brooke/02" class="nav-outline-link">公众号运营</a>
  <a href="/brooke/03" class="nav-outline-link">短视频平台</a>
  <a href="/brooke/04" class="nav-outline-link">项目展示</a>
  <a href="/brooke/05" class="nav-outline-link">案例卡片</a>
  <a href="/brooke/06" class="nav-outline-link">公众号精选</a>
</div>
</div>

<style scoped>
@media (max-width: 768px) {
  .nav-outline-link,
  .grid-card-title,
  .grid-card-desc,
  :not(pre) > code {
    font-weight: 600 !important;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'liga' 1, 'calt' 1;
    font-feature-settings: 'liga' 1, 'calt' 1;
  }
}
</style>
