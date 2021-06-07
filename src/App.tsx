import { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

import Routes from './routes/index'
import { HelmetProvider } from 'react-helmet-async'

import { fetchUser } from './store/user'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')

    token && dispatch(fetchUser(token))
  }, [dispatch])

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
