import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Box, createTheme, Typography } from '@mui/material'
import KurtAppBar from './components/AppBar'
import type { AppDrawerItem } from './components/AppDrawer'
import React, { type JSX } from 'react'

const theme = createTheme({
	palette: {
		mode: 'dark'
	}
})

interface ServiceSpec {
	displayName: string
	handler: React.MouseEventHandler<HTMLDivElement>
	view: JSX.Element
}

function App() {
	const [currentService, setCurrentService] = React.useState("services")

	const handleDrawerButtonPressed: React.MouseEventHandler<HTMLDivElement> = (event) => {
		setCurrentService(event.currentTarget.innerText.toLowerCase())
	}

	const services: Map<String, ServiceSpec> = new Map([
		["services", { displayName: "Services", handler: handleDrawerButtonPressed, view: (<Typography>Services</Typography>) }],
		["deployments", { displayName: "Deployments", handler: handleDrawerButtonPressed, view: (<Typography>Deployments</Typography>) }],
		["incidents", { displayName: "Incidents", handler: handleDrawerButtonPressed, view: (<Typography>Incidents</Typography>) }],
		["on-call", { displayName: "On-Call", handler: handleDrawerButtonPressed, view: (<Typography>On-Call</Typography>) }]
	])

	let drawerItems: AppDrawerItem[] = []

	services.forEach((v) => {
		drawerItems.push({name: v.displayName, handler: v.handler})
	})

	return (
		<ThemeProvider theme={theme}>
			<Box className='root'>
				<KurtAppBar drawerItems={drawerItems} />
				<Box className='main'>
					{
						services.get(currentService)?.view ?? (<Typography>Unhandled</Typography>)
					}
			</Box>
			</Box>
		</ThemeProvider>
	)
}

export default App
