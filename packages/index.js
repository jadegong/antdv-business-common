/**
 * v0.0.1 2023/01/04 gqd Add TypeDatePicker component;
 */

// 导入组件
import TypeDatePicker from './TypeDatePicker';

// 组件列表
const components = [
    TypeDatePicker,
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册组件，那么所有的组件都会被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return;
    // 遍历组件列表
    components.forEach(component => Vue.component(component.name, component));
};

// 判断是否直接引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    TypeDatePicker,
};
