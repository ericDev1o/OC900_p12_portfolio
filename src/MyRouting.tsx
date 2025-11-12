import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Error404 from './pages/Error404';
import Layout from './components/containers/Layout';

/**
 * 
 * @returns <BrowserRouter basename='/OC900_p12_portfolio'>
 * on gh-pages else build <BrowserRouter>
 */
export default function MyRouting() {
    return <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projets' element={<Projects />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </Layout>
    </BrowserRouter>
}