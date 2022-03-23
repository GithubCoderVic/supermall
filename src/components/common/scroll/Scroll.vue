<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot>

            </slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"Scroll",
  props:{
      probeType:{
          type:Number,
          default:0
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
    //   1.创建BScroll对象
       this.scroll = new BScroll(this.$refs.wrapper,{
           probeType:this.probeType,
           click:true,
           mouseWheel:true,
        //    observeDOM:true,
           pullUpLoad:this.pullUpLoad
       })
    // 2.监听滚动位置
    this.scroll.on('scroll',pos => {
        this.$emit("scroll",pos)
    })
    // 3.监听上拉事件
    this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
    })


    
    // console.log(this.scroll)
    // this.scroll.scrollHeight = 10000000
    // this.scroll.refresh()
  },
  methods:{
      scrollTo(x,y,time=300){
         
          this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
          this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
          this.scroll && this.scroll.refresh()
        //   console.log("-------")
      },
      getScrollY(){
         
          return this.scroll ? this.scroll.y : 0
      }
  }
}
</script>

<style scoped>

</style>
