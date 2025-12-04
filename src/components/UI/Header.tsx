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
                flex 
                flex-col
                md:flex-row 
                justify-between 
                py-8
                '
            >
                <a 
                    href='#moi&vous=nous' 
                    className='
                        mx-2
                        text-blue-300 
                        hover:text-blue-600'
                >
                    nous
                </a>
                <a 
                    href='#competences'
                    className='
                        mx-2
                        text-blue-300
                        hover:text-blue-600'
                >
                    compétences
                </a>
                <a 
                    href='#projets'
                    className='
                        mx-2
                        text-blue-300
                        hover:text-blue-600'
                >
                    projets
                </a>
                <a 
                    href='#parcours'
                    className='
                        mx-2
                        text-blue-300
                        hover:text-blue-600'
                >
                    parcours
                </a>
                <a 
                    href='#contact'
                    className='
                        mx-2
                        text-blue-300
                        hover:text-blue-600'
                >
                    contact
                </a>
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