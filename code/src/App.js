import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { nutritionInfo } from './reducers/nutritionInfo'
import { ScanBarcode } from "components/ScanBarcode";
import { NutritionList } from 'components/NutritionList'

const reducer = combineReducers({
  nutritionInfo: nutritionInfo.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NutritionList />
      </div>
    </Provider>
  );
};
