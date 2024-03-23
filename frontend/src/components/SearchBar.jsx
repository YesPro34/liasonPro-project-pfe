import React from 'react'

function SearchBar({className,placeholder}) {
  return (
    <div>
        <input placeholder={placeholder} type="text" className={className}/>
    </div>

  )
}

export default SearchBar
