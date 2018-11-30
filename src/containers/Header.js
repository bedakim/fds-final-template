import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

// 강제로 상태를 초기화 하고 싶을때 다른키 를 넣어줘야함 username
export default withRouter(withUser(HeaderView));
//withRouter 를 둘러준 컴포넌트는 match, history, location prop을 받게된다
