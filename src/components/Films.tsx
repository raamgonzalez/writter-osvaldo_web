
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
		<section className="films">
			<h2>FILMOTECA</h2>
			<LineH/>
			<div className='progress'>
					<motion.div className="progress-bar" style={{ scaleX: scrollXProgress }} />
			</div>
			<ul className="films__container" ref={ref}>
				{
				films.map((film: Film) => (
					<a key={film.id} href={film.href} target="_blank"><img src={film.poster} className="films__img"/></a>
				))
				}
			</ul>
		</section>
	)
}


