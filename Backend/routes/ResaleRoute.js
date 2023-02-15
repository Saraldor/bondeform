import express from "express";

import {
    getResale,
    getResaleById,
    saveResale,
    updateResale,
    deleteResale
} from "../controllers/ResaleController.js";

const router = express.Router();

router.get('/resale', getResale);
router.get('/resale/:id', getResaleById);
router.post('/resale', saveResale);
router.patch('/resale/:id', updateResale);
router.delete('/resale/:id', deleteResale);


export default router;