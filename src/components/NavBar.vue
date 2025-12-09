<template>
  <nav class="navbar">
    <div class="nav-content">
      <!-- 左侧：首页入口 -->
      <a href="/" class="nav-link home-link">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img"/>
        <h1>不和乔治玩的佩奇</h1>
      </a>
      <!-- 右侧：回到主站入口 -->
      <a href="https://yangfu.asia/" class="nav-link main-site-link" target="_blank" rel="noopener">
        主站<i class="external-icon"></i>
      </a>
    </div>
  </nav>
  
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 100;
  position: fixed;
  width: 100%;
}

.nav-content {
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
}

.logo {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.logo h1 {
  font-size: 1.5em;
  color: #2c3e50;
  margin: 0 0 0 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #667eea;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.home-link, .main-site-link {
  font-size: 14px;
  font-weight: 600;
}

.home-icon::before {
  content: '🏠';
}

.external-icon::before {
  content: '↗';
}

.nav-link:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 15px;
  }

  .nav-content {
    height: 56px;
  }

  .logo h1 {
    font-size: 1.2em;
  }

  .logo-img {
    width: 32px;
    height: 32px;
  }

  .nav-link {
    padding: 6px 12px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .logo h1 {
    display: none;
  }
}
</style>