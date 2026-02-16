import { 
    forwardRef, 
    type  ReactNode 
} from 'react'

const Section = forwardRef<HTMLElement,{
        children: ReactNode
    }>(
        ({children}, ref) => {
    return <section
        ref={ref} 
        className='
            odd:bg-gray-950 
            even:bg-gray-800  
            pb-22 
            px-4'
    >
        { children }
    </section>
    }
);

Section.displayName = 'Section';

export default Section;