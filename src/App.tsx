import { useState } from 'react';
import CustomTable from './components/CustomTable';

function App() {
  const [rows, setRows] = useState(['f']);

  return <CustomTable rows={rows} />;
}

export default App;
