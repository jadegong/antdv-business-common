// 引入组件，组件必须声音 name
import TypeDatePicker from './src';

// 为组件添加 install 方法，供按需引入
TypeDatePicker.install = function (Vue) {
    Vue.component(TypeDatePicker.name, TypeDatePicker);
};

// 导出组件
export default TypeDatePicker;
