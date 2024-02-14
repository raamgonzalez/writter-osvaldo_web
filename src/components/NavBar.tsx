import { useState } from 'react';
import '../styles/navbar.css'

import { useStore } from '@nanostores/react';
import { themeSelected } from '../context/Themes';
import Hamburguer from './ui/Hamburguer';

interface NavLinks {
	id: number
	name: string;
	href: string;
	active: boolean;
}

export const navLinks: NavLinks[] = [
	{
		id: 1,
		name: 'Inicio',
		href: '/',
		active: true
	},
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

	const [isOpen, setIsOpen] = useState(false)
	const $themeSelected = useStore(themeSelected);
	const isDarkMode = $themeSelected === 'dark'

	return (
		<>
			<section>
				<button onClick={() => setIsOpen(!isOpen)} className='header__abrir navbar__button'>
					<Hamburguer isOpen={isOpen} />
				</button>
				<nav className={isOpen ? `navbar navbar--visible ${isDarkMode ? 'bg-dark' : 'bg-light'}` : `navbar`}>
					<button onClick={() => setIsOpen(!isOpen)} className='navbar__cerrar navbar__button '>
						<Hamburguer isOpen={isOpen} />
					</button>
					<ul className='flex flex-col justify-center w-full'>
						{navLinks.map((link) =>
							link.active && (
								<li className="nav__li" key={link.id}>
									<a className="nav__a" href={link.href}>{link.name}</a>
								</li>
							))
						}
					</ul>
				</nav>
			</section>
		</>
	)
}
