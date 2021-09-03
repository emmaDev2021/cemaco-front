import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {
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
import ProductForm from './ProductForm';

const LoadingDiv = () => {
  return <div className="text-center">
      <Spinner 
        style={{ width: '9rem', height: '9rem' }} 
        type="grow"
      />
  </div>
}

class Product extends React.Component {
  componentDidMount(){
    const {
      getProductConfirm
    } = this.props;
    getProductConfirm();
  }
  render(){
    const {
      loading,
    } = this.props;
    return (<>
      <NavLink to="/manage-inventory">Regresar al Inventario</NavLink>
      <br/>
      <br/>
      <ProductForm />
    </>)
  }
}

export default connect(
  (state) => ({
    loading: selectors.getProductLoading(state),
  }),
  dispatch => ({
    getProductConfirm(){
      dispatch(productActions.getProductConfirm({
        product: null,
      }))
    }
  })
)(Product);