import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Text,Tbody, Td, Th, Thead, Tr, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import {Input} from '../../Components/Form/Input'
export default function UserCreate(){

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
         
          <Heading 
            size="lg"
            fontWeight="normal"
          >
            Criar usuário
          </Heading>

          <Divider 
            my="6"
            borderColor="gray.700"
          />

          {
            //Vstack add/modifiel spacing vertical
          }
          <VStack spacing="8">
            <SimpleGrid 
              minChildWidth="240px" 
              spacing="8"
              w="100%"
            >
              <Input name="name" label="Nome Completo"/>
              <Input name="email" type="email" label="Nome Completo"/>
            </SimpleGrid>
            <SimpleGrid 
              minChildWidth="240px" 
              spacing="8"
              w="100%"
            >
              <Input name="password" type="password" label="Senha"/>
              <Input name="password_confirmation" type="password" label="Confirmarção senha"/>
            </SimpleGrid>
          </VStack>

          <Flex
            mt="8"
            justify="flex-end"
          >
            {
              //HStack add/modifiel spacing horizontal
            }
            <HStack
              spacing="4"
            >
              <Button
                colorScheme="whiteAlpha"
              >
                Cancelar
              </Button>
              <Button
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}