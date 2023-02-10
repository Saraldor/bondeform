import express from "express";

import {
    getNews,
    getNewsById,
    saveNews,
    updateNews,
    deleteNews
} from "../controllers/NewsController.js";

const router = express.Router();

router.get('/news', getNews);
router.get('/news/:id', getNewsById);
router.post('/news', saveNews);
router.patch('/news/:id', updateNews);
router.delete('/news/:id', deleteNews);


export default router;