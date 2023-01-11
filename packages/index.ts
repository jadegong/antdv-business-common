/**
 * v0.0.1 2023/01/06 gqd 组件库导出文件：组件支持全局调用，也支持局部调用;
 */
import type { App, Plugin } from 'vue';

import { TypeDatePickerPlugin } from './TypeDatePicker';

const AntdvBusinessCommonPlugin: Plugin = {
  install(app: App) {
    TypeDatePickerPlugin.install?.(app);
  },
};

export default AntdvBusinessCommonPlugin;

export * from './TypeDatePicker';
