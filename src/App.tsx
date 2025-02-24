import { useState } from 'react'
import {ThemeProvider} from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'

function App() {
  const [usingDarktheme, setUsingDarktheme] = useState(false)

  function changeTheme() {
    setUsingDarktheme(!usingDarktheme)
  }

  return (
    <ThemeProvider theme={usingDarktheme ? DarkTheme : LightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
