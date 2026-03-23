import { ReactNode } from "react";

type Color = 'green' | 'orange' | 'violet';

type SpanProps = {
    children: ReactNode;
    color: Color,
    className?: string
};

const styles: Record<Color, string> = {
    green: 'text-green-400',
    orange: 'text-orange-300',
    violet: 'text-violet-500'
}

export default function Span({
    children,
    color= 'green',
    className=''
}: SpanProps)
{
    return <span 
        className={`
            mx-2 
            font-extrabold 
            ${styles[color]}
            ${className}
        `}
    >
        { children }
    </span>
}