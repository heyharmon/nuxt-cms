const testimonialFields = [
    {
        label: 'Testimonial quote',
        path: 'testimonial.quote.text',
        name: 'TextField', // TODO: Rename to FieldComponent or Field
    },
    {
        label: 'Testimonial author',
        path: 'testimonial.author.text',
        name: 'TextField', // TODO: Rename to FieldComponent or Field
    },
    {
        label: 'Testimonial role or location',
        path: 'testimonial.extra.text',
        name: 'TextField', // TODO: Rename to FieldComponent or Field
    },
    {
        label: 'Testimonial image',
        path: 'testimonial.image',
        name: 'ImageField', // TODO: Rename to FieldComponent or Field
    },
]

export { testimonialFields }