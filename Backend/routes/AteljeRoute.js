import express from "express";

import {
    getAtelje,
    getAteljeById,
    saveAtelje,
    updateAtelje,
    deleteAtelje
} from "../controllers/AteljeController.js";

const router = express.Router();

router.get('/atelje', getAtelje);
router.get('/atelje/:id', getAteljeById);
router.post('/atelje', saveAtelje);
router.patch('/atelje/:id', updateAtelje);
router.delete('/atelje/:id', deleteAtelje);


export default router;