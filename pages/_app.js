import React from 'react'
import {ThemeProvider} from 'theme-ui'
import theme from '../theme'

export default function Gr8hubApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
       <Component {...pageProps} />
    </ThemeProvider>
  )
}


