export default function Container({children}) {
	return (
		<div className="border border-secondary py-2 px-2 rounded-lg hover:bg-base-300 hover:animate-pulse">
			{children}
		</div>
	)
}
