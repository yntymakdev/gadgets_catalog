import { Link, useLocation } from 'react-router-dom';
import { IconLeft } from '../../ui/IconLeft/IconLeft';
import s from './ButtonBack.module.scss';

export const ButtonBack: React.FC = () => {
  const { state } = useLocation();
  return (
    <Link className={s.LinkBack} to={state?.prevPath || '/'}>
      <IconLeft fill="#f1f2f9" />
      <p className={s.text}>Back</p>
    </Link>
  );
};
