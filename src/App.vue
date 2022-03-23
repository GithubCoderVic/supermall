<template>
  <div id="app">
	  <keep-alive exclude="detail"> 
     <router-view></router-view>
     </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style>
@import url("assets/css/base.css");
.main-tab-bar{
	height: 44px;
	background: #fff;
	position: fixed;
	bottom: 0;
	z-index: 99;
}
</style>
