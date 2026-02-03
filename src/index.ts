/**
 * Codex Arcanea Integration
 *
 * Guardian agents for OpenAI Codex/GPT and ChatGPT.
 *
 * @guardian Alera (Voice Gate - 741 Hz)
 * @package @arcanea/codex
 */

export * from './assistants';
export * from './gpts';

export interface CodexConfig {
  apiKey?: string;
  model?: string;
  guardianDefault?: string;
  enableAssistants?: boolean;
}

export const defaultConfig: CodexConfig = {
  model: 'gpt-4-turbo-preview',
  guardianDefault: 'Shinkami',
  enableAssistants: true,
};

/**
 * Initialize Arcanea for OpenAI
 */
export async function initArcanea(config: CodexConfig = {}): Promise<void> {
  const finalConfig = { ...defaultConfig, ...config };

  if (!finalConfig.apiKey && !process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key required. Set OPENAI_API_KEY or pass apiKey in config.');
  }

  console.log(`Arcanea Codex initialized with Guardian: ${finalConfig.guardianDefault}`);
  console.log(`Model: ${finalConfig.model}`);
}

export default {
  initArcanea,
  defaultConfig,
};
