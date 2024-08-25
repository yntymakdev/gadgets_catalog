import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ProductList } from '../../components/ProductList/ProductList';
import { Breadcrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import s from './FavoritesPage.module.scss';

export const FavoritesPage = () => {
  const { pathname } = useLocation();
  const category = pathname.slice(1);
  const { favorites } = useAppSelector((state) => state.favorites);
  return (
    <>
      <Breadcrumbs category={category} />
      <h1 className={s.title}>Favourites</h1>
      <p className={s.subtitle}>{favorites.length} items</p>
      <ProductList products={favorites} isHaveSlider={false} />
    </>
  );
};
