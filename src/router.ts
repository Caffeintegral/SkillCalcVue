import Vue from 'vue';
import Router from 'vue-router';
import SkillPage from './views/SkillPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skill',
      component: SkillPage,
    },
  ],
});
