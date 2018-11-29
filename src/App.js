import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import UserProvider from './contexts/UserContext';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            {/* exact prop 이 있을때는 주소가 정확히 일치 해야함 페이지가 그려짐 */}
            {/* 없을땐 주소가 path  로 시작하면 그려짐 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/product/:productId" component={ProductPage} />
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
