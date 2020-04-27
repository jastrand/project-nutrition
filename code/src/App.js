import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { nutritioninfo } from './reducers/nutritioninfo'
import { ui } from './reducers/ui'
import { ScanBarcode } from "components/ScanBarcode";
import { NutritionList } from 'components/NutritionList'

const reducer = combineReducers({
  nutritioninfo: nutritioninfo.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ScanBarcode />
        <NutritionList />
        {/* <label>
          {" "}
        Test codes here:{" "}
          <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
        </label>
        <p>
          {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p> */}
      </div>
    </Provider>
  );
};
