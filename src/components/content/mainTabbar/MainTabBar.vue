<template>

		<tab-bar>
			<tab-bar-item path="/home">			
					<img slot="item-icon" src="~assets/img/tabbar/sIcon.png" alt="">
					<img slot="item-icon-active" src="~assets/img/tabbar/sIcon-active.png" alt="">
					<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item path="/category" >
				<img slot="item-icon" src="~assets/img/tabbar/fIcon.png" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/fIcon-active.png" alt="">
				<div slot="item-text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="/cart" >
				<img slot="item-icon" src="~assets/img/tabbar/gIcon.png" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/gIcon-active.png" alt="">
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="/profile">
				<img slot="item-icon" src="~assets/img/tabbar/wIcon.png" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/wIcon-active.png" alt="">
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
	
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar';
	import TabBarItem from 'components/common/tabbar/TabBarItem';
	export default{
		name:"MainTabBar",
		components:{
			TabBar,TabBarItem
		}
	}
</script>

<style>
</style>
