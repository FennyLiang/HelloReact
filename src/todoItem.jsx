import React from 'react'

export default class ToDoItem extends React.Component {

  render() {
    return (
      <div>
        <input type="checkbox" />
        <span> Buy lunch </span>
        <button>X</button>
      </div>

    );

  }

}