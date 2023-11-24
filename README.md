# Eslint-Config
Finley Ge's Eslint Config for vue3 and typescript primarily.

Mostly copied from [@j10c/eslint-config](https://github.com/j10ccc/eslint-config)

# How to use

## Installation

```bash
pnpm i -D @finley_ge/eslint-config-vue # for a vue3+ts project
pnpm i -D @finley_ge/eslint-config-ts # for a ts project
pnpm i -D @finley_ge/eslint-config-base # for a js project
```

## Usage

Add to `.eslintrc`

```json
{
    "extends": ["@finley_ge/eslint-config-vue"]
}
```

Or add to `package.json`

```json
{
    "eslintConfig":{
        "extends": ["@finley_ge/eslint-config-vue"]
    }
}
```
