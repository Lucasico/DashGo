import { Flex } from "@chakra-ui/react"
import { Logo } from "./Components/Logo"
import { NotificationsNav } from "./Components/NotificationsNav"
import { Profile } from "./Components/Profile"
import { SeachBox } from "./Components/SearchBox"
export function Header(){
  return(
    <Flex
      as = "header"
      width = "100%"
      maxWidth={1400}
      height = "20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
     
    
    >
      <Logo />
      <Flex
        align="center"
        marginLeft="auto"
      >
        <SeachBox />
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
   
  )
}