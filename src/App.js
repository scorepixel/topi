import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Styles
import "./assets/styles/app.scss";

//Components
import Layout from './components/Layout/Layout';
import CustomerList from './views/CustomersList/CustomersList';
import CustomerProfile from './views/CustomersProfile/CustomersProfile';
import NotFound from './views/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="*" element={<NotFound />} />

        <Route element={<Layout />}>

          <Route index element={<Navigate to="/customers/" />} />

          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":id" element={<CustomerProfile />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
