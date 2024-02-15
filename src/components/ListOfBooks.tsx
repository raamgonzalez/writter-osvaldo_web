
import '../styles/listofbooks.css'
import LineH from './ui/LineH';
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

			<section className="mt-msection">
				<h2 className="text-large mb-msmall">LIBRERÍA</h2>
				<LineH />
				<div className='progress'>
					<motion.div className="progress-bar" style={{ scaleX: scrollXProgress }} />
				</div>
				<ul className="mt-msmall flex flex-nowrap overflow-x-scroll gap-4 scroll-smooth" ref={ref}>
					{books.map((book: Book) => (
						<a className='min-w-[221px] h-auto w-auto relative w-full h-full' href={`/books/#${book.title}`} key={book.id} target="_blank">
							<img className='min-h-[358px] object-cover shadow-md shadow-base-300 rounded-md' src={book.img} alt={`Imagen de portada de libro ${book.title}`} />
							<p className='hover:visible hover:rounded-sm hover:py-4 hover:px-8 absolute left-[5%] bottom-[5%] hidden py-4 px-8 text-small'>{book.title}</p>
						</a>
					))}
				</ul>
			</section>

		</>
	)
}




