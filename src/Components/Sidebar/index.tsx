import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./Components/NavSection/Components/NavLink";
import { NavSection } from "./Components/NavSection";

export function Sidebar(){
  return(
    <Box as="aside" w="64" mr="8"  borderRadius={8}>
      <Stack spacing="12" aling="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </ NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </ NavSection>
      </Stack>
    </Box>
  )
}