import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
  return(
    <Flex aling="center">
      <Box paddingRight="3">
        <Text>Lucas Bezerra</Text>
        <Text color="gray.300" fontSize="small">
          lucassantoscrfbezerra@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Lucas Bezerra" src="https://github.com/lucasico.png"/>
  </Flex>
  )
}