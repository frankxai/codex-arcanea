import {
  createAssistant,
  getAssistantConfig,
  guardianAssistants
} from "./chunk-ZNU7SXLO.js";
import {
  arcaneanGPTs,
  getGPTConfig
} from "./chunk-KGZHUNAJ.js";

// src/index.ts
var defaultConfig = {
  model: "gpt-4-turbo-preview",
  guardianDefault: "Shinkami",
  enableAssistants: true
};
async function initArcanea(config = {}) {
  const finalConfig = { ...defaultConfig, ...config };
  if (!finalConfig.apiKey && !process.env.OPENAI_API_KEY) {
    throw new Error("OpenAI API key required. Set OPENAI_API_KEY or pass apiKey in config.");
  }
  console.log(`Arcanea Codex initialized with Guardian: ${finalConfig.guardianDefault}`);
  console.log(`Model: ${finalConfig.model}`);
}
var index_default = {
  initArcanea,
  defaultConfig
};
export {
  arcaneanGPTs,
  createAssistant,
  index_default as default,
  defaultConfig,
  getAssistantConfig,
  getGPTConfig,
  guardianAssistants,
  initArcanea
};
