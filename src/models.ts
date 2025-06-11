export interface AIModel {
  name: string;
  description: string;
  endpoint: string;
  bestFor: string[];
}

export const AVAILABLE_MODELS: Record<string, AIModel> = {
  'gpt2': {
    name: 'GPT-2',
    description: 'General purpose text generation model',
    endpoint: 'gpt2',
    bestFor: ['stories', 'general text', 'creative writing']
  },
  'dialogpt': {
    name: 'DialoGPT Large',
    description: 'Conversational AI model trained on Reddit conversations',
    endpoint: 'microsoft/DialoGPT-large',
    bestFor: ['conversations', 'Q&A', 'dialogue']
  },
  'codegpt': {
    name: 'CodeGPT Small JS',
    description: 'JavaScript code generation model',
    endpoint: 'microsoft/CodeGPT-small-js',
    bestFor: ['code generation', 'programming', 'JavaScript']
  },
  'bloom': {
    name: 'BLOOM 560M',
    description: 'Multilingual large language model',
    endpoint: 'bigscience/bloom-560m',
    bestFor: ['multilingual text', 'general tasks', 'various languages']
  }
};

export function listAvailableModels(): void {
  console.log('\n🤖 Available AI Models:');
  console.log('=' .repeat(50));
  
  Object.entries(AVAILABLE_MODELS).forEach(([key, model]) => {
    console.log(`\n📋 ${model.name} (${key})`);
    console.log(`   Description: ${model.description}`);
    console.log(`   Best for: ${model.bestFor.join(', ')}`);
  });
}
