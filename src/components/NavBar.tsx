import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { themeSelected } from '../context/Themes';
import BubbleCard from './ui/BubbleCard.astro';

interface NavLinks {
	id: number
	name: string;
	href: string;
	active: boolean;
}

export const navLinks: NavLinks[] = [
	{
		id: 2,
		name: 'Acerca',
		href: '/about',
		active: true
	},
	{
		id: 3,
		name: 'Libros',
		href: '/books',
		active: true
	},
	{
		id: 4,
		name: 'Notas',
		href: '/notes',
		active: true
	},
	{
		id: 5,
		name: 'Prensa',
		href: '/press',
		active: false
	}
]


export default function NavBar() {

	const $themeSelected = useStore(themeSelected);
	const isDarkMode = $themeSelected === 'dark'

	return (
		<nav className='w-full'>
			<ul className='list-none h-full flex flex-col gap-2'>
				{navLinks.map((link) =>
					link.active &&
					<li className="w-full grid border border-[#818181] rounded-3xl h-full text-2xl items-center font-bold text-center" key={link.id}>
						<a className="" href={link.href}>{link.name}</a>
					</li>
				)
				}
			</ul>
		</nav>
	)
}
