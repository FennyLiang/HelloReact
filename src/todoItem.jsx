import React, { PropTypes } from 'react'

export default class ToDoItem extends React.Component {

  static propTypes = {
    taskName: PropTypes.string,
    completed: PropTypes.bool
  }

  static defaultProps = {
    taskName: '123',
    completed: false,
  }

  render() {
    const {
      taskName,
      completed
    } = this.props;

    return (
      <div>
        <input type="checkbox" checked={completed} />
        <span>{taskName}</span>
        <button>X</button>
      </div>
    );

  }

}