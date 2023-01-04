// 引入组件，组件必须声音 name
import HelloComponent from './src';

// 为组件添加 install 方法，供按需引入
HelloComponent.install = function (Vue) {
    Vue.component(HelloComponent.name, HelloComponent);
};

// 导出组件
export default HelloComponent;
