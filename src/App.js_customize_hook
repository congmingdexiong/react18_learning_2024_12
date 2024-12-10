import React, { useState } from 'react';

export default function App() {
  const { value, toggle } = useValue();
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

function useValue() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  return {
    value,
    toggle
  };
}
