import React, { useState } from 'react'
import { useEffect } from 'react'

function AppReady({ children }) {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, [5000])
    return () => {
      clearTimeout(() => {
        setLoader(false)
      }, [5000])
    }
  }, [])

  if (loader) {
    return <Loader />
  } else {
    return <> {children}</>
  }
}

function Loader() {
  return (
    <div className="loader d-flex justify-content-center align-items-center">
      <div>
        <div className="loader-sub"></div>
        <div className="loader-sub-1"></div>
      </div>
    </div>
  )
}

export default AppReady
