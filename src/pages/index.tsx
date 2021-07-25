import {Button, Flex, Stack} from '@chakra-ui/react';
import{Input} from '../Components/Form/Input';

export default function SignIn() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center"
      justifyContent="center"
    >
      {
         // 8 === 8 / 4 = 2rem || 8 * 4 = 32 px
         //6 === 6 / 4 = 1.5rem || 6 * 2 = 24 px
      }
     <Flex 
      as="form" 
      width="100%"
      maxWidth="360px" 
      backgroundColor="gray.800"
      p="8" 
      borderRadius="8" 
      flexDirection="column"
     >
       <Stack spacing="4">
         <Input 
          type="email"
          name="email"
          label="email"
        />
        <Input
          type="password"
          name="password"
          label="Senha"
        /> 
       </Stack>
       <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
         Entrar
       </Button>
     </Flex>
    </Flex>
  )
}
