
import { userUsers } from "../../services/hooks/userUsers";
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import { Pagination } from "../../Components/Pagination";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";
import { 
  Box, 
  Button, 
  Checkbox, 
  Flex, 
  Heading, 
  Icon, 
  Table, 
  Text, 
  Tbody, 
  Td, 
  Th, 
  Thead, 
  Tr, 
  useBreakpointValue, 
  Spinner
} from "@chakra-ui/react";
import { useState } from "react";
export default function UserList(){
  const [page, setPage] = useState(1)
  const {data, isLoading, error, isFetching} = userUsers(
    page
  )
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
             {
               !isLoading && isFetching && 
                <Spinner 
                  size="sm"
                  color="gray.500"
                  ml="4"
                />
             }
           </Heading>

            <Link href="/users/create" passHref>
              <Button 
                as = "a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as = {RiAddLine} />}
              >
                Criar novo usuario
              </Button>
            </Link>

         </Flex>
         {
           isLoading ? (
             <Flex justify="center">
               <Spinner />
             </Flex>
           ): error ? (
              <Flex justify="center">
                <Text>
                  Falha ao obter dados do servidor
                </Text>
              </Flex>
           ) : (
            <>
                <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4","4","6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>
                      Usuário
                    </Th>
                  {
                    isWideVersion && (
                      <Th>
                        Data de cadastro
                      </Th>
                    )
                  }
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    data.users.map(user => {
                      return(

                      <Tr key={user.id}>
                        <Td  px={["4","4","6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">
                              {user.name}
                            </Text>
                            <Text fontSize="sm" color="gray.300">
                            {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {
                          isWideVersion && (
                            <Td>
                              {user.createdAt}
                            </Td>
                          )
                        }
                      </Tr>
                      )
                    })
                  }
                
                </Tbody>
              </Table>
              <Pagination 
                 totalCountOfRegisters={data.totalCount}
                 currentPage={page}
                 onPageChange={setPage}
              />
            </>
           )
         }
        </Box>
      </Flex>
    </Box>
  )
}