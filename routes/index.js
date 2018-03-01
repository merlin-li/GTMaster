// 首页
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: '改图大师'
    })
})

module.exports = router
