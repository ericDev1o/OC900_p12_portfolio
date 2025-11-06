import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import CSSLogo from './assets/CSS3.svg'
import GTMetrixLogo from './assets/GTMetrix.png'
import HTMLLogo from './assets/HTML5.png'
import jestLogo from './assets/jest.svg'
import lighthouseLogo from './assets/lighthouse.png'
import reactRouterLogo from './assets/ReactRouter.png'
import reduxLogo from './assets/redux.png'
import SCSSLogo from './assets/SCSS.svg'
import JSLogo from './assets/JS.png'
import TSLogo from './assets/TS.svg'
import WAvELogo from './assets/WAvE.png'
import linkedinLogo from './assets/linkedin.png'
import './App.css'

function App() {

  return (
    <main>
      <h1>Bonjour, je suis Eric Faraut</h1>
      <h2>votre intégrateur web React</h2>
      <section>
        <h3>À propos de moi</h3>
        Passionné par l'intégration front-end les interfaces que je développe pour simplifier l'utilisation par tou·te·s font la part belle à l'accessibilité et l'éco-conception.
      </section>
      <section>
        <h3>compétences</h3>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={HTMLLogo} className="logo" alt="HTML5 logo" />
        <img src={CSSLogo} className="logo" alt="CSS3 logo" />
        <img src={SCSSLogo} className="logo" alt="SCSS logo" />
        <img src={jestLogo} className="logo" alt="Jest logo" />
        <img src={JSLogo} className="logo" alt="JavaScript logo" />
        <img src={TSLogo} className="logo" alt="TypeScript logo" />
        <img src={reactLogo} className= "logo react" alt="React logo" />
        <img src={reactRouterLogo} className="logo" alt="React Router logo" />
        <img src={reduxLogo} className="logo" alt="Redux logo" />
        <img src={lighthouseLogo} className="logo" alt="Lighthouse logo" />
        <img src={GTMetrixLogo} className="logo" alt="GTMetrix logo" />
        <img src={WAvELogo} className="logo" alt="WAvE logo" />
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
        <form>

        </form>
        <a href="https://linkedin.com/in/ericfaraut" target="_blank">
          <img src={linkedinLogo} className='logo' alt='LinkedIn logo' />
        </a>
      </section>
    </main>
  )
}

export default App
