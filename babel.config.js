/**
 * @author gqd
 * @datetime 2022/08/03
 * 2022/08/03 gqd Add babel-plugin-import to auto load css/less as need. No need to import css files.
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', { 'libraryName': 'ant-design-vue', 'libraryDirectory': 'es', 'style': 'css' }] // `style: true` 会加载 less 文件
  ]
}
