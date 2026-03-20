export default function SpanViolet({ text }: { text: string })
{
    return <span 
        className='
            mx-4 
            font-extrabold 
            text-violet-500'
    >
        { text }
    </span>
}