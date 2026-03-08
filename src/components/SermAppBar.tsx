import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function SermAppBar() {
	return (
		<AppBar>
			<Toolbar>
				<IconButton>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
