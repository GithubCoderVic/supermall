<template>
	<div class="wrapper">
		<div>
			<h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2>
			<h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2>
			<h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2>
			<h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2>
			<h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2><h2>分类</h2>
		</div>
	</div>
	
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:"Category",
		mounted(){
			const bscroll = new BScroll('.wrapper',{
				probeType:3,
				click:true,
				pullUpLoad:true
			})
			bscroll.on('scroll',pos => {
				// console.log(pos)
			})
			bscroll.on('pullingUp',() => {
				console.log("上拉加载更多")
				
				setTimeout(function() {
					bscroll.finishPullUp()
				}, 2000);
				
			})	
			}
			
			
			
			
	}
</script>

<style scoped>
	.wrapper{
		height: 500px;
		background: #FF0000;
		overflow: hidden;
	}
</style>
