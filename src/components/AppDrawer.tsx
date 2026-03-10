import { Box, Drawer, List, ListItemButton, ListItemText } from '@mui/material'

interface AppDrawerProps {
	open: boolean
	onClose: () => void;
}

export function AppDrawer({open, onClose}: AppDrawerProps) {
	return (
		<Drawer open={open} onClose={onClose}>
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

	);
}

