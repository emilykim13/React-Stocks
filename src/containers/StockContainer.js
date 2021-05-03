import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    if (this.props.sortedStocks.length === 0) {
      return this.props.stocks.map(stock => {
        return <Stock 
        name={stock.name} 
        stock={stock}
        key={stock.id}
        price={stock.price} 
        type={stock.type} 
        ticker={stock.ticker} 
        clickOnFunction={this.props.addToPortfolio}
      /> 
      })
    }else{
      return this.props.sortedStocks.map(stock => {
        return <Stock 
        name={stock.name} 
        key={stock.id}
        stock={stock}
        price={stock.price} 
        type={stock.type} 
        ticker={stock.ticker} 
        clickOnFunction={this.props.addToPortfolio}
      /> 
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
        {/* {this.props.stocks.map(stock => {
          return <Stock 
            name={stock.name} 
            stock={stock}
            price={stock.price} 
            type={stock.type} 
            ticker={stock.ticker} 
            clickOnFunction={this.props.addToPortfolio}
          /> 
        })} */}
      </div>
    );
  }


}

export default StockContainer;