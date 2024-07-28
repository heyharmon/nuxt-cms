<template>
    <div>
      <HeroSplitFull v-bind="{
        wrapper: {
            theme: 'theme-1',
            padding: {
                top: '0',
                bottom: '0',
            },
            background: {
                overlay: true,
            },
        },
        content: {
            pretitle: { content: 'Year Round Pest Protection'},
            title: { content: 'Lorem ipsum sit amet, consectetur adipiscing elit etiam'},
            body: { content: 'Thorn is a reliable and experienced pest management company with over 15 years of experience in the local community. We offer comprehensive residential and commercial solutions for bugs, rodents, and wildlife.', size: 'lg'},
            buttons: [
                { label: 'Get Pricing Now', destination: '/quote' },
                { label: 'Call 800-626-1156', destination: '/en/blog' }
            ],
            image: {
              file: {
                id: 20,
                name: 'camylla-battani-6HMdAij5lfs-unsplash',
                filename: 'n9Z8JEkCMtUhhy1gMrWtY8qdiXEvTcgPUnQVRsVR.jpg',
                path: 'acme/n9Z8JEkCMtUhhy1gMrWtY8qdiXEvTcgPUnQVRsVR.jpg',
                url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/n9Z8JEkCMtUhhy1gMrWtY8qdiXEvTcgPUnQVRsVR.jpg',
                extension: 'jpg',
                mime: 'image/jpeg',
                alt: 'The image alt',
                description: 'The image description',
                caption: 'The image caption',
              },
              width: 1280,
              height: 720,
            }
        }
      }"/>

      <CardJumboGrid v-bind="{
        wrapper: {
            theme: 'theme-1',
            background: {
                overlay: true,
            },
        },
        content: {
            body: { content: 'Protecting homes and businesses since 2007', size: 'xl'},
        },
        collection: [
            {
              content: {
                title: {
                  element: 'h2',
                  content: 'Protect your businesses.',
                },
                body: {
                  element: 'p',
                  content: 'Get detailed commercial pest control services from Thorn to protect your products and reputation. Our comprehensive approach includes thorough inspections, customized treatment plans, and ongoing monitoring.',
                  size: 'lg'
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
                image: {
                  file: {
                    id: 14,
                    name: 'humphrey-muleba-mmqPwkaTGCs-unsplash',
                    filename: 'kDRBPSsJBUrDJMapdh0FhTJNB7T88TUssgomXE68.jpg',
                    path: 'acme/kDRBPSsJBUrDJMapdh0FhTJNB7T88TUssgomXE68.jpg',
                    url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/kDRBPSsJBUrDJMapdh0FhTJNB7T88TUssgomXE68.jpg',
                    extension: 'jpg',
                    mime: 'image/jpeg',
                    alt: 'The image alt',
                    description: 'The image description',
                    caption: 'The image caption',
                  },
                  width: 400,
                  height: 300,
                }
              }
            },
            {
              content: {
                title: {
                  element: 'h2',
                  content: 'Protect your whole home.',
                },
                body: {
                  element: 'p',
                  content: 'Keep your home safe and pest-free with Thorn’s thorough and customized residential pest control services. Our team uses biology-based methods to identify, address, and prevent pest issues, ensuring long-term protection.',
                  size: 'lg'
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
                image: {
                  file: {
                    id: 13,
                    name: 'jon-grogan-yfTFo4iaADI-unsplash',
                    filename: 'kGRz9gB96QT8aGzK2OH5xp3xMyL0Ys5Budk8COQz.jpg',
                    path: 'acme/kGRz9gB96QT8aGzK2OH5xp3xMyL0Ys5Budk8COQz.jpg',
                    url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/kGRz9gB96QT8aGzK2OH5xp3xMyL0Ys5Budk8COQz.jpg',
                    extension: 'jpg',
                    mime: 'image/jpeg',
                    alt: 'The image alt',
                    description: 'The image description',
                    caption: 'The image caption',
                  },
                  width: 400,
                  height: 300,
                }
              }
            }
          ]
      }"/>
    </div>
  </template>

<script setup>
import HeroSplitFull from '@/components/blocks/Hero/HeroSplitFull.vue'
import CardGrid from '@/components/blocks/Grid/CardGrid.vue'
import CardJumboGrid from '@/components/blocks/Grid/CardJumboGrid.vue'
</script>