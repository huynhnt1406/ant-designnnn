<template>
  <a-layout  id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <div class="user-header">
                <router-link to="/usermanage"><a-avatar shape="square" size="large" icon="user" /></router-link>
            </div>
            <a-menu theme="light" mode="inline" :default-selected-keys="['1']">
                <a-menu-item key="1">
                <a-icon type="team" />
                <span><router-link to="/users">Users</router-link></span>
                </a-menu-item>
                <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span>Posts</span>
                </a-menu-item>
                <a-menu-item key="3">
                <a-icon type="message" />
                <span>Comments</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#components-layout-demo-custom-trigger {
  height: 100vh;
}
.user{
  padding: 10px;
}
.menu-item{
  margin-bottom: 10px;
}
.user-header{
  margin:5px;
}
.user-header{
  display: flex;
  justify-content:center;
  align-items: center;
}
</style>
