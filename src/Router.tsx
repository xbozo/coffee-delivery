import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Checkout } from './pages/Checkout';
import { ConfirmedOrder } from './pages/ConfirmedOrder';
import { Home } from './pages/Home';

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmedorder" element={<ConfirmedOrder />} />
      </Routes>
    </BrowserRouter>
  );
};
