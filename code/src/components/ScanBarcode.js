import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { useDispatch, useSelector } from 'react-redux'
import { nutritionInfo, fetchFood } from 'reducers/nutritionInfo'
import { NutritionList } from './NutritionList'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()


  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchFood(code))
        }} />
      )}

      {/* {isLoading && <LoadingLottie />} */}
      {/* {!isLoading && !showScanner && <NutritionList />} */}

    </>
  )
}