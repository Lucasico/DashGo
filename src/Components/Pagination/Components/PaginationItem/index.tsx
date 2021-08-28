import { Button } from "@chakra-ui/react";
interface PaginationItemProps{
  isCurrent?: boolean;
  number: number;
  onChangePage:( page : number ) => void
}
//parametro opcional é bom definir um valor default
export function PaginationItem({isCurrent = false, number, onChangePage}:PaginationItemProps){
  if(isCurrent){
    return(
      <Button 
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor:'pink.500',
          cursor: 'default'
        }}
      >
       {number}
      </Button>
    )
  } else {
    return (
      <Button 
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="gray.700"
        _hover={{
          bgColor:'gray.500'
        }}   
        onClick={() => onChangePage(number)} 
      >
       {number}
      </Button>
    )
  }
}