import './config/i18next';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Modal from 'react-modal';

import { SkillsLogoProvider } from './contexts/SkillsLogoContext';

import './index.css';

import Home from './pages/Home';
import Layout from './components/containers/Layout';

const root = document.getElementById('root');
if(root) {
  Modal.setAppElement('#root');

  createRoot(root).render(
    <StrictMode>
      <SkillsLogoProvider>
        <Layout>
          <Home />
        </Layout>
       </SkillsLogoProvider>
    </StrictMode>
  );
}
