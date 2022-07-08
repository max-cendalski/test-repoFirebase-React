import { useState, useEffect } from "react"


const Loading = () => {
  const [loadingClass, setLoadingClass] = useState('loading-element')
  useEffect(()=> {
    setInterval(()=> {
      setLoadingClass('loading-element-two')
    })
  },[])
  return (
    <div className={loadingClass}>

    </div>
  )
}

export default Loading
