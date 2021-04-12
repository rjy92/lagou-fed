// 1 资源： cpu 内存
// console.log(process.memoryUsage())
// console.log(process.cpuUsage())

// 2 运行环境：运行目录、node环境、cpu架构、用户环境、系统平台
/* console.log(process.cwd())
console.log(process.version)
// console.log(process.versions)
console.log(process.arch)
console.log(process.env.NODE_ENV)
// console.log(process.env.PATH)
console.log(process.env.USERPROFILE)  // HOME
console.log(process.platform) */

// 3 运行状态： 启动参数、PID、运行时间
/* console.log(process.argv)
console.log(process.argv0)  // execArgv
console.log(process.pid) */  // ppid 

/* setTimeout(() => {
  console.log(process.uptime())
}, 3000) */

/* process.on('exit',(code)=>{
  setTimeout(()=>{
  console.log("exit")
  },1000)
  console.log("exit"+code)
})
process.on('beforeExit',(code)=>{
  console.log("beforeExit"+code)
})

console.log("finally ")

process.exit() */

//5 标准输入 输出 错误
/* console.log = function(data){
  process.stdout.write("---"+data+'\n')

}

console.log(123)
console.log(345) */


const fs = require('fs')
fs.createReadStream('test.txt').pipe(process.stdout)