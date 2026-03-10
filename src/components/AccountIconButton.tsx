import { AccountCircle } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";

export default function AccountIconButton() {
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
				<MenuItem>Log out</MenuItem>
			</Menu>
		</Box>
	);
}
