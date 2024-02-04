
import express from 'express';
import upload from '../utils/multer.js';
import {uploadDressDesign} from '../controllers/dressDesignController.js';
import {getDressDesignByCat ,getAllDressDesigns} from '../controllers/dressDesignController.js'

const router = express.Router();


// Route for handling dress design upload
router.post('/upload', upload.single('designImage'), uploadDressDesign);

router.get('/dress-designs', getAllDressDesigns);
router.get('/dress-designs/cat',getDressDesignByCat);


export default router;