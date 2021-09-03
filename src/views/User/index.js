import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  ListGroup,
  ListGroupItem,
  List,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import * as selectors from '../../_reducers';
import * as loginActions from '../../_actions/login';

const RenderPermit = ({permit}) => (<>
  {permit===1 ? 
    <FontAwesomeIcon icon={faCheck} className="color-cemaco-green"/> : 
    <FontAwesomeIcon icon={faTimes} className="close-color"/>
  }
</>)

const User = ({
  user_info,
  authLogOut,
}) => {
  return <>
    <h1>Informacion del usuario</h1>
    <ListGroup style={{maxWidth: '50%'}}>
      <ListGroupItem className="justify-content-between">Usuario: <b>{user_info.username}</b></ListGroupItem>
      <ListGroupItem className="justify-content-between">email: <b>{user_info.email}</b></ListGroupItem>
      <ListGroupItem className="justify-content-between">Rol: <b>{user_info.role_name}</b></ListGroupItem>
      <ListGroupItem className="justify-content-between">Permisos: 
         <List type="unstyled">
          <li>Crear Productos: <RenderPermit permit={user_info.post}/></li>
          <li>Editar Productos: <RenderPermit permit={user_info.patch}/></li>
          <li>Eliminar Productos: <RenderPermit permit={user_info.delete}/></li>
         </List>
      </ListGroupItem>
    </ListGroup>
    <br/>
    <Button onClick={()=>authLogOut()}>Salir de la sesion</Button>
  </>;
}

export default connect(
  (state) => ({
    user_info: selectors.getUser(state)
  }),
  dispatch => ({
    authLogOut(){
      dispatch(loginActions.authLogOut())
    }
  })
)(User);