import { useStore } from "@nanostores/react";
import { themeSelected } from "../../context/Themes";

export default function ButtonArrow({redirect, href}) {

	const $themeSelected = useStore(themeSelected);
	const colorStroke = $themeSelected === 'dark' ? '#b3bbc6' : '#21252c'

	return (
		<a  href={href? href : 'null'} target={redirect? '_blank' : '_self' } >
			<svg  width="35px" height="35px" xmlns="http://www.w3.org/2000/svg">
				<path stroke={colorStroke} d="M20.2566 17.7244L15.1925 22.7886M15.1925 22.7886L10.1283 17.7244M15.1925 22.7886L15.1925 7.59617"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>		
		</a>
	)
}



