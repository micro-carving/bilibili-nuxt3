<template>
  <header class="app-header">
    <NuxtLink
      class="logo"
      to="/"
    >
      <i class="iconfont icon_logo"></i>
    </NuxtLink>
    <a
      href="#"
      class="search"
    >
      <i class="iconfont icon_search_tab"></i>
    </a>
    <a
      href="#"
      class="face"
    >
      <img
        src="@/assets/images/login.png"
        alt="login"
      />
    </a>
    <div class="download-app">下载 APP</div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #fff;

  .logo {
    flex: 1;
    .icon_logo {
      color: #fb7299;
      font-size: 28px;
    }
  }
  .search {
    padding: 0 8px;
    .icon_search_tab {
      color: #ccc;
      font-size: 22px;
    }
  }
  .face {
    padding: 0 15px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  .download-app {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
