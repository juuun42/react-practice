import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>カウンターアプリ</h1>
      <p>カウント : {count}</p>
      <button onClick={() => setCount(count + 1)}>増やす</button>
      <button onClick={() => setCount(count - 1)}>減らす</button>
      <button onClick={() => setCount(0)}>リセット</button>
    </div>
  );
}

export default App;

