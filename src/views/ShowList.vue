<template>
  <div class="article-list-page">
    <div class="content">
      <div v-if="categoryId === 'pronunciation1'" class="pronunciation-content max-w-4xl mx-auto px-4 py-8">
        <div class="intro-section mb-12 text-center">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">英语趣配音</h1>
          <p class="text-gray-600 text-lg mb-8">不敢开口的时候就用这个软件，不知不觉发音就听着很舒服了，然后渐渐喜欢上了。</p>
        </div>

        <div class="image-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div class="image-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <img src="@/assets/qupeiying1.jpg" alt="发音练习软件截图1" class="w-full h-auto object-contain" loading="lazy">
            <div class="image-overlay absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <i class="fas fa-search-plus text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></i>
            </div>
          </div>
          <div class="image-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <img src="@/assets/qupeiying2.jpg" alt="发音练习软件截图2" class="w-full h-auto object-contain" loading="lazy">
            <div class="image-overlay absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <i class="fas fa-search-plus text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></i>
            </div>
          </div>
          <div class="image-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <img src="@/assets/qupeiying3.jpg" alt="发音练习软件截图3" class="w-full h-auto object-contain" loading="lazy">
            <div class="image-overlay absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <i class="fas fa-search-plus text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></i>
            </div>
          </div>
        </div>

        <div class="features-section bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h3 class="text-xl font-bold text-indigo-800 mb-6 text-center">为什么选择这个发音练习软件？</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="feature-item text-center">
              <div class="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-headphones-alt text-2xl"></i>
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">智能发音评估</h4>
              <p class="text-gray-600 text-sm">实时分析你的发音，给出针对性反馈</p>
            </div>
            <div class="feature-item text-center">
              <div class="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-language text-2xl"></i>
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">丰富练习素材</h4>
              <p class="text-gray-600 text-sm">各种场景对话和常用表达，满足不同需求</p>
            </div>
            <div class="feature-item text-center">
              <div class="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-chart-line text-2xl"></i>
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">进度跟踪</h4>
              <p class="text-gray-600 text-sm">记录你的学习历程，见证发音进步</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="pronunciation-content max-w-4xl mx-auto px-4 py-8">
         <div class="intro-section mb-12 text-center">
          <h1 class="text-3xl font-bold text-gray-800 mb-4 md:text-4xl">B站：赖世雄音标课</h1>
        </div>

        <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg mb-12">
          <img src="@/assets/faying.png" alt="音标课软件截图" class="w-full h-auto object-contain" loading="lazy">
        </div>

        <div class="features-section bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <h3 class="text-xl font-bold text-blue-800 mb-6 text-center">为什么选择赖世雄音标课？</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="feature-item text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-chalkboard-teacher text-2xl"></i>
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">权威教学</h4>
              <p class="text-gray-600 text-sm">赖世雄老师40年教学经验总结，通俗易懂</p>
            </div>
            <div class="feature-item text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-headphones-alt text-2xl"></i>
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">纯正发音</h4>
              <p class="text-gray-600 text-sm">标准美式发音示范，逐音讲解纠正</p>
            </div>
            <div class="feature-item text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-repeat text-2xl"></i>
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">循环练习</h4>
              <p class="text-gray-600 text-sm">反复练习模式，巩固记忆加深理解</p>
            </div>
          </div>
        </div>

        <div class="cta-section text-center">
          <a href="https://www.bilibili.com/video/BV1N94y1G71L/?spm_id_from=333.788.videopod.episodes" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1" target="_blank">
            前往B站学习 <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShowList',
  props: {
    categoryId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      files: [],
      selectedImage: null // 添加选中图片状态
    };
  },
  computed: {
    // 获取当前路径数组
    pathSegments() {
      return this.categoryId ? this.categoryId.split('/') : [];
    },
    // 修改currentCategory计算属性，确保pronunciation1有正确的名称和描述
    currentCategory() {
      const firstSegment = this.pathSegments[0];
      if (!firstSegment) {
        return {
          name: '所有分类',
          description: '浏览所有文章分类'
        };
      }
    // 特殊处理pronunciation1分类
    if (firstSegment === 'pronunciation1') {
      return {
        name: '发音练习软件推荐',
        description: '不敢开口的时候就用这个软件，不知不觉发音就听着很舒服了'
      };
    }

      // 遍历所有分类组查找匹配的分类
      for (const group of this.$root.$data.categoryGroups) {
        const category = group.categories.find(cat => cat.id === firstSegment);
        if (category) {
          // 如果有子目录，显示完整路径
          if (this.pathSegments.length > 1) {
            const subPath = this.pathSegments.slice(1).join(' / ');
            return {
              name: `${category.name} / ${subPath}`,
              description: category.description
            };
          }
          return {
            name: category.name,
            description: category.description
          };
        }
      }

      return {
        name: this.getDisplayName(this.pathSegments[this.pathSegments.length - 1]),
        description: '浏览当前目录内容'
      };
    }
  },
  methods: {
    // 获取显示名称（去掉序号和扩展名）
    getDisplayName(fileName) {
      return fileName
        .replace(/^\d+\s*-\s*/, '') // 移除开头的序号
        .replace(/\.[^/.]+$/, '');   // 移除扩展名
    },
    async loadContent() {
    // 可以在这里加载额外数据
    // 对于静态内容，我们可以留空
    },
    openImage(imageSrc) {
      this.selectedImage = imageSrc;
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    },
    closeImage() {
      this.selectedImage = null;
      document.body.style.overflow = ''; // 恢复背景滚动
    }
  },
  created() {
    this.loadContent();
  },
}
</script>

