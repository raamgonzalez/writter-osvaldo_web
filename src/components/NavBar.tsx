import { useState } from 'react';
import '../styles/navbar.css'

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

	return (
		<>
			<section>
				<button onClick={() => setIsOpen(!isOpen)} className='header__abrir navbar__button'><img src='/ui/hamburger_open.svg' /></button>
      	<nav className={isOpen ? 'navbar navbar--visible' : 'navbar'}>
					<button onClick={() => setIsOpen(!isOpen)} className='navbar__cerrar navbar__button'><img className='navbar__img' src='/ui/hamburger_close.svg' /></button>
						<ul className='nav__ul'>
						{ navLinks.map((link) => {
							return (
									link.active && (
									<li className="nav__li" key={link.id}>
										<a className="nav__a" href={ link.href }>{ link.name }</a>
									</li>
									)
								)
							})
						}
						</ul>
      	</nav>
			</section>
		</>
	)
}
