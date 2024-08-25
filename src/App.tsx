import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Settings from './pages/Settings';
import Report from './pages/Report';
import Invoice from './pages/Invoice';
import { store } from './redux/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/activities' element={<Activity />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/reports' element={<Report />} />
            <Route path='/invoices' element={<Invoice />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
