/**
 * OpenAI Assistants API integration
 */
interface AssistantConfig {
    name: string;
    guardian: string;
    instructions: string;
    model: string;
    tools?: string[];
}
declare const guardianAssistants: AssistantConfig[];
declare function getAssistantConfig(guardian: string): AssistantConfig | undefined;
declare function createAssistant(config: AssistantConfig): Promise<string>;

export { type AssistantConfig, createAssistant, getAssistantConfig, guardianAssistants };
