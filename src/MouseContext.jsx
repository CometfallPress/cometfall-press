import React from 'react';

const MouseContext = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX/window.innerWidth, y: ev.clientY/window.innerHeight });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default MouseContext;