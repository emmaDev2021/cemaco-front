import React from 'react';
import {
  Form,
  Card,
  CardTitle,
  Button,
  Col,
  Row,
  Spinner
} from 'reactstrap';
import { Field, reduxForm, } from 'redux-form';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import './register-style.css';
import {
  FormInput,
  FormSelect,
} from '../../components/FormInput';
import * as loginActions from '../../_actions/login.js';
import * as selectors from '../../_reducers';

class RegisterForm extends React.Component {
  componentDidMount(){
    const {
      getRoles
    } = this.props;
    getRoles();
  }
  render(){
    const {
      handleSubmit,
      register,
      loading,
      roles,
    } = this.props;
    return <>
      <div className="formBody">
        <div className="form-signin align-middle">
          <Row>
            <Col xs={12} md={{size: 4, offset: 4}}>
              <Card body outline color="primary">
                <CardTitle tag="h2">Crear cuenta</CardTitle>
                <br></br>
                <Form onSubmit={handleSubmit(register)}>
                  <Field 
                    name="username" type="text" 
                    label="Nombre de usuario"
                    component={FormInput}
                    disabled={loading}
                  />
                  <Field 
                    name="email" type="text" 
                    label="Email"
                    component={FormInput}
                    disabled={loading}
                  />
                  <Field 
                    name="role" type="text" 
                    label="Rol"
                    options = {roles}
                    component={FormSelect}
                    disabled={loading}
                  />
                  <Field 
                    name="password" type="password" 
                    label="Contraseña"
                    component={FormInput}
                    disabled={loading}
                  />
                  <Field 
                    name="password_repeat" type="password" 
                    label="Contraseña"
                    component={FormInput}
                    disabled={loading}
                  />
                  <br></br>
                  <Button 
                    color="primary" 
                    type="submit"
                    disabled={loading}
                  >
                    Registrarse
                    {" "}
                    {loading ? <Spinner color="light" /> : null}
                  </Button>
                </Form>
                <br></br>
                <NavLink 
                  to={'/login'}
                  className="nav-link"
                  activeClassName="active"
                >
                  Iniciar Sesion
                </NavLink>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  }
}

const validate = values => {
  let errors = {};
  if(!values.username){
    errors.username = "se requiere el nombre de usuario"
  }
  if(!values.email){
    errors.email = "se requiere el email"
  }
  if(!values.role){
    errors.role = "se requiere el rol"
  }
  if(!values.password){
    errors.password = "se requiere el password"
  }
  if(!values.password_repeat){
    errors.password_repeat = "se requiere repetir el password"
  }
  return errors;
}

const reduxRegisterForm = reduxForm({
  form: 'RegisterForm',
  validate,
})(RegisterForm);

export default connect(
  (state) => ({
    loading: selectors.getLoading(state),
    roles: selectors.getRoles(state),
  }),
  dispatch => ({
    register(values){
      dispatch(loginActions.register({
        username: values.username,
        email: values.email,
        role: values.role,
        password: values.password,
        password_repeat: values.password_repeat,
      }))
    },
    getRoles(){
      dispatch(loginActions.getRoles())
    }
  })
)(reduxRegisterForm);