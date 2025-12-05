import HeadFootLogos from "../containers/HeadFootLogos";

export default function Header() {
    return <>
        <header className='
            
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
                        relative 
                        w-full 
                        md:w-auto 
                        text-center"
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
                            aria-describedby='tooltip-contact'
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
                            🔒 Check always the URL before clicking!
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
                            aria-describedby='tooltip-contact'
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
                            🔒 Check always the URL before clicking!
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
                            aria-describedby='tooltip-contact'
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
                            🔒 Check always the URL before clicking!
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
                            aria-describedby='tooltip-contact'
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
                            🔒 Check always the URL before clicking!
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
                            aria-describedby='tooltip-contact'
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
                            🔒 Check always the URL before clicking!
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
        <hr 
            className='
                my-4 
                h-px
                border-0
                bg-gray-600'
        />
    </>
}