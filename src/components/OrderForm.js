import { ErrorMessage, useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { createOrder } from '../services/OrderService';
import { useState } from 'react';

export default function OrderForm() {
  const [error, setError] = useState('');
  const [orderNumber, setOrderNumber] = useState('');

  const formik = useFormik({
    initialValues: {},
    onSubmit: async (values, {resetForm, setFieldValues}) => {
      setError('');
      setOrderNumber('');
      const { message, orderNumber } = await createOrder(values.pml);

      if (message) {
        setError(message);
      }
      if (orderNumber) {
        setOrderNumber(orderNumber);
      }

    setFieldValues('pml', '');
    },
  });
  return (
    <Box p={6} rounded="md" width={['l', '5xl']}>
      <form onSubmit={formik.handleSubmit}>
        <VStack height={'md'} spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="pml">Order Pizza Form</FormLabel>
            <Textarea
              height={'sm'}
              id="pml"
              name="pml"
              placeholder="Input valid Pizza PML Order"
              variant="filled"
              onChange={e => {
                setError('');
                setOrderNumber('');
                formik.handleChange(e);
              }}
              value={formik.values.pml}
            />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            {orderNumber && (
              <Text style={{ color: 'green' }}>
                Added Pizza Order No. {orderNumber}
              </Text>
            )}
          </FormControl>
          <Button
            disabled={formik.isSubmitting}
            type="submit"
            colorScheme="red"
            w={'full'}
          >
            Add Order
          </Button>
          <Button
            type="reset"
            colorScheme="green"
            onClick={() => {
              setError('');
              setOrderNumber('');
              formik.setFieldValue('pml', '')}}
              w={'full'}
          >
            Clear
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
