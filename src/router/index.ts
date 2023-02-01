import HomeView from '../views/HomeView.vue';
import DemoContainer from '../layouts/index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页' },
  },
  {
    path: '/start',
    name: 'startPage',
    component: HomeView,
    meta: { title: '开始' },
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
  },
  {
    path: '/otherDemo',
    name: 'otherDemo',
    component: DemoContainer,
    meta: { title: '其他' },
    children: [
      {
        path: '/otherDemo/sliderImgCheckbox',
        name: 'sliderImgCheckboxDemo',
        component: () => import('../views/SliderImgCheckbox/index.vue'),
        meta: { title: '滑动验证码' },
      },
    ],
  },
];

export default routes;
