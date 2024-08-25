import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { IconRight } from '../../ui/IconRight/IconRight';
import IconHome from '../../assets/images/home.svg';
import { capitalize } from '../../utils';

import s from './BreadCrumbs.module.scss';

type Props = {
  category: string | undefined;
  productName?: string;
};

export const Breadcrumbs: React.FC<Props> = ({ category, productName }) => {
  const { pathname } = useLocation();

  return (
    <div className={s.breadcrumbs}>
      <Link className={s.link} to="/">
        <img className={s.icon} src={IconHome} alt="icon" />
      </Link>

      <IconRight fill="#4A4D58 " />

      {category !== pathname.slice(1) ? (
        <Link
          to={`/${category}`}
          className={cn(s.path, s.link, {
            [s['path--active']]: category !== pathname.slice(1),
          })}>
          {category && capitalize(category)}
        </Link>
      ) : (
        <p className={cn(s.path)}>{capitalize(category)}</p>
      )}

      {productName && <IconRight fill="#4A4D58 " />}

      <p className={s.path}>{productName && capitalize(productName)}</p>
    </div>
  );
};
