<!-- v0.0.1 2023/01/04 gqd Init version; -->
<!--        2023/01/03 gqd Change to insensitive name; -->
<template>
    <a-layout>
        <a-layout-header>
            <div class="logo">
                <img alt="Vue logo" src="./assets/logo.png" />
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
            <a-layout-sider width="240" style="background: #fff">
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
            <a-layout style="padding: 0 24px 24px;">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item v-for="matchedRoute in currentMatchedRoutes" :key="matchedRoute.name">{{ matchedRoute.meta.title }}</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
// import { toolUtil } from './utils/toolUtils';

import routes from './config/router.config';

export default {
    name: 'App',
    components: {
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
        // HelloWorld
    },
    data() {
        return {
            selectedTopKeys: ['antdvBusinessCommon'],
            selectedSideKeys: [],
            openSideKeys: [],
            menus: [],
            currentMatchedRoutes: [],
        };
    },
    created() {
        this.menus = routes || [];
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
        handleMenuSelect(obj) {
            // console.log(obj);
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
};
</script>

<style>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
