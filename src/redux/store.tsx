// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { AppAction, RootState } from '../interface/types';

// const initialState: RootState = {
//   images: [],
// };

// const rootReducer = (
//   state: RootState = initialState,
//   action: AppAction
// ): RootState => {
//   switch (action.type) {
//     case 'ADD_IMAGE':
//       return {
//         ...state,
//         images: [...state.images, action.payload],
//       };
//     // Добавьте другие обработчики действий при необходимости

//     default:
//       return state;
//   }
// };

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
