import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchFood } from 'reducers/nutritioninfo'

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
    </>
  )
}