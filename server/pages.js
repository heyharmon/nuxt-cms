export default [
  //////////////////////////////////
  // Homepage
  //////////////////////////////////
  {
    title: 'Homepage',
    path: '/',
    blocks: [
      {
        id: 'slsna4l4',
        group: 'Hero',
        component: 'HeroSplitFull',
        data: {
          content: {
            pretitle: {
              element: 'p',
              text: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h1',
              text: 'Lorem ipsum dolor sit amet, consectetur.',
              size: '4xl',
            },
            body: {
              element: 'p',
              text: 'We enable builders and developers to create incredible financial products and services for their users',
              size: 'lg',
            },
            buttons: [
              {
                label: 'Primary',
                destination: '/',
                variant: 'primary',
              },
              {
                label: 'Simple',
                destination: '/',
                variant: 'simple',
              },
            ],
          },
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
          },
          styles: {
            theme: null,
            padding: {
              top: 'none',
              bottom: 'none',
            },
            background: {
              overlay: false,
              image: null,
            }
          },
        },
      }, // HeroSplitFull
      {
        id: 'akl24je22',
        group: 'Columns',
        component: 'Columns',
        data: {
          collection: [
            {
              content: {
                pretitle: {
                  element: 'p',
                  text: 'This is the pretitle',
                  size: 'sm',
                },
                title: {
                  element: 'p',
                  text: 'Boost your conversion rate',
                  size: 'lg'
                },
                body: {
                  element: 'p',
                  text: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
              }
            },
            {
              content: {
                pretitle: {
                  element: 'p',
                  text: 'This is the pretitle',
                  size: 'sm',
                },
                title: {
                  element: 'p',
                  text: 'How to use search engines',
                  size: 'lg'
                },
                body: {
                  element: 'p',
                  text: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
              }
            },
            {
              content: {
                pretitle: {
                  element: 'p',
                  text: 'This is the pretitle',
                  size: 'sm',
                },
                title: {
                  element: 'p',
                  text: 'Improve your customer experience',
                  size: 'lg'
                },
                body: {
                  element: 'p',
                  text: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
              }
            },
          ],
          content: {
            pretitle: {
              element: 'p',
              text: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              text: 'From the blog',
            },
            body: {
              size: 'lg',
              text: 'Learn how to grow your business with our expert advice.',
            },
            buttons: [],
          },
          styles: {
            background: {
              overlay: false,
              image: null,
            }
          }
        }
      }, // Columns
      {
        id: 'akl24je345',
        group: 'Cards',
        component: 'Cards',
        data: {
          collection: [
            {
              content: {
                pretitle: {
                  element: 'p',
                  text: 'This is the pretitle',
                  size: 'sm',
                },
                title: {
                  element: 'p',
                  text: 'Boost your conversion rate',
                  size: 'lg'
                },
                body: {
                  element: 'p',
                  text: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
              },
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
            },
            {
              content: {
                pretitle: {
                  element: 'p',
                  text: 'This is the pretitle',
                  size: 'sm',
                },
                title: {
                  element: 'p',
                  text: 'How to use search engines',
                  size: 'lg'
                },
                body: {
                  element: 'p',
                  text: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
              },
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
            },
            {
              content: {
                pretitle: {
                  element: 'p',
                  text: 'This is the pretitle',
                  size: 'sm',
                },
                title: {
                  element: 'p',
                  text: 'Improve your customer experience',
                  size: 'lg'
                },
                body: {
                  element: 'p',
                  text: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
              },
              image: {
                file: {
                  id: 12,
                  name: 'nathan-hanna-7hxC83Qcuwo-unsplash',
                  filename: 'tOlbFKkUonJRthYeMkTyE9rfiemmnSEQ75r1T7sM.jpg',
                  path: 'acme/tOlbFKkUonJRthYeMkTyE9rfiemmnSEQ75r1T7sM.jpg',
                  url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/tOlbFKkUonJRthYeMkTyE9rfiemmnSEQ75r1T7sM.jpg',
                  extension: 'jpg',
                  mime: 'image/jpeg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
                width: 400,
                height: 300,
              }
            },
          ],
          content: {
            pretitle: {
              element: 'p',
              text: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              text: 'From the blog',
            },
            body: {
              size: 'lg',
              text: 'Learn how to grow your business with our expert advice.',
            },
            buttons: [],
          },
          styles: {
            theme: 'theme-1',
            background: {
              overlay: false,
              image: null,
            }
          },
        }
      }, // Cards
      {
        id: 'jl23j4ladf',
        group: 'Cards',
        component: 'CardsJumbo',
        data: {
        collection: [
            {
              content: {
                title: {
                  element: 'h2',
                  text: 'Protect your businesses.',
                },
                body: {
                  element: 'p',
                  text: 'Get detailed commercial pest control services from Thorn to protect your products and reputation. Our comprehensive approach includes thorough inspections, customized treatment plans, and ongoing monitoring.',

                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
              },
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
                width: 600,
                height: 700,
              },
            },
            {
              content: {
                title: {
                  element: 'h2',
                  text: 'Protect your whole home.',
                },
                body: {
                  element: 'p',
                  text: 'Keep your home safe and pest-free with Thorn’s thorough and customized residential pest control services. Our team uses biology-based methods to identify, address, and prevent pest issues, ensuring long-term protection.',

                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
              },
              image: {
                file: {
                  id: 18,
                  name: 'baptist-standaert-mx0DEnfYxic-unsplash',
                  filename: 'pP3ic6RPEqcb8Sqxq0ZO8kL3vgkGsNaCRp16oo7W',
                  path: 'acme/pP3ic6RPEqcb8Sqxq0ZO8kL3vgkGsNaCRp16oo7W.jpg',
                  url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/pP3ic6RPEqcb8Sqxq0ZO8kL3vgkGsNaCRp16oo7W.jpg',
                  extension: 'jpg',
                  mime: 'image/jpeg',
                  alt: 'The image alt',
                  description: 'The image description',
                  caption: 'The image caption',
                },
                width: 600,
                height: 700,
              }
            }
        ],
        content: {
          body: { 
            text: 'Protecting homes and businesses since 2007', size: 'xl'
          },
          buttons: [],
        },
        styles: {
          theme: 'theme-2'
        }
        }
      }, // CardsJumbo
      {
        id: 'slsna4l422gg',
        group: 'Hero',
        component: 'Hero',
        data: {
          content: {
            alignment: 'left',
            pretitle: {
              element: 'p',
              text: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              text: 'Lorem ipsum dolor sit amet, consectetur.',
            },
            body: {
              element: 'p',
              text: 'We enable builders and developers to create incredible financial products and services for their users',
              size: 'lg',
            },
            buttons: [
              {
                label: 'Bold',
                destination: '/',
                variant: 'bold',
              },
              {
                label: 'Ghost',
                destination: '/',
                variant: 'ghost',
              },
            ],
          },
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
          },
          styles: {
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              overlay: false,
              image: null,
            }
          },
        },
      }, // Hero
      {
        id: 'akl24jl5l',
        group: 'Hero',
        component: 'HeroSplit',
        data: {
          content: {
            pretitle: {
              element: 'p',
              text: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              text: 'The about feature',
            },
            body: {
              text: 'The body content is here. Lorem ipsum dolar sit amit.',
              size: 'lg',
            },
            buttons: [
              {
                label: 'Call to action',
                destination: '/homepage',
              },
              {
                label: 'Learn more',
                destination: '/page-1',
                variant: 'ghost',
              }
            ],
          },
          image: {
            file: {
              id: 18,
              name: 'baptist-standaert-mx0DEnfYxic-unsplash',
              filename: 'pP3ic6RPEqcb8Sqxq0ZO8kL3vgkGsNaCRp16oo7W.jpg',
              path: 'acme/pP3ic6RPEqcb8Sqxq0ZO8kL3vgkGsNaCRp16oo7W.jpg',
              url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/pP3ic6RPEqcb8Sqxq0ZO8kL3vgkGsNaCRp16oo7W.jpg',
              extension: 'jpg',
              mime: 'image/jpeg',
              alt: 'The image alt',
              description: 'The image description',
              caption: 'The image caption',
            },
            width: 600,
            height: 400,
          },
          styles: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              overlay: false,
              image: null,
            }
          },
        }
      }, // HeroSplit
      {
        id: 'ghj24d4re',
        group: 'Testimonial',
        component: 'Testimonial',
        data: {
          styles: {
            theme: 'theme-3',
            padding: {
              top: '5xl',
              bottom: '5xl',
            },
            background: {
              overlay: false,
              image: null,
            }
          },
          content: {
            alignment: 'center',
            buttons: [],
          },
          testimonial: {
            quote: {
              text: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
            },
            author: {
              text: 'Judith Black',
            },
            extra: {
              text: 'CEO of Workcation',
            },
            image: {
              file: {
                id: 11,
                name: 'patrick-hendry-nk_uvN_b-w8-unsplash',
                filename: 'ZaicBTEP9mtHMjpeVPYHYvqTvm8TnZqJ2kL2GqvN.jpg',
                path: 'acme/ZaicBTEP9mtHMjpeVPYHYvqTvm8TnZqJ2kL2GqvN.jpg',
                url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/ZaicBTEP9mtHMjpeVPYHYvqTvm8TnZqJ2kL2GqvN.jpg',
                extension: 'jpg',
                mime: 'image/jpeg',
                alt: 'The image alt',
                description: 'The image description',
                caption: 'The image caption',
              },
              width: 100,
              height: 100,
            },
          }
        }
      }, // Testimonial
    ]
  }
]