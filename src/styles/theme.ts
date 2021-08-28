import { extendTheme, ThemeConfig } from '@chakra-ui/react'
// import { mode } from "@chakra-ui/theme-tools"
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}
export const theme = extendTheme({
  //CUSTOMIZANDO O ESTILO PADRÃO
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  //SETANDO O ESTILO PADRÃO
  styles: {
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "black",
        p: {
          color: props.colorMode === "dark" ? "white" : "black",
        },
        button: {
          color: props.colorMode === "dark" ? "white" : "black",
        },

      },
    }),
  },
  config
})