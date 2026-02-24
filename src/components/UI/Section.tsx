import { type  ComponentPropsWithRef } from 'react';

type SectionProps = ComponentPropsWithRef<'section'>;

const Section = ({
        children, ...props
    }: SectionProps) => {
    return <section
        {...props}  
        className={`
            odd:bg-gray-950 
            even:bg-gray-800  
            pb-22 
            px-4 
            ${props.className || ''}
            `}
    >
        { children }
    </section>
};

Section.displayName = 'Section';

export default Section;