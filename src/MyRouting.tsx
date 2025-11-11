import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Error404 from './pages/Error404';
import Layout from './components/containers/Layout';

const MyRouting = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projets' element={<Projects />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default MyRouting;