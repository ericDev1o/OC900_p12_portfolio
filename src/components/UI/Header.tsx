import HeadFootLogos from '../containers/HeadFootLogos';

import LinkNav from './LinkNav';

export default function Header() {
    return <header className='
        px-6 
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
            <ul className='
                flex
                flex-col
                md:flex-row 
                justify-between
            '>
                <li>   
                    <LinkNav
                        href='#vous&moi=nous' 
                        text='nous'
                    />
                </li>
                <li>   
                    <LinkNav
                        href='#competences'
                        text='compétences'
                    />
                </li>
                <li>   
                    <LinkNav 
                        href='#projets'
                        text='projets'
                    />
                </li>
                <li>   
                    <LinkNav
                        href='#parcours'
                        text='parcours'
                    />
                </li>
                <li>   
                    <LinkNav
                        href='#contact'
                        text='contact'
                    />
                </li>
            </ul>
        </nav>
    </header>
}