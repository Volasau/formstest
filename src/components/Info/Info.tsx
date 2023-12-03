import { InfoData } from '../../type/types';
import style from './Info.module.css';
// import Img from '../../../public/forms3.png';

export function Info(props: InfoData & { className: string }) {
  const { data, className } = props;
  return (
    <>
      <div className={`${style.container} ${className}`}>
        <div className={style.wrapper}>
          <p>Name: {data.firstName}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
          <p>Gender: {data.gender}</p>
          <p>Country: {data.country}</p>
          {/* <img src={Img} className={style.picture} alt="image" /> */}
          <img src={data.picture} className={style.picture} alt="image" />
        </div>
      </div>
    </>
  );
}

export default Info;
