import { Box, Text } from "@chakra-ui/react";

export default function ToppingsItem({ topping }) {
  return (
    <Box>
      {
        topping.items.map((item) => (<Text key={`${topping.area}${item}`} mx='5px'>{item}</Text>))
      }
    </Box>
  );
}
