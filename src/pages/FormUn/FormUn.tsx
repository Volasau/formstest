import FormNot from '../../components/FormNot/FormNot';
import LinkToHome from '../../components/LinkToHome/LinkToHome';
import style from './FormUN.module.css';

function FormUN() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h3 className={style.text}>FormUN</h3>
        </div>
        <div>
          <FormNot />
        </div>
        <LinkToHome />
      </div>
    </>
  );
}

export default FormUN;
