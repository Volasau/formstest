// import React from 'react';
// import { useForm } from 'react-hook-form';

// function MyForm() {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         name="example"
//         ref={register({ required: 'This field is required' })}
//       />
//       {errors.example && <p>{errors.example.message}</p>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;

import style from './FormHook.module.css';

function FormHook() {
  return (
    <>
      <div className={style.title}>
        <h3 className={style.text}>FormUN</h3>
      </div>
    </>
  );
}

export default FormHook;
