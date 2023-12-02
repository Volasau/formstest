import { createSlice } from '@reduxjs/toolkit';
import { FormData } from '../type/types';

interface State {
  formInfo: FormData[];
  newForm: boolean;
}

const initialState: State = {
  formInfo: [],
  newForm: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm(state, action) {
      state.newForm = true;
      const { firstName, age, email, password, gender, picture, country } =
        action.payload;
      state.formInfo.unshift({
        firstName,
        age,
        email,
        password,
        gender,
        country,
        picture,
      });
    },
    addNewForm(state, action) {
      state.newForm = action.payload;
    },
  },
});

export const { addForm, addNewForm } = formSlice.actions;
export default formSlice.reducer;
