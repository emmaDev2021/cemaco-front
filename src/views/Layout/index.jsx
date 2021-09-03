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
  faShoppingCart,
  faPhoneAlt,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faUserCircle,
  faHeart,
  faEnvelope
} from '@fortawesome/free-regular-svg-icons';
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
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
import Product from '../Products/NewProduct';
import PatchProduct from '../Products/PatchProduct';
import Home from '../Home';

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
                  src={`${process.env.PUBLIC_URL}/images_jugueton.png`}
                  alt="images_jugueton" 
                />
              </Col>
              <Col xs={4} md={2} className="helper cemaco-logo-header">
                <NavLink to={'/'}>
                  <img src={`${process.env.PUBLIC_URL}/cemaco.svg`} alt="cemaco-svg" />
                </NavLink>
              </Col>
              <Col xs={4} md={2} className="helper">
                <img src={`${process.env.PUBLIC_URL}/images_bebe-jugueton.png`} alt="images_bebe-jugueton" />
              </Col>
            </Row>
            <div className="header-bar ">
              <Row className="container-sm m-auto">
                <Col xs={12} md={3} className="logo">
                  <NavLink to={'/'}>
                    <img src={`${process.env.PUBLIC_URL}/cemaco.svg`} alt="cemaco-svg" className="pt-2" />
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
                <Col xs={12} md={3} className="mt-2">
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
            <Route exact path="/" component={() => <Home/>} />
            <Route exact path="/public-inventory" component={() => <PublicProducts />} />
            <PrivateRoute exact path="/user" component={User} token={token} />
            <PrivateRoute exact path="/manage-inventory" component={Products} token={token} />
            <PrivateRoute exact path="/manage-inventory/new" component={Product} token={token} />
            <PrivateRoute exact path="/manage-inventory/:id" component={PatchProduct} token={token} />
            <NoSessionRoute exact path="/login" component={Login} token={token} />
            <NoSessionRoute exact path="/register" component={Register} token={token} />
          </Switch>
        </Container>
        <div className="rw footer">
          <div className="custom-fluid-container" >
            <div className="header-bar ">
              <Row 
                className="container-sm m-auto text-light mt-5 mb-5 footerbar"
              >
                <Col>
                  <h6>Servicios</h6>
                  <p>Instalaciones</p>
                  <p>Tiendas</p>
                  <p>Privilegio</p>
                  <p>Servicio a Empresas</p>
                  <p>Bodas</p>
                </Col>
                <Col>
                  <h6>Venta en línea</h6>
                  <p>Retira en tienda</p>
                  <p>Métodos de pago</p>
                  <p>Preguntas frecuentes</p>
                  <p>Privacidad y seguridad</p>
                  <p>Términos y condiciones</p>
                </Col>
                <Col>
                  <h6>Nuestros Valores</h6>
                  <p>Sostenibilidad</p>
                  <p>Garantía Total</p>
                  <p>Certificación Sistema B</p>
                </Col>
                <Col>
                  <h6>Grupo CEMACO</h6>
                  <p>Únete a nuestro equipo</p>
                  <p>Sobre nosotros</p>
                  <p>Deseas ser proveedor</p>
                  <p>Juguetón</p>
                  <p>Bebé Juguetón</p>
                </Col>
                <Col>
                  <h6>Mantente conectado</h6>
                  <p><FontAwesomeIcon icon={faWhatsapp} /> Compra por WhatsApp</p>
                  <p><FontAwesomeIcon icon={faPhoneAlt} /> (502) 2499-9990</p>
                  <p><FontAwesomeIcon icon={faEnvelope} /> tusamigos@cemaco.com</p>
                  <p><FontAwesomeIcon icon={faCommentAlt} /> Chat en línea</p>
                  <br></br>
                  <br></br>
                  <div className="footerSocial">
                    <i><FontAwesomeIcon icon={faFacebookF} /></i>
                    <i><FontAwesomeIcon icon={faInstagram} /></i>
                    <i><FontAwesomeIcon icon={faYoutube} /></i>
                    <i><FontAwesomeIcon icon={faTwitter} /></i>
                    <i><FontAwesomeIcon icon={faPinterest} /></i>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
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