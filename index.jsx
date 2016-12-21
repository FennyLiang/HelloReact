import React from "react"
import reactDOM from "react-dom"
import Inputfield from './src/Inputfield'
import TodoHeader from './src/todolistheader'
import ToDoList from './src/todoList'


class HelloMessage extends React.Component{
  render(){

    return (
      <div>
        <TodoHeader
          title = "My todolist"
          name = "Jonnan"
          todoCount = {3}
        />
        <Inputfield placeholder="Let's work today!"/>
        <ToDoList />
      </div>
      );
  }
}

reactDOM.render(<HelloMessage />, document.getElementById('app'));