<style scoped>
.article-list-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

.category-header {
  position: fixed;      /* 固定定位 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  max-width: 1200px;
  margin: 65px auto 0 auto;
}

.category-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}
.content {
  margin-top: 60px;
}

.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: 40px;
  color: #666;
}

.loading-state i,
.error-state i,
.empty-state i {
  font-size: 2em;
  margin-bottom: 10px;
  color: #667eea;
}

.error-state {
  color: #dc3545;
}

.error-state i {
  color: #dc3545;
}

.articles {
  display: grid;
  gap: 20px;
}

.article-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-content {
  padding: 20px;
}

.article-content h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #2c3e50;
}

.article-meta {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9em;
  color: #666;
}

.date {
  margin-right: 15px;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: #f0f2f5;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
}

.article-excerpt {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .article-list-page {
    padding: 10px;
  }

  /* .category-header {
    padding: 20px 0;
  }

  .category-header h1 {
    font-size: 2em;
  } */
}

.folders {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.folder-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  
}

.folder-card:hover {
  transform: translateY(-5px);
}

.folder-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.folder-content i {
  font-size: 24px;
  color: #667eea;
}

.folder-content h3 {
  margin: 0;
  font-size: 1.2em;
  color: #2c3e50;
}

.articles-grid {
  display: grid;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 0 15px;
  box-sizing: border-box;
}


.breadcrumb-item {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-item:hover {
  color: white;
  text-decoration: underline;
}

.separator {
  margin: 0 8px;
  color: rgba(255, 255, 255, 0.7);
}

.file-card {
  position: relative;
  display: flex;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
  cursor: pointer;
  width: 49%;
}

.file-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.file-card.selected {
  border: 2px solid #42b983;
}

.file-selection {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  padding: 5px;
  color: #666;
  transition: color 0.2s;
}

.file-selection:hover {
  color: #42b983;
}

.file-card.selected .file-selection {
  color: #42b983;
}

.file-content {
  flex: 1;
  padding: 20px;
  text-decoration: none;
  color: inherit;
}

.file-content i {
  font-size: 2em;
  color: #42b983;
  margin-bottom: 15px;
}

.file-content h2 {
  margin: 10px 0;
  font-size: 1.2em;
  color: #2c3e50;
}

.file-meta {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9em;
}

.file-type {
  background: #f0f2f5;
  padding: 2px 8px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}

.batch-actions {
  position: fixed;
  display: flex;
  padding-top: 80px;
  padding-left: 20px;
}

.batch-return-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 10px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s;
  margin-right: 10px;
}

.batch-print-btn:hover {
  background-color: #3aa876;
}


/* 移动端：小于768px 时设置为100% */
@media (max-width: 768px) {
  .file-card {
    width: 100%;
  }
  .batch-print-btn {
    top: 290px;
    right: 160px;
  }
  .batch-cancel-btn {
    top: 290px;
    right: 15px;
  }
}
/* 添加新样式 */
.pronunciation-content {
  font-family: 'Inter', system-ui, sans-serif;
}

.intro-section {
  margin-bottom: 2rem;
}

.image-gallery {
  display: grid;
  gap: 1.5rem;
}

.image-card {
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-0.5rem);
}

/* 确保图片完全显示 */
.image-card img {
  width: 100%;
  height: auto;
}

.features-section {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(147, 51, 234, 0.05));
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
}

.feature-item {
  text-align: center;
  padding: 1rem;
}

.testimonial-section {
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 2rem 0;
}

.cta-section {
  text-align: center;
  margin: 2rem 0;
}



.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
}


/* 移动端优化 */
@media (max-width: 768px) {
  .category-header {
    padding: 40px 0;
  }
  
  .category-header h1 {
    font-size: 2em;
  }
  
  .content {
    margin-top: 280px;
  }
  
  .intro-section h1 {
    font-size: 2rem;
  }
  
  .feature-item {
    margin-bottom: 1rem;
  }
}

/* 自定义链接样式 */
.intro-section a {
  text-decoration: none;
}

/* 图片容器样式 */
.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
}

/* 特性区域样式 */
.features-section {
  margin: 2rem 0;
}

/* 行动号召区域样式 */
.cta-section {
  margin: 2rem 0;
}
</style>


