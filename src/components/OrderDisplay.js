import { Box, Grid, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getAllOrders } from '../services/OrderService';
import OrderCard from './OrderCard';

export default function OrdersDisplay() {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = () => {
    getAllOrders.then(orders => {
      setOrders(orders);
    });
  };
  useEffect(() => {
    getAllOrders().then(orders => {
      setOrders(orders);
    });

  }, []);
  return <SimpleGrid  columns={[1,1,3]} spacing={'10px'} outline='solid' rounded="md" width={['l', '5xl']}>
    {orders.map((order) => {
      return (<OrderCard key={order.orderNumber} orderNumber={order.orderNumber} pizzas={order.pizzas}></OrderCard>);
    })}
  </SimpleGrid>;
}
