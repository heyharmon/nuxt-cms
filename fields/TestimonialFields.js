const TestimonialFields = [
    {
        label: 'Testimonial quote',
        path: 'testimonial.quote.text',
        component: 'TextField',
      },
      {
          label: 'Testimonial author',
          path: 'testimonial.author.text',
          component: 'TextField',
      },
      {
          label: 'Testimonial role or location',
          path: 'testimonial.extra.text',
          component: 'TextField',
      },
      {
          label: 'Testimonial image',
          path: 'testimonial.image',
          component: 'ImageField',
      },
]

export { TestimonialFields }