import React from 'react'
import { PropTypes } from 'react'

export default class ToDoItem extends React.Component {

  static propTypes = {
    itemName: PropTypes.string,
    completed: PropTypes.bool
  }

  static defaultProps = {
    itemName: '',
    completed: false,
  }

  render() {
    var {
      itemName,
      completed
    } = this.props;

    return (
      <div>
        <input type="checkbox" checked={completed}/>
        <span>{itemName}</span>
        <button>X</button>
      </div>

    );

  }

}