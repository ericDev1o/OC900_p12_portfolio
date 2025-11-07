function App() {
  const path = `${import.meta.env.BASE_URL}`;

  const viteLogo = path + 'vite.svg';
  const htmlLogo = path + 'HTML5.svg';
  const cssLogo = path + 'CSS3.svg';
  const scssLogo = path + 'SCSS.svg';
  const jestLogo = path + 'jest.svg';
  const jsLogo = path + 'JS.svg';
  const tsLogo = path + 'TS.svg';
  const reactLogo = path + 'react.svg';
  const reactRouterLogo = path + 'ReactRouter.svg';
  const reduxLogo = path + 'redux.svg';
  const lighthouseLogo = path + 'lighthouse.svg';
  const gtmetrixLogo = path + 'GTMetrix.svg';
  const waveLogo = path + 'WAvE.svg';
  const linkedinLogo = path + 'linkedin.svg';
  const githubLogo = path + 'github.svg';

  return (
    <main>
      <h1>Bonjour, je suis Eric Faraut</h1>
      <h2>votre intégrateur web React en Île-de-France</h2>
      <section>
        <h3>À propos de moi</h3>
        Passionné par l'intégration front-end les interfaces que je développe pour simplifier l'utilisation par tou·te·s font la part belle à l'accessibilité et l'éco-conception.
      </section>
      <section>
        <h3>compétences</h3>
        <img 
          src={viteLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='Vite logo' />
        <img 
          src={htmlLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='HTML5 logo' />
        <img 
          src={cssLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='CSS3 logo' />
        <img 
          src={scssLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='SCSS logo' />
        <img 
          src={jestLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='Jest logo' />
        <img 
          src={jsLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='JavaScript logo' />
        <img 
          src={tsLogo} 
          className=' 
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='TypeScript logo' />
        <img 
          src={reactLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#61dafbaa]
            animate-[spin_20s_linear_infinite]' 
          alt='React logo' />
        <img 
          src={reactRouterLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300' 
          alt='React Router logo' />
        <img 
          src={reduxLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='Redux logo' />
        <img 
          src={lighthouseLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='Lighthouse logo' />
        <img 
          src={gtmetrixLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='GTMetrix logo' />
        <img 
          src={waveLogo} 
          className='
            p-1.5rem 
            h-3em 
            will-change-filter 
            filter 
            duration-300
            hover:drop-shadow-[0_0_2em_#646cffaa]' 
          alt='WAvE logo' />
      </section>
      <section>
        <h3>projets</h3>
        <h4>Booki, votre agence de voyage</h4>
        <h4>OhMyFood, vos menus pré-commandables</h4>
        <h4>Sophie Bluel, votre architecte d'intérieur</h4>
        <h4>Kasa, votre agence immobilière</h4>
        <h4>Nina Carducci, votre photographe</h4>
        <h4>724Events, vos évènements organisés avec succès</h4>
        <h4>ArgentBank, votre nouvelle banque</h4>
      </section>
      <section>
        <h3>parcours</h3>
      </section>
      <section>
        <h3>contact</h3>
        <a href='https://github.com/ericDev1o' target='_blank'>
          <img 
            src={githubLogo} 
            className='
              p-1.5rem 
              h-3em 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='GitHub logo' />
        </a>
        <a href='https://linkedin.com/in/ericfaraut' target='_blank'>
          <img 
            src={linkedinLogo} 
            className='
              p-1.5rem 
              h-3em 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='LinkedIn logo' />
        </a>
        <form className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
              <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default App;
