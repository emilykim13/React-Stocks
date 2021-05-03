import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    if (this.props.filteredStocks.length === 0) {
      return this.props.stocks.map(stock=>{
         return <Stock transaction={this.props.transaction} key={stock.id} stock={stock} />
      })
    } else {
      return this.props.filteredStocks.map(stock=>{
        return <Stock transaction={this.props.transaction} key={stock.id} stock={stock} />
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}  
      </div>
    )
  }

}

export default StockContainer;
