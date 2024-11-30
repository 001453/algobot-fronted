import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Trading from '../pages/Trading';
import History from '../pages/History';
import Settings from '../pages/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/trading" element={<Trading />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;