# Integra_AI 🧠

A powerful Node.js/TypeScript GenAI application demonstrating text generation using multiple pre-trained models via the Hugging Face Inference API.

## Features ✨

- **TypeScript** for type safety and better development experience
- **Multiple AI Models** - Story generation, code completion, and Q&A
- **Environment Configuration** with dotenv
- **Error Handling** and timeout management
- **Extensible Architecture** - Easy to add new models and capabilities
- **Modern Tooling** - ESLint, Prettier, and TypeScript compilation

## What It Does 🎯

When you run the application, it demonstrates three different AI capabilities:

1. **📝 Story Generation** - Creates creative stories using GPT-2
2. **💻 Code Generation** - Generates JavaScript code using CodeGPT
3. **❓ Question Answering** - Answers questions using DialoGPT

Each example showcases different AI models with customized parameters like temperature and max length.

## Supported Models 🤖

- `gpt2` - General text generation
- `microsoft/DialoGPT-large` - Conversational AI
- `microsoft/CodeGPT-small-js` - JavaScript code generation
- `bigscience/bloom-560m` - Multilingual large language model

## Setup 🚀

1. **Get a Hugging Face API Key**:
   - Visit [Hugging Face Settings](https://huggingface.co/settings/tokens)
   - Create a free account and generate an API token

2. **Configure Environment**:

   ```bash
   cp .env.example .env
   # Edit .env and add your HUGGINGFACE_API_KEY
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Run the Application**:

   **Development mode** (with auto-reload):
   ```bash
   npm run dev
   ```

   **Or build and run in production**:
   ```bash
   npm run build
   npm start
   ```

   **Or run directly with ts-node**:
   ```bash
   npx ts-node src/index.ts
   ```

## Project Structure 📁

```plaintext
Integra_AI/
├── src/
│   ├── index.ts           # Main application logic
│   └── models.ts          # AI model definitions and configurations
├── dist/                  # Compiled JavaScript output
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore patterns
├── eslint.config.js       # ESLint configuration
├── .prettierrc.json       # Prettier configuration
├── package.json           # Dependencies and scripts
├── README.md              # This file
└── tsconfig.json          # TypeScript configuration
```

## Available Scripts 📋

- `npm run dev` - Run in development mode with auto-reload
- `npm run build` - Build the TypeScript project
- `npm start` - Run the built application
- `npm run lint` - Check code style and quality
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Expanding the Project 🔧

- Add OpenAI GPT integration
- Build a web interface with Express.js
- Implement streaming responses
- Add more specialized AI models
- Create a CLI tool with command-line arguments

---

Built with ❤️ using TypeScript and Hugging Face AI models.
