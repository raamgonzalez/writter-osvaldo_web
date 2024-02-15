
import LineH from './ui/LineH';
import { data } from '../data/data';
import '../styles/films.css'
import { useRef } from 'react';
import '../styles/progressbar.css'
import { motion, useScroll } from "framer-motion";


const { films } = data;

type Film = {
	id: number;
	title: string;
	poster: string;
	movie: string;
	href: string;
};


export default function Films() {
	const ref = useRef(null);
	const { scrollXProgress } = useScroll({ container: ref });

	return (
		<section className="mt-msection">
			<h2 className='text-large mb-5'>FILMOTECA</h2>
			<LineH />
			<div className='progress'>
				<motion.div className="progress-bar" style={{ scaleX: scrollXProgress }} />
			</div>
			<ul className="w-full flex overflow-x-scroll gap-4 mt-msmall" ref={ref}>
				{
					films.map((film: Film) => (
						<a className='relative' key={film.id} href={film.href} target="_blank">
							<img src={film.poster} className="hover:grayscale-[80%] transition-all shadow-md shadow-base-300 object-cover min-w-[300px] aspect-square rounded-md" />
							<p className='text-center'>{film.title}</p>
						</a>
					))
				}
			</ul>
		</section>
	)
}


