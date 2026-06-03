<template>
  <div class="home" tabindex="0">
    <main class="main-content">
      <section class="welcome">
        <div class="welcome-decor" aria-hidden="true">
          <span class="welcome-orb welcome-orb--1"></span>
          <span class="welcome-orb welcome-orb--2"></span>
          <span class="welcome-orb welcome-orb--3"></span>
          <span class="welcome-fish-float welcome-fish-float--1">𓆝</span>
          <span class="welcome-fish-float welcome-fish-float--2">𓆟</span>
          <span class="welcome-fish-float welcome-fish-float--3">𓆞</span>
        </div>
        <div class="page-container welcome-inner">
          <h1 class="welcome-title">
            <span class="welcome-emoji">🌴</span>
            <span>错着错着就对了~</span>
          </h1>
          <div class="welcome-fish-stream" aria-hidden="true">
            <span class="fish-item">𓆝</span>
            <span class="fish-item">𓆟</span>
            <span class="fish-item">𓆞</span>
            <span class="fish-item">𓆝</span>
          </div>
        </div>
      </section>

      <div class="page-container content-body" style="margin-top: 20px">
        <!-- 精选专区 -->
        <section id="premium-content" class="section-block">
          <div class="premium-card">
            <div class="premium-header">
              <div>
                <span class="section-label">Featured</span>
                <h2 class="section-title">
                  <router-link to="/vedio" class="title-link">精选专区</router-link>
                </h2>
              </div>
              <span class="badge badge-hot">限时内容</span>
            </div>

            <p class="premium-desc">{{ premiumSection.description }}</p>

            <ul class="feature-list">
              <li v-for="item in premiumSection.includes" :key="item">
                <i class="fas fa-check-circle"></i>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="drive-box">
              <div class="drive-box-icon">
                <i class="fas fa-cloud-download-alt"></i>
              </div>
              <div class="drive-box-body">
                <p class="drive-box-label">百度网盘</p>
                <a
                  :href="premiumSection.driveLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="drive-box-link"
                >
                  {{ premiumSection.driveLink }}
                </a>
                <p class="drive-box-tip">请复制保存链接，避免失效后找不到资源</p>
              </div>
            </div>

            <router-link to="/vedio" class="section-more">
              进入精选专区
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </section>

        <!-- 分类导航 -->
        <section id="categories" class="section-block">
          <div
            v-for="group in categoryGroups"
            :key="group.id"
            class="category-group"
          >
            <div class="group-header">
              <h2 class="group-title">
                <span class="group-icon">{{ group.icon }}</span>
                {{ group.name }}
              </h2>
            </div>

            <div class="category-grid">
              <router-link
                v-for="card in getCardsForGroup(group)"
                :key="card.category.id"
                :to="card.to"
                class="category-card"
                :class="'theme-' + group.id"
              >
                <article class="category-card-inner">
                  <div class="card-icon-wrap">
                    <span>{{ card.category.icon }}</span>
                  </div>
                  <h3 class="card-title">{{ card.category.name }}</h3>
                  <p class="card-desc">{{ card.category.description }}</p>
                  <span class="card-action">
                    进入
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </article>
              </router-link>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="site-footer">
      <div class="page-container footer-inner">
        <div class="footer-brand">
          <i class="fas fa-book-open"></i>
          <span>English Hub</span>
        </div>
        <p class="footer-quote">少年驰骋的风，比黄金还贵。</p>
        <nav class="footer-links">
          <a href="/">首页</a>
          <a href="#categories">学习资源</a>
          <a href="#premium-content">精选专区</a>
        </nav>
        <p class="footer-copy">&copy; {{ new Date().getFullYear() }} English Hub</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      premiumSection: {
        description: '首页新增内容栏目，包含视频资源、文档资源等合集',
        includes: [
          '400+ 节视频，持续更新中',
          '与视频配套的文档资料，持续更新中',
          '高频口语表达与例句合集'
        ],
        driveLink: 'https://pan.baidu.com/s/1-woVztzhokYjHBGPZQfCzA?pwd=MQIs'
      },
      visitStartTime: null,
      timer: null
    }
  },
  computed: {
    categoryGroups() {
      return this.$root.$data.categoryGroups || []
    }
  },
  methods: {
    getCardsForGroup(group) {
      if (group.id === 'learning') {
        const routes = ['/Sheldon', '/imgPrint', '/category/myVedio2']
        return [1, 2, 3].map((index, i) => ({
          category: group.categories[index],
          to: routes[i]
        }))
      }
      if (group.id === 'pronunciation') {
        return group.categories.map(category => ({
          category,
          to: '/show/' + category.id
        }))
      }
      if (group.id === 'sentence') {
        return group.categories.map(category => ({
          category,
          to: '/sentencesList/'
        }))
      }
      return []
    },
    updateStats() {
      const stats = JSON.parse(localStorage.getItem('siteStats') || '{}')
      const today = new Date().toLocaleDateString()

      if (!stats.firstVisit) {
        stats.firstVisit = Date.now()
        stats.totalVisits = 0
        stats.dailyVisits = {}
        stats.totalTime = 0
      }

      stats.totalVisits++
      stats.dailyVisits[today] = (stats.dailyVisits[today] || 0) + 1

      if (this.visitStartTime) {
        const visitDuration = (Date.now() - this.visitStartTime) / 1000 / 60
        stats.totalTime += visitDuration
      }

      localStorage.setItem('siteStats', JSON.stringify(stats))
    }
  },
  created() {
    this.visitStartTime = Date.now()
    this.updateStats()
    window.addEventListener('beforeunload', this.updateStats)
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer)
    this.updateStats()
    window.removeEventListener('beforeunload', this.updateStats)
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
}

