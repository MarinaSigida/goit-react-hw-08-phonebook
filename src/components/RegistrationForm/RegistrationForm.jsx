import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
import style from './RegistrationForm.module.css'



export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectAuthIsLoading);

  const userRegisterData = {
    name,
    email,
    password,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register(userRegisterData)).then(response => {
        console.log(response);
      if (response.payload === 'Registration incomplete, error code - 400') {
        toast.error('Oops...This user already exists!');
        return;
      }
      if (response.payload === 'Network Error') {
        toast.error('Oops..Network Error!');
        return;
      }
      if (response.payload.token) {
        toast.success('Congratulations! You have successfully signed in!');
        navigate('/', { replace: true });
        onFormReset();
      }
    });
  };

  const onFormReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <p className={style.registration_form_title}>Sign up form</p>
      <form onSubmit={onFormSubmit}>
        <label className={style.registration_form_label}>
          Name
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            className={style.registration_form_input}
            value={name}
            required
            placeholder="Enter your name"
          />
        </label>
        <label className={style.registration_form_label}>
          E-mail
          <input
            onChange={onInputChange}
            value={email}
            type="email"
            name="email"
            className={style.registration_form_input}
            required
            placeholder="Enter your e-mail"
          />
        </label>
        <p className={style.registration_form_label}>
          Password
          <input
            onChange={onInputChange}
            value={password}
            type="password"
            name="password"
            className={style.registration_form_input}
            required
            placeholder="Enter your password"
          />
        </p>

        <button type="submit" className={style.registration_form_button}>
          Sign up
        </button>
      </form>
      {isLoading && <Loader />}
    </>
  );
};