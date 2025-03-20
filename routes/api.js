const express = require('express');
const router = express.Router();

// Fetch images from Unsplash
async function fetchImageSuggestions(query) {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape`, {
      headers: {
        'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    
    const data = await response.json();
    
    return data.results.map(image => ({
      id: image.id,
      url: image.urls.regular,
      thumb: image.urls.thumb,
      credit: {
        name: image.user.name,
        link: image.user.links.html
      }
    }));
  } catch (error) {
    console.error('Error fetching image suggestions:', error);
    return [];
  }
}

// API endpoint to get images based on query
router.get('/images', async (req, res) => {
  const { query } = req.query;
  
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }
  
  try {
    const images = await fetchImageSuggestions(query);
    res.json(images);
  } catch (error) {
    console.error('Error in /api/images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

module.exports = router; 