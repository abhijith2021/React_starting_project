import React from 'react'

export const TabButton = ({children,onSelect,isSelected}) => {
    
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
  )
}
