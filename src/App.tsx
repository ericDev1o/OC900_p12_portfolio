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
      <h1
        className="
          text-5xl 
          leading-loose"
      >
        Bonjour, je suis Eric Faraut
      </h1>
      <h2
        className="
        pt-12
        text-4xl
        leading-loose"
      >
        votre intégrateur web React en Île-de-France
      </h2>
      <section>
        <h3
          className="
          pt-10
          text-3xl
          leading-loose"
        >À propos de moi</h3>
        Passionné par l'intégration front-end les interfaces que je développe pour simplifier l'utilisation par tou·te·s font la part belle à l'accessibilité et l'éco-conception.
      </section>
      <section>
        <h3
          className="
          pt-10 
          text-3xl
          leading-loose"
        >compétences</h3>
        <div className="
          flex
          justify-center
          flex-wrap"
        >
          <img 
            src={viteLogo} 
            className='
              p-6 
              h-25
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Vite logo' />
          <img 
            src={htmlLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='HTML5 logo' />
          <img 
            src={cssLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='CSS3 logo' />
          <img 
            src={scssLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='SCSS logo' />
          <img 
            src={jestLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Jest logo' />
          <img 
            src={jsLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='JavaScript logo' />
          <img 
            src={tsLogo} 
            className=' 
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='TypeScript logo' />
          <img 
            src={reactLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#61dafbaa]
              animate-[spin_20s_linear_infinite]' 
            alt='React logo' />
          <img 
            src={reduxLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Redux logo' />
          <img 
            src={reactRouterLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300' 
            alt='React Router logo' />
          <img 
            src={lighthouseLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Lighthouse logo' />
          <img 
            src={gtmetrixLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='GTMetrix logo' />
          <img 
            src={waveLogo} 
            className='
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='WAvE logo' />
          </div>
        </section>
        <section>
          <h3
            className="
            pt-10
            text-3xl
            leading-loose"
          >projets</h3>
          <h4
            className="
            text-2xl
            leading-loose"
          >Booki, votre agence de voyage</h4>
          <h4
            className="
            text-2xl
            leading-loose"
          >OhMyFood, vos menus pré-commandables</h4>
          <h4
            className="
            text-2xl
            leading-loose"
          >Sophie Bluel, votre architecte d'intérieur</h4>
          <h4
            className="
            text-2xl
            leading-loose"
          >Kasa, votre agence immobilière</h4>
          <h4
            className="
            text-2xl
            leading-loose"
          >Nina Carducci, votre photographe</h4>
          <h4
            className="
            text-2xl
            leading-loose"
          >724Events, vos évènements organisés avec succès</h4>
          <h4
            className="
            text-2xl
            leading-loose"
          >ArgentBank, votre nouvelle banque</h4>
      </section>
      <section>
        <h3
          className="
          pt-10 
          text-3xl
          leading-loose"
        >parcours</h3>
      </section>
      <section>
        <h3
          className="
          pt-10 
          text-3xl
          leading-loose"
        >contact</h3>
        <div className="
          flex
          justify-center"
        >
          <a 
            href='https://github.com/ericDev1o' 
            target='_blank'
            className="
              font-medium
              text-blue-600
              decoration-inherit
              hover: text-blue-700"
          >
            <img 
              src={githubLogo} 
              className='
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
              alt='GitHub logo' />
          </a>
          <a 
            href='https://linkedin.com/in/ericfaraut' 
            target='_blank'
            className="
              font-medium
              text-blue-600
              decoration-inherit
              hover: text-blue-700"
          >
            <img 
              src={linkedinLogo} 
              className='
                p-6 
                h-25 
                will-change-filter 
                filter 
                duration-300
                hover:drop-shadow-[0_0_2em_#646cffaa]' 
              alt='LinkedIn logo' />
          </a>
        </div>
        <form 
          className="
            max-w-md 
            mx-auto
            pt-12"
        >
          <div 
            className="
              relative
              z-0 
              w-full 
              mb-5 
              group"
          >
            <input 
              type="email" 
              name="floating_email" 
              id="floating_email" 
              className="
                block 
                py-2.5 
                px-0 
                w-full 
                text-sm 
                text-gray-900 
                bg-transparent 
                border-0 
                border-b-2 
                border-gray-300 
                appearance-none 
                dark:text-white 
                dark:border-gray-600 
                dark:focus:border-blue-500 
                focus:outline-none 
                focus:ring-0 
                focus:border-blue-600 
                peer" 
                placeholder=" " 
                required 
            />
            <label 
              htmlFor="floating_email" 
              className="
                w-full 
                peer-focus:font-medium 
                absolute 
                text-sm 
                text-gray-500 
                dark:text-gray-400 
                duration-300 
                transform 
                -translate-y-6 
                scale-75 
                top-3 
                right-42.5
                -z-10 
                origin-left 
                peer-focus:start-0 
                rtl:peer-focus:translate-x-1/4 
                rtl:peer-focus:left-auto 
                peer-focus:text-blue-600 
                peer-focus:dark:text-blue-500 
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 
                peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div 
            className="
              grid 
              md:grid-cols-2 
              md:gap-6"
          >
            <div 
              className="
                relative 
                z-0 
                w-full 
                mb-5 
                group"
            >
              <input 
                type="text" 
                name="floating_first_name" 
                id="floating_first_name" 
                className="
                  block 
                  py-2.5 
                  px-0 
                  w-full 
                  text-sm 
                  text-gray-900 
                  bg-transparent 
                  border-0 
                  border-b-2 
                  border-gray-300 
                  appearance-none 
                  dark:text-white 
                  dark:border-gray-600 
                  dark:focus:border-blue-500 
                  focus:outline-none
                  focus:ring-0
                  focus:border-blue-600
                  peer" 
                  placeholder=" " 
                  required 
              />
              <label 
                htmlFor="floating_first_name" 
                className="
                  w-full 
                  peer-focus:font-medium 
                  absolute 
                  text-sm 
                  text-gray-500 
                  dark:text-gray-400 
                  duration-300 
                  transform 
                  -translate-y-6 
                  scale-75 
                  top-3 
                  right-16 
                  -z-10 
                  origin-left 
                  peer-focus:start-0 
                  rtl:peer-focus:translate-x-1/4 
                  peer-focus:text-blue-600 
                  peer-focus:dark:text-blue-500 
                  peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 
                  peer-focus:scale-75 
                  peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div 
              className="
                relative 
                z-0 
                w-full 
                mb-5 
                group"
            >
              <input 
                type="text" 
                name="floating_last_name" 
                id="floating_last_name" 
                className="
                  block 
                  py-2.5 
                  px-0 
                  w-full 
                  text-sm 
                  text-gray-900 
                  bg-transparent 
                  border-0 
                  border-b-2 
                  border-gray-300 
                  appearance-none 
                  dark:text-white 
                  dark:border-gray-600 
                  dark:focus:border-blue-500 
                  focus:outline-none 
                  focus:ring-0 
                  focus:border-blue-600 
                  peer" 
                placeholder=" " 
                required 
              />
              <label 
                htmlFor="floating_last_name" 
                className="
                  w-full 
                  peer-focus:font-medium 
                  absolute 
                  text-sm 
                  text-gray-500 
                  dark:text-gray-400 
                  duration-300 
                  transform 
                  -translate-y-6 
                  scale-75 
                  top-3 
                  right-17 
                  -z-10 
                  origin-left 
                  peer-focus:start-0 
                  rtl:peer-focus:translate-x-1/4 
                  peer-focus:text-blue-600 
                  peer-focus:dark:text-blue-500 
                  peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 
                  peer-focus:scale-75 
                  peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <button 
            type="submit" 
            className="
              text-white 
              bg-blue-700 
              hover:bg-blue-800 
              focus:ring-4 
              focus:outline-none 
              focus:ring-blue-300 
              font-medium 
              rounded-lg 
              text-sm 
              w-full 
              sm:w-auto 
              px-5 
              py-2.5 
              text-center 
              dark:bg-blue-600 
              dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
