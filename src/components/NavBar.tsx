import { useState } from 'react';
import '../styles/navbar.css'

interface NavLinks {
	name: string;
	href: string;
	active: boolean;
}

export const navLinks: NavLinks[] = [
	{
		name: 'Inicio',
		href: '/',
		active: true
	},
	{
		name: 'Libros',
		href: '/books',
		active: false
	},
	{
		name: 'Artículos',
		href: '/articles',
		active: true
	},
	{
		name: 'Acerca',
		href: '/about',
		active: true
	},
	{
		name: 'Prensa',
		href: '/press',
		active: false
	}
]


export default function NavBar() {

	const [isOpen, setIsOpen] = useState(false)



	return (
	<section className="navbar">
		<nav className="navbar__nav nav">
			<div>
				<button className="nav__button" onClick={() => {setisOpen(!isOpen)}}><img src='/ui/hamburguer_open.svg' /></button>
			</div>
 
			<div className={isOpen? 'nav__open' :'nav__closed'}>
				<ul className="nav__open--ul">
					{ navLinks.map((link) => {
						return (
							link.active && (
							<li className="nav__open--li">
								<a className="nav__open--a" href={ link.href }>{ link.name }</a>
							</li>
							)
						)
					})
					}
				</ul>
			</div>
		</nav>
	</section>
	)
}

