const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')
module.exports = async (req,res,next)=>{
  console.log(req.headers)
  // 从请求头获取token数据
  let token = req.headers.authorization
  token = token ? token.split('Bearer ')[1]:null

  if(!token){
    return res.status(401).end()
  }
 // 验证 token 是否有效
  // 无效 -> 响应 401 状态码
  // 有效 -> 把用户信息读取出来挂载到 req 请求对象上
  //        继续往后执行

  try {
    const decodedToken = await verify(token,jwtSecret)
    console.log(decodedToken)
    req.user = await User.findById(decodedToken.userId)
    next()

  } catch (err) {
    return res.status(401).end()
  }
}