.main-content {
  flex: 1;
  padding-top: 64px;
}

/* 欢迎区 */
.welcome {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #a366d6 0%, #9154cf 42%, #7a46b5 100%);
  color: #fff;
  padding: 2.5rem 0 3.5rem;
}

.welcome-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.welcome-orb {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
}

.welcome-orb--1 {
  width: 220px;
  height: 220px;
  top: -80px;
  right: 8%;
  filter: blur(2px);
}

.welcome-orb--2 {
  width: 140px;
  height: 140px;
  bottom: -40px;
  left: 5%;
  background: rgba(255, 255, 255, 0.06);
}

.welcome-orb--3 {
  width: 80px;
  height: 80px;
  top: 30%;
  left: 18%;
  background: rgba(255, 255, 255, 0.1);
}

.welcome-fish-float {
  position: absolute;
  font-size: 2rem;
  opacity: 0.2;
  color: #fff;
  animation: fishFloat 5s ease-in-out infinite;
}

.welcome-fish-float--1 {
  top: 18%;
  left: 6%;
  animation-delay: 0s;
}

.welcome-fish-float--2 {
  top: 55%;
  right: 7%;
  font-size: 1.6rem;
  animation-delay: 1.2s;
}

.welcome-fish-float--3 {
  bottom: 12%;
  left: 12%;
  font-size: 1.4rem;
  animation-delay: 2.4s;
}

.welcome-inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.welcome-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
  padding: 0.2rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: welcomeFadeUp 0.6s ease-out both;
}

.welcome-title {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 2.35rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  line-height: 1.25;
  color: #fff;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  animation: welcomeFadeUp 0.6s ease-out 0.08s both;
}

.welcome-fish-stream {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  margin: 0 0 1rem;
  font-size: 2.35rem;
  line-height: 1;
  color: rgba(255, 255, 255, 0.75);
  animation: welcomeFadeUp 0.6s ease-out 0.14s both;
}

.fish-item {
  display: inline-block;
  animation: fishSwim 2.8s ease-in-out infinite;
}

.fish-item:nth-child(1) { animation-delay: 0s; }
.fish-item:nth-child(2) { animation-delay: 0.35s; }
.fish-item:nth-child(3) { animation-delay: 0.7s; }
.fish-item:nth-child(4) { animation-delay: 1.05s; }

.welcome-emoji {
  font-size: 1.15em;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.welcome-desc {
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 0 1rem;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.5;
  animation: welcomeFadeUp 0.6s ease-out 0.16s both;
}

.welcome-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.35rem;
  animation: welcomeFadeUp 0.6s ease-out 0.24s both;
}

.welcome-tags span {
  font-size: 0.8rem;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: rgba(255, 255, 255, 0.95);
}

.welcome-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.7rem 3rem 0.7rem 3rem;
  font-size: 1rem;
  font-weight: 600;
  color: #9154cf;
  background: #fff;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s, box-shadow 0.25s;
  animation: welcomeFadeUp 0.6s ease-out 0.32s both;
}

.welcome-btn-fish {
  font-size: 1.15rem;
  line-height: 1;
  opacity: 0.85;
  transition: transform 0.25s, opacity 0.25s;
}

.welcome-btn-text {
  letter-spacing: 0.08em;
}

.welcome-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.welcome-btn:hover .welcome-btn-fish:first-child {
  transform: translateX(-3px);
}

.welcome-btn:hover .welcome-btn-fish:last-child {
  transform: translateX(3px);
}

@keyframes fishFloat {
  0%, 100% {
    transform: translate(0, 0) rotate(-5deg);
  }
  50% {
    transform: translate(8px, -6px) rotate(5deg);
  }
}

