import { useRef, useState } from 'react';
import { BACKGROUNDSTYLES, BORDERTYPICAL, RADIUSVARIANTS } from '../constants';
import { RadiusVariants, BackgroundStyles } from '../types'

interface Props {
  hrefLink?: string;
  border?: boolean,
  children?: React.ReactNode,
  classStyle?: string,
  background?: string | boolean,
  noPadding?: boolean,
  radiusEdit?: string,
  action?: false,
  backgroundGrid?: boolean
}


const CardSpotlight = ({ hrefLink, border, children, classStyle, background, noPadding, radiusEdit, action, backgroundGrid }: Props) => {

  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const isStyles = classStyle && classStyle || ''
  const borderStyle = border && 'border border-[#818181]' || ''

  const backgroundStyle: BackgroundStyles = background ? BACKGROUNDSTYLES[background] || ['bg-gradient-to-r from-[#3f3e41] to-[#464646]', 'rgb(39, 170, 122, .3)'] : ['bg-background', 'rgb(240, 240, 240,.1)']
  const isNotPadding = noPadding ? '' : 'p-l'
  const isRadiusEdit: RadiusVariants = radiusEdit && RADIUSVARIANTS[radiusEdit] || BORDERTYPICAL
  const isAction = action && 'cursor-pointer transition duration-300 ease-in-out transform hover:scale-[101%] active:scale-[99%] focus:scale-[101%] focus-visible:scale-[101%] focus-within:scale-[101%] focus-visible:scale-[101%] hover:scale-[101%]' || ''

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const onClick = () => {
    if (hrefLink) {
      window.open(hrefLink, '_blank');
    } else {
      console.log('No link provided');
    }
  }


  return (
    <div
      onClick={onClick}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${borderStyle} ${isStyles} ${backgroundStyle[0]} ${isRadiusEdit} ${isNotPadding} ${isAction} relative overflow-hidden shadow-bubble`}
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${backgroundStyle[1]}, transparent 40%)`,
        }}
      />
      {backgroundGrid && <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:6px_16px]">
        <div className="absolute left-10 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-secondary opacity-5 blur-[100px]" /></div>}
      {children}
    </div>
  );
};

export default CardSpotlight;



