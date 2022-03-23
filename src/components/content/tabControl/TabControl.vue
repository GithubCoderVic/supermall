<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" class="tab-control-item" :class="{active:currentIndex==index}" @click="tabControl(index)">
		{{item}} <span></span>
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
					return []
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			tabControl(index){
				this.currentIndex=index;
				this.$emit("changeGood",index)
			}
		}
	}
</script>

<style>
	.tab-control{
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
	}
	.tab-control-item{
		flex: 1;
	}
	.active span{
		display: block;
		width: 60%;
		border-bottom: 2px solid hotpink;
		margin:0 auto;
	}
	.active{
		color: hotpink;
	}
</style>
