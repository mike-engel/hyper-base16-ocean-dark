const black = '#1F232C'
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
  black: gray0,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white: gray6,
  lightBlack: gray2,
  lightRed: red,
  lightGreen: orange,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
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

      .header_header {
        background-color: ${black} !important;
      }

      .tabs_title {
        background-color: ${gray0} !important;
      }

      .tabs_list {
        border: none !important;
      }

      .tab_tab {
        background-color: ${black} !important;
        transition: background-color 200ms !important;
      }

      .tab_tab.tab_active {
        background-color: ${gray0} !important;
      }

      .tab_active:before {
        display: none !important;
      }

      .tab_hasActivity {
        color: ${rust} !important;
        font-weight: 700 !important;
      }
    `
  })
}

exports.middleware = () => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      return next(Object.assign({}, action, {
        config: exports.decorateConfig(action.config)
      }))
    default:
      return next(action)
  }
}
