export default {
  plugins: ['prettier-plugin-astro'],

  // Общие настройки
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  // Специфичные настройки для SCSS
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        astroAllowShorthand: false,
        jsxSingleQuote: false,
        singleAttributePerLine: true,
      },
    },
    {
      files: '*.css',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.scss',
      options: {
        singleQuote: false,
        parser: 'scss',
      },
    },
  ],
};
