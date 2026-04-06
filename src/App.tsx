import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
