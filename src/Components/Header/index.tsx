import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react"
import { Logo } from "./Components/Logo"
import { NotificationsNav } from "./Components/NotificationsNav"
import { Profile } from "./Components/Profile"
import { SeachBox } from "./Components/SearchBox"
import { RiMenuLine } from "react-icons/ri"
export function Header(){

  const {onOpen} = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })

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
      {
        !isWideVersion && (
          <IconButton 
            aria-label="Open Navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          >

          </IconButton >


        )
      }
      <Logo />
      <Flex
        align="center"
        marginLeft="auto"
      >
        {
          isWideVersion && (
            <SeachBox />
          )
        }
        <NotificationsNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
   
  )
}