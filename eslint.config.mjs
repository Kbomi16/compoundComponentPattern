import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  // 기본 Next.js + TypeScript 설정
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier 연동 추가
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Prettier가 ESLint 룰 무력화하도록 설정
  prettierConfig,
]
