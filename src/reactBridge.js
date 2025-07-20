// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function ElmControlledReact({ initialValue, onChange }) {
//     const [value, setValue] = useState(initialValue);

//     function handleChange(e) {
//         const newVal = e.target.value;
//         setValue(newVal);
//         onChange(newVal);
//     }

//     return <input value={value} onChange={handleChange} placeholder="Type here" />;
// }

// export function renderReactComponent(containerId, props) {
//     const container = document.getElementById(containerId);
//     if (!container) {
//         console.error(`Container ${containerId} not found`);
//         return;
//     }
//     const root = ReactDOM.createRoot(container);
//     root.render(
//         <ElmControlledReact
//             initialValue={props.initialValue}
//             onChange={props.onChange}
//         />
//     );
// }