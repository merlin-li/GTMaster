// 人工改图
const router = require('koa-router')()

router.get('/rengonggaitu', async (ctx, next) => {
    await ctx.render('rengonggaitu', {
        title: '改图大师'
    })
})

module.exports = router
