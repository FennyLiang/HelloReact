import React from 'react';

export default class TodoHeader extends React.Component {

  render() {
    return (
      <div>
        <h1 id="title">我的待辦清單</h1>
        <span className="header_content">哈囉，James：你有 99 項未完成待辦事項</span>
      </div>
    );

  }

}