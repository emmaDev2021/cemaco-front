import React from 'react';
import {
  Row,
  Col,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Button,
  Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import {
  faUserCircle,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
  import { connect } from 'react-redux';
  import { Notify } from 'react-redux-notify';
//import * as selectors from '../../_reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './layout-stlyles.css';

import Login from '../Login';
import PublicProducts from '../Public_Products';
import User from '../User';
import Register from '../Register';
import Products from '../Products';

const PrivateRoute = ({ 
  component: Component,
  token,
  ...rest
}) => (
  <Route {...rest} render={props => (
    token ? <Component {...props} /> : <Redirect to="/login" />
  )} />
)

const NoSessionRoute = ({
  component: Component,
  token,
  ...rest
}) => (
  <Route {...rest} render={props => (
    token ? <Redirect to="/" /> : <Component {...props} />
  )} />
)

class Layout extends React.Component {
  render(){
    const {
      token
    } = this.props;
    console.log(token)
    return <div className="box">
        <Notify/>
        <header className="rw header">
          <div className="custom-fluid-container" >
            <Row className="header-tabs-1 no-gutters">
              <Col xs={4} md={{ size: 2, offset: 3 }} className="helper">
                <img 
                  src="images_jugueton.png" 
                  alt="images_jugueton" 
                />
              </Col>
              <Col xs={4} md={2} className="helper cemaco-logo-header">
                <NavLink to={'/'}>
                  <img src="cemaco.svg" alt="cemaco-svg" />
                </NavLink>
              </Col>
              <Col xs={4} md={2} className="helper">
                <img src="images_bebe-jugueton.png" alt="images_bebe-jugueton" />
              </Col>
            </Row>
            <div className="header-bar ">
              <Row className="container-sm m-auto">
                <Col xs={12} md={3} className="logo">
                  <NavLink to={'/'}>
                    <img src="cemaco.svg" alt="cemaco-svg" className="pt-2" />
                  </NavLink>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup className="pt-2 input-buscar">
                    <InputGroup>
                      <Input placeholder="buscar..." className="border border-white" />
                      <InputGroupAddon addonType="append" className="bg-white">
                        <Button 
                          className="m-2 rounded-circle bg-cemaco-green border-cemaco-green"
                        >
                          <i className="input-search-icon">
                            <FontAwesomeIcon icon={faSearch}/>
                          </i>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col xs={12} md={3} className="">
                  <Row>
                    <Col xs={{size: 3, offset: 3}}>
                      <NavLink to={!token ? '/login' : '/user'}>
                        <FontAwesomeIcon 
                          icon={faUserCircle} 
                          className="color-cemaco-green cemaco-options" />
                      </NavLink>
                    </Col>
                    <Col xs={3}>
                      <NavLink to={'/'}>
                        <FontAwesomeIcon 
                          icon={faHeart} 
                          className="color-cemaco-green cemaco-options"
                        />
                      </NavLink>
                    </Col>
                    <Col xs={3}>
                      <NavLink to={'/'}>
                        <FontAwesomeIcon 
                          icon={faShoppingCart} 
                          className="color-cemaco-green cemaco-options" />
                      </NavLink>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="container-sm m-auto text-white mt-3">
                <Col xs={12} md={2}>
                  <NavLink 
                    to={'/public-inventory'} 
                    className="text-white"
                    activeClassName="text-muted"
                  >
                    <strong>Inventario</strong>
                  </NavLink>
                </Col>
                {token ? <Col xs={12} md={{size: 2, offset: 8}}>
                  <NavLink 
                    to={'/manage-inventory'} 
                    className="text-white fs-6"
                    activeClassName="text-muted"
                  >
                    <strong>Administrar Inventario</strong>
                  </NavLink>
                </Col> : null}
              </Row>
            </div>
          </div>
        </header>
        <Container className="rw content">
          <Switch>
            <Route exact path="/" component={() => <h2>Home</h2>} />
            <Route exact path="/public-inventory" component={() => <PublicProducts />} />
            <PrivateRoute exact path="/user" component={User} token={token} />
            <PrivateRoute exact path="/manage-inventory" component={Products} token={token} />
            <NoSessionRoute exact path="/login" component={Login} token={token} />
            <NoSessionRoute exact path="/register" component={Register} token={token} />
          </Switch>
        </Container>
        <div className="rw footer">
          <p><b>footer</b> (fixed height)</p>
        </div>
    </div>;
  }
}

export default connect(
  (state) => ({
  }),
  dispatch => ({
  })
)(Layout);