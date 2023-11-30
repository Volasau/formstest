// import Header from '../../components/Header/Header';
import style from './Home.module.css';

function Home() {
  return (
    <>
      <div className={style.container}>
        {/* <div className={style.header}>
          <Header />
        </div> */}
        <div className={style.title}>
          <h3 className={style.text}>Forms HOME</h3>
        </div>
        <div className={style.container__forms}>
          <h5>Saved Forms</h5>
        </div>
      </div>
    </>
  );
}

export default Home;
