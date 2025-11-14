export default function Footer() {
    const path = `${import.meta.env.BASE_URL}`;
    const linkedinLogo = path + 'linkedin.svg';
    const githubLogo = path + 'github.svg';
    const myLogo = path + 'logo.svg';

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
          alt='GitHub logo' />
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