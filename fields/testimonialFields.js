const testimonialFields = [
    {
        label: 'Testimonial quote',
        path: 'testimonial.quote.text',
        name: 'TextField',
    },
    {
        label: 'Testimonial author',
        path: 'testimonial.author.text',
        name: 'TextField',
    },
    {
        label: 'Testimonial role or location',
        path: 'testimonial.extra.text',
        name: 'TextField',
    },
    {
        label: 'Testimonial image',
        path: 'testimonial.image',
        name: 'ImageField',
    },
]

export { testimonialFields }