import React from 'react';
import {
  Form,
  Card,
  CardTitle,
  Button,
  Col,
  Row,
  Spinner,
  ListGroup, ListGroupItem
} from 'reactstrap';
import { Field, reduxForm, } from 'redux-form';
import { connect } from 'react-redux';

import {
  FormInput,
  FileInput
} from '../../components/FormInput';
import * as productActions from '../../_actions/product';
import * as selectors from '../../_reducers';
import {
  imagesURL
} from '../../_apis/instance';

const ProductForm = ({
  handleSubmit,
  loading,
  postProduct,
  patchProduct,
  product,
  deleteProduct,
}) => {
  console.log(loading,product)
  return <>
    <Row>
      {product && (<Col xs={12} md={4}>
        <h5>Info:</h5>
        <ListGroup>
          <ListGroupItem className="justify-content-between">
            Creado por: <strong>{product.created_by_name}</strong>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Ultima Actualizacion: <strong>{product.last_updated}</strong>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Imagen Actual: <img 
              src={`${imagesURL}${product.imagen}`} 
              alt={product.imagen}
              style={{
                maxWidth: '200px',
                height: 'auto'
              }}
            />
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            <Button color="danger" 
              disabled={loading}
              onClick={() => {
                deleteProduct(product.id)
              }}
            >
              Eliminar producto
            </Button>
          </ListGroupItem>
        </ListGroup>
        <br/>
      </Col>)}
      <Col xs={12} md={8}>
        <Card body outline color="primary">
          <CardTitle tag="h2">
            {!product ? 'Nuevo Producto' : `Editando producto no.${product.id}`}
          </CardTitle>
          <br></br>
            <Form onSubmit={handleSubmit((values) => {
              if(product){
                patchProduct(values)
              } else {
                postProduct(values)
              }
            })}>
              <Field 
                name="nombre" type="text" 
                label="Nombre"
                component={FormInput}
                disabled={loading}
              />
              <Field 
                name="description" type="textarea" 
                label="Description"
                component={FormInput}
                disabled={loading}
              />
              <Field 
                name="precio" type="number" 
                step="any"
                min={0.00}
                label="Precio (Q)"
                component={FormInput}
                disabled={loading}
              />
              <Field 
                name="SKU" type="text" 
                label="SKU"
                component={FormInput}
                disabled={loading}
              />
              <Field 
                name="inventario" type="number" 
                step="any"
                min={0.00}
                label="Inventario"
                component={FormInput}
                disabled={loading}
              />
              <Field 
                name="imagen" type="file"
                label="Imagen del producto"
                component={FileInput}
                disabled={loading}
              />
              <br></br>
              <Button 
                color="primary" 
                type="submit"
                disabled={loading}
              >
                {!product ? 'Crear Producto' : `Editar Producto`}
                {" "}
                {loading ? <Spinner color="light" /> : null}
              </Button>
            </Form>
        </Card>
      </Col>
    </Row>
  </>
}

const validate = values => {
  let errors = {};
  if(!values.nombre){
    errors.nombre = "*Requerido"
  }
  if(!values.description){
    errors.description = "*Requerido"
  }
  if(!values.precio){
    errors.precio = "*Requerido"
  }
  if(!values.SKU){
    errors.SKU = "*Requerido"
  }
  if(!values.inventario){
    errors.inventario = "*Requerido"
  }
  if(!values.imagen){
    errors.imagen = "*Requerido"
  }
  return errors;
}

const reduxProductForm = reduxForm({
  form: 'ProductForm',
  enableReinitialize: true,
  validate,
})(ProductForm);

export default connect(
  (state) => ({
    loading: selectors.getLoading(state),
    initialValues: selectors.getProduct(state),
    product: selectors.getProduct(state)
  }),
  dispatch => ({
    postProduct(values){
      const {
        nombre,
        description,
        precio,
        SKU,
        inventario,
        imagen
      } = values;
      dispatch(productActions.postProduct({
        nombre,
        description,
        precio,
        SKU,
        inventario,
        imagen,
      }));
    },
    patchProduct(values){
      const {
        id,
        nombre,
        description,
        precio,
        SKU,
        inventario,
        imagen
      } = values;
      dispatch(productActions.patchProduct({
        id,
        nombre,
        description,
        precio,
        SKU,
        inventario,
        imagen
      }))
    },
    deleteProduct(id){
      dispatch(productActions.deleteProduct({
        id
      }))
    }
  })
)(reduxProductForm);