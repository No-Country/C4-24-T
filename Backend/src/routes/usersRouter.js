const express = require('express');
const router = express.Router();
const userAPIController = require("../controllers/usersAPIController");
const imgUser = require("../middlewares/multerMiddleware");


router.get('/', userAPIController.list);
router.post('/',imgUser.single('avatar'),userAPIController.create);
router.get('/detail/:id',userAPIController.detail);
router.patch('/:id',imgUser.single('avatar'),userAPIController.update);
router.delete('/:id',userAPIController.delete);


module.exports = router;
