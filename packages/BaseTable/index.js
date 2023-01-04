// 引入组件，组件必须声明 name
import BaseTable from './src';

// 为组件添加 install 方法，供按需引入
BaseTable.install = function (Vue) {
    Vue.component(BaseTable.name, BaseTable);
};

// 导出组件
export default BaseTable;
