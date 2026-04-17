import { Box, Card, CardActionArea, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material";

export default function ServicesContainer() {
	const stuff = []

	for (let i = 0; i < 10; i++) {
		stuff.push({
			name: `Service ${i+1}`,
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

	// TODO Add header buttons
	// TODO Add footer buttons
	return (
		<Container>
			<Box>
				<Typography>Header</Typography>
			</Box>
			<Grid id="servicesGrid" container spacing={4}>
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
