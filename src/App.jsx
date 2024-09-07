import React, { Component } from "react";
import "./App.css";
import TodoTitle from "./components/TodoTitle.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoItemS from "./components/TodoItem(S).jsx";

class App extends Component {
    render() {
    return (
        <div id="todoapp"
             className="todoapp" >
        <TodoTitle/>
        <TodoItemS/>
        </div>

        );}}
export default App;