/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {{ tailwindConfig: string }} TailwindConfig */

export default {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],

  /** Tailwind Plugin Config. */
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['cn', 'clsx', 'cva'],
};
