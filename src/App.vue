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
          name: '学习成长',
          isOpen: false,
          categories: [
            { id: 'myVedio', name: '听力视频/文档整理', description: '小红书账号-不和乔治玩的佩奇' },
            { id: 'myVedio2', name: '文档整理', description: '小红书账号-Sahra每日学英语' },
            { id: 'rendering', name: '造句翻译', description: '' },
            // { id: 'ai', name: '问题截图', description: '' }
          ]
        },
        // {
        //   id: 'tools',
        //   name: '工具效率',
        //   isOpen: false,
        //   categories: [
        //     { id: 'dev-tools', name: '开发工具', description: '' },
        //   ]
        // }
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
