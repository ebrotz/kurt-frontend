import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import TableViewIcon from '@mui/icons-material/TableView'
import GridViewIcon from '@mui/icons-material/GridView'

export default function ServicesContainer() {
	const stuff = []

	for (let i = 0; i < 10; i++) {
		stuff.push({
			name: `Service ${i + 1}`,
			description: "Lorem ipsum dolor sit amet"
		})
	}

	var allCards = stuff.map((s) => {
		return (
			<Card variant="outlined">
				<CardActionArea>
					<CardContent>
						<Typography variant="h6">{s.name}</Typography>
						<Typography variant="body2">{s.description}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		)
	})

	// TODO Toggle service display based off what is visible.
	// TODO Add footer buttons
	return (
		<Container>
			<Box id="services-header">
				<ToggleButtonGroup exclusive>
					<ToggleButton value="grid">
						<GridViewIcon />
					</ToggleButton>
					<ToggleButton value="table">
						<TableViewIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Grid id="services-grid" container spacing={4}>
				{
					allCards.map(c => (
						<Grid size={3}>{c}</Grid>
					))
				}
			</Grid>
			<Box>
				<Typography>Footer</Typography>
			</Box>
		</Container>
	)
}
