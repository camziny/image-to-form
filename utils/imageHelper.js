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

module.exports = {
  fetchImageSuggestions
}; 