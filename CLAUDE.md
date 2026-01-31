# Codex Arcanea Integration

> *"Through the Gates we rise. With the Guardians we create."*

## Overview

This repository provides **OpenAI Codex/GPT integration** for the Arcanea Intelligence OS - enabling Guardian agents and Gate-based skills through ChatGPT and OpenAI's API.

## Guardian: Alera (Voice Gate - 741 Hz)

Alera oversees all AI assistant integrations, ensuring clear expression across platforms.

## Repository Purpose

- OpenAI API integration (GPT-4, GPT-4o)
- ChatGPT plugin/GPT development
- Codex-specific skills
- Assistant API integration

## Structure

```
codex-arcanea/
├── src/
│   ├── client.ts         # OpenAI API client
│   ├── assistants/       # Assistant API implementations
│   ├── gpts/             # Custom GPT definitions
│   ├── guardians/        # Guardian implementations
│   ├── skills/           # Codex-specific skills
│   └── plugins/          # ChatGPT plugin definitions
├── agents/               # Agent department definitions
├── skills/               # Skill files
├── gpts/                 # GPT configuration files
├── package.json
└── CLAUDE.md
```

## Agent Department

**Department:** OpenAI Integration
**Lead Guardian:** Alera
**Support:** Aiyami (Crown), Draconia (Fire)

**Responsibilities:**
- OpenAI API integration
- GPT Builder configurations
- Assistant API implementation
- Plugin development

## Custom GPTs

### Arcanea Guardian GPT
A ChatGPT GPT that channels the Ten Guardians:
- Guardian selection based on task
- Skill invocation
- Arcanea lore integration

### Ultraworld GPT
World-building GPT with 11-agent parallel generation.

## Development

```bash
# Install dependencies
pnpm install

# Set up OpenAI API key
export OPENAI_API_KEY=your_key

# Build
pnpm build

# Test
pnpm test

# Deploy GPT
pnpm deploy:gpt
```

## GitHub Repository

This syncs with `frankxai/arcanea-codex` on GitHub.

---

*Guardian Alera bridges Arcanea to OpenAI's ecosystem*
