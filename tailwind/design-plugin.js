const plugin = require('tailwindcss/plugin')

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin.withOptions(
    function(options) {
        const { design } = options
        
        return function ({ addBase }) {
            /* 
            * Generate color variables in the :root scope
            * by iterating over the `colors` array.
            */
            addBase({
                ':root': {
                    '--primary': `${design.colors['primary']}`,
                    '--secondary': `${design.colors['secondary']}`,
                    '--tertiary': `${design.colors['tertiary']}`,
                    '--neutral': `${design.colors['neutral']}`,
                    '--black': `${design.colors['black']}`,
                    '--grey': `${design.colors['grey']}`,
                    '--white': `${design.colors['white']}`,
                },
            })

            /*
            * Generate the `data-theme` CSS blocks below
            * by iterating over the `themes` array.
            */
            design.themes.forEach((theme) => {
                addBase({
                    [theme.selector]: {
                        '--wrapper-bg': `var(--${theme.properties['wrapper-bg']})`,
                        '--pretitle-color': `var(--${theme.properties['pretitle-color']})`,
                        '--title-color': `var(--${theme.properties['title-color']})`,
                        '--body-color': `var(--${theme.properties['body-color']})`,
                        '--btn-primary-bg': `var(--${theme.properties['btn-primary-bg']})`,
                        '--btn-primary-text': `var(--${theme.properties['btn-primary-text']})`,
                        '--btn-secondary-bg': `var(--${theme.properties['btn-secondary-bg']})`,
                        '--btn-secondary-text': `var(--${theme.properties['btn-secondary-text']})`,
                    },
                })
            })
        }
    }
)