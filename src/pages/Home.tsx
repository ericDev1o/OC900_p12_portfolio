import { useSkillsLogo } from "@/contexts/SkillsLogoContext";
import Portfolio from "../components/UI/Portfolio";
import LinkClickWarning from "@/components/UI/LinkClickWarning";

export default function Home() {
  const basePath = import.meta.env.BASE_URL || '/';
  const photo = 'CV/photoCV_w100px.webp';
  const photoPath = basePath + photo;

  const projectsPath = 'projects/';
  const { getLogoURI } = useSkillsLogo();

  const htmlLogo = getLogoURI('HTML');
  const cssLogo = getLogoURI('CSS');
  
  const viteLogo = getLogoURI('vite');
  const jsLogo = getLogoURI('JS');
  const tsLogo = getLogoURI('TS');
  const reactLogo = getLogoURI('react');
  const linkedinLogo = getLogoURI('linkedIn');
  const githubLogo = getLogoURI('gitHub');

  return <main>
      <article>
        <section 
          className="
            odd:bg-gray-950 
            even:bg-gray-800 
            pt-6 
            pb-12
            px-20">
          <h1
            className="
              text-5xl 
              leading-loose"
          >
            Bonjour, je suis Eric
          </h1>
          <div
            className="
              mt-8 
              flex
              justify-center"
          >
            <img
              src={photoPath}
              alt='ma photo'
            />
          </div>
          <h2
            className="
            pt-12
            text-4xl
            leading-loose"
          >
            votre intégrateur web react en Île-de-France
          </h2>
        </section>
      <section 
        className="
          odd:bg-gray-950 
          even:bg-gray-800
          pb-12
          px-20
          "
        >
        <h3
          id='moi&vous=nous'
          className="
          pt-14
          pb-2 
          text-3xl
          leading-loose"
        >À propos de moi</h3>
        <p
          className="
            pt-4"
        >
          Développons votre activité en évitant les 
          <span 
            className="
            mx-2 
            font-extrabold"
          >
            frictions.
          </span> 
          Améliorons vos 
          <span
            className="
              mx-2 
              font-extrabold"
          >
            chiffres 
          </span>
          clés de 
          <span 
            className="
              mx-2 
              font-extrabold
              text-violet-400"
          >
            performances.
          </span> 
          Passionné par les sites web, les interfaces 
          <span 
            className="
              mx-2 
              font-extrabold 
              text-green-600"
          >
            durables
          </span>
          que j'intègre simplifient l'utilisation par tou·te·s. 
        </p>
        <p 
          className="
            pt-4"
        >
          <h4
            className='
              pt-6
              pb-4 
              text-2xl
              leading-loose'
          >
            Qui suis-je? 
          </h4>
          Intégrateur web React passionné par l’accessibilité des sites web, je veille à atteindre un 
          <span 
            className="
              mx-2 
              font-extrabold
              text-violet-400"
          >
            audit Google Lighthouse supérieur à 95/100 
          </span>
            pour garantir un référencement efficace et une expérience utilisat·rice·eur fluide.
        </p>
        <p 
          className="
            pt-4">
          <h4
            className='
              pt-6 
              pb-2 
              text-2xl
              leading-loose'
          >
            Pour quoi faire? 
          </h4>
          <h5
            className='
              pt-2
              pb-4 
              text-xl
              leading-loose'
          >
            Le fruit de mes expériences passées
          </h5>
          <p>
            Fort d’expériences solides chez Bosch ThermoTechnology et Bolloré Transport & Logistics, j’ai développé des compétences en 
            <span 
              className="
                mx-2 
                font-extrabold 
                text-green-600"
            >
              clarification fonctionnelle, documentation, tests unitaires et refactorisation de code back-end. 
            </span>
          </p>
          <h5
            className='
              pt-6 
              pb-4 
              text-xl
              leading-loose'
          >
            Notre objectif aujourd'hui
          </h5>
          <p>
            Je suis prêt pour être votre intégrateur web dans une agence, une ESN ou une organisation engagée en Île-de-France. 
          </p>
          <h5
            className='
              pt-6 
              pb-4 
              text-xl
              leading-loose'
          >
            Pour un projet numérique plus inclusif et éco-responsable demain
          </h5>
          <p>
            De la startup du recyclage à une administration en passant par le grand groupe ou une association de l'Economie Sociale et Solidaire c'est le projet qui est mon moteur.
          </p>
        </p>
        <p
          className="
            pt-4">
          <h4
            className='
              pt-6
              pb-2 
              text-2xl
              leading-loose'
          >
            Quel est mon apport? 
          </h4>
           <h5
            className='
              pt-4
              pb-4 
              text-xl
              leading-loose'
          >
            Qualitatif
          </h5>
          Mon écoute, ma connaissance des standards web, ma veille technologique et mon respect de la confidentialité via des 
          <span 
            className="
              mx-2 
              font-extrabold 
              text-green-600"
          >
            outils hors-ligne comme html-validate et stylelint
          </span>
          font de vos projets des sites accessibles et éco-conçus. 
           <h5
            className='
              pt-4
              pb-4 
              text-xl
              leading-loose'
          >
            Quantitatif
          </h5>
          Mon audit Lighthouse affiche régulièrement 
          <span 
            className="
              mx-2 
              font-extrabold
              text-violet-400"
          >
            100/100 au SEO 
          </span>
          et à l’
        <span 
            className="
              mx-2 
              font-extrabold 
              text-green-600"
          >
            accessibilité.
        </span>
         <h5
            className='
              pt-4
              pb-4 
              text-xl
              leading-loose'
          >
            Précepte
          </h5>
        J’aide ainsi les organisations à renforcer leur présence digitale tout en 
        <span 
            className="
              mx-2 
              font-extrabold 
              text-green-600"
          >
            limitant les coûts de maintenance.
          </span> 
        </p>
        <p
          className="
            pt-4">
          J'adhère à « 
          <span 
            className="
              mx-2 
              font-extrabold "
          >
            Focus on serving your users, and all else will follow. 
          </span>
          » – Matt Cutts ancien responsable webspam de Google
        </p>
      </section>
      <section 
        className="
          odd:bg-gray-950 
          even:bg-gray-800
          pb-12
          px-20"
      >
        <h3
          id='competences'
          className="
          pt-10 
          text-3xl
          leading-loose"
        >
          compétences
        </h3>
        <h4
            className='
              pt-6
              pb-2 
              text-2xl
              leading-loose'
          >
            clés
        </h4>
        <p>
          Vous avez besoin d'un site web à votre image?
        </p>
        <p>
          Je transforme un "brief" en écrans propres, "responsives" et sobres.
        </p>
        <div className="
          flex
          justify-center
          flex-wrap"
        >
          <img 
            src={viteLogo} 
            className='
              lazy 
              p-6 
              h-25
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='Vite logo' 
          />
          <img 
            src={htmlLogo} 
            className='
              lazy 
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='HTML5 logo' 
          />
          <img 
            src={cssLogo} 
            className='
              lazy 
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='CSS3 logo' 
          />      
          <img 
            src={jsLogo} 
            className='
              lazy 
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='JavaScript logo' 
          />
          <img 
            src={tsLogo} 
            className=' 
              lazy 
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#646cffaa]' 
            alt='TypeScript logo' 
          />
          <img 
            src={reactLogo} 
            className='
              lazy 
              p-6 
              h-25 
              will-change-filter 
              filter 
              duration-300
              hover:drop-shadow-[0_0_2em_#61dafbaa]
              animate-[spin_20s_linear_infinite]' 
            alt='React logo' 
          />
        </div>
      </section>
      <section 
        className="
          odd:bg-gray-950 
          even:bg-gray-800
          px-20"
      >
        <h3
          id='projets'
          className="
            pt-10
            text-3xl
            leading-loose"
        >
          projets
        </h3>
        <Portfolio 
          projectsPath={projectsPath}
        />
      </section>
      <section 
      className="
        odd:bg-gray-950 
        even:bg-gray-800 
        pb-12
        px-20"
    >
        <h3
          id='parcours'
          className="
            pt-10 
            text-3xl
            leading-loose"
        >parcours</h3>
        <h4
          className="
            pt-2
            pb-8 
            text-2xl
            leading-loose"
        >
          intégrateur web
        </h4>
        <h5 
          className='
            text-2xl
            mx-2'
        >
            <div 
              className="
                group
                relative"
            >
              <a 
                href='https://www.francecompetences.fr/recherche/rncp/38145/'
                target='_blank'
                className='
                  block 
                  px-4 
                  py-2 
                  text-blue-500 
                  hover:text-blue-600 
                  hover:scale-110 
                  transition 
                  duration-600 
                  motion-reduce:duration-3000 
                  ease-in-out'
              >
                RNCP 38145
              </a>
              <LinkClickWarning />
            </div>
        </h5>
        <p>
          à votre  service
        </p>
        <p>
          <div 
            className="
              group
              relative"
          >
            <a 
              href="https://openclassrooms.com/fr/paths/900-integrateur-web#projects"
              target="_blank"
              className='
                block 
                px-4 
                py-2 
                text-blue-500 
                hover:text-blue-600 
                hover:scale-110 
                transition
                duration-600 
                motion-reduce:duration-3000 
                ease-in-out'
            >
              Suivez le parcours.
            </a>
            <LinkClickWarning />
          </div>
        </p>
        <h6>
          22 avril 2024 à aujourd'hui
        </h6>
        <h4 
          className="
            pt-8
            pb-8 
            text-2xl
            leading-loose"
        >
          sachez-en plus sur ce que nous avons co-construit avant
        </h4>
        <p className="text-2xl">
          <div 
            className="
              group
              relative"
          >
            <a
              href="/CV/CV+integrateur+web+react+Eric+F.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex 
                items-center 
                text-blue-500  
                no-underline
                transition 
                transform 
                hover:scale-110 
                hover:brightness-110 
                hover:shadow-lg"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 640"
                width={48}
                height={48}
                fill="currentcolor">
                  <path 
                    d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/>
              </svg>
              <span
                className="
                  text-blue-500
                  hover:text-blue-600">
                  Téléchargez mon CV
              </span>
            </a>
            <LinkClickWarning />
          </div>
        </p>
      </section>
      <section 
        className="
          odd:bg-gray-950 
          even:bg-gray-800
          px-20"
      >
        <h3
          id='contact'
          className="
            pt-10 
            text-3xl
            leading-loose"
        >
          contact
        </h3>
        <p
          className="
            pt-4
            text-2xl"
        >
          Contribuons 
          <span
            className="
              mx-2
              font-extrabold
              text-green-600"
          >
            doucement 
          </span>
          à votre 
          <span
            className="
              mx-2
              font-extrabold
              text-gray-500"
          >
            projet
          </span> 
          web avec 
          <span
            className="
              mx-2
              font-extrabold
              text-green-600"
          >
            impact.
          </span>
        </p>
        <div 
          className="
            flex
            justify-center"
        >
          <div
            className="
              group
              relative"
          >
            <a 
              href='https://github.com/ericDev1o' 
              target='_blank'
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
            <LinkClickWarning />
          </div>
          <div 
            className="
              group
              relative"
          >
            <a 
              href='https://linkedin.com/in/ericfaraut' 
              target='_blank'
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
            <LinkClickWarning />
          </div>
        </div>
        <div
          className="
            group
            relative">
          <a 
            href="https://framaforms.org/contact-eric-faraut-1762791991"
            target='_blank'
          >
            <button 
                className="
                  mt-2
                  text-2xl 
                  font-medium 
                  cursor-pointer 
                  text-gray-200  
                  bg-blue-600 
                  hover:bg-blue-700 
                  focus:ring-4 
                  focus:outline-none 
                  focus:ring-blue-300 
                  rounded-lg  
                  w-full 
                  sm:w-auto 
                  px-5 
                  py-2.5 
                  text-center 
                  dark:bg-blue-600 
                  dark:hover:bg-blue-700 
                  dark:focus:ring-blue-800"
              >
                Parlons de votre projet de site web
              </button>
            </a>
            <LinkClickWarning />
          </div>
      </section>
  </article>
  <hr 
      className="
        my-16 
        h-px 
        border-0 
        bg-gray-600"
  />
</main>
}