@keyframes fishSwim {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.65;
  }
  50% {
    transform: translateY(-5px) scale(1.08);
    opacity: 1;
  }
}

@keyframes welcomeFadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-body {
  padding-top: 1.5rem;
  padding-bottom: 2rem;
}

.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.section-block {
  margin-bottom: 2.5rem;
}

.section-block:last-child {
  margin-bottom: 0;
}

/* Premium */
.premium-card {
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 4px 24px rgba(145, 84, 207, 0.08);
  border: 1px solid rgba(145, 84, 207, 0.12);
}

.premium-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.section-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #9154cf;
  margin-bottom: 0.25rem;
}

.section-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.title-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.title-link:hover {
  color: #9154cf;
}

.badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
}

.badge-hot {
  background: #fef3c7;
  color: #b45309;
}

.premium-desc {
  color: #64748b;
  line-height: 1.65;
  margin: 0 0 1rem;
  font-size: 0.95rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  display: grid;
  gap: 0.5rem;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.5;
}

.feature-list i {
  color: #9154cf;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.drive-box {
  display: flex;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  margin-bottom: 1.25rem;
}

.drive-box-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: #dcfce7;
  color: #16a34a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.1rem;
}

.drive-box-label {
  font-weight: 600;
  color: #166534;
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
}

.drive-box-link {
  color: #9154cf;
  font-size: 0.85rem;
  word-break: break-all;
  text-decoration: none;
}

.drive-box-link:hover {
  text-decoration: underline;
}

.drive-box-tip {
  font-size: 0.75rem;
  color: #94a3b8;
  margin: 0.35rem 0 0;
}

.section-more {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: #9154cf;
  text-decoration: none;
  transition: gap 0.2s;
}

.section-more:hover {
  gap: 0.6rem;
}

/* Category groups */
.category-group {
  margin-bottom: 2.5rem;
}

.category-group:last-child {
  margin-bottom: 0;
}

.group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding-bottom: 0.75rem;
}

.group-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.group-icon {
  font-size: 1.1em;
}

.group-count {
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 500;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.category-card {
  text-decoration: none;
  color: inherit;
  display: block;
}

.category-card-inner {
  background: #fff;
  border-radius: 0.875rem;
  padding: 1.35rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}

.category-card:hover .category-card-inner {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.theme-learning:hover .category-card-inner {
  box-shadow: 0 12px 28px rgba(59, 130, 246, 0.12);
}

.theme-pronunciation:hover .category-card-inner {
  box-shadow: 0 12px 28px rgba(16, 185, 129, 0.12);
}

.theme-sentence:hover .category-card-inner {
  box-shadow: 0 12px 28px rgba(245, 158, 11, 0.12);
}

.card-icon-wrap {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  margin-bottom: 1rem;
  transition: background 0.25s, color 0.25s;
}

.theme-learning .card-icon-wrap {
  background: #eff6ff;
}

.theme-pronunciation .card-icon-wrap {
  background: #ecfdf5;
}

.theme-sentence .card-icon-wrap {
  background: #fffbeb;
}

.category-card:hover .card-icon-wrap {
  background: #9154cf;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem;
  transition: color 0.2s;
}

.category-card:hover .card-title {
  color: #9154cf;
}

.card-desc {
  flex: 1;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0 0 1rem;
}

.card-action {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #9154cf;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s;
}

.category-card:hover .card-action {
  opacity: 1;
  transform: translateX(0);
}

/* Footer */
.site-footer {
  background: #1e293b;
  color: #94a3b8;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-inner {
  text-align: center;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.footer-brand i {
  color: #9154cf;
}

.footer-quote {
  font-size: 0.9rem;
  margin: 0 0 1rem;
  font-style: italic;
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #fff;
}

.footer-copy {
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 56px;
  }

  .welcome {
    padding: 2rem 0 2.75rem;
  }

  .welcome-title {
    font-size: 1.85rem;
  }

  .welcome-desc {
    font-size: 1rem;
  }

  .welcome-tags span {
    font-size: 0.75rem;
  }

  .welcome-fish-stream {
    font-size: 1.15rem;
    gap: 0.5rem;
  }

  .welcome-fish-float {
    display: none;
  }

  .welcome-btn {
    padding: 0.65rem 1.75rem;
  }

  .welcome-btn-fish {
    font-size: 1rem;
  }

  .welcome-orb--1 {
    width: 140px;
    height: 140px;
    right: -20px;
  }

  .premium-card {
    padding: 1.25rem;
  }

  .drive-box {
    flex-direction: column;
    gap: 0.75rem;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .card-action {
    opacity: 1;
    transform: none;
  }
}
</style>
