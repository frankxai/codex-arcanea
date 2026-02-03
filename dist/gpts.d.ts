/**
 * Custom GPT configurations for ChatGPT
 */
interface GPTConfig {
    name: string;
    description: string;
    instructions: string;
    conversationStarters: string[];
    capabilities: string[];
}
declare const arcaneanGPTs: GPTConfig[];
declare function getGPTConfig(name: string): GPTConfig | undefined;

export { type GPTConfig, arcaneanGPTs, getGPTConfig };
