import { useStore } from "@nanostores/react";
import { themeSelected } from "../context/Themes";


export default function LineRoute() {

	const $themeSelected = useStore(themeSelected);
	const colorFill = $themeSelected === 'dark' ? '#b3bbc6' : '#21252c'

	return (
		<svg width="12" height="171" viewBox="0 0 12 171" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1H7ZM6 170.774L11.7735 165L6 159.227L0.226497 165L6 170.774ZM5 1V165H7V1H5Z" fill={colorFill}/>
		</svg>
	)
}
