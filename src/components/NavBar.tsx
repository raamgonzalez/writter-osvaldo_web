import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { themeSelected } from '../context/Themes';
import CardSpotlight from './ui/CardSpotLight';

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
		<nav className='w-full h-full'>
			<ul className='list-none h-full flex flex-col gap-2 justify-between'>
				{navLinks.map((link) =>
					link.active &&
					<CardSpotlight action key={link.id} border radiusEdit='all' classStyles={'w-full h-full'}>
						<li className='h-[0.9rem] w-full flex items-center justify-center text-center'>
							<a className="text-xl font-bold w-full p-0 x-0" href={link.href}>{link.name}</a>
						</li>
					</CardSpotlight>
				)
				}
			</ul >
		</nav >
	)
}
