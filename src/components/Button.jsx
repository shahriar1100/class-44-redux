import React from 'react'

const Button = ({btnText,onClick}) => {
  return (
    <button onClick={onClick} className={`py-2.5 px-4 bg-amber-100`}>{btnText}</button>
  )
}

export default Button