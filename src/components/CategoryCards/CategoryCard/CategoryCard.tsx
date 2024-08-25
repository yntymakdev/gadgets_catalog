import { Link } from 'react-router-dom';

import s from './CategoryCard.module.scss';

type Props = {
  image: string;
  category: string;
  total: number;
  href: string;
};

export const CategoryCard: React.FC<Props> = ({ image, category, total, href }) => {
  return (
    <Link className={s.wrapper} to={href}>
      <div className={s.card}>
        <img className={s.picture} src={image} alt={category} />
        <p className={s.title}>{category}</p>
        <p className={s.subtitle}>{total} models</p>
      </div>
    </Link>
  );
};
