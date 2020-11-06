const special = {
  properties: ['all'],
};

const positioning = {
  properties: [
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'inset',
    'inset-block-start',
    'inset-block-end',
    'inset-inline-start',
    'inset-inline-end',
    'z-index',
  ],
};

const boxmodel = {
  properties: [
    'display',
    'flex-flow',
    'flex-direction',
    'flex-wrap',
    'flex',
    'flex-grow',
    'flex-shrink',
    'flex-basis',
    'order',
    'justify-content',
    'align-items',
    'align-content',
    'align-self',
    'gap',
    'column-gap',
    'row-gap',
    'float',
    'clear',
    'box-sizing',
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
    'margin-block',
    'margin-block-start',
    'margin-block-end',
    'margin-inline',
    'margin-inline-start',
    'margin-inline-end',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'padding-block',
    'padding-block-start',
    'padding-block-end',
    'padding-inline',
    'padding-inline-start',
    'padding-inline-end',
    'border',
    'border-width',
    'border-style',
    'border-color',
    'border-top',
    'border-top-width',
    'border-top-style',
    'border-top-color',
    'border-block-start',
    'border-right',
    'border-right-width',
    'border-right-style',
    'border-right-color',
    'border-inline-end',
    'border-bottom',
    'border-bottom-width',
    'border-bottom-style',
    'border-bottom-color',
    'border-block-end',
    'border-left',
    'border-left-width',
    'border-left-style',
    'border-left-color',
    'border-inline-start',
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
    'border-image',
    'border-image-source',
    'border-image-slice',
    'border-image-width',
    'border-image-outset',
    'border-image-repeat',
    'border-collapse',
    'border-spacing',
    'outline',
    'outline-width',
    'outline-style',
    'outline-color',
    'outline-offset',
    'overflow',
    'overflow-y',
    'overflow-x',
  ],
};

const list = {
  properties: [
    'list-style',
    'list-style-position',
    'list-style-type',
    'list-style-image',
  ],
};

const typography = {
  properties: [
    'font',
    'font-family',
    'font-weight',
    'font-style',
    'font-size',
    'font-display',
    'src',
    'line-height',
    'letter-spacing',
    'white-space',
    'text-align',
    'text-transform',
    'text-decoration',
    'text-indent',
    'text-overflow',
    'vertical-align',
    'word-wrap',
    'word-break',
    'word-spacing',
    'overflow-wrap',
    'color',
  ],
};

const visual = {
  properties: [
    'background',
    'background-color',
    'background-image',
    'background-repeat',
    'background-attachment',
    'background-position',
    'background-position-x',
    'background-position-y',
    'background-size',
    'background-clip',
    'background-origin',
    'box-shadow',
    'opacity',
    'visibility',
    'cursor',
  ],
};

const compositing = {
  properties: [
    'will-change',
    'transform',
    'transform-origin',
    'transform-style',
    'backface-visibility',
    'filter',
    'perspective',
    'perspective-origin',
  ],
};

const animation = {
  properties: [
    'transition',
    'transition-delay',
    'transition-timing-function',
    'transition-duration',
    'transition-property',
    'animation',
    'animation-name',
    'animation-duration',
    'animation-play-state',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
  ],
};

const misc = {
  properties: [
    'appearance',
    'clip',
    'clip-path',
    'fill',
    'fill-rule',
    'clip-rule',
    'stroke',
    'stroke-width',
    'counter-reset',
    'counter-increment',
    'resize',
    'quotes',
    'user-select',
    'pointer-events',
  ],
};

const propertiesOrder = [
  special,
  positioning,
  boxmodel,
  list,
  typography,
  visual,
  animation,
  compositing,
  misc,
];

// Get from 'stylelint-config-sass-guidelines'
const ruleOrder = [
  'custom-properties',
  'dollar-variables',
  {
    type: 'at-rule',
    name: 'extend',
  },
  {
    type: 'at-rule',
    name: 'include',
    hasBlock: false,
  },
  'declarations',
  {
    type: 'at-rule',
    name: 'include',
    hasBlock: true,
  },
  'rules',
];

module.exports = {
  rules: {
    'order/order': ruleOrder,
    'order/properties-order': propertiesOrder,
    'order/properties-alphabetical-order': null,
  },
};
