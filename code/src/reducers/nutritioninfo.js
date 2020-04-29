import { createSlice } from '@reduxjs/toolkit'
// import { ui } from './ui'

export const nutritionInfo = createSlice({
  name: 'nutritionInfo',
  initialState: {
    productDetails: [], isLoading: false
  },
  reducers: {
    setNutritionInfo: (store, action) => {
      store.productDetails = action.payload; // This is json.product from API
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
  }
})


export const fetchFood = (code) => {
  // console.log(`Code: ${code}`)
  // const FOOD_URL = `https://world.openfoodfacts.org/api/v0/product/${code}.json`;
  const FOOD_URL = `https://world.openfoodfacts.org/api/v0/product/8002270000218.json`;
  return (dispatch) => {
    dispatch(nutritionInfo.actions.setLoading({ isLoading: true }))
    fetch(FOOD_URL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(nutritionInfo.actions.setNutritionInfo(json))
        dispatch(nutritionInfo.actions.setLoading({ isLoading: false }))
      })
  }
}

// export const fetchProduct = (barcode) => {
//   return dispatch => {
//     dispatch(ui.actions.setLoading(true))  
//     fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
//       .then(res => res.json())
//       .then(json => {
//         dispatch(products.actions.setProduct(json))
//         dispatch(ui.actions.setLoading(false)) 
//       })
//   }
// }
