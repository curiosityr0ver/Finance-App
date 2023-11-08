import { useMemo } from 'react'
import { Box } from "@mui/material";
import '@/App.css'
import { createTheme } from "@mui/material/styles"
import { themeSettings } from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import NavBar from "@/scenes/navbar"
import { Height } from '@mui/icons-material';

//cd to ./client before attempting to run the App

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])


  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4em 2rem">
            <NavBar />
            <Routes>
              <Route path="/" element={<div> dashboard page</div>} />
              <Route path="/predictions" element={<div> predictions page</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div >


  )
}

export default App
