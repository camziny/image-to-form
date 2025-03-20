# Image to Event Form

A simple Express application that uses Tesseract OCR and OpenAI to extract event information from images and populate a form.

## Features

- Upload an image containing event details
- Extract text from the image using Tesseract OCR
- Use OpenAI to parse the text and extract relevant event information
- Auto-populate a form with the extracted event details

## Prerequisites

- Node.js (v14 or higher)
- NPM
- OpenAI API key

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

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key
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

## How It Works

1. The application uses Multer to handle file uploads
2. Tesseract.js is used to perform OCR on the uploaded image
3. The extracted text is sent to OpenAI's API to identify event details
4. The response from OpenAI is parsed and used to populate the form fields

## License

ISC
