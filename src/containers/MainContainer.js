import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
      super()
      this.state={
      stocks: [],
      filteredStocks: [],
      portfolioStocks: [],
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/stocks")
    .then(res =>res.json())
    .then(stock => this.setState({
      stocks: stock
    }))
  }

  transaction=(stock,id)=>{
    if(this.state.stocks.includes(stock)){
      let stockCopy = [...this.state.stocks]
      let chosenStock= stockCopy.find(stock=>{
         return stock.id === id})
      console.log(chosenStock)
      let newStocks= stockCopy.filter(stock=>{
         return stock.id!== id
      })
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, chosenStock],
        stocks: newStocks
      })
    }
    else if (this.state.portfolioStocks.includes(stock)){
      let portfolioCopy = [...this.state.portfolioStocks]
      let chosenStock= portfolioCopy.find(stock=>{
         return stock.id === id})
      console.log(chosenStock)
      let newPortfolio= portfolioCopy.filter(stock=>{
         return stock.id!== id
      })
      this.setState({
        stocks: [...this.state.stocks, chosenStock],
        portfolioStocks: newPortfolio
      })
    }
  }

sortByAlpha=()=>{
  let alphabetized = [...this.state.stocks]
  alphabetized.sort(function(a,b){
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    if(nameA<nameB){
      return -1
    }
    if(nameA>nameB){
      return 1
    }else{
      return 0
    }
  })
  this.setState({
    filteredStocks: alphabetized
  })
}

  sortByPrice=()=>{
    let byPrice = [...this.state.filteredStocks]
    byPrice.sort(function(a,b){
      let priceA = parseFloat(a.price)
      let priceB = parseFloat(b.price)
      return priceA - priceB
    })
    this.setState({
      filteredStocks:byPrice
    })
  }

  filterbyType=(type)=>{
    let filterCopy = [...this.state.stocks]
    let filtered = filterCopy.filter(stock=>{
      return stock.type.includes(type)
    })
    this.setState({
      filteredStocks:filtered
    })
  }
  render() {
    return (
      <div>
        <SearchBar filterbyType={this.filterbyType} sortByPrice={this.sortByPrice} sortByAlpha={this.sortByAlpha} />
          <div className="row">
            <div className="col-8">
              <StockContainer transaction={this.transaction} stocks={this.state.stocks} filteredStocks={this.state.filteredStocks}/>
            </div>
            <div className="col-4">
              <PortfolioContainer transaction={this.transaction} portfolioStocks={this.state.portfolioStocks}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
