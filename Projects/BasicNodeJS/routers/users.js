const express =  require('express');
const userController = require('../controllers/users');
const router = express.Router();

router.post('/register', userController.register);
router.post('/get', userController.get);
router.post('/update', userController.update);
router.post('/delete', userController.delete);


module.exports = router;