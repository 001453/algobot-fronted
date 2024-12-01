import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './i18n';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Diğer sayfalar için Route'lar ekleyin */}
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
