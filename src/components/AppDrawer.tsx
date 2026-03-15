import { Box, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react';

export interface AppDrawerProps {
	// True if the app drawer is open. False otherwise.
	open: boolean
	// Handler when the drawer is closed.
	onClose: () => void;
	// Buttons that will compose the drawer.
	items: string[];
	// On-click handler for each item.
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function AppDrawer({open, onClose, items, onClick}: AppDrawerProps) {
	return (
		<Drawer open={open} onClose={onClose}>
			<Box>
				<List>
					{
						items.map((item) => {
							return (
								<ListItemButton key="item" onClick={onClick}>
									<ListItemText>{item}</ListItemText>
								</ListItemButton>
							);
						})
					}
				</List>
			</Box>
		</Drawer>

	);
}

