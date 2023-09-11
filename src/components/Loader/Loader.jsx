import style from './Loader.module.css';

export function Loader() {
  return (
    <div className={style.overlay}>
      <div className={style.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}