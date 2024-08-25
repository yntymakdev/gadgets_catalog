import React from 'react';
import s from './MainLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className={s.main}>
      <div className={s.container}>{children}</div>
    </main>
  );
};
