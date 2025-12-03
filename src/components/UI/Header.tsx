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
               
                mx-5 
                flex
                flex-col 
                lg:flex-row 
                justify-between 
                items-center'
            >
                <a 
                    href='#moi&vous=nous' 
                    className='
                        mx-4 
                        text-2xl
                        text-blue-300 
                        hover:text-blue-600'
                >
                    nous
                </a>
                <a 
                    href='#competences'
                    className='
                        mx-4
                        text-2xl
                        text-blue-300
                        hover:text-blue-600'
                >
                    compétences
                </a>
                <a 
                    href='#projets'
                    className='
                        mx-4
                        text-2xl
                        text-blue-300
                        hover:text-blue-600'
                >
                    projets
                </a>
                <a 
                    href='#parcours'
                    className='
                        mx-4
                        text-2xl
                        text-blue-300
                        hover:text-blue-600'
                >
                    parcours
                </a>
                <a 
                    href='#contact'
                    className='
                        mx-4
                        text-2xl
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