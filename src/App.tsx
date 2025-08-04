import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hydraulic Power Pack</h1>
      <p className="mb-2">Button clicked {count} times.</p>
      <button
        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
        onClick={() => setCount((c) => c + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
