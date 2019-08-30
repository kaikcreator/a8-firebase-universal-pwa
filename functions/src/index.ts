import * as functions from 'firebase-functions';

export const universal = functions.https.onRequest((request, response) => {
  //require(`${process.cwd()}/dist/server`).app(request, response);
  const server = require(`${process.cwd()}/dist/server`);
  console.log("server JSON is: ", JSON.stringify(server));
    server.app(request, response);
  });