import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import httpclient from '../httpclient';

function Data() {
  const [predict, setPredict] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpclient.post('http://127.0.0.1:5000/IA', {
          features: [700, 2.493592, 2.493592, 11.790927, 84.144163, 81.632187],
        });
        const prediction = response.data.prediction[0];
        setPredict(prediction);
      } catch (error) {
        console.error('Error fetching prediction:', error);
      }
    };

    fetchData();
  }, []);

  const rows = [
    { id: 5, col1: '700', col2: '2.493592', col3: '2.493592', col4: '11.790927', col5: '84.144163', col6: '81.632187' },
    { id: 2, col1: '700', col2: '2.493592', col3: '2.493592', col4: '11.790927', col5: '84.144163', col6: '81.632187' },
    { id: 3, col1: '700', col2: '2.493592', col3: '2.493592', col4: '11.790927', col5: '84.144163', col6: '81.632187' },
    { id: 4, col1: '700', col2: '2.493592', col3: '2.493592', col4: '11.790927', col5: '84.144163', col6: '81.632187' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'col1', headerName: 'Engine rpm', flex: 1 },
    { field: 'col2', headerName: 'Lub oil pressure', flex: 1 },
    { field: 'col3', headerName: 'Fuel pressure', flex: 1 },
    { field: 'col4', headerName: 'Coolant pressure', flex: 1 },
    { field: 'col5', headerName: 'Lub oil temp', flex: 1 },
    { field: 'col6', headerName: 'Coolant temp', flex: 1 },
  ];

  return (
    <Box sx={{ height: 350, width: '98%', mx: 'auto' }}>
       {predict !== null && (
        <Typography variant="h6" sx={{ mt: 2, textAlign: 'center', color: predict === 0 ? 'green' : 'red' }}>
          Prediction: {predict === 0 ? 'Your engine is in great condition!' : 'Warning: Your engine is about to break down!'}
        </Typography>
      )}
      <DataGrid slots={{ toolbar: GridToolbar }} rows={rows} columns={columns} />
     
    </Box>
  );
}

export default Data;
