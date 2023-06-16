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
       <div className="wetherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>
  )
}

export default Search
