import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';


const Main = lazy(() => import('./pages/Main'));
const AboutMyCompany = lazy(() => import('./pages/AboutMyCompany'));
const PriceList = lazy(() => import('./pages/PriceList'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-my-company" element={<AboutMyCompany />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
