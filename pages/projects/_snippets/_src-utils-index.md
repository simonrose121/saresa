```javascript
const MASHAPE_KEY = process.env.NODE_ENV === 'production' ? process.env.MASHAPE_KEY : 'development';

app.use(async (ctx, next) => {
  const mashapeKey = ctx.request.header['x-mashape-proxy-secret'];

  if (MASHAPE_KEY === 'development_key') {
    ctx.status = 500;
  } else if (mashapeKey === MASHAPE_KEY) {
    await next();
  } else {
    ctx.status = 401;
  }
});
```