import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { nutritionInfo } from './reducers/nutritionInfo'
import { ui } from './reducers/ui'
import { ScanBarcode } from "components/ScanBarcode";

const reducer = combineReducers({
  nutritionInfo: nutritionInfo.reducer,
  ui: ui.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ScanBarcode />
      </div>
    </Provider>
  );
};
