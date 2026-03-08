import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Box, createTheme } from '@mui/material'
import SermAppBar from './components/SermAppBar'

const theme = createTheme({
	palette: {
		mode: 'dark'
	}
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box className='root'>
				<SermAppBar />
			</Box>
		</ThemeProvider>
	)
}

export default App
