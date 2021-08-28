import {Button, Flex, Stack} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import{Input} from '../Components/Form/Input';
import{InputTextArea} from '../Components/Form/InputTextArea';
import { useEffect } from 'react';


export default function SignIn() {
  type SignInFormData = {
    email: string;
    password: string;
  }
  const signFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('Formato de email inválido'),
    password: yup.string().required('Senha obrigatório').min(5, 'Tamanho minino de 5 dígitos').max(10, 'Tamanho máximo de 10 dígitos'),
    // textArea: yup.string().required('Campo obrigatório'),
    // number: yup.number().required('Campo obrigatório')
  })

  const { register, handleSubmit, formState } = useForm({
    resolver:yupResolver(signFormSchema)
  })

  const errorsForm = formState.errors;

  console.log('errorsForms', errorsForm)
  

  async function handleSignIn ( data:SignInFormData ){
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('data ===>',data)
  }

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
      onSubmit={handleSubmit(handleSignIn)}
     >
       <Stack spacing="4">
         <Input 
          type="email"
          name="email"
          label="email"
          error={errorsForm.email}
          {...register('email')}
         />
         <Input
           type="password"
           name="password"
           label="Senha"
           error={errorsForm.password}
           {...register('password')}

         /> 
         {/* <Input
           type="number"
           name="number"
           label="number"
           min="10"
           max="20"
           step="2"
           error={errorsForm.number}
           {...register('number')}

         />  
         <InputTextArea 
          name="textArea"
          label="Descrição do produto"
          error={errorsForm.textArea}
          size="sm"
          placeholder="Digite aqui a descrição do produto"
          {...register('textArea')}
         />
         */}
       </Stack>
       <Button 
         type="submit"
         marginTop="6"
         colorScheme="pink"
         size="lg"
         isLoading={formState.isSubmitting}
        >
         Entrar
       </Button>
     </Flex>
    </Flex>
  )
}
