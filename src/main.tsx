import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SkillsLogoProvider } from './contexts/SkillsLogoContext';

import './index.css';

import './components/containers/skills.mount';

import Home from './pages/Home';
import Layout from './components/containers/Layout';

const root = document.getElementById('root');
if(root) {
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
