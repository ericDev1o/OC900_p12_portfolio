import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'flowbite';

import './index.css';
import Home from './pages/Home';
import Layout from './components/containers/Layout';

const root = document.getElementById('root');
if(root) {
  createRoot(root).render(
    <StrictMode>
      <Layout>
        <Home />
      </Layout>
    </StrictMode>
  );
}
