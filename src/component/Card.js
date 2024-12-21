import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

export default function Card({ icon, title, value }) {
  return (
    <Paper sx={{ minWidth: "333px", padding: 1.5 ,height:"230px"}}>
      <Stack alignItems="center" justifyContent="center" spacing={1.5}>
        {icon}
        <Typography sx={{ fontSize: "20px" }} variant='body2'>{title}</Typography>
        <Gauge
          width={100}
          height={100}
          value={value}
          startAngle={-90}
          endAngle={90}
          sx={{
            [`& .${gaugeClasses.valueArc}`]: {
              fill: '#B4E6FF'// Use the primary color from the theme, // Customize the color of the value arc
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: '#FFDFD7', // Customize the color of the reference arc
            },
          }}
        />
        
      </Stack>
    </Paper>
  );
}


