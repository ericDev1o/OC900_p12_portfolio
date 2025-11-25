export default function Footer() {
    const path = `${import.meta.env.BASE_URL}`;
    const linkedinLogo = path + 'linkedin.webp';
    const githubLogo = path + 'github.webp';
    const myLogo = path + 'logo.webp';

    return <footer 
        className='
          flex 
          justify-center'>
          <img 
            src={myLogo} 
            className=' 
            m-10 
            h-6 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Eric logo' />
          <a 
            href='https://github.com/ericDev1o' 
            target='_blank'
            className='
              m-10'
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
            className='
              m-10'
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
      </footer>
}