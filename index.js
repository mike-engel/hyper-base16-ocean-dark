const backgroundColor = '#393F4C'
const foregroundColor = '#CBD0D7'
const borderColor = backgroundColor
const cursorColor = foregroundColor
const colors = [
  backgroundColor,
  '#CC777d',
  '#B2C89D',
  '#F0D49C',
  '#A0B1C0',
  '#C2A1BB',
  '#A6C2C1',
  foregroundColor,
  '#788691',
  '#da9a83',
  '#CDDEBD',
  '#FAE9C8',
  '#C3D5E6',
  '#E3C5DD',
  '#C3E0DF',
  '#FFFFFF'
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
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active {
        color: ${backgroundColor} !important;
        background-color: ${foregroundColor};
      }
    `
  })
}
