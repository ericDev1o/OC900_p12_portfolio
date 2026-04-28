import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SkillsLogoProvider } from './contexts/SkillsLogoProvider';

import './index.css';

import Layout from './components/containers/Layout';

import Home from './pages/Home';

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
