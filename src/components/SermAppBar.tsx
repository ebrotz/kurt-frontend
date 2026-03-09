import { AppBar, Box, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'

export default function SermAppBar() {
	const [isDrawerOpen, setDrawerOpen] = React.useState(false)

	const toggleDrawer = () => {
		setDrawerOpen(!isDrawerOpen)
	};

	const closeDrawer = () => {
		setDrawerOpen(false)
	}

	return (
		<Box>
			<AppBar>
				<Toolbar>
					<IconButton onClick={toggleDrawer}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer open={isDrawerOpen} onClose={closeDrawer}>
					<Box>
						<List>
							{
								// Items should ideally be dynamic
								['Services', 'Deployments', 'Incidents'].map((item, idx) => (
									<ListItemButton key={idx}>
										<ListItemText primary={item} />
									</ListItemButton>
								))
							}
						</List>
					</Box>

				</Drawer>
			</nav>
		</Box>
	)
}
