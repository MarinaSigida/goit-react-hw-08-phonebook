import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/authSelectors';

import style from './Navigation.module.css';

export const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
    <div className={style.navigation_link_container}>
      <NavLink className={style.navigation_link} to="/" end>
        Home
      </NavLink>
      {token && (
        <NavLink className={style.navigation_link} to="phonebook">
          Phonebook
        </NavLink>
      )}
    </div>
  );
};
