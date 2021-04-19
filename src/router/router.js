import VueRouter from 'vue-router';

const IndexIndex = () => import('Pages/index/index.vue');
const SettingIndex = () => import('Pages/setting/index.vue');

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexIndex',
      component: IndexIndex,
    },
    {
      path: '/setting',
      name: 'SettingIndex',
      component: SettingIndex,
    },
  ],
});

export default router;
