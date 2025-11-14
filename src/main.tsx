import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeInit } from '../.flowbite-react/init';

import './index.css';
import MyRouting from './MyRouting';

const root = document.getElementById('root');
if(root) {
  createRoot(root).render(
    <StrictMode>
      <MyRouting />
    </StrictMode>
  );
}
