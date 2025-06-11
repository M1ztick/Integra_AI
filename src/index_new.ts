import axios from 'axios';
import dotenv from 'dotenv';
import { AVAILABLE_MODELS, listAvailableModels } from './models';

dotenv.config();

interface GenerationConfig {
  maxLength?: number;
  temperature?: number;
  topP?: number;
  doSample?: boolean;
}

interface HuggingFaceResponse {
  generated_text: string;
}

const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
const DEFAULT_MODEL = 'microsoft/DialoGPT-large';
const API_BASE_URL = 'https://api-inference.huggingface.co/models';

if (!HUGGINGFACE_API_KEY) {
  console.error('❌ Error: HUGGINGFACE_API_KEY is not set in the environment variables.');
  console.log('📝 Please copy .env.example to .env and add your Hugging Face API key.');
  process.exit(1);
}

async function generateText(prompt: string, model: string = DEFAULT_MODEL, config: GenerationConfig = {}) {
  const apiUrl = `${API_BASE_URL}/${model}`;
  
  try {
    console.log(`🤖 Generating text with model: ${model}`);
    console.log(`💭 Prompt: "${prompt}"`);
    
    const requestBody = {
      inputs: prompt,
      parameters: {
        max_length: config.maxLength || 100,
        temperature: config.temperature || 0.7,
        top_p: config.topP || 0.9,
        do_sample: config.doSample !== false,
        return_full_text: false
      }
    };

    const response = await axios.post(
      apiUrl,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 second timeout
      }
    );

    if (response.data && Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0].generated_text || response.data[0];
    }
    
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error('❌ API Error:', error.response.status, error.response.data);
    } else {
      console.error('❌ Network Error:', error.message);
    }
    return null;
  }
}

function displayWelcome() {
  console.log('🚀 Welcome to Integra_AI!');
  console.log('🧠 A TypeScript-powered GenAI text generator');
  console.log('=' .repeat(50));
}

(async () => {
  displayWelcome();
  listAvailableModels();
  
  // Example 1: Simple text generation
  console.log('\n📝 Example 1: Story Generation');
  const storyPrompt = 'In a world where AI and humans collaborate,';
  const story = await generateText(storyPrompt, 'gpt2', { 
    maxLength: 150, 
    temperature: 0.8 
  });
  console.log('✨ Generated Story:');
  console.log(story);

  // Example 2: Code generation
  console.log('\n💻 Example 2: Code Generation');
  const codePrompt = 'function calculateFibonacci(n) {';
  const code = await generateText(codePrompt, 'microsoft/CodeGPT-small-js', {
    maxLength: 100,
    temperature: 0.3
  });
  console.log('✨ Generated Code:');
  console.log(code);

  // Example 3: Question answering
  console.log('\n❓ Example 3: Question Answering');
  const qaPrompt = 'What are the benefits of using TypeScript over JavaScript?';
  const answer = await generateText(qaPrompt, 'microsoft/DialoGPT-large', {
    maxLength: 120,
    temperature: 0.5
  });
  console.log('✨ Generated Answer:');
  console.log(answer);

  console.log('\n🎉 Integra_AI demo completed!');
  console.log('🔧 You can modify the prompts and models in src/index.ts');
})();
