const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
})

async function generateImage(prompt){
    try{
        const response = await openai.images.generate({
            prompt,
            n:1,
            size:'1024x1024'
        })
        console.log(response.data[0].url)
    }catch(error){
        console.error('Error generating the image: ',error.message)
    }
}

generateImage('Cat in the beach.')