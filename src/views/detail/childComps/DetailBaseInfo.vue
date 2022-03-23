<template>
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">￥{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="column" >
            <div class="column-item">{{goods.columns[0]}}</div>
            <div class="column-item">{{goods.columns[1]}}</div>
            <div class="column-item">{{goods.services[goods.services.length-1].name}}</div>
        </div>
        <div class="info-service">
            <div v-for="index in goods.services.length-1" class="info-service-item">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:"DetailBaseInfo",
   props:{
       goods:{
           type:Object,
           default(){
               return {}
           }
       }
   }
}
</script>

<style scoped>
    .base-info{
        width: 100%;
        padding: 0 1%;
        margin: 0 auto;
        border-bottom: 5px solid #f2f5f8;
        padding-bottom: 18px;
    }
    .info-title{
        font-weight: bold;
        font-size: 16px;
        margin: 8px 0;
    }
    .n-price{
        font-size: 20px;
        color: var(--color-tint);
    }
    .o-price{
        font-size: 14px;
        margin-left: 5px;
        color: #a7a7a7;
        text-decoration: line-through;
    }
    .discount{
        background: var(--color-tint);
        padding: 2px 6px;
        color: #fff;
        font-size: 14px;
        margin-left: 8px;
        border-radius: 5px;
    }
    .column{
        margin-top: 25px;
        display: flex;
        border-bottom: 1px solid rgb(240, 238, 238);
        padding-bottom: 10px;
    }
    .column .column-item{
        flex:1;
        text-align: center;
        font-size: 14px;
        color: #a7a7a7;
    }
    .info-service{
        display: flex;
        margin-top: 15px;
    }
    .info-service-item{
        flex: 1;
        font-size: 13px;
        
    }
    .info-service-item img{
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }
</style>