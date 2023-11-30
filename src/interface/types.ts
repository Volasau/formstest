// types.js
export interface RootState {
  images: string[]; // тип данных для изображений, замените на свой
}

export interface AddImageAction {
  type: 'ADD_IMAGE';
  payload: string; // тип данных для изображения, замените на свой
}

export type AppAction = AddImageAction;
