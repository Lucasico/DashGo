

import { Button, HStack, Icon, useColorMode } from "@chakra-ui/react";
import { RiNotificationFill, RiUserAddLine, RiSunLine, RiMoonFill } from "react-icons/ri";

export function NotificationsNav(){
  const { colorMode, toggleColorMode } = useColorMode()
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
     <Button onClick={toggleColorMode} variant="ghost">
      {
        colorMode === "light" ? (
          <Icon as = {RiMoonFill} fontSize={["10","15","20"]}/>
          ) : (
          <Icon as = {RiSunLine} fontSize={["10","15","20"]}/>
        ) 
      }
     </Button>

   </HStack>
  )
}