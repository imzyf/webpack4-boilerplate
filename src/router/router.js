
import VueRouter from 'vue-router';
import IndexIndex from 'Pages/index/index.vue';
import SettingIndex from 'Pages/setting/index.vue';

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
