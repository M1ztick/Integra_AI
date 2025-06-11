# Integra_AI 🧠

A powerful Node.js/TypeScript GenAI application demonstrating text generation using multiple pre-trained models via the Hugging Face Inference API.

## Features ✨

- **TypeScript** for type safety and better development experience
- **Multiple AI Models** - Story generation, code completion, and Q&A
- **Environment Configuration** with dotenv
- **Error Handling** and timeout management
- **Extensible Architecture** - Easy to add new models and capabilities

## Supported Models 🤖

- `gpt2` - General text generation
- `microsoft/DialoGPT-large` - Conversational AI
- `microsoft/CodeGPT-small-js` - JavaScript code generation

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

   ```bash
   npx ts-node src/index.ts
   ```

## Project Structure 📁

```plaintext
Integra_AI/
├── src/
│   └── index.ts          # Main application logic
├── .env.example          # Environment variables template
├── README.md            # This file
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

## Expanding the Project 🔧

- Add OpenAI GPT integration
- Build a web interface with Express.js
- Implement streaming responses
- Add more specialized AI models
- Create a CLI tool with command-line arguments

---

Built with ❤️ using TypeScript and Hugging Face AI models.
