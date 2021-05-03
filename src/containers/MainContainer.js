import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state={
      stocks: [],
      portfolioStocks: [],
      sortedStocks: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(stock => this.setState({
      stocks: stock
    }))
  }

  addToPortfolio = (stock, id) => {
    if(this.state.stocks.includes(stock)){
      let currentStocks = [...this.state.stocks]
      let chosenStock = currentStocks.find(stock => {
        return stock.id === id
      })
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, chosenStock]
      })
    }
  }

  takeAwayStock = (stock, id) => {
    if(this.state.portfolioStocks.includes(stock)){
      let currentPStocks = [...this.state.portfolioStocks]
      let newPortfolioStocksArr = currentPStocks.filter(stock => {
        return stock.id !== id
      })
      this.setState({
        portfolioStocks: newPortfolioStocksArr
      })
    }
  }

  sortLetter = () => {
    let sortStocksArr = [...this.state.stocks]
    sortStocksArr.sort( function(a,b){
      let letterA = a.name.toLowerCase()
      let letterB = b.name.toLowerCase()
      if(letterA<letterB){return -1}
      if(letterA>letterB){return 1}
      else{return 0}
    })
    this.setState({
      sortedStocks: sortStocksArr
    })
  }

  sortPrice = () => {
    let sortPriceArr = [...this.state.sortedStocks]
    sortPriceArr.sort(function(a,b){
      let priceA = parseFloat(a.price)
      let priceB = parseFloat(b.price)
      return priceA - priceB
    })
    this.setState({
      sortedStocks: sortPriceArr
    })
  }

  filterType=(type)=>{
    console.log(type)
    let filterArr = [...this.state.stocks]
    let filtered = filterArr.filter(stock=>{
      return stock.type.includes(type)
    })
    this.setState({
      sortedStocks:filtered
    })
  }

  render() {
    return (
      <div>
        <SearchBar sortLetter={this.sortLetter} sortPrice={this.sortPrice} filterType={this.filterType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addToPortfolio={this.addToPortfolio} sortedStocks={this.state.sortedStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} takeAwayStock={this.takeAwayStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;