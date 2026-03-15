export interface ActiveViewProps {
	currentView: string
	views: Map<String, React.ComponentType>
}

export default function ActiveView({currentView, views}: ActiveViewProps) {
	const SelectedView: React.ComponentType = views.get(currentView) ?? (() => {
		return (
			<div />
		);
	})

	return (
		<SelectedView />
	)
}
