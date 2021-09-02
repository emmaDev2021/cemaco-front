import React from 'react';
import { connect } from 'react-redux';
//import {NavLink} from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody,
  Row,
  Col,
  Spinner
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import * as selectors from '../../_reducers';
import * as productActions from '../../_actions/product';
import {
  imagesURL
} from '../../_apis/instance';
import './public_products-style.css';

const LoadingDiv = () => {
  return <div className="text-center">
      <Spinner 
        style={{ width: '9rem', height: '9rem' }} 
        type="grow"
      />
  </div>
}

class PublicProducts extends React.Component {
  componentDidMount(){
    const {
      getPublicProducts
    } = this.props;
    getPublicProducts();
  }
  render(){
    const {
      loading,
      publicProducts
    } = this.props;
    //console.log(loading,publicProducts)
    return (<>
      <h2 className="mt-3">Productos</h2>
      <Row>
        {!loading ? <Row>
          {publicProducts.map((p,i) => {
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
                  <Button className="bg-cemaco-green border-cemaco-green">
                    Agregar
                    {''}
                    <FontAwesomeIcon icon={faShoppingCart}/>
                  </Button>
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
    publicProducts: selectors.getPublicProducts(state),
  }),
  dispatch => ({
    getPublicProducts(){
      dispatch(productActions.getPublicProducts())
    }
  })
)(PublicProducts);