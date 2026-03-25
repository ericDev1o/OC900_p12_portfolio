export default function LinkNav(
    {
        href,
        text
    }:
    {
        href: string,
        text: string
    }
){
    return <a 
        href={ href }
        className='
            block  
            px-4 
            py-2 
            text-blue-300 
            underline 
            transition-colors 
            duration-600 
            ease-in-out 
            hover:text-blue-600
            focus-visible:ring-4 
            focus-visible:ring-blue-300 
            focus-visible:ring-offset-2'
    >
        { text }
    </a>
}