<template>
	<div class="wrapper">
		<nav-bar class="home-nav" id="home">
			<div slot="center">购物街</div>
		</nav-bar>
		
		<scroll class="container" 
		ref="scroll" 
		@scroll="scrollCon"
		 :probe-type=3
		 :pull-up-load="true"
		 @pullingUp="loadMore"
		 >
			<home-swiper :banners="banners"></home-swiper>
			<recommend :recommends="recommends"></recommend>
			<feature-view></feature-view>
			<tab-control :titles="['流行','新款','精选']" class="tab-control" @tab1Click="showGood"></tab-control>
			
			<good-list :goodlist="showGood1"></good-list>
		</scroll>
		
		<back-top @click.native="backClick" v-show="isShow"></back-top>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import TabControl from 'components/content/tabControl/TabControl'
	import GoodList from 'components/content/goodsList/GoodList'
	import Scroll from 'components/common/scroll/Scroll'
	import BackTop from 'components/content/backTop/BackTop'
	
	import HomeSwiper from './childComps/HomeSwiper'
	import Recommend from './childComps/Recommend'
	import FeatureView from './childComps/FeatureView'
	
	import img1 from 'assets/img/home/homeGoods/1.jpg'
	import img2 from 'assets/img/home/homeGoods/2.jpg'
	import img3 from 'assets/img/home/homeGoods/3.jpg'
	import img4 from 'assets/img/home/homeGoods/4.jpg'
	
	import {getHomeMultidata,getHomeGoods} from 'network/home'
	export default{
		name:"Home",
		components:{
			NavBar,TabControl,GoodList,Scroll,BackTop,
			
			HomeSwiper,Recommend,FeatureView
		},
		data(){
			return{
				banners:[],
				recommends:[],
				currentType:'pop',
				isShow:false,
				goods:{
					pop:{
						page:0,
						list:[],
					},
					new:{
						page:0,
						list:[],
					},
					sell:{
							page:0,
							list:[],
						}
					
				}
			}
		},
		created(){
			// 1.请求多个数据
			this.getHomeMultidata();
			// 2.请求商品数据
			this.getHomeGoods(this.currentType);
			
		},
		mounted(){
			// 3.监听item中图片加载完成
			this.$bus.$on('itemImageLoad',() => {
				this.$refs.scroll.refresh()
			})
		},
		computed:{
			showGood1(){
				return this.goods[this.currentType].list
			}
		},
		methods:{
			/**一些监听事件**/
			loadMore(){
				console.log("上拉加载更多")
				this.getHomeGoods(this.currentType)
			},
			scrollCon(pos){
				// console.log(pos)
				this.isShow = (-pos.y)>1000
			},
			backClick(){
				this.$refs.scroll.scroolTo()
			},
			showGood(index){
				console.log(index)
				switch(index){
					case 0:
					this.currentType = 'pop'
					break
					case 1:
					this.currentType = 'new'
					break
					case 2:
					this.currentType = 'sell'
					break
				}
					this.getHomeGoods(this.currentType)
			},
			
			
			
			/**网络请求相关代码**/
			getHomeMultidata(){
				getHomeMultidata().then(res => {
				// console.log(res)
				this.banners=res.data.data.banner.list;
				this.recommends=res.data.data.recommend.list
			})
			},
			getHomeGoods(type){
				const page = this.goods[type].page+1;
				getHomeGoods(type,page).then(res => {
					console.log(res);
					this.goods[type].list.push(...res.data.data.list);
					this.goods[type].page += 1;
					console.log(this.goods[type].page)
					this.$refs.scroll.finishPullUp()
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		height: 100vh;
		position: relative;
		overflow: hidden;
	}
	#home{
		position: fixed;
		top: 0;left: 0;right: 0;
		z-index: 999;
	}
	.home-nav{
		background: var(--color-tint);
		color: #fff;
	}
	.tab-control{
		position: sticky;
		top: 44px;
	}
	.container{
		position: absolute;
	 	top:40px;
		bottom: 44px;
		left: 0;
		right: 0;
		/* margin-top: 44px;
		height: calc(100% - 88px);
		overflow: hidden; */
	}
</style>
