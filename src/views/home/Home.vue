<template>
	<div class="wrapper">
<<<<<<< HEAD
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<tab-control :titles="['流行','新款','精选']" 
			@changeGood="goodBtn" ref="tabControl1" v-show="tab1IsShow"></tab-control>
		<scroll class="container"
			ref="scroll"
			:probe-type=3
			:pull-up-load=true
			@scroll="scrollCon"
			@pullingUp="loadMore"
		>
			<home-swiper :banners="banners" class="home-swiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
			<recommond-view :recommends="recommends"></recommond-view>
			<feature-view></feature-view>
			<tab-control :titles="['流行','新款','精选']" 
			@changeGood="goodBtn" ref="tabControl2" :class="{fixed:isTabFixed}"></tab-control>
			<good-list :goodList="showGoods"></good-list>
		</scroll>


		
		
		<!-- 此处需注意组件无法直接绑定点击事件，需使用@click.native绑定 -->
		<back-top v-show="isShowBackTop" @click.native="backTop"></back-top>
		
=======
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
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import TabControl from 'components/content/tabControl/TabControl'
<<<<<<< HEAD
	import GoodList from 'components/content/goodList/GoodList'
	import BackTop from 'components/content/backTop/BackTop' 
	import Scroll from 'components/common/scroll/Scroll' 
	
	import HomeSwiper from './childComps/HomeSwiper'
	import RecommondView from './childComps/RecommondView'
	import FeatureView from './childComps/FeatureView'
	
	import {getHomeMultidata,getHomeGoods} from 'network/home'
	import {debounce} from 'common/utils'

	
	export default{
		name:"Home",
		components:{
			NavBar,GoodList,BackTop,Scroll,
			HomeSwiper,RecommondView,FeatureView,TabControl
=======
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
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
		},
		data(){
			return{
				banners:[],
				recommends:[],
				currentType:'pop',
<<<<<<< HEAD
				isShowBackTop:false,
				tabOffetTop:0,
				isTabFixed:false,
				tab1IsShow:false,
				saveY:0,
				goods:{
					pop:{
						page:0,
						list:[]
					},
					new:{
						page:0,
						list:[]
					},
					sell:{
						page:0,
						list:[]
					},
=======
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
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
					
				}
			}
		},
		created(){
			// 1.请求多个数据
<<<<<<< HEAD
			this.getHomeMultidata()
			// 2.请求商品数据
			this.getHomeGoods(this.currentType)
		},
		mounted(){
			// 监听item中图片加载完成 $bus事件总线

			const refresh = debounce(this.$refs.scroll.refresh,100)

			this.$bus.$on('itemImageLoad',() => {
				
				// this.$refs.scroll.refresh()
				refresh()
			})
			
		},
		// activated  deactivated 需配合keep-alive使用
		activated(){
			this.$refs.scroll.scrollTo(0,this.saveY,0)
			this.$refs.scroll.refresh()
			// console.log(this.$refs.scroll.scroll)
		},
		deactivated(){
			this.saveY = this.$refs.scroll.getScrollY()
		},
		computed:{
			showGoods(){
=======
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
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
				return this.goods[this.currentType].list
			}
		},
		methods:{
<<<<<<< HEAD
			// 一些监听事件
			
			swiperImageLoad(){
				this.tabOffetTop=this.$refs.tabControl2.$el.offsetTop
			},
			loadMore(){
				this.getHomeGoods(this.currentType)
			},
			backTop(){
				this.$refs.scroll.scrollTo()
			},
			scrollCon(pos){
				// console.log(pos)
				// 1.判断backTop是否显示
				this.isShowBackTop = (-pos.y)>1000
				// 2.决定tabControl是否吸顶(position:fixed)
				this.isTabFixed = (-pos.y)>this.tabOffetTop
				this.tab1IsShow = this.isTabFixed
				
			},
			goodBtn(index){
				
				switch(index){
					case 0:
						this.currentType='pop';
					break;
					case 1:
						this.currentType='new';
					break;
					case 2:
						this.currentType='sell';
					break;
				}
				// console.log(this.currentType)
				this.getHomeGoods(this.currentType)
				this.$refs.tabControl1.currentIndex = index
				this.$refs.tabControl2.currentIndex = index
			},
			
			/**网络请求相关代码**/ 
			getHomeMultidata(){
				getHomeMultidata().then(res => {
					// console.log(res)
					this.banners=res.data.data.banner.list;
					
					this.recommends=res.data.data.recommend.list
				
				})
=======
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
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
			},
			getHomeGoods(type){
				const page = this.goods[type].page+1;
				getHomeGoods(type,page).then(res => {
					console.log(res);
					this.goods[type].list.push(...res.data.data.list);
					this.goods[type].page += 1;
<<<<<<< HEAD
					// console.log(this.goods[type].page)
					this.$refs.scroll.finishPullUp()
				})
			},
			
		
			
		}
		
=======
					console.log(this.goods[type].page)
					this.$refs.scroll.finishPullUp()
				})
			}
		}
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
	}
</script>

<style scoped>
	.wrapper{
		height: 100vh;
<<<<<<< HEAD
		overflow: hidden;
		background: #fff;
=======
		position: relative;
		overflow: hidden;
	}
	#home{
		position: fixed;
		top: 0;left: 0;right: 0;
		z-index: 999;
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
	}
	.home-nav{
		background: var(--color-tint);
		color: #fff;
<<<<<<< HEAD
		/* position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 99; */
	}
	/* .tab-control{
		position: sticky;
		top: 44px;
	} */
	.home-swiper{
		margin-top: 44px;
	}
	.container{
		height: calc(100% - 88px);
		overflow: hidden;
	}
	.fixed{
		position:fixed;
		top:44px;
=======
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
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
	}
</style>
