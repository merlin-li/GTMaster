// 联系我们
const router = require('koa-router')()

router.get('/contact', async (ctx, next) => {
    await ctx.render('contact', {
        title: '改图大师'
    })
})

module.exports = router
