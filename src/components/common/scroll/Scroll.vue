<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:"Scroll",
		props:{
			probeType:{
				type:Number,
				default:1
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				scroll:null
			}
		},
		mounted(){
			// 1.创建BScroll对象
			this.scroll=new BScroll(this.$refs.wrapper,
			{
				probeType: this.probeType,
				click:true,
				mouseWheel:true,
				// observeDOM:true,
				pullUpLoad:this.pullUpLoad
				})
			// 2.监听滚动位置
			this.scroll.on('scroll',pos => {
				this.$emit("scroll",pos)
			})
			// 3.监听上拉事件
			this.scroll.on('pullingUp',() => {
				this.$emit("pullingUp")
			})
			this.scroll.refresh()
			console.log(this.scroll)
		},
		methods:{
			scroolTo(){
					this.scroll.scrollTo(0,0,1000)
			},
			finishPullUp(){
				this.scroll.finishPullUp()
			},
			refresh(){
				this.scroll.refresh()
			}
			
		}
	}
</script>

<style>
</style>
