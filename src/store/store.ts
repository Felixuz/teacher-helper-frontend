import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
});

export type TDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
