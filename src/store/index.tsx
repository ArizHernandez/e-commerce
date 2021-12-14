import React, { PropsWithChildren } from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    Auth: authReducer,
  },
});

type Props = {};

export function StoreProvider({ children }: PropsWithChildren<Props>) {
  return <Provider store={store}>{children}</Provider>;
}
