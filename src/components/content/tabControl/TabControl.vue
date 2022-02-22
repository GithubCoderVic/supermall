<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(item,index) in titles">
			<div :class="{active:currentIndex==index}" @click="tabClick(index)">
			{{item}}
			 <span></span>
			</div>
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
					
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			tabClick(index){
				this.currentIndex=index;
				this.$emit("tab1Click",index)
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background: #fff;
	}
	.tab-control-item{
		flex: 1;
	}
	.active{
		color: var(--color-tint);
	}
	.active span{
		display: block;
		width: 60%;
		margin: 0 auto;
		border-bottom: 2px solid #ff8198;
	}
</style>
