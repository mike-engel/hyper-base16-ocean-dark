const backgroundColor = '#2b303b'
const foregroundColor = '#dfe1e8'
const borderColor = backgroundColor
const cursorColor = foregroundColor
const colors = [
  backgroundColor,
  '#bf616a',
  '#a3be8c',
  '#ebcb8b',
  '#8fa1b3',
  '#b48ead',
  '#96b5b4',
  foregroundColor,
  '#65737e',
  '#d08770',
  '#343d46',
  '#4f5b66',
  '#c0c5ce',
  '#dfe1e8',
  '#ab7967',
  '#eff1f5'
]

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    borderColor,
    foregroundColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_tab {
        border-bottom: 4px solid transparent !important;
        transition: border-bottom-color 250ms !important;
      }
      .tab_tab.tab_active {
        border-bottom-color: ${foregroundColor} !important;
      }
    `
  })
}
