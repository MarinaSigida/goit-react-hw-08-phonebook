import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import style from './AppBar.module.css';


export const AppBar = () => {
  const token = useSelector(selectAuthToken);
  return (
    <header className={style.header}>
      <Navigation />
      {token ? <UserMenu /> : <AuthNav />}
    </header>
  );
};