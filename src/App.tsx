import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Box, createTheme } from '@mui/material'
import KurtAppBar from './components/AppBar'

const theme = createTheme({
	palette: {
		mode: 'dark'
	}
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box className='root'>
				<KurtAppBar />
			</Box>
		</ThemeProvider>
	)
}

export default App
