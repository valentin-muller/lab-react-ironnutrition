import React, { Component } from "react";

class AddNewFood extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: ""
  };

  handleChange = e => {
    let { value, name, type } = e.target;

    this.setState({[name]: value})

  };

  handleSubmit = e => {
      e.preventDefault();

      const newFoodObj = this.state;

      this.props.addNew(newFoodObj);

    this.setState({
        name:"",  
        calories:"",
        image:"",
        quantity:""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>calories</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />

          <label>image</label>
          <input
            type="text"
            name="image"
            checked={this.state.image}
            onChange={this.handleChange}
          />

          <label>quantity</label>
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />

          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default AddNewFood;