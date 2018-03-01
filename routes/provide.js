// 私人定制
const router = require('koa-router')()

router.get('/provide', async (ctx, next) => {
    await ctx.render('provide', {
        title: '改图大师'
    })
})

module.exports = router
