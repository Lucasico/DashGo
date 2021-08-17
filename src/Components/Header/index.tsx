import { Flex, Icon, Input, Text, HStack, Box, Avatar } from "@chakra-ui/react"
import {RiNotificationFill, RiSearchLine, RiUserAddLine} from 'react-icons/ri'
export function Header(){
  return(
    <Flex
      as = "header"
      width = "100%"
      maxWidth={1400}
      height = "20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
     
    
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        width = "64"
       
      >
        Dashgo
        <Text 
         as = "span"
         color = "pink.500"
         marginLeft = "1"
        >
          .
        </Text>
      </Text>

      <Flex
        as = "label"
        flex = "1"
        py="4"
        px="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color = "gray.200"
        bg ="gray.800"
        position = "relative"
        borderRadius="full"
      >

        <Input 
          color = "gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{color: 'gray.400'}}
        />

        <Icon as = {RiSearchLine} fontSize="20"/>
      </Flex>

      <Flex
        align="center"
        marginLeft="auto"
      >

        <HStack 
         spacing="8" 
         mx="8" 
         pr="8" 
         py="1" 
         color="gray.300" 
         borderRightWidth={1} 
         borderColor="gray.700"
        >
          <Icon as = {RiNotificationFill} fontSize="20"/>
          <Icon as = {RiUserAddLine} fontSize="20"/>
        </HStack>

        <Flex aling="center">
          <Box paddingRight="3">
            <Text>Lucas Bezerra</Text>
            <Text color="gray.300" fontSize="small">
              lucassantoscrfbezerra@gmail.com
            </Text>
          </Box>
          <Avatar size="md" name="Lucas Bezerra" src="https://github.com/lucasico.png"/>
        </Flex>
      </Flex>
    </Flex>
   
  )
}