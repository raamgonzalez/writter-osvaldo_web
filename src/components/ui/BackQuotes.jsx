import { useStore } from "@nanostores/react";
import { themeSelected } from "../../context/Themes";

export default function BackQuotes() {

	const $themeSelected = useStore(themeSelected);

	const colorStroke = $themeSelected === 'dark' ? '#b3bbc6' : '#21252c'

	return (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.0108 0.000900369H12.0108C11.0685 -0.0166505 10.9582 0.431178 11.0108 1.5009V10.5009V13.0009C11.8844 15.73 13.5109 18.501 14.5108 19.5009C15.5107 20.5008 16.0632 19.8995 16.0108 18.5009C15.1364 16.468 14.7359 15.2627 14.5108 13.0009V10.5009H18.5108C19.2984 10.5624 19.5323 10.3518 19.5108 9.5009V1.5009C19.5686 0.31206 19.3043 -0.0198146 18.0108 0.000900369Z" fill={colorStroke}/>
		<path d="M7.0108 0.000900369H1.0108C0.0684701 -0.0166505 -0.0418413 0.431178 0.0108025 1.5009V10.5009V13.0009C0.884356 15.73 2.51086 18.501 3.5108 19.5009C4.51074 20.5008 5.06319 19.8995 5.0108 18.5009C4.13644 16.468 3.73586 15.2627 3.5108 13.0009V10.5009H7.5108C8.29839 10.5624 8.53233 10.3518 8.5108 9.5009V1.5009C8.56864 0.31206 8.30427 -0.0198146 7.0108 0.000900369Z" fill={colorStroke}/>
	</svg>
	
	)
}