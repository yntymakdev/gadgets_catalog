import { Route, Routes } from 'react-router-dom';

import { App } from '../App';
import { CartPage } from '../pages/CartPage/CartPage';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { HomePage } from '../pages/HomePage/Home';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { ProductDetailsPage } from '../pages/ProductDetailPage/ProductDetailsPage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path=":category" element={<ProductsPage />} />
        <Route path="product/:productId" element={<ProductDetailsPage />}></Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
