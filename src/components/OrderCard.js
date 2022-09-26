import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import PizzaCard from './OrderCard/PizzaCard';

export default function OrderCard(props) {
  return (
      <Box
        w={'m'}
        bg={'white'}
        boxShadow={'xl'}
        rounded={'md'}
      >
        <Text
          fontSize={'sm'}
          fontWeight={500}
          bg={'green.50'}
          p={2}
          px={3}
          color={'green.500'}
          rounded={'full'}
        >
          Order Number: {props.orderNumber}
        </Text>
        <SimpleGrid columns={1} spacing='5px' width="full">
          {props.pizzas.map((pizza) => (
            <PizzaCard pizza={pizza}></PizzaCard>
          ))}
        </SimpleGrid>
      </Box>
  );
}
