import HeadFootLogos from "../containers/HeadFootLogos";

export default function Header() {
    return <header className='
        px-10 
        flex 
        justify-between
        items-center'
    >
        <HeadFootLogos />
        <nav className='
            py-8
            sticky 
            top-0 
            z-50 
            bg-slate-800 
            shadow-sm
            '
        >
            <ul className="
                flex
                flex-col
                md:flex-row 
                justify-between
            ">
                <li className="
                    group 
                    relative "
                >   
                    <a 
                        href='#moi&vous=nous' 
                        className='
                            block 
                            px-4 
                            py-2 
                            text-blue-300 
                            hover:text-blue-600 
                            hover:scale-110 
                            transition 
                            duration-600 
                            motion-reduce:duration-3000 
                            ease-in-out 
                            '
                    >
                        nous
                    </a>
                    <span className="
                        absolute 
                        bottom-full 
                        mb-2 
                        left-1/2 
                        -translate-x-1/2 
                        z-40 
                        bg-white 
                        text-gray-900 
                        text-xs 
                        rounded 
                        py-1 
                        px-3 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity
                        text-nowrap"
                    >
                        🔒 Vérifiez toujours l'URL avant de cliquer!
                    </span>
                </li>
                <li className="
                    group
                    relative"
                >   
                    <a 
                        href='#competences'
                        className='
                            block 
                            px-4 
                            py-2 
                            text-blue-300
                            hover:text-blue-600
                            duration-600 
                            motion-reduce:duration-3000 
                            ease-in-out 
                            hover:scale-110'
                    >
                        compétences
                    </a>
                    <span className="
                        absolute 
                        bottom-full 
                        mb-2 
                        left-1/2 
                        -translate-x-1/2 
                        z-40 
                        bg-white 
                        text-gray-900 
                        text-xs 
                        rounded 
                        py-1 
                        px-3 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity
                        text-nowrap"
                    >
                        🔒 Vérifiez toujours l'URL avant de cliquer!
                    </span>
                </li>
                <li className="
                    group
                    relative"
                >   
                    <a 
                        href='#projets'
                        className='
                            block 
                            px-4 
                            py-2 
                            text-blue-300
                            hover:text-blue-600
                            duration-600 
                            motion-reduce:duration-3000 
                            ease-in-out 
                            hover:scale-110'
                    >
                        projets
                    </a>
                    <span className="
                        absolute 
                        bottom-full 
                        mb-2 
                        left-1/2 
                        -translate-x-1/2 
                        z-40 
                        bg-white 
                        text-gray-900 
                        text-xs 
                        rounded 
                        py-1 
                        px-3 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity
                        text-nowrap"
                    >
                        🔒 Vérifiez toujours l'URL avant de cliquer!
                    </span>
                </li>
                <li className="
                    group
                    relative"
                >   
                    <a 
                        href='#parcours'
                        className='
                            block 
                            px-4 
                            py-2 
                            text-blue-300
                            hover:text-blue-600
                            duration-600 
                            motion-reduce:duration-3000 
                            ease-in-out 
                            hover:scale-110'
                    >
                        parcours
                    </a>
                    <span className="
                        absolute 
                        bottom-full 
                        mb-2 
                        left-1/2 
                        -translate-x-1/2 
                        z-40 
                        bg-white 
                        text-gray-900 
                        text-xs 
                        rounded 
                        py-1 
                        px-3 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity
                        text-nowrap"
                    >
                        🔒 Vérifiez toujours l'URL avant de cliquer!
                    </span>
                </li>
                <li className="
                    group
                    relative"
                >   
                    <a 
                        href='#contact'
                        className='
                            block 
                            px-4 
                            py-2 
                            text-blue-300
                            hover:text-blue-600
                            duration-600 
                            motion-reduce:duration-3000 
                            ease-in-out 
                            hover:scale-110'
                    >
                        contact
                    </a>
                    <span className="
                        absolute 
                        bottom-full 
                        mb-2 
                        left-1/2 
                        -translate-x-1/2 
                        z-40 
                        bg-white 
                        text-gray-900 
                        text-xs 
                        rounded 
                        py-1 
                        px-3 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity
                        text-nowrap"
                    >
                        🔒 Vérifiez toujours l'URL avant de cliquer!
                    </span>
                </li>
            </ul>
        </nav>
    </header>
}