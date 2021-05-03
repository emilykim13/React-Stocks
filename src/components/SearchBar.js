import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
      {/* <input type="radio" value="Alphabetically" checked={null} onChange={() => props.sortLetter()}/> */}
        <input type="radio" value="Alphabetically" checked={null} onChange={props.sortLetter}/>
        Alphabetically
      </label>
      <label>
      {/* <input type="radio" value="Price" checked={null} onChange={() => props.sortPrice()}/> */}
        <input type="radio" value="Price" checked={null} onChange={props.sortPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=>props.filterType(e.target.value)}>
          <option value="">Choose one</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
