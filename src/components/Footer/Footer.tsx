import { useEffect, useState } from 'react';

import { logo } from '../../assets';
import iconTop from '../../assets/images/arrow-right-primary.svg';

import s from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [isScrollToTop, setIsScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    setIsScrollToTop(true);
  };

  useEffect(() => {
    if (isScrollToTop) {
      setIsScrollToTop(false);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isScrollToTop]);

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.logo}>
            <img src={logo} alt="logo" />
          </div>

          <ul className={s.socials}>
            <li className={s.item}>
              <Link className={s.link} to="https://github.com/adikssl">
                Github
              </Link>
            </li>
            <li className={s.item}>
              <a className={s.link} href="#">
                Contacts
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="#">
                Rights
              </a>
            </li>
          </ul>
          <div className={s.buttons}>
            <p className={s.text}>Back to top</p>
            <button onClick={handleScrollToTop} className={s.button}>
              <img src={iconTop} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
