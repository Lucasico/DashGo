import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData ?: boolean;
}
export function Profile({showProfileData = true}:ProfileProps){
  return(
    <Flex aling="center">
      {
        showProfileData && (
          <Box paddingRight="3">
            <Text>Lucas Bezerra</Text>
            <Text color="gray.300" fontSize="small">
              lucassantoscrfbezerra@gmail.com
            </Text>
          </Box>
        )
      }
      <Avatar size="md" name="Lucas Bezerra" src="https://github.com/lucasico.png"/>
  </Flex>
  )
}