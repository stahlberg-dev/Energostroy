export default {
  plugins: ['stylelint-scss', 'stylelint-order'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    // ========== ОСНОВНЫЕ ПРАВИЛА КАЧЕСТВА ==========

    // Цвета
    'color-no-invalid-hex': true,

    // Шрифты
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,

    // Функции
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,

    // Единицы измерения
    'unit-no-unknown': true,

    // Свойства
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with', '/^mso-/'],
      },
    ],

    // Ключевые кадры
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,

    // Декларации
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,

    // Блоки
    'block-no-empty': true,

    // Селекторы
    'selector-type-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,

    // Медиа-запросы
    'media-feature-name-no-unknown': true,

    // At-правила
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'config',
          'screen',
          'mixin',
          'include',
          'function',
          'return',
          'use',
          'forward',
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
        ],
      },
    ],

    // Комментарии
    'comment-no-empty': true,

    // Общие
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    // УБИРАЕМ no-extra-semicolons - его больше нет в Stylelint 16+
    'no-invalid-double-slash-comments': true,

    // ========== SCSS ПРАВИЛА ==========
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'config', 'screen'],
      },
    ],

    'scss/at-import-partial-extension': null,
    'scss/at-extend-no-missing-placeholder': null,
    'scss/dollar-variable-pattern': null,
    'scss/selector-no-redundant-nesting-selector': null,
    'scss/no-global-function-names': null,

    // ========== СОРТИРОВКА СВОЙСТВ ==========
    'order/properties-order': [
      [
        // Позиционирование
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'display',

        // Блочная модель
        'flex',
        'flex-direction',
        'flex-wrap',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'align-items',
        'align-self',
        'align-content',
        'justify-content',
        'justify-items',
        'justify-self',
        'order',
        'float',
        'clear',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-radius',
        'box-sizing',

        // Типографика
        'font',
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'line-height',
        'color',
        'text-align',
        'text-decoration',
        'text-transform',
        'letter-spacing',
        'word-spacing',
        'white-space',

        // Визуальные эффекты
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-size',
        'opacity',
        'box-shadow',
        'filter',

        // Анимации и трансформации
        'transition',
        'transform',
        'animation',

        // Прочее
        'cursor',
        'overflow',
        'visibility',
        'content',
      ],
      {
        unspecified: 'ignore',
      },
    ],
  },
};
