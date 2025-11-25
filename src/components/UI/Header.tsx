export default function Header() {
    const path = `${import.meta.env.BASE_URL}`;

    const linkedinLogo = path + 'linkedin.webp';
    const githubLogo = path + 'github.webp';
    const myLogo = path + 'logo.webp';

    return <>
        <header>
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
                    alt='Eric logo'
                    width={15}
                    height={24}
                />
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
                    alt='GitHub logo'
                    width={25}
                    height={24} />
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
                    alt='LinkedIn logo' 
                    width={29}
                    height={24}
                />
                </a>
            </nav>
        </header>
        <hr 
            className="
                my-4 
                h-px
                border-0
                bg-gray-600"
        />
    </>
}