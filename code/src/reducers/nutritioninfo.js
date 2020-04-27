import { createSlice } from '@reduxjs/toolkit'

export const nutritioninfo = createSlice({
  name: 'nutritioninfo',
  initialState: {
    items: []
  },

  reducers: {
    setNutritioninfo: (store, action) => {
      store.items = action.payload;
    }
  }
})


export const fetchFood = (code) => {
  console.log(`Code: ${code}`)
  const FOOD_URL = `https://world.openfoodfacts.org/api/v0/product/${code}.json`;
  return (dispatch) => {
    fetch(FOOD_URL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        if (json.product) {

          dispatch(nutritioninfo.actions.setNutritioninfo(json))

        }
      })
      ;
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
