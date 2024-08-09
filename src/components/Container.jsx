import React from 'react'

function Container({children, className}) {
  return (
    <div className={`pr-[84px] pl-[84px] ${className}`}>
        {children}
    </div>
  )
}

export default Container
