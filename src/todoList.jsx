import React from 'react'
import ToDoItem from './todoItem'

export default class ToDoList extends React.Component {

  render() {

    return(

      <ul>
        <li>
          <ToDoItem />
        </li>
        <li>
          <ToDoItem />
        </li>
        <li>
          <ToDoItem />
        </li>
      </ul>

    );

  }


}