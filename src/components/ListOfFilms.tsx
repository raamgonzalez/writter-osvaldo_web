import { data } from '@/data/data';
import '@/styles/films.css';
import '@/styles/progressbar.css';
import { Carousel } from "@material-tailwind/react";

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
			<Carousel className="rounded-md shadow-md h-[330px]">
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
