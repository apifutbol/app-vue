import HomePage from '../pages/home.vue';
import LivePage from '../pages/live.vue';
import ExplorePage from '../pages/explore.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/live/',
    component: LivePage,
  },
  {
    path: '/explore/',
    component: ExplorePage,
  },
];

export default routes;
