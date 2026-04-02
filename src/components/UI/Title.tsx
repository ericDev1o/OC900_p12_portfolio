import type { 
    JSX, 
    ReactNode 
} from "react";

type Level = 3 | 4 | 5;

type TitleProps = {
    children: ReactNode,
    level: Level,
    id?: string,
    className?: string
}

const baseClass = `
    max-w-[40ch] 
    leading-loose 
    text-center 
    mx-auto`;

const styles: Record<Level, string> = {
    3: `pt-22 
        pb-6 
        text-3xl`,
    4: `pt-12 
        pb-2 
        text-2xl`,
    5: `pb-4 
        text-xl`
};

export default function Title(
    {
        children,
        level,
        id,
        className=''
    }: TitleProps
){
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return <Tag
        id={ id }
        className={`
            ${baseClass}
            ${styles[level]}
            ${className}
        `}
    >
        { children }
    </Tag>
}