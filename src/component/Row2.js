import { Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import Bar from './Bar';
import Line from './Line';

export default function Row2() {
  return (
    <Stack direction= 'row'  flexWrap="wrap" gap={4} mt={1.3} >
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: { xs: '100%', sm: '400px' } }}>
        <Line isDashboard={true} />
      </Paper>
      <Paper sx={{ maxWidth: 500, flexGrow: 1, minWidth: { xs: '100%', sm: '200px' } }}>
        <Stack  direction="column" >
          <Box textAlign={'center'}>
          <Typography
            color="red"
            variant="h6"
            fontWeight="bold"
            textAlign="center"
          >
            Miles Statics
          </Typography>
          </Box>
          
          <Bar isDashboard={true} />
        </Stack>
      </Paper>
    </Stack>
  );
}