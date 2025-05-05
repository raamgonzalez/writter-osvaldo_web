import '@/styles/listofbooks.css';
import '@/styles/progressbar.css';

import { data } from '@/data/data';


import pkg from '@material-tailwind/react';
const { Carousel, IconButton } = pkg;

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
		<Carousel className="rounded-xl" prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>
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
