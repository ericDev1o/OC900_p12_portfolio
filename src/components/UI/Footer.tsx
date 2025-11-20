export default function Footer() {
    const path = `${import.meta.env.BASE_URL}`;
    const linkedinLogo = path + 'linkedin.webp';
    const githubLogo = path + 'github.webp';
    const myLogo = path + 'logo.webp';

    return <>
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
      <footer 
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
  </>
}