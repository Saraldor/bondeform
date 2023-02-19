import express from "express";
import {
    getAbout,
    getAboutById,
    saveAbout,
    updateAbout,
    deleteAbout
} from "../controllers/AboutController.js";


const router = express.Router();

router.get('/about', getAbout); // alla poster
router.get('/about/:id', getAboutById); // singel 
router.post('/about', saveAbout); // spara post
router.patch('/about/:id', updateAbout); // updatera post   
router.delete('/about/:id', deleteAbout); // tabort post

export default router;