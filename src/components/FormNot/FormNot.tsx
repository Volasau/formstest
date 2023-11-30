// import React, { useState } from 'react';
// import style from './FormNot.module.css';

// const FormNot = () => {
//   // Явно указываем типы для состояний
//   const [formData, setFormData] = useState<{ name: string; age: string }>({
//     name: '',
//     age: '',
//   });
//   const [data, setData] = useState<{ name: string; age: string }[]>([]);

//   // Обработчик изменения значений полей ввода
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     // Обновление состояния formData
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Обработчик отправки формы
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Добавление текущих данных из formData в массив data
//     setData((prevData) => [...prevData, formData]);
//     // Сброс значений полей формы
//     setFormData({ name: '', age: '' });
//   };

//   return (
//     <>
//       <div className={style.container}>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Имя:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//           <br />
//           <label htmlFor="age">Возраст:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             min="1"
//             value={formData.age}
//             onChange={handleInputChange}
//             required
//           />
//           <br />
//           <button type="submit">Отправить</button>
//         </form>
//       </div>

//       {/* Отображение отправленных данных */}
//       <div>
//         <h2>Отправленные данные:</h2>
//         <ul>
//           {data.map((item, index) => (
//             <li key={index}>{`Имя: ${item.name}, Возраст: ${item.age}`}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default FormNot;
