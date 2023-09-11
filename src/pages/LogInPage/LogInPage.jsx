import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import style from './LogInPage.module.css';

export const LogInPage = () => {
  return (
    <div className={style.login_page_title}>
      <Helmet>
      <title>Log in</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LogInPage;



