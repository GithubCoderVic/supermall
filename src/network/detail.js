
import {request,request1} from './request'

export function getDetail(iid){
    return request1({
        url:'/detail',
        params:{
            iid
        }
    })
}

// 获取推荐
export function recommend() {
    return request1({
      url: '/recommend'
    })
  }

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.lowNowPrice
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.lowPrice = itemInfo.lowPrice
    }
}

export class ShopInfo{
    constructor(ShopInfo){
        this.logo = ShopInfo.shopLogo
        this.name = ShopInfo.name
        this.fans = ShopInfo.cFans
        this.sells = ShopInfo.cSells
        this.score = ShopInfo.score
        this.goodCount = ShopInfo.cGoods
    }
}
export class GoodParam {
    constructor(info, rule) {
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }
  export class Comment {
    constructor(list) {
      this.list = list
    }
  }