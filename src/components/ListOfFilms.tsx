import { data } from '@/data/data';
import '@/styles/progressbar.css';
import { Carousel, IconButton } from "@material-tailwind/react";

const { films } = data;

type Film = {
	id: number;
	title: string;
	poster: string;
	movie: string;
	href: string;
};

export default function ListOfFilms() {
	return (
			<Carousel className="rounded-md shadow-md h-[330px]" 
				prevArrow={({ handlePrev }) => (
					<IconButton
					  variant="text"
					  color="white"
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
					color="white"
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
				{films.map((film: Film) => (
					<a
						key={film.id}
						href={film.href}
						target="_blank"
						className="relative block min-w-full h-full"
					>
						<img
							src={film.poster}
							alt={`Poster de ${film.title}`}
							className="hover:grayscale-[80%] transition-all shadow-md shadow-base-300 object-cover w-full h-full rounded-md"
						/>
						<p className="bg-text text-secondary shadow-sm shadow-black flex items-center h-2 visible rounded-r-xl absolute text-small p-xl bottom-12 gap-1">{film.title}</p>
					</a>
				))}
			</Carousel>
	);
}
