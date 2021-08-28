import { 
  Box, 
  Button,  
  Flex, 
  Heading, 
  Divider, 
  VStack, 
  SimpleGrid, 
  HStack 
} from "@chakra-ui/react";
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import {Input} from '../../Components/Form/Input'
import Link from "next/link";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler } from "react-hook-form";
export default function UserCreate(){

  type CreateUserFormData = {
    name:string;
    email: string;
    password: string;
    password_confirmation:string;
  }

  const createUserFormSchema = yup.object().shape({
    name:yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('Formato de email inválido'),
    password: yup.string().required('Senha obrigatório').min(5, 'Tamanho minino de 5 dígitos').max(10, 'Tamanho máximo de 10 dígitos'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')],'As senhas precisam ser iguais')
    // textArea: yup.string().required('Campo obrigatório'),
    // number: yup.number().required('Campo obrigatório')
  })

  const { register, handleSubmit, formState } = useForm({
    resolver:yupResolver(createUserFormSchema)
  })

  const errorsForm = formState.errors;

  console.log('errorsForms', errorsForm)

  const handleCreateUser:SubmitHandler<CreateUserFormData> = async (data) =>{
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

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
         as = "form"
         flex="1"
         borderRadius={8}
         bg="gray.800"
         p={["4","8"]}
         onSubmit={handleSubmit(handleCreateUser)}
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
          <VStack spacing={["4","8"]}>
            <SimpleGrid 
              minChildWidth="240px" 
              spacing={["4","8"]}
              w="100%"
            >
              <Input 
                name="name"
                label="Nome Completo"
                error={errorsForm.name}
                {...register('name')}
              />
              <Input 
                name="email"
                type="email"
                label="E - mail"
                error={errorsForm.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid 
              minChildWidth="240px" 
              spacing={["4","8"]}
              w="100%"
            >
              <Input 
                name="password"
                type="password"
                label="Senha"
                error={errorsForm.password}
                {...register('password')}
              />
              <Input 
                name="password_confirmation"
                type="password"
                label="Confirmarção senha"
                error={errorsForm.password_confirmation}
                {...register('password_confirmation')}
              />
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
              <Link href="/users" passHref>
                <Button
                  as = "a"
                  // colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                // colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
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