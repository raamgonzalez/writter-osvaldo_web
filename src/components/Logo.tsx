

import { useStore } from '@nanostores/react';
import { themeSelected } from '../context/Thames';

export default function Logo({ size }: any) {
	const widthLogo = size === 'small' ? 42 : 172
	const $themeSelected = useStore(themeSelected);

	const colorFill = $themeSelected === 'dark' ? '#b3bbc6' : '#21252c'

	return (
		<a href="/">
			<svg width={widthLogo} height="auto" viewBox="0 0 172 121" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill={colorFill} d="M117.569 60.5C117.569 71.5766 115.101 81.6901 110.164 90.8403C105.228 99.9906 98.305 107.335 89.3955 112.873C80.4861 118.291 70.1318 121 58.3328 121C40.6343 121 26.4876 115.1 15.8925 103.301C5.29751 91.3821 0 77.1149 0 60.5C0 43.6443 5.41791 29.3771 16.2537 17.6985C27.21 5.8995 41.3567 0 58.694 0C76.2721 0 90.4791 5.8995 101.315 17.6985C112.151 29.4975 117.569 43.7647 117.569 60.5ZM103.301 60.6806C103.301 46.594 99.2682 34.9756 91.2015 25.8254C83.1348 16.5547 72.299 11.9194 58.694 11.9194C44.7279 11.9194 33.8318 16.6149 26.006 26.006C18.1801 35.397 14.2672 46.8348 14.2672 60.3194C14.2672 73.5632 18.1801 85.001 26.006 94.6328C33.8318 104.265 44.8483 109.081 59.0552 109.081C72.901 109.081 83.7368 104.445 91.5627 95.1746C99.3885 85.7836 103.301 74.2856 103.301 60.6806Z" />
				<path fill={colorFill} d="M172 119H153V107.382V105.838V12.6185V1H172V12.6185V107.382V119Z" />
				<path fill={colorFill} d="M153.693 70.4328H144.482V119.194H134.369L132.743 102.94C129.252 108.117 124.255 112.452 117.754 115.943C111.373 119.314 103.848 121 95.1791 121C79.0458 121 65.9826 115.221 55.9896 103.663C45.9965 92.1045 41 77.8975 41 61.0418C41 49.7244 43.408 39.4906 48.2239 30.3403C53.1602 21.0697 59.9025 13.7254 68.4507 8.30746C77.1194 2.76915 87.0522 0 98.2493 0C107.64 0 115.827 1.32438 122.81 3.97314C129.914 6.50149 135.693 9.75223 140.148 13.7254V37.0224H132.201L128.59 20.4075C125.339 18.2403 121.366 16.3139 116.67 14.6284C112.095 12.8224 106.196 11.9194 98.9716 11.9194C85.8483 11.9194 75.2532 16.4343 67.1866 25.4642C59.1199 34.494 93.3731 46.1726 93.3731 60.5C93.3731 75.0682 58.9393 86.807 66.6448 95.7164C74.3503 104.626 84.6443 109.081 97.5269 109.081C108.242 109.081 116.55 106.191 122.449 100.412C128.349 94.5124 131.299 88.0109 131.299 80.9075V70.4328H103.306V58.694H153.693V70.4328Z" />
			</svg>
		</a>

	)
}


