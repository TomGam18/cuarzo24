import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import ObrasPage from './pages/ObrasPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/obras" element={<ObrasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
