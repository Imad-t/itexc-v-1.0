import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import styles from '../styles/Orders.module.scss'
function Orders({ userData }) {
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleRowClick = (orderId) => {
    if (orderId === selectedOrderId) {
      setSelectedOrderId(null);
    } else {
      setSelectedOrderId(orderId);
    }
  }

  return (
    <div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Date</Th>
            <Th>Total</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userData.orders.map((order) => (
            <React.Fragment key={order.id}>
              <Tr onClick={() => handleRowClick(order.id)}>
                <Td>{order.id}</Td>
                <Td>{order.date}</Td>
                <Td>${order.total.toFixed(2)}</Td>
                <Td>{order.status}</Td>
              </Tr>
              {selectedOrderId === order.id && (
                <Tr>
                  <Td colSpan="6">
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Product ID</Th>
                          <Th>Name</Th>
                          <Th>Store</Th>
                          <Th>Image</Th>
                          <Th>Price</Th>
                          <Th>Quantity</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {order.products.map((product) => (
                          <Tr key={product.id}>
                            <Td>{product.id}</Td>
                            <Td>
                              <Link>                          
                              {product.name}
                              </Link>
                              </Td>

                              <Td>
                              {order.store.name}
                              </Td>
    
                            <Td>
                              <Link>                           
                              <div className={styles['image-container']}>                   
                              <img src={product.image} alt={product.name}  />                              
                              </div>
                              </Link>                        
                            </Td>

                            <Td>${product.price.toFixed(2)}</Td>
                            <Td>{product.quantity}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Td>
                </Tr>
              )}
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
