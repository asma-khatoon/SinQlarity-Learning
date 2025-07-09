import express from 'express';
//const userController =require('../controllers/users');
import {registerUser, updateUser} from '../controllers/users';
const router = express.Router();

router.post('/register', registerUser);
router.post('/update', updateUser);

export default router;