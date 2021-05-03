import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.stocks.map(stock => {
          return <Stock 
            name={stock.name} 
            stock={stock}
            price={stock.price} 
            type={stock.type} 
            ticker={stock.ticker} 
            clickOnFunction={this.props.takeAwayStock}
          /> 
        })}
      </div>
    );
  }

}

export default PortfolioContainer;