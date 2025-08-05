<template>
  <div id="app">
    <nav-bar />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      categoryGroups: [
        {
          id: 'learning',
          name: '听力素材',
          icon: 'fas fa-headphones-alt',
          isOpen: false,
          categories: [
            {
              id: 'myVedio',
              name: '听力视频/文档整理',
              description: '小红书账号-不和乔治玩的佩奇',
              icon: 'fas fa-video'
            },
            {
              id: 'myVedio2',
              name: '文档整理',
              description: '小红书账号-Sahra每日学英语',
              icon: 'fas fa-file-alt'
            }
          ]
        },
        {
          id: 'sentence',
          name: '高频造句集',
          icon: 'fas fa-comment-dots',
          isOpen: false,
          categories: [
            {
              id: 'rendering',
              name: '造句翻译',
              description: '以“时态、句型、高频词”为核心，构造并整理数百条英语例句',
              icon: 'fas fa-language'
            }
          ]
        },
        {
          id: 'pronunciation',
          name: '发音',
          icon: 'fas fa-volume-up',
          isOpen: false,
          categories: [
            {
              id: 'pronunciation1',
              name: '英语趣配音',
              description: '看视频+跟读配音：选取美剧、动画、电影、演讲片段，进行角色扮演式配音',
              icon: 'fas fa-music'
            },
            {
              id: 'pronunciation2',
              name: '赖世雄音标课合集',
              description: '标准美式发音示范，逐音讲解纠正，帮助你掌握音标',
              icon: 'fas fa-chalkboard-teacher'
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
