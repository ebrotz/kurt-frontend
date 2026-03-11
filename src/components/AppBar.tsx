import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { AppDrawer } from './AppDrawer';
import AccountIconButton from './AccountIconButton';


export default function KurtAppBar() {
	const [isLoggedIn, setLoggedIn] = React.useState(false)
	const [isDrawerOpen, setDrawerOpen] = React.useState(false)

	const toggleDrawer = () => {
		setDrawerOpen(!isDrawerOpen)
	};

	const closeDrawer = () => {
		setDrawerOpen(false)
	}

	const logInHandler = () => {
		setLoggedIn(true)
	}

	const logoutHandler = () => {
		setLoggedIn(false)
	}

	return (
		<Box>
			<AppBar>
				<Toolbar>
					<IconButton onClick={toggleDrawer} >
						<MenuIcon />
					</IconButton>
					<Box sx={{ flexGrow: 1 }} />
					{
						isLoggedIn ? (
							<AccountIconButton logoutHandler={logoutHandler} />
						) : (
							<Button onClick={logInHandler}>
								LOGIN
							</Button>
						)
					}
				</Toolbar>
			</AppBar>
			<nav>
				<AppDrawer open={isDrawerOpen} onClose={closeDrawer} />
			</nav>
		</Box >
	)
}
