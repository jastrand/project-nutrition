// print data from api ; name of the product, manufacturing countries, environment stats 
// check if the manufacturing countries include sweden
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nutritionInfo, fetchFood } from 'reducers/nutritionInfo'
import { ScanBarcode } from './ScanBarcode'
import { LoadingLottie } from './LoadingLottie'


export const NutritionList = () => {

  const dispatch = useDispatch();

  const food = useSelector((store) => store.nutritionInfo.productDetails)
  const isLoading = useSelector((store) => store.nutritionInfo.isLoading)
  console.log(isLoading)
  /* useEffect((code) => {
    dispatch(fetchFood(code))
  }, [dispatch(), food]) */

  if (!isLoading.isLoading && food.status === 0) {
    return (
      <ScanBarcode />
    )
  } else if (isLoading.isLoading) {
    return (
      <LoadingLottie />
    )
  } else if (!isLoading.isLoading && food.status === 1) {
    console.log(isLoading)
    return (
      <>
        <h1>Product name: {food.product.product_name_sv}</h1>
        <h1>Origin: {food.product.origins_tags}</h1>
      </>
    )
  } else if (food.status === 0) {
    return (
      <>
        <p>Product is not found!</p>
      </>
    )
  } else {
    return (
      <>
        <ScanBarcode />
      </>
    )
  }
}
