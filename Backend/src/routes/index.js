const express = require('express');
// const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const documentTypeRouter = require('./documentTypeRouter');


function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1",router);
  router.use('/users', usersRouter);
  router.use('/document_type',documentTypeRouter);
  

}

module.exports = routerApi;
