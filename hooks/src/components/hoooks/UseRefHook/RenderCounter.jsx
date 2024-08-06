
import  { useRef } from 'react';

const RenderCounter = () => {
  const renderCount = useRef(0);

  renderCount.current += 1;

  return <div>Render Count: {renderCount.current}</div>;
};

export default RenderCounter;
