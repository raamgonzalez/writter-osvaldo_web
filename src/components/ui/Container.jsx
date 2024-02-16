export default function Container({children}) {
	return (
		<div className="border border-secondary py-large px-large rounded-lg hover:bg-base-300 hover:animate-pulse">
			{children}
		</div>
	)
}
