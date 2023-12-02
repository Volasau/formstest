import React from 'react';
import { Info } from '../Info/Info';
import style from './InfoList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function InfoList() {
  const { formInfo, newForm } = useSelector((state: RootState) => state.form);
  return (
    <>
      <div className={style.container}>
        {formInfo.map((tile, index) => (
          <Info
            key={`tile-${index}`}
            data={tile}
            newForm={newForm && index === 0 ? newForm : false}
          />
        ))}
      </div>
    </>
  );
}

export default InfoList;
