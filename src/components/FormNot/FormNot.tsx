import React from 'react';
import style from './FormNot.module.css';

function FormNot() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    console.log(event);
    event.preventDefault();
  };
  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default FormNot;
