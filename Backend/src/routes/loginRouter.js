const express = require('express');
const router = express.Router();
const cors = require('cors');
const userAPIController = require("../controllers/usersAPIController");


router.post('/', cors(),userAPIController.login);
router.get('/logout',cors(), userAPIController.logout);


module.exports = router;
