import express  from "express";
import { deleteUser, test, updateUser,  getUserListings} from '../controllers/user.controller.js';
import { varifyToken } from "../utils/VerifyUser.js";

const router=express.Router();

router.get('/test',test);
router.post('/update/:id',varifyToken,updateUser);
router.delete('/delete/:id',varifyToken,deleteUser);
router.get('/listings/:id', verifyToken, getUserListings)



export default router;



