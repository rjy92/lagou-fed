const express = require('express')
const router = express.Router()

// 获取用户资料
router.get('/:username', async (req, res, next) => {
  try {
    // 处理请求
    res.send('get profiles/:username')
  } catch (err) {
    next(err)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /profiles/:username/follow')
  } catch (err) {
    next(err)
  }
})

// 取消关注
router.delete('/:username/follow', async (req, res, next) => {
  try {
    // 处理请求
    res.send('delete /profiles/:username/follow')
  } catch (err) {
    next(err)
  }
})

module.exports = router