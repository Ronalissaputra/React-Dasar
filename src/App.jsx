import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Map";
import DataItems from "./DataItems";
import Home from "./page/Home";
import About from "./page/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataInput: "",
      dataItems: [],
      isLoading: true,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ items: data, isLoading: false }));
  }

  onClick = (event) => {
    event.preventDefault();
    this.setState({
      dataItems: [...this.state.dataItems, this.state.dataInput],
      dataInput: "",
    });
  };

  onSubmit = (event) => {
    this.setState({
      dataInput: event.target.value,
    });
  };

  render() {
    const { items, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <Map nama="Router" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
        <Map nama="Ini hasil Props" />
        <p>Component Map Yah</p>
        <Map nama="Ini Hasil Fetch API" />
        <ul>
          {items.map((item, id) => (
            <li key={id}>{item.title}</li>
          ))}
        </ul>
        <Map nama="Ini Project TodoList" />
        <form onSubmit={this.onClick}>
          <input
            type="text"
            onChange={this.onSubmit}
            value={this.state.dataInput}
          />
          <button>Klik Disini</button>
        </form>

        <DataItems dataItems={this.state.dataItems} />
      </div>
    );
  }
}

export default App;
