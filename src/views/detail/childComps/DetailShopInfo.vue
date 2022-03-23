<template>
    <div class="shop-info">
        <div class="shop-info-logo">
            <img :src="shopInfo.logo" alt="">
            <span>{{shopInfo.name}}</span>
        </div>
        <div class="shop-base-info">
            <div class="shop-num">
                <h3>{{shopInfo.sells | sellCountFilter}}</h3>
                <p>总销量</p>
            </div>
            <div class="shop-num shop-border">
                <h3>{{shopInfo.goodCount}}</h3>
                <p>全部宝贝</p>
            </div>
            <div class="shop-desc">
                <p v-for="item in shopInfo.score" class="shop-desc-item">
                    <span>{{item.name}}</span>
                    <span style="width:40px;display:inline-block" class="shop-font" :class="{'score-better' : item.isBetter}">{{item.score}}</span>
                    <span class="shop-bg" :class="{'score-better-bg' : item.isBetter}">{{item.isBetter ? "高" : "低"}}</span>
                </p>
            </div> 
        </div>

        <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>

    </div>
</template>

<script>
export default {
  name:"DetailShopInfo",
  props:{
      shopInfo:{
          type:Object,
          default(){
              return{}
          }
      }
  },
  filters:{
      sellCountFilter:function(value){
          if(value < 10000)return value
          return (value/10000).toFixed(1) + '万'
      }
  }
}
</script>

<style scoped>
    .shop-info{
        width: 100%;
        margin: 20px auto;
        border-bottom: 5px solid #f2f5f8;
        padding: 20px 3%;
    }
    .shop-info-logo img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .shop-info-logo span{
        position: relative;
        top: -15px;
        left: 8px;
        font-size: 18px;
    }
    .shop-base-info{
        width: 90%;
        margin: 20px auto;
    }
    .shop-num{
        width: 25%;
        float: left;
        text-align: center;
    }
    .shop-num h3{
        font-weight: normal;

    }
    .shop-num p{
        font-size: 14px;
        margin-top: 10px;
    }
    .shop-border{
        border-right: 1px solid #ccc;
    }
    .shop-desc{
        width: 50%;
        float: left;
        text-align: center;
        font-size: 14px;
        position: relative;
        top: -6px;
    }
    .shop-desc-item{
        margin-bottom: 8px;
    }
    .shop-desc-item span{
        padding:0 5px;
    }
    .shop-desc-item  .score-better{
        color: #f13e3a;
    }
    .shop-font{
        color: #5ea732;
    }
    .shop-bg{
        background-color: #5ea732;
        color: #fff;
        text-align: center;
    }
    .score-better-bg{
        background: #f13e3a;
    }
    .enter-shop {
        clear: both;
        font-size: 14px;
        background-color: #f2f5f8;
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
        margin: 0 auto;
}
</style>