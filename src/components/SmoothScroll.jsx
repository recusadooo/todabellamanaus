import React from 'react'

const SmoothScroll = ({ to, children, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault()
    const element = document.getElementById(to)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

export default SmoothScroll

