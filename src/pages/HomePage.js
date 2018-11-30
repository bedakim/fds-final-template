import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

//모양과 기능이 같은 페이지는 주소도 같으면 좋다
// 경로로 표현하기 쉬운 데이터가 있고
// 쿼리스트링으로 표현하기 쉬운 데이터가 있는데
// 계층구조가 아닌것 같을때 쿼리스트링 사용
// 아래 링크 코드도 쿼리스트링으로 만든거
// (menu=치킨&city=서울)
//서버의 요청을 다르게 보내야함
//이렇게 키로 상태를 초기화 할수있음

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    console.log(location.search);
    const p = new URLSearchParams(location.search);
    console.log(p.get('category'));
    const category = p.get('category');
    return (
      <Layout>
        <h1>Home</h1>
        <Link to="/">ALL</Link>
        <Link to="/?category=top">/TOP</Link>
        <Link to="/?category=pants">/PANTS</Link>
        <ProductList key={category} category={category} />
      </Layout>
    );
  }
}
