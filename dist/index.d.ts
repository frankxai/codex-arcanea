export { AssistantConfig, createAssistant, getAssistantConfig, guardianAssistants } from './assistants.js';
export { GPTConfig, arcaneanGPTs, getGPTConfig } from './gpts.js';

/**
 * Codex Arcanea Integration
 *
 * Guardian agents for OpenAI Codex/GPT and ChatGPT.
 *
 * @guardian Alera (Voice Gate - 741 Hz)
 * @package @arcanea/codex
 */

interface CodexConfig {
    apiKey?: string;
    model?: string;
    guardianDefault?: string;
    enableAssistants?: boolean;
}
declare const defaultConfig: CodexConfig;
/**
 * Initialize Arcanea for OpenAI
 */
declare function initArcanea(config?: CodexConfig): Promise<void>;
declare const _default: {
    initArcanea: typeof initArcanea;
    defaultConfig: CodexConfig;
};

export { type CodexConfig, _default as default, defaultConfig, initArcanea };
