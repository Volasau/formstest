import { configureStore } from '@reduxjs/toolkit';
// import formSlice from '../features/formSlice';

import countriesSlice from './countryData';

export const store = configureStore({
  reducer: {
    // form: formSlice,

    countries: countriesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
