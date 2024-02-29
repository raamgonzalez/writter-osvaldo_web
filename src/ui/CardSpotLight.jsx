import React, { useRef, useState } from 'react';
import { BACKGROUNDSTYLES, BORDERTYPICAL, RADIUSVARIANTS } from '../constants';

const CardSpotlight = ({hrefLink, border = false, children, classStyle = '', background, noPadding = false, radiusEdit = '', action = false }) => {


  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const isStyles = classStyle && classStyle || ''
  const borderStyle = border && 'border border-[#818181]' || ''

  const backgroundStyle = background ? BACKGROUNDSTYLES[background] || ['bg-gradient-to-r from-[#3f3e41] to-[#464646]', 'rgb(39, 170, 122, .3)'] : ['bg-background', 'rgb(240, 240, 240,.1)']
  const isNotPadding = noPadding ? '' : 'p-l'
  const isRadiusEdit = radiusEdit && RADIUSVARIANTS[radiusEdit] || BORDERTYPICAL
  const isAction = action && 'cursor-pointer transition duration-300 ease-in-out transform hover:scale-[101%] active:scale-[99%] focus:scale-[101%] focus-visible:scale-[101%] focus-within:scale-[101%] focus-visible:scale-[101%] hover:scale-[101%]' || ''


  const handleMouseMove = (e) => {
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
      {children}
    </div>
  );
};

export default CardSpotlight;