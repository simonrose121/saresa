**Timetabled** is an API that provides bus/tram times for the Yorkshire region. It requires the [NaPTAN](https://data.gov.uk/dataset/naptan) code of the stop and should return a JSON object with the details. The response you will receive will look like something below.

```json
{
  "stopName": "Meadowhall Intc",
  "stopCode": "37010200",
  "timeRequest": "2016-04-16T21:24:00.000Z",
  "offset": "0",
  "services": [
    {
      "service": "18",
      "destination": "Sheffield Intc",
      "time": "2016-04-16T21:30:00.000Z",
      "lowFloor": true
    },
    {
      "service": "X78",
      "destination": "Sheffield Intc",
      "time": "2016-04-16T21:33:00.000Z",
      "lowFloor": true
    }
  ],
  "requestDetails": {
    "method": "GET",
    "url": "/api/v1/stops/37010200?offset=0"
  }
}
```

> You can preview the API through [Mashape](https://market.mashape.com/rowellx68/timetabled).

Instead of [Express](https://github.com/expressjs/express/issues/2844), it uses [Koa](https://github.com/koajs/koa) for the web server. At its core, it does not bundle any middleware so you get to install **only** the ones you need. I only needed [koa-router](https://github.com/alexmingoia/koa-router) and [koa-json](https://github.com/koajs/json).

The data is parsed from [South Yorkshire Passenger Transport Executive](http://tsy.acislive.com/default.asp) which provies live/future departure data for a stop. It is using [cheerio](https://github.com/cheeriojs/cheerio) to traverse the DOM and pick the data we require. By parsing data, this API will need to respond to changes to the DOM of the page.

Using [Babel](https://babeljs.io/), I am able to use next generation JavaScript. In development, we just require `babel-core/register` to handle all the magic of transpilling. However, the [documentation](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#toc-babel-register) notes that this should not be done in production. To solve this issue, we use webpack to transpile the code! More magic.

If you look at the [code](https://github.com/rowellx68/timetabled), you might notice references to [Mashape](https://market.mashape.com/). Instead of building my own implementation of monitoring and authentication, I opted to use Mashape's marketplace. I just need to deploy and instance of this API and point Mashape to and, et voilà, sorted!

Deploying your own instance of the API will require some modifications. You will just need to remove the references to Mashape. You will need to first replace the Dockerfile with the one below.

```Dockerfile
FROM node:slim
WORKDIR /src
ENV NODE_PORT 5050
ADD . .
RUN npm install --production -q && npm run build
EXPOSE $NODE_PORT
CMD bash -c 'NODE_PORT=$NODE_PORT npm run start:prod'
```

Your next step is to remove the lines below from `src/utils/index.js`. After the changes, you should then be able to deploy your own instance.

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

The repository can be found [here](https://github.com/rowellx68/timetabled). Issues, questions, and PRs are welcome!