
import '@/styles/listofbooks.css'
import '@/styles/progressbar.css'

import { data } from '@/data/data';
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

	const Book = () => {
		return (
			<>
				{
					books.map((book: Book) =>
						<a className='xl:h-max min-w-full xl:h-fit relative rounded-xl' href={`/books/#${book.title}`} key={book.id} target="_blank">
							<img className='h-[510px] xl:h-full xl:min-h-screen min-h-full min-w-full object-cover rounded-xl' src={book.img} alt={`Imagen de portada de libro ${book.title}`} />
							<p className='bg-text text-secondary shadow-sm shadow-black flex items-center h-2 visible rounded-r-xl absolute text-small p-xl bottom-36 gap-1'><span className='font-extrabold'>Comprar</span> {book.title}</p>
						</a>
					)}
			</>
		)
	}

	return (
		<>
			<section className="w-full xl:h-[700px] snap-mandatory snap-x">
				<ul className="flex flex-nowrap overflow-x-scroll gap-x-2 scroll-smooth p-0 m-0 " ref={ref}>
					<Book />
				</ul>
			</section>

		</>
	)
}




