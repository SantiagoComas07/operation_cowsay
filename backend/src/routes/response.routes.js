import express from 'express';
import dotenv from 'dotenv';
import operation from '../controller/response.controller.js';
dotenv.config()

const router = express.Router()

router.get("/", operation);


export default router;