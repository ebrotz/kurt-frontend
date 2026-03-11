import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Box, createTheme } from '@mui/material'
import KurtAppBar from './components/AppBar'
import type { AppDrawerItem } from './components/AppDrawer'

const theme = createTheme({
	palette: {
		mode: 'dark'
	}
})

const drawerItems: AppDrawerItem[] = [
	{
		name: "Services",
		handler: () => { }
	},
	{
		name: "Deployments",
		handler: () => { }
	},
	{
		name: "Incidents",
		handler: () => { }
	},
	{
		name: "On-Call",
		handler: () => { }
	}
]

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box className='root'>
				<KurtAppBar drawerItems={drawerItems}/>
				<Box className='main'>
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default App
