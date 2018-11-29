import React, { Component } from 'react';

//배열을 받아서 화면을 그려줌

export default class ProductListView extends Component {
  static defaultProps = {
    //서버로 부터 받아온 상품목록 데이터
    products: [
      // {
      //     id:1,
      //     title: '자켓',
      //     imgURl:'...'
      // }
    ],
  };
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <div>{p.ib}</div>
            <div>{p.title}</div>
            <img src={p.imgURL} alt={p.title} />
          </div>
        ))}
      </div>
    );
  }
}
