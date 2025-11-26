import { ReactNode } from "react"

export default function Project(
    {
        URL, 
        label, 
        title, 
        projectNumber
    }
    :{
        URL: string,
        label: string,
        title: string,
        //skill: skill,
        projectNumber: number
    }
){
    return <article 
        className="
            m-8 
            bg-neutral-primary-soft 
            block 
            max-w-sm 
            border 
            border-default 
            rounded-base 
            shadow-xs"
        >
        <a 
            href={URL}
            target="_blank" 
            aria-label={label}
        >
            {title}
        </a>
        <div className="p-6 text-center">
            <span 
                className="
                    inline-flex 
                    items-center 
                    bg-brand-softer 
                    border 
                    border-brand-subtle 
                    text-fg-brand-strong 
                    text-xs 
                    font-medium 
                    px-1.5 
                    py-0.5 
                    rounded-sm"
            >
                <img 
                    src='test'//{skill.logoPath} 
                    className='
                        lazy 
                        p-6 
                        h-25 
                        will-change-filter 
                        filter 
                        duration-300
                        hover:drop-shadow-[0_0_2em_#646cffaa]' 
                    alt='test'//{skill.altText}
                />
            </span>
            <a 
            href={URL}
            target="_blank" 
            aria-label={label}
            >
                <h5 
                    className="
                        mt-3 
                        mb-6 
                        text-2xl 
                        text-orange-500 
                        font-semibold 
                        tracking-tight 
                        text-heading"
                > 
                    {label}
                </h5>
            </a>
            <a 
                href="#" 
                className="
                    inline-flex 
                    items-center 
                    text-white 
                    bg-brand 
                    box-border 
                    border 
                    border-transparent 
                    hover:bg-brand-strong 
                    focus:ring-4 
                    focus:ring-brand-medium 
                    shadow-xs 
                    font-medium 
                    leading-5 
                    rounded-base 
                    text-sm 
                    px-4 
                    py-2.5 
                    focus:outline-none"
            >
                p{projectNumber} {title}
                <svg 
                    className="
                        w-4 
                        h-4 
                        ms-1.5 
                        rtl:rotate-180 
                        -me-0.5" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                </svg>
            </a>
        </div>
    </article>
}