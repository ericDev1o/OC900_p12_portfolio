import { useState } from "react";

export default function Home() {
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
        >
          contact
        </h3>
        <div className="
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
                mt-4 
                text-gray-700 
                bg-orange-600 
                hover:bg-orange-700
                cursor-pointer 
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
                text-center"
            >
              Parlons de votre projet de site web
            </button>
          </a>
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
                disabled: cursor-not-allowed
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
                peer-focus:font-medium 
                absolute 
                w-full 
                text-sm 
                text-gray-500 
                dark:text-gray-400 
                duration-300 
                transform 
                -translate-y-6 
                scale-75 
                top-3 
                right-32
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
              courriel (obligatoire)
            </label>
            <p 
              className="
                mt-2 
                text-sm 
                text-red-700 
                dark:text-red-800"
            >
              Veuillez cliquer sur le bouton 
               <span 
                className="
                  mx-2 
                  font-extrabold
                  text-orange-700"
              >
                orange 
              </span>
              ci-dessus
              <span
                className="
                  mx-2 
                  font-extrabold"
              >plutôt 
              </span>
              que le
              <span
                className="
                  mx-2 
                  font-extrabold
                  text-blue-600"
              >
                bleu 
              </span>
              ci-dessous s'il vous plaît. 
            </p>
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
              name="floating_first_name" 
              id="floating_first_name" 
              className="
                disabled: cursor-not-allowed
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
                peer-focus:font-medium 
                absolute 
                w-full 
                text-sm 
                text-gray-500 
                dark:text-gray-400 
                duration-300 
                transform 
                -translate-y-6 
                scale-75 
                top-3 
                right-34 
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
              Prénom (obligatoire)
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
                disabled: cursor-not-allowed
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
                peer-focus:font-medium 
                absolute 
                w-full 
                text-sm 
                text-gray-500 
                dark:text-gray-400 
                duration-300 
                transform 
                -translate-y-6 
                scale-75 
                top-3 
                right-37 
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
              Nom (obligatoire)
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
              type="tel" 
              pattern="+33 [1-9]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" 
              name="floating_phone" 
              id="floating_phone" 
              className="
                disabled: cursor-not-allowed
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
              />
            <label 
              htmlFor="floating_phone" 
              className="
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
                right-50.5 
                -z-10 
                origin-left 
                peer-focus:start-0 
                rtl:peer-focus:translate-x-1/4 
                peer-focus:text-blue-600 
                peer-focus:dark:text-blue-500 
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 
                peer-focus:-translate-y-6
                "
            >
              téléphone (+33 1 23 45 67 89)
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
              name="floating_company" 
              id="floating_company" 
              className="
                disabled: cursor-not-allowed
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
            />
            <label 
              htmlFor="floating_company" 
              className="
                peer-focus:font-medium 
                absolute 
                w-full 
                text-sm 
                text-gray-500 
                dark:text-gray-400 
                duration-300 
                transform 
                -translate-y-6 
                scale-75 
                top-3 
                right-48 
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
              Société
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
            <label 
              htmlFor="message" 
              className="
                block 
                mb-2 
                text-sm 
                font-medium 
                text-gray-900 
                dark:text-white"
            >
              Parlons de votre projet de site web
            </label>
            <textarea 
              id="message"
              value={value}
              onChange={handleChange} 
              className="
                disabled: cursor-not-allowed
                block 
                p-2.5 
                min-h-24 
                w-full 
                text-sm 
                text-gray-900 
                bg-gray-50 
                rounded-lg 
                border 
                border-gray-300 
                focus:ring-blue-500 
                focus:border-blue-500 
                dark:bg-gray-700 
                dark:border-gray-600 
                dark:placeholder-gray-400 
                dark:text-white 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500" 
              placeholder="Veuillez s'il-vous-plaît avoir la patience de cliquer sur le bouton orange ci-dessus."
            >
            </textarea>
            <p 
              className="
                mt-2 
                text-sm 
                text-red-600 
                dark:text-red-500"
            >
              <span 
                className="font-medium"
              >Excusez-moi ne remplissez pas encore s'il vous plaît.
              </span>
               Veuillez cliquer sur le bouton orange ci-dessus plutôt que le bleu ci-dessous.
            </p>
          </div>
          <button 
            type="submit" 
            className="
              disabled: cursor-not-allowed 
              opacity-50 
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
