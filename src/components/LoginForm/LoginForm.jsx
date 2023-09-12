import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';
import style from './LoginForm.module.css'



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectAuthIsLoading);

  const userRegisterData = {
    email,
    password,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return null;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(login(userRegisterData)).then(response => {
      if (response.payload === 'Login failed, error code - 400') {
        toast.error('Oops.. Incorrect e-mail or password!');
        return;
      }
      if (response.payload === 'Network Error') {
        toast.error('Oops..Network Error!');
        return;
      }
      if (response.payload.token) {
        toast.success('Congratulations! You have successfully logged in!');
        navigate('/', { replace: true });
        onFormReset();
      }
    });
  };

  const onFormReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <p className={style.login_form_title}>Log in</p>
      <form className={style.login_form_container} onSubmit={onFormSubmit}>
        <label className={style.login_form_label}>
          Email
          <input
            onChange={onInputChange}
            value={email}
            type="email"
            name="email"
            required
            placeholder="Enter your e-mail"
          />
        </label>
        <label className={style.login_form_label}>
          Password
          <input
            onChange={onInputChange}
            value={password}
            type="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </label>

        <button className={style.login_form_button} type="submit">
          Log in
        </button>
      </form>
      {isLoading && <Loader />}
    </>
  );
};