import { selectAuthToken, selectAuthUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import style from './HomePage.module.css';

const HomePage = () => {
  const token = useSelector(selectAuthToken);
  const { name } = useSelector(selectAuthUser);
  return (
    <div className={style.home_page_main}>
      {token ? (
        <>
          <title className={style.home_page_title}>Welcome, {name}</title>
          <p className={style.home_page_info}>
            This is your personal Phonebook
          </p>
        </>
      ) : (
        <>
          <title className={style.home_page_title}>
            Welcome to the Phonebook
          </title>
          <p className={style.home_page_info}>
            Ready to use it? Please, Sign up or Log in
          </p>
        </>
      )}
    </div>
  );
};

export default HomePage;
