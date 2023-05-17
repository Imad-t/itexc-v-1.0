import React from 'react'
import EditProductModal from './editProductModal'
function EditProduct(data,open) {
  return (
    <div> {open ? <EditProductModal productData={data} /> : '' }</div>
  )
}

export default EditProduct