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
  '#434E58',
  '#616E79',
  '#B6BBC6',
  '#E5E7ED',
  '#BA8C7A',
  '#F2F4F7'
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
