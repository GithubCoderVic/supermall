// 函数防抖：是指事件被触发n秒后才会执行回调，如果在这n秒内事件又被触发，则重新计算
// 用一句话总结防抖和节流的区别：防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行。
export function debounce(func,delay){
    let timer = null

    return function (){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this,...arguments)
          
        },delay)
    }
}




// 时间格式
export function getDate(date, format) {
    // 获取年份
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "")
        .substr(4 - RegExp.$1.length));
    }
    var o = {
      "M+": date.getMonth() + 1, // montdateh
      "d+": date.getDate(), // day
      "h+": date.getHours(), // hour
      "m+": date.getMinutes(), // minute
      "s+": date.getSeconds(), // second
      "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
      "S": date.getMilliseconds()
      // millisecond
    }
  
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
          : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  }
