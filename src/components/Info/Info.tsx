import { InfoData } from '../../type/types';
import style from './Info.module.css';
import Img from '../../../public/forms3.png';

export function Info(props: InfoData) {
  const { data, newForm } = props;
  return (
    <>
      <div className={style.container}>
        <div className={newForm ? style.active : style.unactive}>
          <p>Name: {data.firstName}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
          <p>Gender: {data.gender}</p>
          <p>Country: {data.country}</p>
          <img
            src={Img}
            /*src={data.picture}*/ className={style.picture}
            alt="image"
          />
        </div>
      </div>
    </>
  );
}

export default Info;
