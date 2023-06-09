import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { languageReducer } from './slices/languageSlice';
import { menuOpenCloseReducer } from './slices/menuCloseSlice';
import { themeReducer } from './slices/themeSlice';
import { isScrollAppearReducer } from './slices/isScrollAppearSlice';
import { mobileMenuOpenCloseReducer } from './slices/mobileMenuOpenClose';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    menuOpenClose: menuOpenCloseReducer,
    theme: themeReducer,
    isScrollAppear: isScrollAppearReducer,
    mobileMenuOpenClose: mobileMenuOpenCloseReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
