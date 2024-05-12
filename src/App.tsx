import { useEffect, useState } from 'react';
import CustomTable from './components/CustomTable';
import DataService from './services/DataService';

function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      DataService.index().then((data) => setRows(data));
    }

    fetchData();
  }, []);

  return (
    <div className="p-10">
      <CustomTable rows={rows} title="Some table" />
    </div>
  );
}

export default App;
