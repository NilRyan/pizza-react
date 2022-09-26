import { Text, Box } from '@chakra-ui/react';
import ToppingsItem from './Toppings';

export default function PizzaCard({ pizza }) {
  return (
    <Box px={'3px'} textAlign={'left'} m="6px" rounded={'3px'} outline={'solid 2px'}>
      <Text fontSize={'sm'}>
        {' '}
        Pizza {pizza.number} - {pizza.crust}, {pizza.size}, {pizza.type}
      </Text> 
      {
        pizza.toppings.length > 0 && 
        <Box mx={'10px'} fontSize={'sm'}>
            <Text> Toppings Total: {pizza.toppingsTotal}</Text>
            Toppings Whole:
            <ToppingsItem topping={pizza.toppings[0]}></ToppingsItem>
            Toppings First-Half:
            <ToppingsItem topping={pizza.toppings[1]}></ToppingsItem>
            Toppings Second-Half:
            <ToppingsItem topping={pizza.toppings[2]}></ToppingsItem>
        </Box>
      }
    </Box>
  );
}
