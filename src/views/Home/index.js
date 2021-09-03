import React from 'react';
import { 
  Toast,
  ToastBody,
  ToastHeader,
  Card,
  CardBody,
  CardTitle,
  CardText,
  List,
  Row,
  Col,
} from 'reactstrap';

import {
  imagesURL
} from '../../_apis/instance';

const Home = () => {
  return (
    <div>
      <br/>
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="text-primary">
            Prueba técnica-CEMACO
          </CardTitle>
          <CardText>
            <List>
              <li>Emmanuel Vasquez Sandoval</li>
              <li>emmanuelvs2011@gmail</li>
              <li>45591679</li>
            </List>
            <br></br>
            <h2 className="text-primary">Características</h2>
            <List>
              <li>Registro de Usuarios con encriptación y tokens</li>
              <li>Sesiones para administradores y colaboradores</li>
              <li>Creación, Edición y Eliminación de productos</li>
              <li>Completamente responsiva para poder ser usada desde teléfonos</li>
            </List>
            <br/>
            <h2 className="text-primary">Ejemplos</h2>
            <br/>
            <Row>
              <Col>
                <h3>Escritorio 1</h3>
                <img 
                  style={{width: '100%', height: 'auto'}}
                  src={`${process.env.PUBLIC_URL}desktop-example.PNG`} 
                  alt={"desktop-example"} 
                />
              </Col>
              <Col>
                <h3>Escritorio 2</h3>
                <img 
                  style={{width: '100%', height: 'auto'}}
                  src={`${process.env.PUBLIC_URL}desktop-example-2.PNG`} 
                  alt={"desktop-example-2"} 
                />
              </Col>
              <Col>
                <h3>Mobil</h3>
                <img 
                  style={{width: '50%', height: 'auto'}}
                  src={`${process.env.PUBLIC_URL}mobile-example.PNG`} 
                  alt={"mobile-example"} 
                />
              </Col>
            </Row>
          </CardText>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>
                Información  FrontEnd
              </ToastHeader>
              <ToastBody>
                <List>
                  <li className="text-primary">React</li>
                  <li className="text-success">Redux</li>
                  <li className="text-info">Axios</li>
                </List>
              </ToastBody>
            </Toast>
            <br/>
            <Toast>
              <ToastHeader>
                Información  Backend
              </ToastHeader>
              <ToastBody>
                <List>
                  <li className="text-warning">Node</li>
                  <li className="text-danger">Express</li>
                  <li className="text-muted">mysql</li>
                </List>
              </ToastBody>
            </Toast>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;