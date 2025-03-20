const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Tesseract = require('tesseract.js');
const { extractEventDetails } = require('../utils/openaiHelper');
const { fetchImageSuggestions } = require('../utils/imageHelper');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No image uploaded');
  }

  try {
    const imagePath = path.join(process.cwd(), req.file.path);
    
    // Extract text from image using Tesseract OCR
    const result = await Tesseract.recognize(imagePath, 'eng');
    const imageText = result.data.text;
    
    // Use OpenAI to extract event details
    const eventData = await extractEventDetails(imageText);
    
    // Fetch image suggestions based on the event title
    let imageSuggestions = [];
    if (eventData && eventData.title) {
      imageSuggestions = await fetchImageSuggestions(eventData.title);
    }
    
    res.render('index', { eventData, imageText, imageSuggestions });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('Error processing image');
  }
});

module.exports = router; 