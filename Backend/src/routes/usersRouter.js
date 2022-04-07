const express = require('express');
const router = express.Router();
const userAPIController = require("../controllers/usersAPIController");
const validatorHandler  = require("../middlewares/validator.handler")
const {updateProductSchema,getProductSchema} = require("../schemas/users.schema")
const imgUser = require("../middlewares/multerMiddleware");
const validateCreateUsers = require("../middlewares/validateCreateUsers")
const validateIMG=require("../middlewares/validateImg")

router.get('/', userAPIController.list);
router.post('/',imgUser.single('avatar'),validateCreateUsers,userAPIController.create);
router.get('/detail/:id',userAPIController.detail);
router.patch('/:id',imgUser.single('avatar'),validateIMG,validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),userAPIController.update);
router.delete('/:id',userAPIController.delete);


module.exports = router;
