
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
			<section className="books">
				<h2>LIBRERÍA</h2>
				<LineH/>
				<div className='progress'>
					<motion.div className="progress-bar" style={{ scaleX: scrollXProgress }} />
				</div>
				<ul className="books__swipe" ref={ref}>
					{books.map((book: Book) => (
						<a class='books__a' href={`/books/#${book.title}`} key={book.id} target="_blank">
							<img class='books__img' src={book.img} alt={`Imagen de portada de libro ${book.title}`}/>
							<p class='books__title'>{book.title}</p>
						</a>
					))}
				</ul>
			</section>

		</>
	)
}




