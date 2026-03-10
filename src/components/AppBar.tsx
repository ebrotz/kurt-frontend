import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { AppDrawer } from './AppDrawer';

export default function KurtAppBar() {
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
				<AppDrawer open={isDrawerOpen} onClose={closeDrawer} />
			</nav>
		</Box>
	)
}
