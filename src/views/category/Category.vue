<template>
	<div class="wrapper" ref="aaa">
		<ul class="content">
			<li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li><li>分类</li>
			<li>分类</li>
			<li>分类</li>
		</ul>
	</div>
	
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:"Category",
		mounted(){
			// 默认情况下BScroll是不可以实时监听滚动位置
			// probeType 侦测
			// 0,1都是不侦测实时位置
			// 2：在手指滚动过程中侦测，手指离开后的惯性滚动过程中不侦测
			// 3：只要是滚动都侦测
		const bscroll =	new BScroll(this.$refs.aaa,{
			probeType:3,
			click:true,
			pullUpLoad:true
		})
		
		bscroll.on('scroll',position => {
			// console.log(position)
		})
		
		bscroll.on('pullingUp',() => {
			console.log("上拉加载更多");
			// 发送网络请求请求更多数据
			
			// 等数据请求完后，并且将新的数据展示出来后
			setTimeout(()=>{
				bscroll.finishPullUp()
			},2000)
		})
		
		}
	}
</script>

<style>
	.wrapper{
		height: 200px;
		background: red;
	}
</style>
