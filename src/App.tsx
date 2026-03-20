import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Box, createTheme, Typography } from '@mui/material'
import KurtAppBar from './components/AppBar'
import React from 'react'
import ServicesContainer from './components/ServicesContainer'
import ActiveView from './components/ActiveView'

const theme = createTheme({
	palette: {
		mode: 'dark'
	}
})

function App() {
	const [currentService, setCurrentService] = React.useState("catalog")

	const handleDrawerButtonPressed: React.MouseEventHandler<HTMLDivElement> = (event) => {
		setCurrentService(event.currentTarget.innerText)
	}

	const services: Map<string, React.ComponentType> = new Map([
		[ "Services", ServicesContainer ],
		[ "Deployments", () => (<Typography>Deployments</Typography>) ],
		[ "Incidents", () => (<Typography>Incidents</Typography>) ],
		[ "On-Call", () => (<Typography>On-Call</Typography>) ],
	])
	
	return (
		<ThemeProvider theme={theme}>
			<KurtAppBar drawerItems={Array.from(services.keys())} drawerItemOnClick={handleDrawerButtonPressed} />
			<Box className='main' sx={{p: 2, border: '1px dashed grey', display: 'flex'}}>
				{
					<ActiveView currentView={currentService} views={services} />
				}
			</Box>
		</ThemeProvider>
	)
}

export default App
