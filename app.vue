<template>
  <div :style="styles" class="antialiased">
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <!-- <pre>{{ styles }}</pre> -->
      <!-- <pre>{{ themes }}</pre> -->
      <NuxtPage />
    </NuxtLayout>

    <!-- <component :is="`style`">
      :root {
        --primary: {{ primary }};
        --secondary: {{ secondary }};
        --tertiary: {{ tertiary }};
        --neutral: {{ neutral }};
        --black: {{ black }};
        --grey: {{ grey }};
        --white: {{ white }};
      }

      [data-theme='theme-1'] {
        --wrapper-bg: var(--neutral);
        --pretitle-color: var(--secondary);
        --title-color: var(--primary);
        --body-color: var(--primary);
        --btn-primary-bg: var(--secondary);
        --btn-primary-text: var(--white);
        --btn-secondary-bg: var(--primary);
        --btn-secondary-text: var(--white);
        --btn-simple-text: var(--primary);
      }
    </component> -->
  </div>
</template>

<script setup>
const primary = 'red'
const secondary = 'blue'
const tertiary = 'yellow'
const neutral = 'green'
const black = '#000000'
const grey = '#808080'
const white = '#ffffff'

// const styles = computed(() => {
//   const obj = {}
//   for (const key in colors) {
//     obj[`--${key}`] = colors[key]
//   }
//   return obj;
// })

// const colors = [
//   {
//     name: 'root',
//     attributes: {
//       '--primary': 'red',
//     }
//   }
// ]

// const styles = computed(() => {
//   const obj = {}
//   colors.forEach((palette) => {
//     obj[`:root`] = palette.attributes
//   })
//   return obj
// })

// useHead({
//   style: styles.value
// });

// const themeGroups = [
//   {
//     name: 'theme-2',
//     attributes: {
//       '--wrapper-bg': 'var(--primary)',
//       '--pretitle-color': 'var(--white)',
//       '--title-color': 'var(--white)',
//       '--body-color': 'var(--white)',
//       '--btn-primary-bg': 'var(--secondary)',
//       '--btn-primary-text': 'var(--white)',
//       '--btn-secondary-bg': 'var(--white)',
//       '--btn-secondary-text': 'var(--black)',
//       '--btn-simple-text': 'var(--white)',
//     }
//   }
// ]

// const themes = computed(() => {
//   const obj = {}
//   themeGroups.forEach((theme) => {
//     const attributes = theme.attributes
//     obj[`[data-theme='${theme.name}']`] = attributes
//   })
//   return obj
// })

// console.log('Styles: ', styles.value)
// console.log('Themes: ', themes.value)
</script>