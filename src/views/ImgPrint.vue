<template>
  <div class="img-print-page min-h-screen bg-gray-50 flex flex-col">
    <!-- 页面标题区域（非header） -->
    <div class="bg-white py-4 px-4 sm:px-6" style="padding-top: 100px">
      <div class="container mx-auto flex items-center justify-between">
        <button
          @click="goBack"
          class="back-btn"
        >
          返回
        </button>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="flex-grow container mx-auto px-4 py-8">
      <!-- 其他内容区块 -->
      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2 pt-2 border-b border-gray-200 pb-1">
        <span class="flex items-center">
          <i class="fas fa-images text-blue-500 mr-2"></i>
          第1-30篇
        </span>
        <button
          @click="section1Expanded = !section1Expanded"
          class="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <i :class="section1Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
          {{ section1Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-show="section1Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index < 30" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <div ref="imageRefs" :data-index="index" class="lazy-image-container w-full h-full flex items-center justify-center bg-gray-100">
              <i class="fas fa-image text-gray-300 text-3xl transition-opacity duration-300"></i>
              <!-- 图片将通过JS动态加载 -->
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <!-- 加载错误提示 -->
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3 bg-white">
            <p class="text-sm sm:text-base text-gray-700 truncate">{{ image.name }}</p>
          </div>
        </div>
      </div>

      <!-- 其他内容区块 -->
      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2 pt-4 border-b border-gray-200 pb-1">
        <span class="flex items-center">
          <i class="fas fa-images text-green-500 mr-2"></i>
          第31-60篇
        </span>
        <button
          @click="section2Expanded = !section2Expanded"
          class="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <i :class="section2Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
          {{ section2Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-show="section2Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index >= 30 && index < 60" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <div ref="imageRefs" :data-index="index" class="lazy-image-container w-full h-full flex items-center justify-center bg-gray-100">
              <i class="fas fa-image text-gray-300 text-3xl transition-opacity duration-300"></i>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3 bg-white">
            <p class="text-sm sm:text-base text-gray-700 truncate">{{ image.name }}</p>
          </div>
        </div>
      </div>

      <!-- 其他内容区块 -->
      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2 pt-4 border-b border-gray-200 pb-1">
        <span class="flex items-center">
          <i class="fas fa-images text-purple-500 mr-2"></i>
          第61-90篇
        </span>
        <button
          @click="section3Expanded = !section3Expanded"
          class="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <i :class="section3Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
          {{ section3Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-show="section3Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index >= 60 && index < 90" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <div ref="imageRefs" :data-index="index" class="lazy-image-container w-full h-full flex items-center justify-center bg-gray-100">
              <i class="fas fa-image text-gray-300 text-3xl transition-opacity duration-300"></i>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3 bg-white">
            <p class="text-sm sm:text-base text-gray-700 truncate">{{ image.name }}</p>
          </div>
        </div>
      </div>

      <!-- 其他内容区块 -->
      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2 pt-4 border-b border-gray-200 pb-1">
        <span class="flex items-center">
          <i class="fas fa-images text-orange-500 mr-2"></i>
          第91-120篇
        </span>
        <button
          @click="section4Expanded = !section4Expanded"
          class="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <i :class="section4Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
          {{ section4Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-show="section4Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index >= 90 && index < 120" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <div ref="imageRefs" :data-index="index" class="lazy-image-container w-full h-full flex items-center justify-center bg-gray-100">
              <i class="fas fa-image text-gray-300 text-3xl transition-opacity duration-300"></i>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3 bg-white">
            <p class="text-sm sm:text-base text-gray-700 truncate">{{ image.name }}</p>
          </div>
        </div>
      </div>
      
       <!-- 其他内容区块 -->
      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2 pt-4 border-b border-gray-200 pb-1">
        <span class="flex items-center">
          <i class="fas fa-images text-orange-500 mr-2"></i>
          第121-150篇
        </span>
        <button
          @click="section5Expanded = !section5Expanded"
          class="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <i :class="section5Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
          {{ section5Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-show="section5Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index >= 120 && index < 150" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <div ref="imageRefs" :data-index="index" class="lazy-image-container w-full h-full flex items-center justify-center bg-gray-100">
              <i class="fas fa-image text-gray-300 text-3xl transition-opacity duration-300"></i>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3 bg-white">
            <p class="text-sm sm:text-base text-gray-700 truncate">{{ image.name }}</p>
          </div>
        </div>
      </div>

       <!-- 其他内容区块 -->
      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2 pt-4 border-b border-gray-200 pb-1">
        <span class="flex items-center">
          <i class="fas fa-images text-orange-500 mr-2"></i>
          第151-180篇
        </span>
        <button
          @click="section6Expanded = !section6Expanded"
          class="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <i :class="section6Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
          {{ section6Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-show="section6Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index >= 150" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <div ref="imageRefs" :data-index="index" class="lazy-image-container w-full h-full flex items-center justify-center bg-gray-100">
              <i class="fas fa-image text-gray-300 text-3xl transition-opacity duration-300"></i>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3 bg-white">
            <p class="text-sm sm:text-base text-gray-700 truncate">{{ image.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片查看器模态框 -->
    <div
      v-if="showImageViewer"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      @click.self="closeImageViewer"
    >
      <div class="relative max-w-6xl w-full">
        <!-- 关闭按钮 -->
        <button
          @click="closeImageViewer"
          class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors duration-200 z-10"
          aria-label="关闭"
        >
          <i class="fas fa-times text-xl"></i>
        </button>

        <!-- 导航按钮 -->
        <button
          v-if="currentIndex > 0"
          @click="navigateImage(-1)"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-colors duration-200 z-10"
          aria-label="上一张"
        >
          <i class="fas fa-chevron-left text-2xl"></i>
        </button>

        <button
          v-if="currentIndex < images.length - 1"
          @click="navigateImage(1)"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-colors duration-200 z-10"
          aria-label="下一张"
        >
          <i class="fas fa-chevron-right text-2xl"></i>
        </button>

        <!-- 图片信息 -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm z-10">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>

        <!-- 图片容器 -->
        <div class="flex items-center justify-center min-h-[80vh] p-4 w-full">
          <div class="relative" style="max-width: 100%; max-height: 80vh;">
            <img
              v-if="currentImage && !currentImage.error"
              :src="currentImage.src"
              alt="大图预览"
              class="max-w-full max-h-[80vh] object-contain"
              :style="{ maxWidth: 'min(90vw, 800px)', maxHeight: '90vh' }"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgPrint',
  data() {
    return {
      images: [],
      showImageViewer: false,
      currentImage: null,
      currentIndex: 0,
      section1Expanded: false,
      section2Expanded: false,
      section3Expanded: false,
      section4Expanded: false,
      section5Expanded: false,
      section6Expanded: false,
      observer: null
    };
  },
  mounted() {
    this.loadAllImages();
    this.initIntersectionObserver();

    // 监听折叠状态变化，重新观察可见区域
    this.$watch('section1Expanded', this.observeVisibleImages);
    this.$watch('section2Expanded', this.observeVisibleImages);
    this.$watch('section3Expanded', this.observeVisibleImages);
    this.$watch('section4Expanded', this.observeVisibleImages);
    this.$watch('section5Expanded', this.observeVisibleImages);
    this.$watch('section6Expanded', this.observeVisibleImages);
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    loadAllImages() {
      const imageCount = 180;
      this.images = Array.from({ length: imageCount }, (_, i) => {
        const index = i + 1;
        return {
          src: `/img/${index.toString().padStart(3, '0')}.jpg`,
          name: `图片 ${index}`,
          error: false,
          loaded: false
        };
      });
    },

    initIntersectionObserver() {
      // 确保浏览器支持Intersection Observer
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index);
              this.loadImage(index, entry.target);
              this.observer.unobserve(entry.target);
            }
          });
        }, {
          rootMargin: '100px', // 提前100px加载
          threshold: 0.1
        });

        this.observeVisibleImages();
      } else {
        // 回退方案：直接加载所有图片
        this.loadAllVisibleImages();
      }
    },

    observeVisibleImages() {
      // 等待DOM更新
      this.$nextTick(() => {
        if (!this.observer) return;

        // 先取消所有观察
        document.querySelectorAll('.lazy-image-container').forEach((container) => {
          this.observer.unobserve(container);
        });

        // 只观察当前展开section中的图片
        const visibleContainers = document.querySelectorAll('.lazy-image-container');
        visibleContainers.forEach((container) => {
          this.observer.observe(container);
        });
      });
    },

    loadImage(index, container) {
      if (this.images[index].loaded || this.images[index].error) return;

      const img = new Image();
      img.src = this.images[index].src;
      img.className = 'w-full h-full object-cover transition-opacity duration-300 opacity-0';
      img.onload = () => {
        this.images[index].loaded = true;
        container.innerHTML = '';
        container.appendChild(img);
        // 淡入效果
        setTimeout(() => {
          img.style.opacity = '1';
        }, 50);
      };
      img.onerror = () => {
        this.images[index].error = true;
        container.innerHTML = '<i class="fas fa-image text-gray-400 text-3xl"></i>';
        console.error(`图片加载失败: ${this.images[index].src}`);
      };
    },

    loadAllVisibleImages() {
      // 回退方案：直接加载所有可见图片
      document.querySelectorAll('.lazy-image-container').forEach((container) => {
        const index = parseInt(container.dataset.index);
        this.loadImage(index, container);
      });
    },

    openImageViewer(index) {
      this.currentIndex = index;
      this.currentImage = this.images[index];
      this.showImageViewer = true;
      document.body.style.overflow = 'hidden';
    },

    closeImageViewer() {
      this.showImageViewer = false;
      document.body.style.overflow = 'auto';
    },

    navigateImage(delta) {
      const newIndex = this.currentIndex + delta;
      if (newIndex >= 0 && newIndex < this.images.length) {
        this.currentIndex = newIndex;
        this.currentImage = this.images[newIndex];
      }
    },

    goBack() {
      // 返回上一页
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.img-print-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* 图片查看器动画 */
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}
.scale-enter,
.scale-leave-to {
  transform: scale(0.9);
  opacity: 0;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}

/* 大屏幕优化 */
@media (min-width: 1024px) {
  .img-print-page .grid {
    grid-template-columns: repeat(5, 1fr);
  }
  
  .fixed.inset-0.z-50 {
    padding: 2rem;
  }
  
  .max-w-6xl {
    max-width: 90vw;
  }
}
.back-btn {
  background-color: #3aa876;
  color: #fff;
  padding: 4px 10px;
  position: fixed;
  right: 20px;
  top: 100px;
  border-radius: 5px;
  z-index: 2;
}
</style>