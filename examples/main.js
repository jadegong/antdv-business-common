/**
 * v0.0.1 2022/06/16 gqd Init version;
 *        2023/01/03 gqd Change to insensitive name;
 */
import { createApp } from 'vue'
import * as VueRouter from 'vue-router';
import Antd from 'ant-design-vue';
import App from './App.vue'
import routes from './config/router.config';

// 导入组件库
import antdvBusinessCommon from '../packages';
import 'ant-design-vue/dist/antd.css';

// 创建路由实例，并传递配置
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

const app = createApp(App);

// 注册组件库
app.use(antdvBusinessCommon);

// 确保应用支持路由
app.use(router);
app.use(Antd);

app.mount('#app');
