
import '../styles/listofbooks.css'
import '../styles/progressbar.css'

import { data } from '../data/data';
import { useRef } from 'react';
const { books } = data;
import { motion, useScroll } from "framer-motion";

type Book = {
	id: number;
	title: string;
	href: string;
	img: string;
	issue: string;
	description: string;
};

export default function ListOfBooks() {

	const ref = useRef(null);
	const { scrollXProgress } = useScroll({ container: ref });

	return (
		<>

			<section className="w-full">
				<ul className="flex flex-nowrap overflow-x-scroll gap-2 scroll-smooth" ref={ref}>
					{books.map((book: Book) => (
						<a className='min-w-full h-auto relative rounded-xl' href={`/books/#${book.title}`} key={book.id} target="_blank">
							<img className='min-h-full min-w-full object-cover rounded-xl' src={book.img} alt={`Imagen de portada de libro ${book.title}`} />
							<p className='bg-text text-secondary flex items-center h-2 visible rounded-r-xl absolute text-small p-xl bottom-36 gap-1'><span className='font-extrabold'>Comprar</span> {book.title}</p>
						</a>

					))}
				</ul>
			</section>

		</>
	)
}




