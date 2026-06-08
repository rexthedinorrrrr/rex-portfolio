import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import ContactFooter from './components/ContactFooter';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />

        <main className="site">
          <Routes>
            <Route index element={<Navigate to="/resume" replace />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/resume" replace />} />
          </Routes>
        </main>

        <ContactFooter />
      </div>
    </HashRouter>
  );
}

export default App;