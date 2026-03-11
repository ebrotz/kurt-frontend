import { Box, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react';

export interface AppDrawerItem {
	// The name of the item as it appears in the drawer.
	name: string;
	// On-click handler for the item.
	handler: React.MouseEventHandler<HTMLDivElement>;
}

export interface AppDrawerProps {
	open: boolean
	onClose: () => void;
	items: AppDrawerItem[];
}

export default function AppDrawer({open, onClose, items}: AppDrawerProps) {
	return (
		<Drawer open={open} onClose={onClose}>
			<Box>
				<List>
					{
						// Items should ideally be dynamic
						items.map((item) => (
							<ListItemButton key={item.name} onClick={item.handler}>
								<ListItemText primary={item.name} />
							</ListItemButton>
						))
					}
				</List>
			</Box>
		</Drawer>

	);
}

