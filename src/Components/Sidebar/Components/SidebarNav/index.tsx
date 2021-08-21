import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

import { NavSection } from "../NavSection";
import { NavLink } from "../NavSection/Components/NavLink";

export function SideBarNav(){

 
  return(
    <Stack spacing="12" aling="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
      </ NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="#">Formulários</NavLink>
        <NavLink icon={RiGitMergeLine} href="#">Automação</NavLink>
      </ NavSection>
    </Stack>
  )
}