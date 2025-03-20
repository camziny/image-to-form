# Image to Event Form

A simple Express application that uses Tesseract OCR and OpenAI to extract event information from images and populate a form.

## Features

- Upload an image containing event details
- Extract text from the image using Tesseract OCR
- Use OpenAI to parse the text and extract relevant event information
- Auto-populate a form with the extracted event details
- Preview event details in a stylish modal before submission
- Add custom thumbnails for events from Unsplash

## Prerequisites

- Node.js (v14 or higher)
- NPM
- OpenAI API key
- Unsplash API key (for thumbnail images)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/image-to-form.git
   cd image-to-form
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```
   OPENAI_API_KEY=your_openai_api_key
   UNSPLASH_ACCESS_KEY=your_unsplash_api_key
   PORT=3000
   ```

## Usage

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Upload an image containing event information

4. The application will process the image, extract text using Tesseract OCR, and then use OpenAI to identify the event title, location, date, and time

5. The extracted information will be displayed in a form that you can edit if needed

6. Click "Add a Thumbnail" to select a relevant image for your event

7. Click "Save Event" to see a preview of how your event would look with all the information

## How It Works

1. The application uses Multer to handle file uploads
2. Tesseract.js is used to perform OCR on the uploaded image
3. The extracted text is sent to OpenAI's API to identify event details
4. The response from OpenAI is parsed and used to populate the form fields
5. Unsplash API is used to fetch relevant images based on the event title
6. A modal preview shows how the event would look before final submission

## Styling and UI

The application is styled using a modular CSS approach:

- **main.css** - Contains general styles and variables
- **forms.css** - Contains styles for form elements
- **event-preview.css** - Contains styles for the event preview modal

This separation makes the codebase easier to maintain and understand, especially for educational purposes.

## License

ISC
