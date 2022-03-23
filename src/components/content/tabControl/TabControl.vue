<template>
	<div class="tab-control">
<<<<<<< HEAD
		<div v-for="(item,index) in titles" class="tab-control-item" :class="{active:currentIndex==index}" @click="tabControl(index)">
		{{item}} <span></span>
=======
		<div class="tab-control-item" v-for="(item,index) in titles">
			<div :class="{active:currentIndex==index}" @click="tabClick(index)">
			{{item}}
			 <span></span>
			</div>
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
		</div>
	</div>
</template>

<script>
	export default{
		name:"TabControl",
		props:{
			titles:{
				type:Array,
				default(){
<<<<<<< HEAD
					return []
=======
					
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
<<<<<<< HEAD
			tabControl(index){
				this.currentIndex=index;
				this.$emit("changeGood",index)
=======
			tabClick(index){
				this.currentIndex=index;
				this.$emit("tab1Click",index)
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
			}
		}
	}
</script>

<<<<<<< HEAD
<style>
=======
<style scoped>
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
	.tab-control{
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;
<<<<<<< HEAD
		background-color: #fff;
=======
		background: #fff;
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
	}
	.tab-control-item{
		flex: 1;
	}
<<<<<<< HEAD
	.active span{
		display: block;
		width: 60%;
		border-bottom: 2px solid hotpink;
		margin:0 auto;
	}
	.active{
		color: hotpink;
=======
	.active{
		color: var(--color-tint);
	}
	.active span{
		display: block;
		width: 60%;
		margin: 0 auto;
		border-bottom: 2px solid #ff8198;
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
	}
</style>
