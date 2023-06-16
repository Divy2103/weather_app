import React, { useState } from 'react'

const Search = (props) => {

  const [inputCity, setInputCity] = useState('')

  const handleChangeInput = (e) => {
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    props.getWetherDetails(inputCity)
  }

  return (
    <>
      <h1 className="heading">Weather App</h1>
      <div className="field">
        <input
          type="text"
          placeholder="Search Your City ..."
          className="input"
          id="name"
          value={inputCity}
          autoComplete="off"
          onChange={handleChangeInput}
        />
        <i class="fa-sharp fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
        <button className="searchButton" type="button"
          onClick={handleSearch}
        >Search</button>
      </div>
    </>
  )
}

export default Search
