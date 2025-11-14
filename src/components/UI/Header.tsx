export default function Header() {
    const path = `${import.meta.env.BASE_URL}`;
    const linkedinLogo = path + 'linkedin.svg';
    const githubLogo = path + 'github.svg';
    const myLogo = path + 'logo.svg';

    return <header>
        <nav className='
            p-8 
            flex
            justify-between 
            items-center'
        >
            <img 
                src={myLogo} 
                className=' 
                    h-6 
                    will-change-filter 
                    filter 
                    duration-300
                    hover:drop-shadow-[0_0_2em_#646cffaa]' 
                alt='' />
            <a 
                href='https://github.com/ericDev1o' 
                target='_blank'
            >
            <img 
                src={githubLogo} 
                className=' 
                    h-6 
                    will-change-filter 
                    filter 
                    duration-300
                    hover:drop-shadow-[0_0_2em_#646cffaa]' 
                alt='GitHub logo' />
            </a>
            <a 
                href='https://linkedin.com/in/ericfaraut' 
                target='_blank'
            >
            <img 
                src={linkedinLogo} 
                className='
                h-6 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
                alt='LinkedIn logo' />
            </a>
        </nav>
    </header>
}