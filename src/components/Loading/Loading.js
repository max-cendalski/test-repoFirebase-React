import { useState, useEffect } from "react"

const Loading = () => {
  const [loadingClass, setLoadingClass] = useState('loading-element')

  useEffect(()=> {
    setTimeout(()=> {
      setLoadingClass('loading-element-two')
    },10)
  },[])

  return (
    <div className={loadingClass}>

    </div>
  )
}

export default Loading
