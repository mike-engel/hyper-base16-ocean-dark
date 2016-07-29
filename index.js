const gray0 = '#2B303B'
const gray1 = '#343D46'
const gray2 = '#4F5B66'
const gray3 = '#65737E'
const gray4 = '#A7ADBA'
const gray5 = '#C0C5CE'
const gray6 = '#DFE1E8'
const gray7 = '#EFF1F5'
const red = '#BF616A'
const green = '#A3BE8C'
const yellow = '#EBCB8B'
const blue = '#8FA1B3'
const magenta = '#B48EAD'
const cyan = '#96B5B4'
const orange = '#D08770'
const rust = '#AB7967'

const colors = {
  black: gray2,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white: gray6,
  lightBlack: gray3,
  lightRed: orange,
  lightGreen: gray1,
  lightYellow: gray2,
  lightBlue: gray5,
  lightMagenta: gray6,
  lightCyan: rust,
  lightWhite: gray7
}

exports.decorateConfig = (config) => {
  const colorsArray = []

  if (Array.isArray(config.colors)) {
    for (let color in colors) {
      if (colors.hasOwnProperty(color)) colorsArray.push(colors[color])
    }
  }

  return Object.assign({}, config, {
    backgroundColor: gray0,
    borderColor: gray0,
    foregroundColor: gray6,
    cursorColor: gray6,
    colors: colorsArray.length ? colorsArray : colors,
    css: `
      ${config.css || ''}

      .tab_tab {
        border-bottom: 4px solid transparent !important;
        transition: border-bottom-color 250ms !important;
      }

      .tab_tab.tab_active {
        border-bottom-color: ${gray6} !important;
      }

      .hasActivity {
        color: ${magenta} !important;
      }
    `
  })
}
