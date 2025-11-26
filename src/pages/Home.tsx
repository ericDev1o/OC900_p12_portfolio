import { useState } from "react";

import Project from "@/components/UI/Project";

export default function Home() {
  const path = `${import.meta.env.BASE_URL}`;
  const logosPath = 'logos/';
  const projectsPath = 'projects/';

  const viteLogo = path + logosPath + 'vite.webp';
  const htmlLogo = path + logosPath + 'HTML5.webp';
  const cssLogo = path + logosPath + 'CSS3.webp';
  const jsLogo = path + logosPath + 'JS.webp';
  const tsLogo = path + logosPath + 'TS.webp';
  const reactLogo = path + logosPath + 'react.webp';
  const linkedinLogo = path + logosPath + 'linkedin.webp';
  const githubLogo = path + logosPath + 'github.webp';

  const p2ridingCitiesImage = path + projectsPath + 'riding+cities.webp';
  const p3bookiImage = path + projectsPath + 'booki.webp';

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    setValue(textarea.value);

    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  return (
    <main>
      <h1
        className="
          text-5xl 
          leading-loose"
      >
        Bonjour, je suis Eric
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
        <p
          className="
            pt-4
            text-2xl"
        >
          Développez votre activité en évitant les 
          <span 
            className="
            mx-2 
            font-extrabold"
          >
            frictions.
          </span> 
          Améliorez vos 
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
              text-violet-500"
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
      </section>
      <section>
        <h3
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
      <section
        className="
          flex
          flex-col"
      >
        <h3
          className="
            pt-10
            text-3xl
            leading-loose"
        >
          projets
        </h3>
        <h4
          className="
            text-2xl
            leading-loose"
        >
          Riding cities, découvrez le skateboard près de chez vous.
        </h4>
        <a 
          href="https://ericdev1o.github.io/OC900_p2_RidingCities/"
          target="_blank"
          className="
            text-2xl
            text-orange-500"
        >
          p2 Riding cities
        </a>
        <Project 
          URL="https://ericdev1o.github.io/OC900_p2_RidingCities/"
          label="Riding cities, du skateboard près de chez vous"
          title='Riding cities'
          //skill={logoPath: {htmlLogo}, altText: 'HTML5 logo'}
          projectNumber={2}
        />
        <h4
          className="
            text-2xl
            leading-loose"
        >
          Booki, votre agence de voyage
        </h4>
        <a 
          href="https://ericdev1o.github.io/OC900_p3_Booki/"
          target="_blank"
          className="
            text-2xl
            text-orange-500"
        >
          p3 Booki
        </a>
        <Project 
          URL="https://ericdev1o.github.io/OC900_p3_Booki/"
          label="Booki, votre agence de voyage"
          title='Booki'
          //skill={logoPath: {htmlLogo}, altText: 'HTML5 logo'}
          projectNumber={3}
        />
      </section>
      <section>
        <h3
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
          RNCP 38145
          <a 
            href="https://openclassrooms.com/fr/paths/900-integrateur-web#projects"
            target="_blank"
            className="
              mx-2 
              font-medium 
              text-fg-brand 
              hover:underline"
          >
            suivez le parcours
          </a>
        </p>
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
      </section>
      <section>
        <h3
          className="
            pt-10 
            text-3xl
            leading-loose"
        >
          contact
        </h3>
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
                font-bold
                cursor-pointer 
                text-gray-200  
                bg-blue-600 
                hover:bg-blue-700 
                focus:ring-4 
                focus:outline-none 
                focus:ring-blue-300 
                font-medium 
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
