
import DressDesign from '../models/dressDesignModel.js';
import cloudinary from '../utils/imagecloudinary.js';
import upload from '../utils/multer.js';

const uploadDressDesign = async (req, res) => {
  try {
    const { category, description } = req.body;
    // Use the original filename (if available) or generate a unique identifier
    const publicId = req.file.originalname || `dress_${Date.now()}`;
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `thaiyal/${category}`,
      public_id: publicId,
    });
    // Save dress design details to MongoDB
    const dressDesign = new DressDesign({
      category,
      description,
      designImage: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    const savedDressDesign = await dressDesign.save();
    res.status(201).json({
      success: true,
      savedDressDesign,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller to get all dress designs
const getAllDressDesigns = async (req, res) => {
  try {
    const dressDesigns = await DressDesign.find();
    res.status(200).json(dressDesigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to get a specific dress design by ID
const getDressDesignByCat = async (req, res) => {
  const {category} = req.body;
  try {
    const dressDesign = await DressDesign.find();

    if (!dressDesign) {
      return res.status(404).json({ message: 'Dress Design not found' });
    }

    res.status(200).json(dressDesign);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message:error});
  }
};




export {
                uploadDressDesign,
                getAllDressDesigns,
                getDressDesignByCat
              };