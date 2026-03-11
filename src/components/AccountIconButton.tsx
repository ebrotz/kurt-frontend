import { AccountCircle, Logout } from "@mui/icons-material";
import { Box, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";

interface AccountIconButtonProps {
	logoutHandler: React.MouseEventHandler<HTMLLIElement>;
}

export default function AccountIconButton({ logoutHandler }: AccountIconButtonProps) {
	const [open, setOpen] = React.useState(false)
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		setOpen(true)
		setAnchorEl(event.currentTarget)
	}

	const handleOnClose = () => {
		setAnchorEl(null)
		setOpen(false)
	}

	return (
		<Box>
			<IconButton onClick={handleOnClick}>
				<AccountCircle>
				</AccountCircle>
			</IconButton>
			<Menu anchorEl={anchorEl} open={open} onClose={handleOnClose}>
				<MenuItem onClick={logoutHandler}>
					<ListItemIcon>
						<Logout />
						Log Out
					</ListItemIcon>
				</MenuItem>
			</Menu>
		</Box>
	);
}
