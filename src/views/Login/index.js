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

import './login-style.css';
import {FormInput} from '../../components/FormInput';
import * as loginActions from '../../_actions/login.js';
import * as selectors from '../../_reducers'

const LoginForm = ({
  handleSubmit,
  authLogIn,
  loading,
}) => {
  return <>
    <div className="formBody">
      <div className="form-signin align-middle">
        <Row>
          <Col xs={12} md={{size: 4, offset: 4}}>
            <Card body outline color="primary">
              <CardTitle tag="h2">Login</CardTitle>
              <br></br>
              <Form onSubmit={handleSubmit(authLogIn)}>
                <Field 
                  name="email" type="text" 
                  label="Email"
                  component={FormInput}
                  disabled={loading}
                />
                <Field 
                  name="password" type="password" 
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
                  Iniciar Sesion
                  {" "}
                  {loading ? <Spinner color="light" /> : null}
                </Button>
              </Form>
              <br></br>
              <NavLink 
                to={'/register'}
                className="nav-link"
                activeClassName="active"
              >
                Registrarse
              </NavLink>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </>
}

const validate = values => {
  let errors = {};
  if(!values.email){
    errors.email = "se requiere el email"
  }
  if(!values.password){
    errors.password = "se requiere el password"
  }
  return errors;
}

const reduxLoginForm = reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm);

export default connect(
  (state) => ({
    loading: selectors.getLoading(state)
  }),
  dispatch => ({
    authLogIn(values){
      dispatch(loginActions.authLogIn({
        email: values.email,
        password: values.password
      }))
    }
  })
)(reduxLoginForm);