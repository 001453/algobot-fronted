import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Diğer sayfalar için Route'lar ekleyin */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;