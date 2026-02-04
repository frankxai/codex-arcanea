/**
 * Basic tests for Codex Arcanea
 */
import { describe, it, expect } from 'vitest';
import { initArcanea, defaultConfig } from '../index';
import { getGPTConfig, arcaneanGPTs } from '../gpts';
import { getAssistantConfig, guardianAssistants } from '../assistants';

describe('Codex Arcanea', () => {
  describe('Configuration', () => {
    it('should have default config', () => {
      expect(defaultConfig).toBeDefined();
      expect(defaultConfig.model).toBe('gpt-4-turbo-preview');
      expect(defaultConfig.guardianDefault).toBe('Shinkami');
      expect(defaultConfig.enableAssistants).toBe(true);
    });
  });

  describe('GPT Configurations', () => {
    it('should have GPT configurations', () => {
      expect(arcaneanGPTs).toBeDefined();
      expect(arcaneanGPTs.length).toBeGreaterThan(0);
    });

    it('should get GPT config by name', () => {
      const config = getGPTConfig('Arcanea Guardian');
      expect(config).toBeDefined();
      expect(config?.name).toBe('Arcanea Guardian');
    });

    it('should return undefined for non-existent GPT', () => {
      const config = getGPTConfig('NonExistent');
      expect(config).toBeUndefined();
    });
  });

  describe('Assistant Configurations', () => {
    it('should have assistant configurations', () => {
      expect(guardianAssistants).toBeDefined();
      expect(guardianAssistants.length).toBeGreaterThan(0);
    });

    it('should get assistant config by guardian name', () => {
      const config = getAssistantConfig('Shinkami');
      expect(config).toBeDefined();
      expect(config?.guardian).toBe('Shinkami');
    });

    it('should return undefined for non-existent guardian', () => {
      const config = getAssistantConfig('NonExistent');
      expect(config).toBeUndefined();
    });
  });

  describe('Initialization', () => {
    it('should throw error when no API key provided', async () => {
      const originalKey = process.env.OPENAI_API_KEY;
      delete process.env.OPENAI_API_KEY;

      await expect(initArcanea()).rejects.toThrow('OpenAI API key required');

      if (originalKey) process.env.OPENAI_API_KEY = originalKey;
    });

    it('should initialize with provided API key', async () => {
      await expect(initArcanea({ apiKey: 'test-key' })).resolves.not.toThrow();
    });
  });
});
