import { ThemeProvider } from '@emotion/react'
import './App.css'
import { createTheme, CssBaseline, Typography } from '@mui/material'
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
	const [currentService, setCurrentService] = React.useState("Services")

	const handleDrawerButtonPressed: React.MouseEventHandler<HTMLDivElement> = (event) => {
		setCurrentService(event.currentTarget.innerText)
	}

	const services: Map<string, React.ComponentType> = new Map([
		["Services", ServicesContainer],
		["Deployments", () => (<Typography>Deployments</Typography>)],
		["Incidents", () => (<Typography>Incidents</Typography>)],
		["On-Call", () => (<Typography>On-Call</Typography>)],
	])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<KurtAppBar drawerItems={Array.from(services.keys())} drawerItemOnClick={handleDrawerButtonPressed} />
			<ActiveView currentView={currentService} views={services} />
		</ThemeProvider>
	)
}

export default App
