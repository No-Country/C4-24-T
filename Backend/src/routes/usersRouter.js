const express = require('express');
const router = express.Router();
const cors = require('cors');
const userAPIController = require("../controllers/usersAPIController");
const validatorHandler  = require("../middlewares/validator.handler")
const {updateProductSchema,getProductSchema} = require("../schemas/users.schema")
const imgUser = require("../middlewares/multerMiddleware");
const validateCreateUsers = require("../middlewares/validateCreateUsers")
const validateIMG=require("../middlewares/validateImg")

router.get('/', cors(),userAPIController.list);
router.post('/', cors(),imgUser.single('avatar'),validateCreateUsers,userAPIController.create);
router.get('/detail/:id', cors(),userAPIController.detail);
router.patch('/:id', cors(),imgUser.single('avatar'),validateIMG,validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'), cors(),userAPIController.update);
router.delete('/:id', cors(),userAPIController.delete);


module.exports = router;
