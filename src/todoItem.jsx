import React from 'react'
import { PropTypes } from 'react'

export default class ToDoItem extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    completed: PropTypes.bool
  }

  static defaultProps = {
    ToDoItem: {
      title: '',
      completed: false,
    }
  }

  render() {
    const {
      title,
      completed
    } = this.props;

    return (
      <div>
        <input type="checkbox" checked={completed}/>
        <span>{title}</span>
        <button>X</button>
      </div>

    );

  }

}