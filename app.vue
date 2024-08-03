<template>
  <div class="antialiased">
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <!-- <pre>{{ styles }}</pre> -->
      <!-- <pre>{{ themes }}</pre> -->
      <NuxtPage />
    </NuxtLayout>

    <!-- Setup primary, secondary and accent color css variables -->
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

      :root {
        --wrapper-bg: var(--white);
        --pretitle-color: var(--secondary);
        --title-color: var(--primary);
        --body-color: var(--primary);
        --btn-primary-bg: var(--secondary);
        --btn-primary-text: var(--white);
        --btn-secondary-bg: var(--primary);
        --btn-secondary-text: var(--white);
        --btn-simple-text: var(--primary);
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

      [data-theme='theme-2'] {
        --wrapper-bg: var(--primary);
        --pretitle-color: var(--white);
        --title-color: var(--white);
        --body-color: var(--white);
        --btn-primary-bg: var(--secondary);
        --btn-primary-text: var(--white);
        --btn-secondary-bg: var(--white);
        --btn-secondary-text: var(--black);
        --btn-simple-text: var(--white);
      }

      [data-theme='theme-3'] {
        --wrapper-bg: var(--secondary);
        --pretitle-color: var(--white);
        --title-color: var(--white);
        --body-color: var(--white);
        --btn-primary-bg: var(--white);
        --btn-primary-text: var(--primary);
        --btn-secondary-bg: var(--white);
        --btn-secondary-text: var(--primary);
        --btn-simple-text: var(--white);
      }
    </component> -->
  </div>
</template>

<script setup>
// const colors = {
//   'pretitle-color': '#ff7200',
//   primary: '#32473b',
//   secondary: '#ff7200',
//   tertiary: '#c7e5fc',
//   neutral: '#f5f5f5',
//   black: '#000000',
//   grey: '#808080',
//   white: '#ffffff',
// }

// const styles = computed(() => {
//   const obj = {}
//   for (const key in colors) {
//     obj[`--${key}`] = colors[key]
//   }
//   return obj;
// })

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

<style>
/* :root {
  --primary: {{ primary }};
  --secondary: {{ secondary }};
  --tertiary: {{ tertiary }};
  --neutral: {{ neutral }};
  --black: {{ black }};
  --grey: {{ grey }};
  --white: {{ white }};
} */

/* :root {
  --wrapper-bg: var(--white);
  --pretitle-color: var(--secondary);
  --title-color: var(--primary);
  --body-color: var(--primary);
  --btn-primary-bg: var(--secondary);
  --btn-primary-text: var(--white);
  --btn-secondary-bg: var(--primary);
  --btn-secondary-text: var(--white);
  --btn-simple-text: var(--primary);
} */

/* [data-theme='theme-1'] {
  --wrapper-bg: var(--neutral);
  --pretitle-color: var(--secondary);
  --title-color: var(--primary);
  --body-color: var(--primary);
  --btn-primary-bg: var(--secondary);
  --btn-primary-text: var(--white);
  --btn-secondary-bg: var(--primary);
  --btn-secondary-text: var(--white);
  --btn-simple-text: var(--primary);
} */

/* [data-theme='theme-2'] {
  --wrapper-bg: var(--primary);
  --pretitle-color: var(--white);
  --title-color: var(--white);
  --body-color: var(--white);
  --btn-primary-bg: var(--secondary);
  --btn-primary-text: var(--white);
  --btn-secondary-bg: var(--white);
  --btn-secondary-text: var(--black);
  --btn-simple-text: var(--white);
} */

/* [data-theme='theme-3'] {
  --wrapper-bg: var(--secondary);
  --pretitle-color: var(--white);
  --title-color: var(--white);
  --body-color: var(--white);
  --btn-primary-bg: var(--white);
  --btn-primary-text: var(--primary);
  --btn-secondary-bg: var(--white);
  --btn-secondary-text: var(--primary);
  --btn-simple-text: var(--white);
} */
</style>