import { useStore } from "@nanostores/react";
import { themeSelected } from "../context/Themes";


export default function Hamburguer({isOpen}) {
	const $themeSelected = useStore(themeSelected);

	const colorStroke = $themeSelected === 'dark' ? '#b3bbc6' : '#21252c'

	function HamburguerClose() {
		return (
			<svg width="61" height="45" viewBox="0 0 61 45" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2L59 42.5M59 2L2 42.5" stroke={colorStroke} stroke-width="4"/>
			</svg>
		)
	}
	
	function HamburguerOpen() {
		return (
			<svg width="59" height="44" viewBox="0 0 59 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 2H59" stroke={colorStroke} strokeWidth="4"/>
				<path d="M0 42H59" stroke={colorStroke} strokeWidth="4"/>
				<path d="M0 22H59" stroke={colorStroke} strokeWidth="4"/>
			</svg>
		)
	}


	return (
		<>
			{isOpen ? <HamburguerClose/> : <HamburguerOpen/>} 
		</>
	)
}
