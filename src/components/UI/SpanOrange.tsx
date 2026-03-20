export default function SpanOrange({ text }: { text: string })
{
    return <span 
        className='
            mx-2 
            font-extrabold 
            text-orange-300'
    >
        { text }
    </span>
}