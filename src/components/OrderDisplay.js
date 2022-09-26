import { SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from '@chakra-ui/react';
import { Fragment, useState } from 'react';

import OrderCard from './OrderCard';

export default function OrdersDisplay({ orders }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOrders, setFilteredOrders] = useState('');

  const handleSearch = newSearchQuery => {
    setSearchQuery(newSearchQuery);
    setFilteredOrders(
      orders.filter(order => {
        if (order.orderNumber === Number(newSearchQuery)) return true;
        if (
          order.pizzas.some(pizza => {
            console.log(pizza);
            console.log(newSearchQuery);
            return (
              pizza.crust === newSearchQuery ||
              pizza.size === newSearchQuery ||
              pizza.type === newSearchQuery ||
              pizza.toppingsTotal === Number(newSearchQuery)
            );
          })
        )
          return true;
      })
    );
  };
  return (
    <Fragment>
      <InputGroup pb={'10px'}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="search"
          onChange={e => handleSearch(e.target.value)}
          placeholder="Filter orders"
        />
      </InputGroup>
      <SimpleGrid
        columns={[1, 1, 3]}
        spacing={'10px'}
        outline="solid"
        rounded="md"
        width={['l', '5xl']}
      >
        {!searchQuery &&
          orders.map(order => {
            return (
              <OrderCard
                key={order.orderNumber}
                orderNumber={order.orderNumber}
                pizzas={order.pizzas}
              ></OrderCard>
            );
          })}
        {searchQuery &&
          filteredOrders.map(order => {
            return (
              <OrderCard
                key={order.orderNumber}
                orderNumber={order.orderNumber}
                pizzas={order.pizzas}
              ></OrderCard>
            );
          })}
      </SimpleGrid>
    </Fragment>
  );
}
