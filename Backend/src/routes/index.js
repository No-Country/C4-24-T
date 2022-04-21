const express = require('express');
// const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const documentTypeRouter = require('./documentTypeRouter');
const loginRouter = require('./loginRouter');

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1",router);
  router.use('/login',loginRouter);
  router.use('/users', usersRouter);
  router.use('/document_type',documentTypeRouter);
  

}

module.exports = routerApi;
