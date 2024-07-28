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
        name: 'Hero',
        data: {
          wrapper: {
            theme: 'theme-1',
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
            alignment: 'left',
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h1',
              content: 'Lorem ipsum dolor sit amet, consectetur.',
              size: '4xl',
            },
            body: {
              element: 'p',
              content: 'We enable builders and developers to create incredible financial products and services for their users',
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
          },
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {
          wrapper: {
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
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'The about feature',
            },
            body: {
              content: 'The body content is here. Lorem ipsum dolar sit amit.',
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
            }
          },
        }
      },
      {
        id: 'akl24jasd',
        group: 'Feature',
        name: 'FeatureBig',
        data: {
          wrapper: {
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
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'The about feature',
            },
            body: {
              content: 'The body content is here. Lorem ipsum dolar sit amit.',
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
            image: {
              file: {
                id: 17,
                name: 'bruno-cervera-ZZqam9DoCoQ-unsplash',
                filename: '91mfDTPJXeIRfkWlZt0NS3wKfZ652tfyQiZWEj7K.jpg',
                path: 'acme/91mfDTPJXeIRfkWlZt0NS3wKfZ652tfyQiZWEj7K.jpg',
                url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/91mfDTPJXeIRfkWlZt0NS3wKfZ652tfyQiZWEj7K.jpg',
                extension: 'jpg',
                mime: 'image/jpeg',
                alt: 'The image alt',
              },
              width: 600,
              height: 400,
            }
          },
        }
      },
      {
        id: 'akl24je43',
        group: 'Feature',
        name: 'FeatureBoxed',
        data: {
          wrapper: {
            theme: null,
            padding: {
              top: '6xl',
              bottom: '6xl',
            },
            background: {
              overlay: true,
              image: null,
            }
          },
          content: {
            alignment: 'left',
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'Boost your productivity.',
            },
            body: {
              element: 'p',
              content: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.',
              size: 'lg',
            },
            buttons: [],
            image: {
              file: {
                id: 16,
                name: 'coral-ouellette-lYYDZH9U22I-unsplash',
                filename: 'KGwPC3jOvdgPpZg1z9okuc2V8Js9GyIQPknqy8L4.jpg',
                path: 'acme/KGwPC3jOvdgPpZg1z9okuc2V8Js9GyIQPknqy8L4.jpg',
                url: 'https://ik.imagekit.io/heyharmon/cms-local/acme/KGwPC3jOvdgPpZg1z9okuc2V8Js9GyIQPknqy8L4.jpg',
                extension: 'jpg',
                mime: 'image/jpeg',
                alt: 'The image alt',
                description: 'The image description',
                caption: 'The image caption',
              },
              width: 600,
              height: 400,
            },
          },
        }
      },
      {
        id: 'akl24je292',
        group: 'Grid',
        name: 'FeatureGrid',
        data: {
          wrapper: {
            background: {
              overlay: false,
              image: null,
            }
          },
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'Stay on top of customer support',
            },
            body: {
              size: 'lg',
              content: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
            },
            buttons: [],
          },
          collection: [
            {
              title: {
                element: 'p',
                content: 'Unlimited inboxes',
                size: 'base'
              },
              body: {
                element: 'p',
                content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
              },
              buttons: [
                { label: 'Learn more', destination: '/', variant: 'text'},
              ],
              // image: {
              //   overlay: false,
              //   file: {
              //     id: 1,
              //     name: 'The image title',
              //     src: '/images/icon-camera.svg',
              //     alt: 'The image alt',
              //     description: 'The image description',
              //     caption: 'The image caption',
              //   },
              //   width: null,
              //   height: null,
              // }
            },
            {
              title: {
                element: 'p',
                content: 'Manage team members',
                size: 'base'
              },
              body: {
                element: 'p',
                content: 'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
              },
              buttons: [
                { label: 'Learn more', destination: '/', variant: 'text'},
              ],
              // image: {
              //   overlay: false,
              //   file: {
              //     id: 1,
              //     name: 'The image title',
              //     src: '/images/icon-heart.svg',
              //     alt: 'The image alt',
              //     description: 'The image description',
              //     caption: 'The image caption',
              //   },
              //   width: null,
              //   height: null,
              // }
            },
            {
              title: {
                element: 'p',
                content: 'Spam report',
                size: 'base'
              },
              body: {
                element: 'p',
                content: 'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
              },
              buttons: [
                { label: 'Learn more', destination: '/', variant: 'text'},
              ],
              // image: {
              //   overlay: false,
              //   file: {
              //     id: 1,
              //     name: 'The image title',
              //     src: '/images/icon-map.svg',
              //     alt: 'The image alt',
              //     description: 'The image description',
              //     caption: 'The image caption',
              //   },
              //   width: null,
              //   height: null,
              // }
            },
          ]
        }
      },
      {
        id: 'akl24je22',
        group: 'Grid',
        name: 'CardGrid',
        data: {
          wrapper: {
            background: {
              overlay: true,
              image: null,
            }
          },
          content: {
            pretitle: {
              element: 'p',
              content: 'This is the pretitle',
              size: 'base',
            },
            title: {
              element: 'h2',
              content: 'From the blog',
            },
            body: {
              size: 'lg',
              content: 'Learn how to grow your business with our expert advice.',
            },
            buttons: [],
          },
          collection: [
            {
              content: {
                pretitle: {
                  element: 'p',
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  element: 'p',
                  content: 'Boost your conversion rate',
                  size: 'base'
                },
                body: {
                  element: 'p',
                  content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
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
                pretitle: {
                  element: 'p',
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  element: 'p',
                  content: 'How to use search engines',
                  size: 'base'
                },
                body: {
                  element: 'p',
                  content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
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
            },
            {
              content: {
                pretitle: {
                  element: 'p',
                  content: 'This is the pretitle',
                  size: 'base',
                },
                title: {
                  element: 'p',
                  content: 'Improve your customer experience',
                  size: 'base'
                },
                body: {
                  element: 'p',
                  content: 'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
                },
                buttons: [
                  { label: 'Learn more', destination: '/' },
                ],
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
              }
            },
          ]
        }
      },
      {
        id: 'ghj24d4re',
        group: 'Testimonial',
        name: 'Testimonial',
        data: {
          wrapper: {
            theme: null,
            padding: {
              top: '5xl',
              bottom: '5xl',
            },
            background: {
              overlay: true,
              image: null,
            }
          },
          testimonial: {
            quote: {
              content: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
            },
            author: {
              content: 'Judith Black',
            },
            extra: {
              content: 'CEO of Workcation',
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
      },
    ]
  }
]