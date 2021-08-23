import { 
    FormLabel, 
    FormControl, 
    Textarea,
    FormErrorMessage
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import {FieldError} from 'react-hook-form';

interface InputProps {
  name:string;
  label?:string;
  placeholder?:string;
  size:string;
  error:FieldError
} 
const InputTextAreaBase:ForwardRefRenderFunction<HTMLTextAreaElement, InputProps> = ({name, label, placeholder, error, size, ...rest}, ref) => {

  return(
    <FormControl isInvalid={!!error}>
      {
        !!label && 
        <FormLabel htmlFor={name}>
              {label}
        </FormLabel>
      }

        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          size={size}
          ref={ref}
          {...rest}      
        />
        {
          !!error && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
          )
        }
    </FormControl>
  )
}
export const InputTextArea = forwardRef(InputTextAreaBase)