import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/authOperations';
import { selectAuthUser } from 'redux/auth/authSelectors';
import { useMedia } from 'react-use';
import { toast } from 'react-toastify';
import style from './UserMenu.module.css';



export const UserMenu = () => {
  const isMobile = useMedia('(max-width: 768px)');
  const { name } = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout()).then(response => {
      if (response.payload === 'Request failed, error 400') {
        toast.error('Oops...Something happened. Try later!');
        return;
      }
      if (!response.payload) {
        toast.success('Logged out! Come back soon!');
        navigate('/', { replace: true });
      }
    });
  };

  return (
    <div className={style.user_menu_container}>
      {!isMobile && (
        <p className={style.welcome_user}>Welcome, {name}!</p>
      )}

      <button className={style.logoutBtn} onClick={onLogout} type="button">
        Log out
      </button>
    </div>
  );
};