import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  VStack
} from "@chakra-ui/react";
import { createOrder } from "../services/OrderService";

export default function OrderForm() {
  const formik = useFormik({
    initialValues: {
    },
    onSubmit: (values) => {
      createOrder(values.pml);
    }
  });
  return (
      <Box p={6} rounded="md" width="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack height={'md'} spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Order Pizza Form</FormLabel>
              <Textarea
                height={'sm'}
                id="pml"
                name="pml"
                placeholder="Input valid Pizza PML Order"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.pml}
              />
            </FormControl>
            <Button type="submit" colorScheme='red' width="full" mx="10">
              Add Order
            </Button>
          </VStack>
        </form>
      </Box>
  );
}