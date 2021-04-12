const validate = require('../middleware/validate')
const { body, validationResult,param } = require('express-validator');
const mongoose = require('mongoose')
const { Article } = require('../model')

module.exports.getArticle  = validate([
  validate.isValidObjectId(['params'], 'articleId')
   /* param('articleId').custom(async value => {
     console.log(value)
    if (!mongoose.isValidObjectId(value)) {
      // 返回一个失败状态的 Promise
      // return Promise.reject('文章ID类型错误')
      
      // 同步：失败
      // throw new Error('文章ID类型错误')
    }
    // 同步：成功
    // return true
  }) */
])
exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章摘要不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空')
])

module.exports.updateArticle  =  
[validate([
  // param('articleId').isValidObjectId()
  validate.isValidObjectId(['params'], 'articleId')
]),
// 校验文章是否存在
async (req,res,next)=>{
  const articleId = req.params.articleId
    const article = await Article.findById(articleId)
    req.article = article
    if (!article) {
      return res.status(404).end()
    }
    next()
},
// 修改文章作者是否是当前登录用户
async (req,res,next)=>{
  if (req.user._id.toString() !== req.article.author.toString()) {
    return res.status(403).end()
  }
  next()
}
]


module.exports.deleteArticle  = module.exports.updateArticle
