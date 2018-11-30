import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

export default withRouter(withUser(HeaderView));
//withRouter 를 둘러준 컴포넌트는 match, history, location prop을 받게된다
