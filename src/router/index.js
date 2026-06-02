import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/Home.vue'
import ArticleList from '../views/ArticleList.vue'
import Sheldon from '../views/Sheldon.vue'
import ShowList from '../views/ShowList.vue'
import FileViewer from '../views/FileViewer.vue'
// 导入新组件
import ImgPrint from '../views/ImgPrint.vue'
import Vedio from '../views/Vedio.vue'
import SentencesList from '../views/SentencesList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    // 视频合集
    {
      path: '/vedio',
      name: 'Vedio',
      component: Vedio,
      props: true
    },
    // 文档图文合集
    {
      path: '/imgPrint',
      name: 'ImgPrint',
      component: ImgPrint,
      props: true
    },
    // 文档列表
    {
      path: '/category/:categoryId*',
      name: 'ArticleList',
      component: ArticleList,
      props: true
    },
    {
      path: '/Sheldon',
      name: 'Sheldon',
      component: Sheldon,
      props: true
    },

    // 高频造句集
    {
      path: '/sentencesList',
      name: 'SentencesList',
      component: SentencesList,
      props: true
    },
    // 发音合集
    {
      path: '/show/:categoryId*',
      name: 'ShowList',
      component: ShowList,
      props: true
    },
    // 文档内容查看
    {
      path: '/file/:path*',
      name: 'FileViewer',
      component: FileViewer,
      props: true
    },
  ]
})