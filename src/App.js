import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import OrderForm from './components/OrderForm';
import OrdersDisplay from './components/OrderDisplay';
import { getAllOrders } from './services/OrderService';

function App() {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = () => {
    getAllOrders().then(orders => {
      setOrders(orders);
    });
  };

  useEffect(() => {
    getAllOrders().then(orders => {
      setOrders(orders);
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab>Add Pizza Order</Tab>
                <Tab>View Pizza Orders</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <OrderForm fetchAllOrders={fetchAllOrders}></OrderForm>
                </TabPanel>
                <TabPanel>
                  <OrdersDisplay orders={orders}></OrdersDisplay>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
