<template>
  <div class="img-print-page min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">图片预览</h1>

    <!-- 图片网格 -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
      
      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2">
        <span>🌵 第1-30篇</span>
        <button
          @click="section1Expanded = !section1Expanded"
          class="flex items-center text-blue-600 hover:text-blue-800"
        >
          <i :class="section1Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
          {{ section1Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-if="section1Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index < 30" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <img
              :src="image.src"
              alt="图片预览"
              class="w-full h-full object-cover"
              :loading="'lazy'"
              @error="onImageError(index)"
            >
            <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <!-- 加载错误提示 -->
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3">
            <p class="text-sm sm:text-base text-gray-700 truncate">{{ image.name }}</p>
          </div>
        </div>
      </div>  



      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2">
        <span>🌵 第31-60篇</span>
        <button
           @click="section2Expanded = !section2Expanded"
           class="flex items-center text-blue-600 hover:text-blue-800"
         >
           <i :class="section2Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
           {{ section2Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-if="section2Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index >= 30" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <img
              :src="image.src"
              alt="图片预览"
              class="w-full h-full object-cover"
              :loading="'lazy'"
              @error="onImageError(index)"
            >
            <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <!-- 加载错误提示 -->
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3">
            <p class="text-sm sm:text-base text-gray-700 truncate">{{ image.name }}</p>
          </div> 
        </div>
      </div>

      <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-between text-lg font-semibold text-gray-800 mb-2">
        <span>🌵 第61-90篇</span>
        <button
          @click="section3Expanded = !section3Expanded"
          class="flex items-center text-blue-600 hover:text-blue-800"
         >
           <i :class="section3Expanded ? 'fas fa-chevron-up mr-1' : 'fas fa-chevron-down mr-1'"></i>
           {{ section3Expanded ? '收起' : '展开' }}
        </button>
      </div>
      <div v-if="section3Expanded" class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div v-for="(image, index) in images" :key="index" v-show="index >= 60" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div class="relative cursor-pointer aspect-square" @click="openImageViewer(index)">
            <img
              :src="image.src"
              alt="图片预览"
              class="w-full h-full object-cover"
              :loading="'lazy'"
              @error="onImageError(index)"
            >
            <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <i class="fas fa-search-plus text-xl"></i>
              </span>
            </div>
            <!-- 加载错误提示 -->
            <div v-if="image.error" class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <i class="fas fa-image text-gray-400 text-3xl"></i>
            </div>
          </div>
          <div class="p-2 sm:p-3">
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
      section1Expanded: true,  // 控制第1-30篇的展开状态
      section2Expanded: true,   // 控制第31-60篇的展开状态
      section3Expanded: true   // 控制第61-90篇的展开状态
    }
  },
  mounted() {
    // 加载所有图片
    this.loadAllImages();
  },
  methods: {
    loadAllImages() {
      // 从public/img目录加载001.jpg到020.jpg
      const imageCount = 90;
      this.images = Array.from({ length: imageCount }, (_, i) => {
        const index = i + 1;
        return {
          src: `/img/${index.toString().padStart(3, '0')}.jpg`,
          name: `图片 ${index}`,
          error: false
        };
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
    downloadImage(src, name) {
      if (!src) return;
      // 创建一个临时链接来下载图片
      const link = document.createElement('a');
      link.href = src;
      link.download = name || 'image';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    onImageError(index) {
      this.images[index].error = true;
      console.error(`图片加载失败: ${this.images[index].src}`);
    }
  }
}
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

/* 响应式调整 - 修复选择器写法 */
@media (max-width: 640px) {
  .grid { /* 针对小屏幕调整网格列数 */
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 480px) {
  .grid { /* 针对超小屏幕调整网格列数 */
    grid-template-columns: 1fr !important;
  }
}

/* 大屏幕优化 */
@media (min-width: 1024px) {
  .img-print-page .grid {
    grid-template-columns: repeat(5, 1fr);
  }
  
  /* 确保图片查看器在大屏幕上不被挡住 */
  .fixed.inset-0.z-50 {
    padding: 2rem;
  }
  
  .max-w-6xl {
    max-width: 90vw;
  }
}
</style>