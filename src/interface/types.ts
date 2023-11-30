// types.js
export interface RootState {
  images: string[]; // тип данных для изображений, замените на свой
}

export interface AddImageAction {
  type: 'ADD_IMAGE';
  payload: string; // тип данных для изображения, замените на свой
}

export type AppAction = AddImageAction;

export interface UIDataForm {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  acceptTerms: boolean;
  image: string;
  country: string;
}
