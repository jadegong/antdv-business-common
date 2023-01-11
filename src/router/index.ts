import HomeView from '../views/HomeView.vue'
import DemoContainer from '../layouts/index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页' },
  },
  {
    path: '/dataEntryDemo',
    name: 'dataEntryDemo',
    component: DemoContainer,
    meta: { title: '数据录入' },
    children: [
      {
        path: '/dataEntryDemo/typeDatePicker',
        name: 'typeDatePickerDemo',
        component: () => import('../views/TypeDatePicker/index.vue'),
        meta: { title: '类型时间选择' },
    },
  ],
  }
];

export default routes;
