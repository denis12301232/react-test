import { useState } from 'react';
import CustomTable from './components/CustomTable';

function App() {
  const [rows, setRows] = useState([
    ['a', 'b', 'c', 'd'],
    ['a', 'b', 'c', 'd'],
    [
      [
        ['a', 'b'],
        ['a', 'b'],
      ],
      'b',
      'c',
      'd',
    ],
  ]);

  return (
    <div className="p-10">
      <CustomTable rows={rows} />
    </div>
  );
}

export default App;
