# antdv-business-common

## About
Common business components of antdv.

## Prerequests

ant-design-vue for vue 3.

## Project setup

### Install
```
npm i -S antdv-business-common
```

### Useage
**src/main.ts**
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import AntdvBusinessCommon from 'antdv-business-common
import 'ant-design-vue/dist/antd.css'
import 'antdv-business-common/dist/style.css'

const app = createApp(App)
app.use(Antd)
app.use(AntdvBusinessCommon)

app.mount('#app')
```

### Docs
[abc-vue.jadegong.cn](http://abc-vue.jadegong.cn)
