import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import settingReducer from './setting/reducers';
import streamitReducer from './streamit/reducers';
import streamitMedia from './media/reducers';
import streamitShop from './shop/reducers';

export const makeStore = () => {
  return configureStore({
    reducer: {
      setting: settingReducer,
      streamit: streamitReducer,
      shop: streamitShop,
      media: streamitMedia
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapperStore = createWrapper(makeStore);
