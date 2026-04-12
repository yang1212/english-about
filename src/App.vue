<template>
  <div id="app">
    <nav-bar />
    <keep-alive>
      <router-view/>
    </keep-alive>
    <scroll-to-top />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ScrollToTop from './components/ScrollToTop.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ScrollToTop
  },
  data() {
    return {
      categoryGroups: [
        {
          id: 'learning',
          name: '听力素材',
          icon: '🌵',
          isOpen: false,
          categories: [
            {
              id: 'vedio',
              name: '视频资源',
              description: '小红书账号-不和乔治玩的佩奇',
              icon: '🌼'
            },
            {
              id: 'myVedio',
              name: '视频配套文档',
              description: '视频资源的文本整理，支持打印',
              icon: '🌼'
            },
            {
              id: 'source2',
              name: '已打印文本',
              description: '基于文本整理的打印版本',
              icon: '🌼'
            },
            {
              id: 'myVedio2',
              name: '文本整理',
              description: '小红书账号-Sahra每日学英语',
              icon: '🌼'
            }
          ]
        },
        {
          id: 'sentence',
          name: '高频造句集',
          icon: '🌵',
          isOpen: false,
          categories: [
            {
              id: 'rendering',
              name: '造句翻译',
              description: '以“时态、句型、高频词”为核心，构造并整理数百条英语例句',
              icon: '🌼'
            }
          ]
        },
        {
          id: 'pronunciation',
          name: '发音',
          icon: '🌵',
          isOpen: false,
          categories: [
            {
              id: 'pronunciation1',
              name: '英语趣配音',
              description: '看视频+跟读配音：选取美剧、动画、电影、演讲片段，进行角色扮演式配音',
              icon: '🌼'
            },
            {
              id: 'pronunciation2',
              name: '赖世雄音标课合集',
              description: '标准美式发音示范，逐音讲解纠正，帮助你掌握音标',
              icon: '🌼'
            }
          ]
        }
      ]
    }
  },
  created() {
    // Share categoryGroups with all child components
    this.$root.$data.categoryGroups = this.categoryGroups;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background: #f5f7fa;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media print {
  #app {
    background: white;
  }
}
</style>
