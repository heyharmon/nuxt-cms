const themes = {
    "base": {
        "--wrapper-bg": "#eef2ff",
        "--pretitle-color": "#e0e7ff",
    },
    "theme-1": {
      
    },
}

// Generate CSS variables
function getCssVariableDeclarations(input, path = [], output = {}) {
    Object.entries(input).forEach(([key, value]) => {
        const newPath = path.concat(key)

        if (typeof value !== 'string') {
            getCssVariableDeclarations(value, newPath, output)
        } else {
            output[`--${newPath.join('-')}`] = getRgbChannels(value)
        }
    })

    return output
}

// Generate color extension object
function getColorUtilitiesWithCssVariableReferences(input, path = []) {
    return Object.fromEntries(
        Object.entries(input).map(([key, value]) => {
            const newPath = path.concat(key)

            if (typeof value !== 'string') {
                return [key, getColorUtilitiesWithCssVariableReferences(value, newPath)]
            } else {
                return [key, `rgb(var(--${newPath.join('-')}) / <alpha-value>)`]
            }
        })
    )
}

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin(
    function ({ addBase }) {
        addBase({
            ':root': getCssVariableDeclarations(Object.values(themes)[0]),
        })
        Object.entries(themes).forEach(([key, value]) => {
            addBase({
                [`[data-theme="${key}"]`]: getCssVariableDeclarations(value),
            })
        })
    },
    {
        theme: {
            extend: {
                colors: getColorUtilitiesWithCssVariableReferences(Object.values(themes)[0])
            },
        },
    }
)

// export default ({ app, store }) => {
     
//     // Fetch the color object from Vuex
//     const colorsFromBackend = {
//         primary: '#32473b',
//         secondary: '#ff7200',
//         tertiary: '#c7e5fc',
//         neutral: '#f5f5f5',
//         black: '#000000',
//         grey: '#808080',
//         white: '#ffffff',
//       }
      
//     // Set the css content
//     let styleContent = ''
//     for (const key in colorsFromBackend) {
//       styleContent += `--${key}: ${colorsFromBackend[key]};`
//     }
  
//     // Create a style tag
//     const style = document.createElement('style')
//     style.id = 'css-var'
//     style.innerText = `:root{${styleContent}}`
//     // Append the tag to the end of `head`
//     document.head.appendChild(style)
//   }