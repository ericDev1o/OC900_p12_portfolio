import HeadFootLogos from '../containers/HeadFootLogos';
import LinkClickWarning from './LinkClickWarning';
import LinkNav from './LinkNav';

export default function Header() {
    return <header className='
        px-20 
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
                <li className='
                    group 
                    relative '
                >   
                    <LinkNav
                        href='#moi&vous=nous' 
                        text='nous'
                    />
                </li>
                <li className='
                    group
                    relative'
                >   
                    <LinkNav
                        href='#competences'
                        text='compétences'
                    />
                </li>
                <li className='
                    group
                    relative'
                >   
                    <LinkNav 
                        href='#projets'
                        text='projets'
                    />
                </li>
                <li className='
                    group
                    relative'
                >   
                    <LinkNav
                        href='#parcours'
                        text='parcours'
                    />
                </li>
                <li className='
                    group
                    relative'
                >   
                    <LinkNav
                        href='#contact'
                        text='contact'
                    />
                </li>
            </ul>
        </nav>
    </header>
}