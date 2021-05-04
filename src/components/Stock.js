import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={() => props.clickOnFunction(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.ticker + ": " + `${props.price}`
        }
        </p>
      </div>
    </div>


  </div>
);

export default Stock