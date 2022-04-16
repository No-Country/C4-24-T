const express = require('express');
const router = express.Router();
const cors = require('cors');
const documentTypeAPIController= require('../controllers/documentTypeApiController')

router.get('/', cors(),documentTypeAPIController.list);


module.exports = router;
