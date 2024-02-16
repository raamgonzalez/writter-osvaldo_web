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
				<button onClick={() => setIsOpen(!isOpen)} className='no-underline bg-transparent'>
					<Hamburguer isOpen={isOpen} />
				</button>
				<nav className={isOpen ? `opacity-100 fixed transition-all ease-in-out z-10 top-0 right-0 text-right w-full h-full p-5 visible ${isDarkMode ? 'bg-dark' : 'bg-light'}` : `opacity-100 hidden fixed transition-all ease-in-out z-10 top-0 right-0 text-right w-full h-full p-5`}>
					<button onClick={() => setIsOpen(!isOpen)} className='block absolute top-[-0.5%] right-0 p-0 mt-[24.5px] mr-[1.20rem] no-underline bg-transparent '>
						<Hamburguer isOpen={isOpen} />
					</button>
					<ul className='flex flex-col justify-center w-full h-full'>
						{navLinks.map((link) =>
							link.active && (
								<li className="text-center py-1 px-2 " key={link.id}>
									<a className="text-xxlarge" href={link.href}>{link.name}</a>
								</li>
							))
						}
					</ul>
				</nav>
			</section>
		</>
	)
}
