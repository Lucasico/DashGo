import Document, {Head, Html, Main, NextScript} from 'next/document'
import {ColorModeScript} from '@chakra-ui/react';
import {theme} from '../styles/theme'
export default class MyDocument extends Document{

  render(){
    return(
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          <Main />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <NextScript />
        </body>
      </Html>
    )
  }
}