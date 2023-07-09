import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '/movies', title: 'Movies' },
  ];
  return (
    <>
      <header className={css.header}>
        <ul className={css.navList}>
          {links.map(({ href, title }) => (
            <li key={href}>
              <NavLink to={href} className={css.navLink}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <Suspense fallback={<Loader />}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
