import { NavLink, useLocation } from 'react-router-dom';
import s from './NavigationButton.module.scss';

import cn from 'classnames';

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export const NavigationButton: React.FC<Props> = ({ children, href, className }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={href}
      state={{
        prevPath: pathname,
      }}
      className={({ isActive }) =>
        cn(s.Link, s[className as string], {
          [s.Active]: isActive,
        })
      }>
      {children}
    </NavLink>
  );
};
