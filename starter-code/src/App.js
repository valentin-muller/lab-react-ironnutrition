import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from "./foods.json";
import FoodBox from "./Components/FoodBox"
import AddNewFood from "./Components/AddNewFood"
import SearchBar from "./Components/SearchBar"

class App extends Component {
  state = {
    foodsList: foods
  }

addFood = (newFoodObj) => {
  const newData = this.state.foodsList;
  newData.push(newFoodObj)
  this.setState({foodsList: newData})
}

filterData = (string) => {
  const filteredArray = foods.filter(( oneFood ) => { 
    if (oneFood.name.includes(string)) {
      return true
    } else {
      return false;
    }
  })
  this.setState({foodsList: filteredArray})
}


  render() {
    return (
      <div className="App">
        <AddNewFood addNew={this.addFood} />
        <SearchBar newSearch={this.filterData} />
        {this.state.foodsList.map(foodObj => {
          return (
            <FoodBox
              name={foodObj.name}
              calories={foodObj.calories}
              image={foodObj.image}
              quantity={foodObj.quantity}
            />
          );
        })}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
