import axios from 'axios';
import { listAvailableModels } from './models';


interface HuggingFaceResponse {
  generated_text: string;
}


const API_BASE_URL = 'https://api-inference.huggingface.co/models';
const DEFAULT_MODEL = 'microsoft/DialoGPT-large'; // Better conversational model

if (!process.env.HUGGINGFACE_API_KEY) {
  console.error('❌ Error: HUGGINGFACE_API_KEY is not set in the environment variables.');
  console.log('📝 Please copy .env.example to .env and add your Hugging Face API key.');
  process.exit(1);
}
interface GenerationConfig {
  maxLength?: number;
  temperature?: number;
  topP?: number;
  doSample?: boolean;
}

async function generateText({ prompt, model = DEFAULT_MODEL, config = {} }: { prompt: string; model?: string; config?: GenerationConfig; }): Promise<any> {
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
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
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

  // Example 2: Code generation
  console.log('\n💻 Example 2: Code Generation');
  const codePrompt = 'function calculateFibonacci(n) {';
  const code = await generateText({
      prompt: codePrompt, model: 'microsoft/CodeGPT-small-js', config: {
        maxLength: 100,
      temperature: 0.3
      }
    });

  // You can log or use the generated code as needed
  console.log('Generated code:', code);

  // Example 3: Story generation
  const story = await generateText({ prompt: storyPrompt });
  console.log('Generated story:', story);
})();

export { generateText };
