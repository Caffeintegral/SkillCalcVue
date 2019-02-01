import Vue from 'vue';
import Router from 'vue-router';
import SkillPage from './views/SkillPage.vue';
import DetailPage from '@/views/DetailPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skill',
      component: SkillPage,
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: DetailPage,
      props: true,
    },
  ],
});
