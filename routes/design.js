// 设计服务
const router = require('koa-router')()

router.get('/designlist', async (ctx, next) => {
    await ctx.render('designlist', {
        title: '改图大师'
    })
})

module.exports = router