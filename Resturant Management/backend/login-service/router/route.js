import express from "express";
import { getAllUsers } from "../controller/controller";

const router = express.Router();


router.route('/users').get(getAllUsers);


exports.module = router;

