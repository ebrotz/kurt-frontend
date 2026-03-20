import { Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from "@mui/material";

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
					<CardHeader title={s.name} />
					<CardContent>
						<Typography variant="body2">{s.description}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		)
	})

	return (
		<Grid container>
			{
				allCards.map(c => (
					<Grid>{c}</Grid>
				))
			}
		</Grid>
	)
}
