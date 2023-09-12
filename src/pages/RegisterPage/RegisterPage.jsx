import { Helmet } from 'react-helmet';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import style from './RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <div className={style.register_page}>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
