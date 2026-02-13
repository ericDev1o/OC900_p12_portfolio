import { lazy } from 'react';

import { useSkillsLogo } from '../contexts/SkillsLogoContext';

import LazyLoadWrapper from '../components/containers/LazyLoadWrapper';

import Title3 from '../components/UI/Title3';
import Title4 from '../components/UI/Title4';
import Title5 from '../components/UI/Title5';
import Section from '../components/UI/Section';
import Link from '../components/UI/Link';
import LinkClickWarning from '../components/UI/LinkClickWarning';
import LogoLinkHomeContact from '../components/UI/LogoLinkHomeContact';
import SpanGreen from '../components/UI/SpanGreen';
import SpanViolet from '../components/UI/SpanViolet';

const Portfolio = lazy(() => import('../components/containers/Portfolio'));

export default function Home() {
  const basePath = import.meta.env.BASE_URL || '/';
  const photo = 'CV/photoCV_w100px.webp';
  const photoPath = basePath + photo;

  const projectsPath = 'projects/';
  const { getLogoURI } = useSkillsLogo();

  const linkedinLogo = getLogoURI('linkedIn');
  const githubLogo = getLogoURI('gitHub');

  return <main>
      <article>
        <Section>
          <h1
            className='
              pt-20 
              text-5xl 
              leading-loose'
          >
            Bonjour, je suis Eric
          </h1>
          <div
            className='
              mt-8 
              flex
              justify-center'
          >
            <img
              src={photoPath}
              alt='ma photo'
            />
          </div>
          <h2
            className='
            pt-12
            text-4xl
            leading-loose'
          >
            votre intégrateur "web" react en Île-de-France
          </h2>
        </Section>
      <Section>
        <Title3
          title='À propos de moi'
          id='moi&vous=nous'
        />
        <p
          className='
            pt-4'
        >
          Développons votre activité en évitant les 
          <span 
            className='
            mx-2 
            font-extrabold'
          >
            frictions.
          </span> 
          Améliorons vos 
          <span
            className='
              mx-2 
              font-extrabold'
          >
            chiffres 
          </span>
          clés de 
          <SpanViolet
            text='performances.'
          /> 
          Passionné par les interfaces "web" 
          <SpanGreen text='durables' />
          j'en simplifie l'utilisation par tou·te·s. 
        </p>
        <Title4 title='Qui suis-je?' />
        <p>
          D'abord je fus intéressé par les indicateurs de prise de décision, l'extraction de leurs données et une solution "backend". Intégrateur "web" react passionné par l’accessibilité, je veille à atteindre un 
          <SpanViolet text='audit Google Lighthouse supérieur à 90/100' />
            pour un bon référencement et une expérience utilisat·rice·eur fluide.
        </p>
        <Title4 title='Pour quoi faire?' />
        <Title5 title='Le fruit de mes expériences passées' />
        <p
        className='pb-10'>
          Naturellement rigoureux, fort d’expériences solides chez Bosch ThermoTechnology et Bolloré Transport & Logistics, j’ai développé des compétences en 
          <SpanGreen text='clarification fonctionnelle, documentation, tests unitaires et évolution de code "backend".' />
        </p>
        <Title5 title="Notre objectif aujourd'hui" />
        <p className='pb-10'>
          Je suis prêt pour être votre intégrateur "web" dans une agence, ESN ou organisation engagée en Île-de-France. 
        </p>
        <Title5 title='Pour un projet numérique plus inclusif et éco-responsable demain' />
        <p>
          De la startup du recyclage à une administration en passant par le grand groupe ou une association de l'Economie Sociale et Solidaire c'est le projet qui est mon moteur.
        </p>
        <Title4 title='Quel est mon apport?' />
        <p className='pb-3'></p>
        <Title5 title='Qualitatif' />
        <p className='pb-6'>
          Mon écoute, ma connaissance des standards "web", ma veille technologique et mon respect de la confidentialité via des 
          <SpanGreen text='outils hors-ligne comme stylelint' />
          font de vos projets des sites accessibles et éco-conçus. 
        </p>
        <Title5 title='Quantitatif' />
        <p className='pb-8'>
          Mon audit Lighthouse affiche régulièrement 
          <SpanViolet text='100/100 au SEO' />
          et à l’
          <SpanGreen text='accessibilité.' />
        </p>
        <Title5 title='Précepte' />
        <p>
          Grâce aux projets OpenClassrooms concrets et au mentorat j'ai développé ma capacité à 
          <span
            className='
              mx-2 
              font-extrabold'
          >
            résoudre les problèmes et mon autonomie.
          </span>
        </p>
        <p>
          J’aiderai ainsi une organisation à renforcer sa présence digitale tout en 
          <SpanGreen  text='limitant ses coûts de maintenance' />
          par ma progression continue en rendu statique performant côté client puis serveur, extraction de données via API ReST, "design", "fullstack", devOps, cloud et architecture.
        </p>
        <p className='pt-4'>
          J'adhère à « 
          <span 
            className='
              mx-2 
              font-extrabold '
          >
            Focus on serving your users, and all else will follow. 
          </span>
          » – Matt Cutts ancien responsable webspam de Google
        </p>
      </Section>
      <Section>
        <Title3
          title='compétences'
          id='competences'
        />
        <h4
            className='
              pb-8 
              text-2xl
              leading-loose'
          >
            clés
        </h4>
        <p className='text-xl'>
          Vous avez besoin d'un site "web" à votre image?
        </p>
        <p
           className='
            pt-10 
            pb-10 
            text-xl'>
          Je transforme un "brief" en écrans propres, "responsives" et frugaux.
        </p>
        <div id='skills-root'></div>
      </Section>
      <Section>
        <Title3
          title='projets'
          id='projets'
        />
        <Portfolio projectsPath={ projectsPath }
        />
      </Section>
      <Section>
        <Title3 
          title='parcours'
          id='parcours'
        />
        <h4
          className='
            pt-2
            pb-8 
            text-2xl
            leading-loose'
        >
          intégrateur "web"
        </h4>
        <h5 
          className='
            text-2xl
            mx-2'
        >
          <div 
            className='
              group
              relative'
          >
            <Link
              href='https://www.francecompetences.fr/recherche/rncp/38145/'
              text='RNCP 38145'
            />
            <LinkClickWarning />
          </div>
        </h5>
        <p 
          className='
            pt-4
            pb-4'>
          à votre  service
        </p>
        <div 
          className='
            group
            relative'
        >
          <Link
            href='https://openclassrooms.com/fr/paths/900-integrateur-web#projects'
            text='Suivez le parcours.'
          />
          <LinkClickWarning />
        </div>
        <h6 className='pt-6'>
          22 avril 2024 au 21 décembre 2025
        </h6>
      </Section>
      <Section>
        <Title3
          title='contact'
          id='contact'
        />
        <p
          className='
            pt-8 
            pb-16 
            text-2xl'
        >
          Contribuons 
          <SpanGreen text='doucement' />
          à votre 
          <span
            className='
              mx-2
              font-extrabold
              text-gray-500'
          >
            projet
          </span> 
          "web" avec 
          <SpanGreen text='impact.' />
        </p>
        <LazyLoadWrapper>
          <div 
            className='
              flex
              flex-wrap
              justify-center
              items-center'
          >
            <LogoLinkHomeContact
                href='https://github.com/ericDev1o' 
                src={ githubLogo } 
                altText='GitHub logo'
            />
            <LogoLinkHomeContact
              href='https://linkedin.com/in/ericfaraut' 
              src={ linkedinLogo } 
              altText='LinkedIn logo' 
            />
            <div
              className='
                group
                relative'
              >
                <Link
                  href='https://calendly.com/d/cxcb-3st-m8k/15-minutes'
                  text='https://calendly.com/d/cxcb-3st-m8k/15-minutes'
                />
              <LinkClickWarning />
            </div>
          </div>
        </LazyLoadWrapper>
        <div
          className='
            group
            relative'>
          <a 
            href='https://framaforms.org/contact-eric-faraut-1762791991'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button 
                className='
                  mt-18 
                  w-full 
                  sm:w-auto 
                  px-5 
                  py-2.5 
                  text-2xl 
                  cursor-pointer 
                  font-medium 
                  text-center 
                  text-gray-200  
                  bg-blue-600 
                  hover:bg-blue-700 
                  focus:ring-4 
                  focus:outline-none 
                  focus:ring-blue-300 
                  rounded-lg'
              >
                Prévoyons de parler de votre projet de site "web"
              </button>
            </a>
            <LinkClickWarning />
          </div>
      </Section>
  </article>
  <hr 
      className='
        my-16 
        h-px 
        border-0 
        bg-gray-600'
  />
</main>
}
