import React from 'react';
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

function App() {
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
                <OrderForm></OrderForm>
                </TabPanel>
                <TabPanel>
                <OrdersDisplay></OrdersDisplay>
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
