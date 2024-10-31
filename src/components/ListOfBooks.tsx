import '@/styles/listofbooks.css';
import '@/styles/progressbar.css';

import { data } from '@/data/data';
import pkg from '@material-tailwind/react';
const { Carousel } = pkg;

type Book = {
	id: number;
	title: string;
	href: string;
	img: string;
	issue: string;
	description: string;
};

export default function ListOfBooks() {
	const { books } = data;

	return (
		<Carousel className="rounded-xl">
			{books.map((book: Book) => (
				<a
					className="xl:h-max min-w-full relative rounded-xl"
					href={`/books/#${book.title}`}
					key={book.id}
					target="_blank"
				>
					<img
						className="h-full w-full object-cover"
						src={book.img}
						alt={`Imagen de portada de libro ${book.title}`}
					/>
					<p className="bg-text text-secondary shadow-sm shadow-black flex items-center h-2 visible rounded-r-xl absolute text-small p-xl bottom-12 gap-1">
						<span className="font-extrabold">Comprar</span> {book.title}
					</p>
				</a>
			))}
		</Carousel>
	);
}
