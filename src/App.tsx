import './App.css';

function App() {
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
        <img src='/vite.svg' className='logo' alt='Vite logo' />
        <img src='/HTML5.png' className='logo' alt='HTML5 logo' />
        <img src='/CSS3.svg' className='logo' alt='CSS3 logo' />
        <img src='/SCSS.svg' className='logo' alt='SCSS logo' />
        <img src='/jest.svg' className='logo' alt='Jest logo' />
        <img src='/JS.png' className='logo' alt='JavaScript logo' />
        <img src='/TS.svg' className='logo' alt='TypeScript logo' />
        <img src='/react.svg' className= 'logo react' alt='React logo' />
        <img src='/ReactRouter.png' className='logo' alt='React Router logo' />
        <img src='/redux.png' className='logo' alt='Redux logo' />
        <img src='/lighthouse.png' className='logo' alt='Lighthouse logo' />
        <img src='/GTMetrix.png' className='logo' alt='GTMetrix logo' />
        <img src='/WAvE.png' className='logo' alt='WAvE logo' />
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
        <a href='https://linkedin.com/in/ericfaraut' target='_blank'>
          <img src='/linkedin.png' className='logo' alt='LinkedIn logo' />
        </a>
      </section>
    </main>
  );
}

export default App;
