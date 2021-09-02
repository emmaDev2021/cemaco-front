import Layout from './views/Layout/';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { connect } from 'react-redux';
import * as selectors from './_reducers'

function App({token}) {
  return (
    <Layout token={token} />
  );
}

export default connect(
  (state) => ({
    token: selectors.getToken(state),
  }),
  dispatch => ({
  })
)(App);
