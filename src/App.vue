<!-- v0.0.1 2023/01/04 gqd Init version; -->
<!--        2023/01/03 gqd Change to insensitive name; -->
<!--        2023/01/11 gqd Use typescript; -->
<!--        2023/01/17 gqd Optimize layout; -->
<template>
  <a-layout style="height: 100%;">
    <a-layout-header>
      <div class="logo">
        <img alt="Vue logo" src="./assets/logo.svg" />
      </div>
      <a-menu
        v-model:selectedKeys="selectedTopKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="antdvBusinessCommon">常用业务组件</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout style="padding: 0 4px;">
      <a-layout-sider width="240" style="background: #fff; min-height: 100%; padding: 24px 0;">
        <a-menu
          v-model:selectedKeys="selectedSideKeys"
          v-model:openKeys="openSideKeys"
          @select="handleMenuSelect"
          mode="inline"
          style="height: 100%"
        >
        <template v-for="menuItem in menus">
        <!-- 没有子菜单 -->
          <a-menu-item v-if="!menuItem.children || menuItem.children.length <= 0" :key="menuItem.name">
          <!-- <user-outlined /> -->
            {{ menuItem.meta.title }}
            </a-menu-item>
            <!-- 有子菜单 -->
            <a-sub-menu v-else :key="menuItem.name">
              <template #title>
                <span>
                  <!-- <laptop-outlined /> -->
                  {{ menuItem.meta.title }}
                </span>
              </template>
              <a-menu-item v-for="subMenuItem in menuItem.children" :key="subMenuItem.name">{{ subMenuItem.meta.title }}</a-menu-item>
            </a-sub-menu>
          </template>
        </a-menu>
      </a-layout-sider>
      <div class="page-container">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="matchedRoute in currentMatchedRoutes" :key="matchedRoute.name">{{ matchedRoute.meta.title }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="page-content-container">
          <router-view></router-view>
        </div>
      </div>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import routes from './router';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      selectedTopKeys: ['antdvBusinessCommon'],
      selectedSideKeys: Array<String>(),
      openSideKeys: Array<String>(),
      menus: Array<any>(),
      currentMatchedRoutes: Array<any>(),
    };
  },
  created() {
    this.menus = routes || Array<any>();
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      const { matched } = to;
      this.currentMatchedRoutes = matched;
      if (matched.length >= 1) {
        this.selectedSideKeys = [matched[matched.length - 1].name];
        if (matched.length > 1) {
          this.openSideKeys = [matched[0].name];
        }
      }
    });
  },
  methods: {
    handleMenuSelect(obj: any) {
      const { keyPath } = obj;
      for (let i = routes.length - 1; i >= 0; i--) {
        if (routes[i].name === keyPath[0]) {
          if (keyPath.length === 1) {
            this.$router.push({ path: routes[i].path });
          } else if (keyPath.length > 1) {
            for (let j = routes[i].children.length - 1; j >= 0; j--) {
              if (routes[i].children[j].name === keyPath[1]) {
                this.$router.push({ path: routes[i].children[j].path });
              }
            }
          }
        }
      }
    },
  },
});
</script>

<style scoped>
.logo {
    float: left;
    /* width: 120px; */
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
    line-height: 31px;
}
.logo img {
    height: 100%;
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}

.page-container {
  padding: 0 24px 24px;
  min-height: 100%;
  overflow-y: auto;
  width: calc(100% - 240px);
}
.page-content-container {
  width: 100%;
  background: #fff;
  padding: 24px;
  minHeight: 280px;
 }
</style>
