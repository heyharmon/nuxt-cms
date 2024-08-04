const plugin = require('tailwindcss/plugin')

// ------------------------------
// Colors
// ------------------------------
const colors = {
    'primary': '#32473b',
    'secondary': '#ff7200',
    'tertiary': '#c7e5fc',
    'neutral': '#f5f5f5',
    'black': '#000000',
    'grey': '#808080',
    'white': '#ffffff',
}

// ------------------------------
// Themes
// ------------------------------
const themes = [
    {
        name: 'root',
        selector: ':root',
        properties: {
            'wrapper-bg': 'white',
            'pretitle-color': 'secondary',
            'title-color': 'primary',
            'body-color': 'primary',
            'btn-primary-bg': 'secondary',
            'btn-primary-text': 'white',
            'btn-secondary-bg': 'grey',
            'btn-secondary-text': 'primary',
        },
    },
    {
        name: 'theme-1',
        selector: '[data-theme="theme-1"]',
        properties: {
            'wrapper-bg': 'neutral',
            'pretitle-color': 'secondary',
            'title-color': 'primary',
            'body-color': 'primary',
            'btn-primary-bg': 'secondary',
            'btn-primary-text': 'white',
            'btn-secondary-bg': 'grey',
            'btn-secondary-text': 'primary',
        },
    },
    {
        name: 'theme-2',
        selector: '[data-theme="theme-2"]',
        properties: {
            'wrapper-bg': 'primary',
            'pretitle-color': 'secondary',
            'title-color': 'white',
            'body-color': 'white',
            'btn-primary-bg': 'secondary',
            'btn-primary-text': 'white',
            'btn-secondary-bg': 'grey',
            'btn-secondary-text': 'primary',
        },
    },
    {
        name: 'theme-3',
        selector: '[data-theme="theme-3"]',
        properties: {
            'wrapper-bg': 'secondary',
            'pretitle-color': 'primary',
            'title-color': 'white',
            'body-color': 'white',
            'btn-primary-bg': 'white',
            'btn-primary-text': 'primary',
            'btn-secondary-bg': 'grey',
            'btn-secondary-text': 'primary',
        },
    },
]

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin(function ({ addBase }) {
    /*
    ------------------------------
    Generate color variables in the :root scope
    by iterating over the `colors` array.
    ------------------------------
    */
    addBase({
        ':root': {
            '--primary': `${colors['primary']}`,
            '--secondary': `${colors['secondary']}`,
            '--tertiary': `${colors['tertiary']}`,
            '--neutral': `${colors['neutral']}`,
            '--black': `${colors['black']}`,
            '--grey': `${colors['grey']}`,
            '--white': `${colors['white']}`,
        },
    })

    /*
    ------------------------------
    Generate the `data-theme` CSS blocks below
    by iterating over the `themes` array.
    ------------------------------
    */
    themes.forEach((theme) => {
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
})