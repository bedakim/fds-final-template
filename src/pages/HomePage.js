import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';

// 강제로 상태를 초기화 하고 싶을때 다른키 를 넣어줘야함 username
export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <h1>Home</h1>
        <ProductList />
      </Layout>
    );
  }
}
