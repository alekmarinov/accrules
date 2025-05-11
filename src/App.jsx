import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import { Box } from '@mui/material'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep blue
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c62828', // Deep red
      light: '#ff5f52',
      dark: '#8e0000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        },
      },
    },
  },
})

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <HelmetProvider>
      <Helmet>
        <title>Accrules</title>
        <meta name="description" content="Accrules is an accounting and business services company based in Sofia, Bulgaria. We provide professional accounting, payroll, and business solutions for companies of all sizes." />
        <meta name="keywords" content="accounting, bookkeeping, payroll, business services, Sofia, Bulgaria, Accrules" />
        <meta property="og:title" content="Accrules" />
        <meta property="og:description" content="Professional accounting and business services in Sofia, Bulgaria." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Accrules" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh',
            width: '100%',
            margin: '0 auto',
          }}>
            <Header language={language} setLanguage={setLanguage} />
            <Box sx={{ flex: 1, width: '100%' }}>
              <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/services" element={<Services language={language} />} />
                <Route path="/contact" element={<Contact language={language} />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
