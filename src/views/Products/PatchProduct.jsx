import React from 'react';
import { connect } from 'react-redux';
import {NavLink,} from 'react-router-dom';
import * as selectors from '../../_reducers';
import * as productActions from '../../_actions/product';
import './product-style.css';
import ProductForm from './ProductForm';

class Product extends React.Component {
  componentDidMount(){
    const{
      getProduct
    } = this.props;
    const { id } = this.props.match.params;
    getProduct(id);
  }
  render(){
    const {
      loading,
      product,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    return (<>
      <NavLink to="/manage-inventory">Regresar al Inventario</NavLink>
      <br/>
      <br/>
      <ProductForm id={id} />
    </>)
  }
}

export default connect(
  (state) => ({
    loading: selectors.getProductLoading(state),
    product: selectors.getProduct(state)
  }),
  dispatch => ({
    getProduct(id){
      dispatch(productActions.getProduct({
        id
      }));
    }
  })
)(Product);