<template>
  <a-layout  id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="user-header">
        <a-avatar shape="square" size="large" icon="user" />
      </div>
      <a-menu theme="light" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="team" />
          <span>Users</span>
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
      <a-layout-header class="navbar" style="background: #fff; padding: 20px">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-button  type="primary">
          <router-link to='/login'>Login</router-link>
        </a-button>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <Users/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Users from '../views/Users'
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components:{
    Users
  }
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
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-header{
  display: flex;
  justify-content:center;
  align-items: center;
}
</style>
