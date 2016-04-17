```Dockerfile
FROM node:slim
WORKDIR /src
ENV NODE_PORT 5050
ADD . .
RUN npm install --production -q && npm run build
EXPOSE $NODE_PORT
CMD bash -c 'NODE_PORT=$NODE_PORT npm run start:prod'
```