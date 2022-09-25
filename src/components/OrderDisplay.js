import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getAllOrders } from '../services/OrderService';

export default function OrdersDisplay() {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = () => {
    getAllOrders.then(orders => {
      console.log(orders);
      setOrders(orders);
    });
  };
  useEffect(() => {
    getAllOrders().then(orders => {
      console.log(orders);
      setOrders(orders);
    });

    console.log(orders);
  }, []);
  return <Box p={6} outline='solid' rounded="md" width="md">
    {JSON.stringify(orders)}
  </Box>;
}
