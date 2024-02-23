import React, { useRef, useState } from 'react';
import { BACKGROUNDSTYLES, BORDERTYPICAL, RADIUSVARIANTS } from '../../constants';

const CardSpotlight = ({ border = false, children, classStyle = '', background, noPadding = false, radiusEdit = '' }) => {

  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const isStyles = classStyle && classStyle || ''
  const borderStyle = border && 'border border-[#818181]' || ''

  const backgroundStyle = background ? BACKGROUNDSTYLES[background] || ['bg-gradient-to-r from-[#3f3e41] to-[#464646]', 'rgb(220, 171, 24, .1)'] : ['bg-background', 'rgb(240, 240, 240,.1)']
  const isNotPadding = noPadding ? '' : 'p-l'
  const isRadiusEdit = radiusEdit && RADIUSVARIANTS[radiusEdit] || BORDERTYPICAL



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

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${borderStyle} ${isStyles} ${backgroundStyle[0]} ${isRadiusEdit} ${isNotPadding} relative flex items-center justify-center overflow-hidden shadow-bubble`}
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
