import express from 'express';
import { signup, signin, verifyAccount } from './user.controller.js';
import { Hashpassword } from '../../middelware/hashpass.js';
import { ChechEmail } from '../../middelware/checkEmail.js';
import { validateUser } from '../../middelware/validationmiddleware.js';
const router = express.Router();

router.post("/signup", ChechEmail, Hashpassword, validateUser, signup);
router.post("/signin", ChechEmail, signin);
router.get("/verify/:token", verifyAccount);
export default router;



