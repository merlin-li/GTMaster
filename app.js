const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

/**
    改图大师需要的路由在这里配置
    1. 首页
    2. 人工改图
    3. 私人定制
    4. 设计服务
    5. 网站制作
    6. 联系我们（单页）
**/
const index = require('./routes/index')
const rengonggaitu = require('./routes/rengonggaitu')
const provide = require('./routes/provide')
const design = require('./routes/design')
const contact = require('./routes/contact')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(rengonggaitu.routes(), rengonggaitu.allowedMethods())
app.use(provide.routes(), provide.allowedMethods())
app.use(design.routes(), design.allowedMethods())
app.use(contact.routes(), contact.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
