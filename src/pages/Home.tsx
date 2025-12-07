import { useSkillsLogo } from "@/contexts/SkillsLogoContext";
import Portfolio from "../components/UI/Portfolio";

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

  return (
    <main>
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
      <section>
        <h3
          id='moi&vous=nous'
          className="
          pt-10
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
            pt-4">
          <span
            className="
              mx-2 
              text-2xl 
              font-extrabold"
          >
            Qui suis-je? 
          </span>
          Intégrateur web React passionné par l’optimisation de la visibilité et de la performance des sites, je veille à maintenir un 
          <span 
            className="
              mx-2 
              font-extrabold
              text-violet-400"
          >
            audit Google Lighthouse supérieur à 95/100 
          </span>
            pour garantir un référencement efficace et une expérience utilisateur optimale.
        </p>
        <p 
          className="
            pt-4">
          <span
            className="
              mx-2 
              text-2xl 
              font-extrabold"
          >
            Pour quoi faire? 
          </span>
          Fort d’expériences solides chez Bosch ThermoTechnology et Bolloré Transport & Logistics, j’ai développé des compétences en 
          <span 
            className="
              mx-2 
              font-extrabold 
              text-green-600"
          >
            refactorisation de code back-end, tests unitaires, documentation technique et enrichissement fonctionnel. 
          </span>
          Mon ambition est d’évoluer vers un poste d’intégrateur web dans une agence, une ESN ou une organisation engagée en Île-de-France, telle que Veolia, 3F, Aoled ou une administration publique.
        </p>
        <p
          className="
            pt-4">
          <span
            className="
              mx-2 
              text-2xl 
              font-extrabold"
          >
            Quel est mon apport? 
          </span>
          Ma connaissance des standards web, ma veille technologique et mon respect de la confidentialité via des 
          <span 
            className="
              mx-2 
              font-extrabold 
              text-green-600"
          >
            outils hors-ligne comme html-validate et stylelint
          </span>
          me permettent de concevoir des sites accessibles, performants et éco-conçus. Mon audit Lighthouse affiche régulièrement 
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
            accessibilité,
        </span>
        avec 99/100 en performance. J’aide ainsi les organisations à renforcer leur présence digitale tout en 
        <span 
            className="
              mx-2 
              font-extrabold 
              text-green-600"
          >
            limitant les coûts de maintenance. Un design visuel et technique simple, 
          </span>
          fiable, et sécurisé, limite les risques tels que les fuites de données ou des contenus extérieurs risqués (Cross Origin Resource Sharing). 
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
      <section>
        <h3
          id='competences'
          className="
          pt-10 
          text-3xl
          leading-loose"
        >
          compétences
        </h3>
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
      <section>
        <h3
          id='parcours'
          className="
            pt-10 
            text-3xl
            leading-loose"
        >parcours</h3>
        <p
          className="
            pt-4
            text-2xl"
        >
          22 avril 2024 à aujourd'hui : 
          <span
            className="
              mx-2
              font-extrabold
              text-violet-500"
            >
              intégrateur web 
          </span>
          RNCP 38145 à votre service 
          <a 
            href="https://openclassrooms.com/fr/paths/900-integrateur-web#projects"
            target="_blank"
            className="
              mx-2 
              font-medium 
              text-fg-brand 
              text-blue-500  
              hover:underline"
          >
            suivez le parcours
          </a>
        </p>
      </section>
      <section>
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
        </div>
        <h4
          className="
            pt-8 
            text-2xl
            leading-loose"
        >
          Utilisez s'il-vous-plaît provisoirement le formulaire Framaform ci-dessous pour une meilleure confidentialité des courriels.
        </h4>
        <a 
          href="https://framaforms.org/contact-eric-faraut-1762791991"
          target='_blank'
        >
          <button 
              className="
                mt-8 
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
     </section>
     <hr 
        className="
          my-16 
          h-px 
          border-0 
          bg-gray-600"
      />
      <section>
        <h4
          className="
            pt-8 
            text-2xl
            leading-loose"
        >
          utilisation et protection de vos données personnelles
        </h4>
        Selon https://www.cnil.fr/fr/la-cnil-publie-un-nouveau-guide-pour-accompagner-les-associations nous avons compris « que faire en cas de violation des données ».
        
        Si « Des données personnelles ont été, de manière accidentelle ou illicite, détruites, perdues, modifiées, divulguées (courriels transmis à des mauvais destinataires, équipement perdu ou volé, publication involontaire de données sur Internet, etc.)
        
        Cet incident constitue une « violation de données ».
        
        Lorsqu’un tel incident se produit, il est nécessaire de le documenter ». 
        
        « En cas de contrôle, ce document est vérifié par les services de la CNIL.
        <h5
          className="
            pt-6
            text-[1.25rem]
            leading-loose"
        >
          finalité
        </h5>
        Vos données sont collectées pour écrire par courriel votre message.
        <h5
          className="
            pt-6
            text-[1.25rem]
            leading-loose"
        >
          durée de conservation
        </h5>
        Vos données sont conservées 6 mois.
        <h5
          className="
            pt-6
            text-[1.25rem]
            leading-loose"
        >
          vos droits
        </h5>
        Vous avez le droit d'accès, rectification, effacement de vos données.

        Demandez-le selon https://framasoft.org/fr/cgu en remplissant https://contact.framasoft.org/.
        
        C'est dans le cadre de l'art. 34 de la loi "Informatique et Libertés".
        Vous ne devriez pas avoir besoin de contacter la CNIL après.
        <h6
          className="
            pt-4
            leading-loose"
        >
          Demande d’effacement et droit à l’oubli RGPD art.17
        </h6>
        En tant que répondant·e utilisat·rice·eur du service la suppression des données personnelles vous concernant ne prend pas en compte les données stockées que toute autorité administrative ou judiciaire pourrait avoir demandé avant que vous ayez demandé leur suppression.
        <h5
          className="
            pt-6
            text-[1.25rem]
            leading-loose"
        >
          notre charte
        </h5>
        Exprimez-vous s'il-vous-plaît selon https://framasoft.org/fr/moderation dans le formulaire mis à votre disposition.
        <h5
          className="
            pt-6
            text-[1.25rem]
            leading-loose"
        >
          transfert de vos données
        </h5>
        Vos données sont transférées à Framaforms(Framasoft, Paris).
        
        Voyez https://framasoft.frama.io/rgpd/services/framaforms/.
              
        Framasoft pourrait envoyer des données hors-UE via Akismet. 
        
        Voyez https://automattic.com/privacy/ §Other Things You Should Know (Keep Reading!) §Transferring Information
        
        Cette information pourrait relever de la liberté d'expression et d'opinion telle qu'exprimée https://framasoft.org/fr/cgu §"Version courte", "On est sympathiques" ... "Mais" ... "Clause "La loi est la loi, et on ne veut pas finir en taule": vous devez respecter la loi (que celle-ci soit bien faite ou idiote), sinon votre compte sera supprimé ;"
        
        Sentez-vous libre d'aller chercher dans une version plus longue comment on préfèrerait Akismet à Antispam Bee par exemple.
        
        J'aurais utilisé Framaforms sans compte utilisateur par simplicité de 2 sources web et IA concordantes: Brave Leo et Companion(OpenClassrooms) ChatGPT3.5+.
        
        Vous en tant que répondant·e ne devriez pas être concerné·e·s par un transfert de données hors de France.
        <h5
          className="
            pt-6
            text-[1.25rem]
            leading-loose"
        >
          cookies et traçage
        </h5>
        Ce site https://ericdev1o.github.io/OC900_p12_portfolio/ n'utilise aucun cookie de suivi ni outil de traçage.

        Aucune donnée de navigation n'est collectée sauf les informations que vous renseignez volontairement dans le formulaire.
      </section>
    </main>
  );
}
