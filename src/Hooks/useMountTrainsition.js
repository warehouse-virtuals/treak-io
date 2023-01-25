import { useEffect, useState } from "react"

import { UIToolsStatus } from "../Context/UIToolsStatusContext"

const useMountTransition = (unmountDelay) => {
  const { isNavbarCollapsed } = UIToolsStatus()
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false)

  useEffect(() => {
    let timeoutId

    if (!isNavbarCollapsed && !hasTransitionedIn) {
      setHasTransitionedIn(true)
    } else if (isNavbarCollapsed && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [unmountDelay, hasTransitionedIn])

  return hasTransitionedIn
}
export default useMountTransition
