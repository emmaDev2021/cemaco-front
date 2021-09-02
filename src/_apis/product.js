import instance from './instance';

export const getPublicProducts = async (
) => {
  return await instance.get(
    'public_products/',
  ).then((response) => response.data)
  .catch((error) => {throw error});
}

export const getProducts = async (
  token
) => {
  return await instance.get(
    'products/',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.data)
  .catch((error) => {throw error});
}

export const getProduct = async (
  token,
  id,
) => {
  return await instance.get(
    `products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.data)
  .catch((error) => {throw error});
}

export const postProduct = async (
  token,
  nombre,
  description,
  precio,
  SKU,
  inventario,
  imagen,
) => {
  const data = new FormData();
  data.append('nombre',nombre);
  data.append('description',description);
  data.append('precio',precio);
  data.append('SKU',SKU);
  data.append('inventario',inventario);
  data.append('imagen',imagen);
  return await instance.post(
    'products/',
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    }
  ).then((response) => response.data)
  .catch((error) => {throw error});
}

export const patchProduct = async (
  token,
  nombre,
  description,
  precio,
  SKU,
  inventario,
  imagen = null,
) => {
  const data = new FormData();
  data.append('nombre',nombre);
  data.append('description',description);
  data.append('precio',precio);
  data.append('SKU',SKU);
  data.append('inventario',inventario);
  if(imagen) data.append('imagen',imagen);
  return await instance.patch(
    'products/',
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    }
  ).then((response) => response.data)
  .catch((error) => {throw error});
}

export const deleteProduct = async (
  token,
  id,
) => {
  return await instance.delete(
    `products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.data)
  .catch((error) => {throw error});
}