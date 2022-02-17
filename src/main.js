const Koa = require('koa');
const { APP_PORT } = require('./config/config.default');
console.log(APP_PORT)

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = 'hello api';
});

app.listen(APP_PORT, () => {
  console.log(`server is runing in http://localhost:${APP_PORT}`);
});