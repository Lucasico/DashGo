import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationFill, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav(){
  return (
    <HStack
      spacing={["6","8"]}
      mx={["6","8"]}
      pr={["6","8"]}
      py="4" 
      color="gray.300" 
      borderRightWidth={1} 
      borderColor="gray.700"
    >
     <Icon as = {RiNotificationFill} fontSize={["10","15","20"]}/>
     <Icon as = {RiUserAddLine} fontSize={["10","15","20"]}/>
   </HStack>
  )
}