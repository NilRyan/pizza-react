import { SimpleGrid } from '@chakra-ui/react';

import OrderCard from './OrderCard';

export default function OrdersDisplay({orders}) {
  return <SimpleGrid  columns={[1,1,3]} spacing={'10px'} outline='solid' rounded="md" width={['l', '5xl']}>
    {orders.map((order) => {
      return (<OrderCard key={order.orderNumber} orderNumber={order.orderNumber} pizzas={order.pizzas}></OrderCard>);
    })}
  </SimpleGrid>;
}
