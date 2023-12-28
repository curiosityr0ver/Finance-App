import { Box } from "@mui/material";
import './App.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import About from "@/scenes/about";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {

    // console.log(import.meta.env.VITE_URL);

    const fetchData = async () => {
      const response = await axios.get(import.meta.env.VITE_URL)

      setData(response.data)
    }
    if (!data) fetchData()

    // console.log(data);

  }, [])

  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard data={data} />} />
              <Route path="/predictions" element={<Predictions data={data} />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}




export default App;
