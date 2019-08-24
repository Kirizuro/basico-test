import Vue from 'vue';
import Router from 'vue-router';
import Personal from './views/Personal.vue';
import Project from './views/Project.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'personal',
      component: Personal
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    }
  ]
});
