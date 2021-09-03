import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Row,
  Col,
  Spinner
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import * as selectors from '../../_reducers';
import * as productActions from '../../_actions/product';
import {
  imagesURL
} from '../../_apis/instance';
import './product-style.css';

const LoadingDiv = () => {
  
  return <div className="text-center">
      <Spinner 
        style={{ width: '9rem', height: '9rem' }} 
        type="grow"
      />
  </div>
}

class Products extends React.Component {
  componentDidMount(){
    const {
      getProducts
    } = this.props;
    getProducts();
  }
  render(){
    const {
      loading,
      products
    } = this.props;
    console.log(loading,products)
    return (<>
      <h2 className="mt-3">Manejo de Inventario</h2>
      <br/>
      <NavLink
        to={`/manage-inventory/new/`}
        className="btn btn-success"
      >
        Agregar producto{" "}
        <FontAwesomeIcon icon={faPlus}/>
      </NavLink>
      <Row className="mt-3">
        {!loading ? <Row>
          {products.map((p,i) => {
            return <Col xs={12} md={3} key={i}>
              <Card className="mb-3">
                <CardImg top width="100%" 
                  src={`${imagesURL}${p.imagen}`} alt={p.nombre} 
                />
                <CardBody>
                  <CardTitle tag="h5">{p.nombre}</CardTitle>
                  <CardSubtitle 
                    tag="h6" 
                    className="mb-z text-muted"
                  >
                    <b>SKU: </b>{p.SKU}
                  </CardSubtitle>
                  <CardText>
                    En inventario: {p.inventario}
                    <br/>
                    <span className="close-color">Q {p.precio}</span>
                  </CardText>
                  <NavLink
                    to={`/manage-inventory/${p.id}`}
                    className="btn btn-primary"
                  >
                    Editar
                    {' '}
                    <FontAwesomeIcon icon={faPen}/>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          })}
        </Row> : <LoadingDiv />}
      </Row>
    </>)
  }
}

export default connect(
  (state) => ({
    loading: selectors.getProductLoading(state),
    products: selectors.getProducts(state),
  }),
  dispatch => ({
    getProducts(){
      dispatch(productActions.getProducts())
    }
  })
)(Products);