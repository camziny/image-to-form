# Project Structure

This project follows a simple modular structure for clarity:

```
image-to-form/
├── index.js              # Main server file
├── routes/               # Route handlers
│   ├── index.js          # Home page routes
│   └── upload.js         # Image upload and processing routes
├── utils/                # Utility functions
│   └── openaiHelper.js   # OpenAI API integration
├── views/                # EJS templates
│   └── index.ejs         # Main page template
├── public/               # Static files
│   └── uploads/          # Directory for uploaded images
├── .env                  # Environment variables
└── package.json          # Project dependencies
```

## File Purposes

- **index.js**: The main application entry point that sets up the server, middleware, and routes
- **routes/index.js**: Handles the home page route
- **routes/upload.js**: Handles the image upload, OCR processing, and AI analysis
- **utils/openaiHelper.js**: Contains the OpenAI API integration for extracting event information
- **views/index.ejs**: The single-page interface with the upload form and event details display

This modular structure makes the code more organized, easier to understand for students, and simpler to maintain as the application grows.
