import './App.css';

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
        <img src={viteLogo} className='logo' alt='Vite logo' />
        <img src={htmlLogo} className='logo' alt='HTML5 logo' />
        <img src={cssLogo} className='logo' alt='CSS3 logo' />
        <img src={scssLogo} className='logo' alt='SCSS logo' />
        <img src={jestLogo} className='logo' alt='Jest logo' />
        <img src={jsLogo} className='logo' alt='JavaScript logo' />
        <img src={tsLogo} className='logo' alt='TypeScript logo' />
        <img src={reactLogo} className= 'logo react' alt='React logo' />
        <img src={reactRouterLogo} className='logo' alt='React Router logo' />
        <img src={reduxLogo} className='logo' alt='Redux logo' />
        <img src={lighthouseLogo} className='logo' alt='Lighthouse logo' />
        <img src={gtmetrixLogo} className='logo' alt='GTMetrix logo' />
        <img src={waveLogo} className='logo' alt='WAvE logo' />
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
          <img src={githubLogo} className='logo' alt='GitHub logo' />
        </a>
        <a href='https://linkedin.com/in/ericfaraut' target='_blank'>
          <img src={linkedinLogo} className='logo' alt='LinkedIn logo' />
        </a>
      </section>
    </main>
  );
}

export default App;
