import React, { Component } from 'react';

class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}  // 현재 데이터의 id 값을 data-id에 넣어준다. 
            onClick={function (e) {
              // e.target 
              // 여기서 target는 이벤트가 발생한 태그를 말한다. 따라서 여기서는 클릭된 a 태그를 뜻한다.
              // e.target.dataset.id
              // target를 통해서 dataset에 들어있는 id값에 접근 할 수 있다.
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
        </li>);
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;