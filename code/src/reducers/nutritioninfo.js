import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const nutritionInfo = createSlice({
  name: 'nutritionInfo',
  initialState: {
    productDetails: []
  },
  reducers: {
    setNutritionInfo: (store, action) => {
      store.productDetails = action.payload; // This is json.product from API
    }
  }
})


export const fetchFood = (code) => {
  const FOOD_URL = `https://world.openfoodfacts.org/api/v0/product/${code}.json`;
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(FOOD_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(nutritionInfo.actions.setNutritionInfo(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

