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
			<section className='w-full'>
				<button onClick={() => setIsOpen(!isOpen)} className='no-underline bg-transparent md:hidden'>
					<Hamburguer isOpen={isOpen} />
				</button>
				<nav className={isOpen ? `visible fixed transition-all ease-in-out z-10 top-0 right-0 text-right w-full h-full p-5 ${isDarkMode ? 'bg-dark' : 'bg-light'} md:text-center md:visible md:opacity-100 md:h-auto md:block md:w-full md:transition-all md:ease-in-out md:relative md:bg-transparent md:p-0 md:z-0` : `hidden fixed transition-all ease-in-out z-10 top-0 right-0 text-right w-full h-full p-5 md:visible md:opacity-100 md:h-auto md:transition-all md:ease-in-out md:block md:relative md:bg-transparent md:p-0 md:z-0`}>
					<button onClick={() => setIsOpen(!isOpen)} className='block absolute top-[-0.5%] right-0 p-0 mt-[24.5008px] mr-[1.2rem] no-underline bg-transparent md:hidden'>
						<Hamburguer isOpen={isOpen} />
					</button>
					<ul className='flex flex-col justify-center w-full h-full md:block md:flex md:flex-row md:gap-6 md:w-full md:h-full'>
						{navLinks.map((link) =>
							link.active && (
								<li className="text-center py-1 px-2 md:block md:visible" key={link.id}>
									<a className="text-xxlarge md:block md:visible md:text-xxlarge" href={link.href}>{link.name}</a>
								</li>
							))
						}
					</ul>
				</nav>
			</section>
		</>
	)
}
