import React from 'react'
import ToDoItem from './todoItem'

export default class ToDoList extends React.Component {

  render() {

    return(

      <ul>
        <li>
          <ToDoItem
            itemName='Item1'
            completed = {true}
          />
        </li>
        <li>
          <ToDoItem
            itemName='Item 2'
            completed = {false}
          />
        </li>
        <li>
          <ToDoItem
            itemName="Item 3"
            completed = {false}
          />
        </li>
      </ul>

    );

  }


}