import Home from '../pages/Home.vue';
import DemoContainer from '../pages/layouts';
import TypeDatePickerPage from '../pages/TypeDatePicker';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'index',
        meta: { title: '首页' },
    },
    {
        path: '/dataEntryDemo',
        component: DemoContainer,
        name: 'dataEntryDemo',
        meta: { title: '数据录入' },
        children: [
            {
                path: '/dataEntryDemo/typeDatePicker',
                component: TypeDatePickerPage,
                name: 'typeDataPickerDemo',
                meta: { title: '类型时间选择' },
            },
        ],
    },
];

export default routes;
