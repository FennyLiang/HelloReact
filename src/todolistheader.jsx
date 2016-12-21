import React from 'react';

export default class TodoHeader extends React.Component {

  render() {
    const {
      title,
      name,
      todoCount
    } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <span>哈囉，{name}：你有 {todoCount} 項未完成待辦事項</span>
      </div>
    );

  }

}