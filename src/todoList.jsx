import React from 'react'
import ToDoItem from './todoItem'

export default class ToDoList extends React.Component {

  render() {

    return(

      <ul>
        <li>
          <ToDoItem
            taskName="Item1"
            completed={true}
          />
        </li>
        <li>
          <ToDoItem
            taskName="Item 2"
            completed={false}
          />
        </li>
        <li>
          <ToDoItem
            taskName="Item 3"
            completed={false}
          />
        </li>
      </ul>

    );

  }


}