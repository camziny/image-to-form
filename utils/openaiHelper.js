const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function extractEventDetails(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that extracts event information from text. Extract the title, location, date, and time."
        },
        {
          role: "user",
          content: `Extract the following event details from this text in JSON format with the fields: title, location, date, and time. Text: ${text}`
        }
      ],
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return { error: 'Failed to extract event details' };
  }
}

module.exports = {
  extractEventDetails
}; 