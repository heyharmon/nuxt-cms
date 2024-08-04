const plugin = require('tailwindcss/plugin')

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin.withOptions(
    function(options) {
        const { theme } = options
        return function ({ addBase }) {
            /* 
            * Generate color variables in the :root scope
            * by iterating over the `colors` array.
            */
            // addBase({
            //     ':root': {
            //         '--primary': `${theme.colors['primary']}`,
            //         '--secondary': `${theme.colors['secondary']}`,
            //         '--tertiary': `${theme.colors['tertiary']}`,
            //         '--neutral': `${theme.colors['neutral']}`,
            //         '--black': `${theme.colors['black']}`,
            //         '--grey': `${theme.colors['grey']}`,
            //         '--white': `${theme.colors['white']}`,
            //     },
            // })

            /*
            * Generate the `data-theme` CSS blocks below
            * by iterating over the `themes` array.
            */
            theme.themes.forEach((theme) => {
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
    // function(options) {
    //     return {
    //         theme: {}
    //     }
    // }
    

    

    // addBase({
    //     ':root': {
    //         '--primary': '#32473b',
    //         '--secondary': '#ff7200',
    //         '--tertiary': '#c7e5fc',
    //         '--neutral': '#f5f5f5',
    //         '--black': '#000000',
    //         '--grey': '#808080',
    //         '--white': '#ffffff',

    //         '--wrapper-bg': 'var(--white)',
    //         '--pretitle-color': 'var(--secondary)',
    //         '--title-color': 'var(--primary)',
    //         '--body-color': 'var(--primary)',
    //         '--btn-primary-bg': 'var(--secondary)',
    //         '--btn-primary-text': 'var(--white)',
    //         '--btn-secondary-bg': 'var(--grey)',
    //         '--btn-secondary-text': 'var(--primary)',
    //     },
    // })
)