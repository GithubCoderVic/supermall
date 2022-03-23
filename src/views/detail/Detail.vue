<template>
    <div id="detail">
       <detail-nav-bar @titleClick="titleClick"></detail-nav-bar>
       <scroll class="content"
           :pull-up-load=true
           ref="scroll"
          :probe-type="3"
           @scroll="getPosition"
       >
            <!-- 属性：topImages 传入值：top-images -->
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
        <detail-goods-info 
        :detail-info="detailInfo"
        @detailImageLoad="detailImageLoad"
        ></detail-goods-info>
        <detail-param-info :param-info="goodParam" ref="paramInfo"></detail-param-info>
       <detail-comment :comments="comment" ref="comments"></detail-comment>
      <goods-list :good-list="recommend" ref="recommend" />
       </scroll>
      
    </div>
</template>

<script>

import DetailNavBar from 'views/detail/childComps/DetailNavBar' 
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo' 
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
import GoodsList from "components/content/goodList/GoodList";
import DetailButtomBar from "./childComps/DetailButtomBar";

import Scroll from "components/common/scroll/Scroll";

import {getDetail,Goods,ShopInfo,GoodParam,Comment,recommend} from 'network/detail'


export default {
    name:"Detail",
    components:{
         DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailComment,
        Scroll,
        GoodsList,
        DetailButtomBar,
        Scroll,
    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shopInfo:{},
            detailInfo: {},
            goodParam: {},
            comment: {},
            recommend: [],
            themeTopYs: [],
            ScrollIndex: 0,
            destination: "shopcart",
        }
    },
    mounted(){
       
    },
    created(){
        // 1.保存传入的iid
        this.iid = this.$route.params.iid
        // 2.获取详情信息
        this.getDetail(this.iid)
        // 3.获取推荐信息
        recommend().then((res) => {
            
             this.recommend = res.data.data.list;
            
        });

    },
    methods:{
     titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
     },   
     detailImageLoad(){
        //  console.log("----")
         this.$refs.scroll.refresh()
     },     
    getDetail(iid){
         // 2.根据iid请求详情数据
        getDetail(iid).then(res => {
            // console.log(res)
            const data = res.data.result
            // 获取详情页轮播图
            this.topImages = data.itemInfo.topImages
            // 获取商品信息
            this.goods  = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            // console.log(this.goods)
            // 获取店铺信息
            this.shopInfo = new ShopInfo(data.shopInfo)
             this.detailInfo = data.detailInfo;
            // 获取参数信息
        this.goodParam = new GoodParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 获取comment
        let commentData = data.rate.list;
        this.comment = new Comment(commentData);
        // 获取参数、评论、推荐的top
        this.$nextTick(() => {
          setTimeout(() => {
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
          }, 500);
        });
        })
    },
     // 滚动改变对应主题
    getPosition(position) {
      position = -position.y;
     
      
      
      for (let i = 0; i < this.themeTopYs.length; i++) {
        if (position >= this.themeTopYs[i]) this.ScrollIndex = i;
      }
    }



    }
}

</script>

<style scoped>
    #detail{
        height: 100vh;
        position: relative;
        z-index: 100;
        background-color: #fff;
          overflow: hidden;
    }
    .content{
        height: calc(100% - 44px);
      
    }
</style>