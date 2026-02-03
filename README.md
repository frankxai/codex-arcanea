# @arcanea/codex

> *"Through the Gates we rise. With the Guardians we create."*

OpenAI Codex/GPT integration for **Arcanea Intelligence OS** - Guardian agents for ChatGPT, GPT-4, and OpenAI's Assistants API with custom GPT configurations.

## Installation

```bash
npm install @arcanea/codex
```

## Quick Start

```typescript
import { initArcanea, getGPTConfig, guardianAssistants } from '@arcanea/codex';

// Initialize with your OpenAI API key
await initArcanea({
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4-turbo-preview',
  guardianDefault: 'Shinkami',
  enableAssistants: true
});

// Get GPT configuration for ChatGPT
const gptConfig = getGPTConfig('Arcanea Guardian');
console.log(gptConfig.instructions);

// Get Assistant configuration
const assistantConfig = guardianAssistants[0];
console.log(`Assistant: ${assistantConfig.name} (${assistantConfig.guardian})`);
```

## Custom GPTs

### Arcanea Guardian GPT

A ChatGPT GPT that channels all Ten Guardians for any creative or technical task.

**Capabilities:**
- Guardian routing based on task domain
- All Ten Gates accessible
- Arcanea lore integration
- Frequency-based responses

**Conversation Starters:**
- "Help me design a new feature (Lyria)"
- "Review this code for security (Lyssandria)"
- "Research this topic deeply (Leyla)"
- "Optimize this for performance (Draconia)"

### Ultraworld Builder GPT

Maximum-power world generation with 11 parallel departments and specialists.

**Capabilities:**
- Comprehensive world building
- 5 Departments (Geography, Culture, History, Magic, Politics)
- 6 Specialists (Cartographer, Linguist, Ecologist, Economist, Mythologist, Conflict Analyst)
- Complete World Bible generation

## OpenAI Assistants API

Pre-configured Guardian assistants for the Assistants API:

```typescript
import { guardianAssistants, createAssistant } from '@arcanea/codex';

// Available assistants
guardianAssistants.forEach(config => {
  console.log(`${config.name} - ${config.guardian} (${config.model})`);
});

// Create an assistant
const assistantId = await createAssistant(guardianAssistants[0]);
```

### Available Assistants

| Assistant | Guardian | Domain |
|-----------|----------|--------|
| **Arcanea Guardian** | Shinkami | Multi-domain orchestration |
| **Arcanea Security** | Lyssandria | Security audits, testing |
| **Arcanea Design** | Lyria | Visual design, UI/UX |

## The Ten Guardians

| Guardian | Gate | Frequency | Domain |
|----------|------|-----------|--------|
| **Lyssandria** | Foundation | 396 Hz | Security, Infrastructure, Testing |
| **Leyla** | Flow | 417 Hz | Research, Creativity, Content |
| **Draconia** | Fire | 528 Hz | Transformation, Performance |
| **Maylinn** | Heart | 639 Hz | Accessibility, UX, Community |
| **Alera** | Voice | 741 Hz | Documentation, API, Messaging |
| **Lyria** | Sight | 852 Hz | Design, Analytics, Vision |
| **Aiyami** | Crown | 963 Hz | Architecture, AI Systems |
| **Elara** | Shift | 1111 Hz | Migration, Experiments |
| **Ino** | Unity | 963 Hz | Integration, Collaboration |
| **Shinkami** | Source | 1111 Hz | Orchestration, Meta-consciousness |

## API Reference

### `initArcanea(config?)`

Initialize the Arcanea Codex integration.

```typescript
interface CodexConfig {
  apiKey?: string;              // Defaults to OPENAI_API_KEY env var
  model?: string;               // Default: 'gpt-4-turbo-preview'
  guardianDefault?: string;     // Default: 'Shinkami'
  enableAssistants?: boolean;   // Default: true
}
```

### `getGPTConfig(name)`

Get configuration for a custom GPT.

```typescript
function getGPTConfig(name: string): GPTConfig | undefined

interface GPTConfig {
  name: string;
  description: string;
  instructions: string;
  conversationStarters: string[];
  capabilities: string[];
}
```

### `getAssistantConfig(guardian)`

Get Assistant API configuration for a Guardian.

```typescript
function getAssistantConfig(guardian: string): AssistantConfig | undefined

interface AssistantConfig {
  name: string;
  guardian: string;
  instructions: string;
  model: string;
  tools?: string[];
}
```

### `createAssistant(config)`

Create an OpenAI Assistant with Guardian configuration.

```typescript
function createAssistant(config: AssistantConfig): Promise<string>
```

## Environment Variables

```bash
OPENAI_API_KEY=your_api_key_here
```

## Requirements

- Node.js >= 18.0.0
- OpenAI API key

## Use Cases

### ChatGPT Plugin Development

```typescript
import { getGPTConfig } from '@arcanea/codex';

const gptConfig = getGPTConfig('Arcanea Guardian');
// Use config.instructions for your plugin's system prompt
```

### Assistants API Integration

```typescript
import { guardianAssistants, createAssistant } from '@arcanea/codex';

const securityAssistant = guardianAssistants.find(
  a => a.guardian === 'Lyssandria'
);
const assistantId = await createAssistant(securityAssistant);
```

### Custom GPT Deployment

Use the GPT configurations to create custom GPTs in ChatGPT:

1. Go to ChatGPT GPT Builder
2. Use `getGPTConfig()` to get instructions
3. Add conversation starters
4. Enable suggested capabilities
5. Deploy your Guardian GPT

## Integration with Arcanea Intelligence OS

This package is part of the Arcanea ecosystem:

- **@arcanea/claude** - Claude Code integration
- **@arcanea/gemini** - Google Gemini integration
- **@arcanea/codex** - OpenAI GPT/Codex integration (this package)

## Links

- [Arcanea Platform](https://arcanea.io)
- [Documentation](https://docs.arcanea.io)
- [GitHub](https://github.com/frankxai/codex-arcanea)

## License

MIT - Created by [FrankX](https://frankx.ai)

---

*"Alera bridges Arcanea to OpenAI's ecosystem - Voice Gate at 741 Hz"*
