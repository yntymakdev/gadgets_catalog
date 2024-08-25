import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { SortAndPaginationMenu } from '../../ui/SortAndPaginationMenu/SortAndPaginationMenu';

import { Breadcrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { ProductList } from '../../components/ProductList/ProductList';

import { Categories } from '../../types/Categories';
import { Sorts, SortsType } from '../../types/Sorts';
import { capitalize } from '../../utils';

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '../../constans/pagination';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchProductsByCategory } from '../../redux/slices/productsSlice';
import { getSortedProducts } from '../../utils/getSortedProducts';
import styles from './ProductsPage.module.scss';

export const ProductsPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const { items, loading } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const sortQuery = searchParams.get('sort') || Sorts.age;
  const perPage = +(searchParams.get('perPage') || DEFAULT_PER_PAGE);
  const currentPage = +(searchParams.get('page') || DEFAULT_PAGE);

  const sortedPhones = getSortedProducts(items, sortQuery as SortsType);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage;

  const totalProducts = sortedPhones.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchProductsByCategory(category as Categories));
  }, [category, dispatch]);

  return (
    <>
      <Breadcrumbs category={category} />

      <p className={styles.Title}>{category && capitalize(category)}</p>
      <p className={styles.Subtitle}>{items.length} models</p>

      {loading && <Loader />}

      {items.length ? (
        <>
          <SortAndPaginationMenu />

          <ProductList products={totalProducts} isHaveSlider={false} isHotPrice={true} />
          <Pagination total={items.length} perPage={perPage} defaultPage={DEFAULT_PAGE} />
        </>
      ) : (
        <p>Products not found</p>
      )}
    </>
  );
};
