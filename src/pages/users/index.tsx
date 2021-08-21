import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Text,Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import { Pagination } from "../../Components/Pagination";
export default function UserList(){

  return(
    <Box>
      <Header />
      <Flex 
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box 
         flex="1"
         borderRadius={8}
         bg="gray.800"
         p="8"
        >
         <Flex 
          mb="8"
          justify="space-between"
          align="center"
         >
           <Heading 
            size="md"
            fontWeight="normal"
           >
             Usuários
           </Heading>

           <Button 
            as = "a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as = {RiAddLine} />}
           >
             Criar novo usuario
           </Button>

         </Flex>
         <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  Usuário
                </Th>
                <Th>
                  Data de cadastro
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">
                      Lucas Bezerra
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                      lucassantoscrfbezerra@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  04 de Janeiro de 2020
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">
                      Jonh Doe
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                      JonhDoe@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  25 de Abril de 1987
                </Td>
              </Tr>
            </Tbody>
         </Table>
        <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}