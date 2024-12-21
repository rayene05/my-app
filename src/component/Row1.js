import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Stack } from '@mui/material'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TireRepairOutlinedIcon from '@mui/icons-material/TireRepairOutlined';
import httpclient from '../httpclient';
import { useNavigate } from 'react-router-dom';

export default function Row1() {
  const [data, setData] = useState([]);
    
 
  const Navigate=useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await httpclient.get('//localhost:5000/enginedata');
                setData(response.data);
            } catch (error) {
                console.log(error)
                alert("no data found")
                Navigate("/")
            };
          }
        fetchData();
    }, []);
  return (
    <Stack 
      mt={3}
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card value={data.energy} title={"Energy"} icon={<BoltOutlinedIcon />} />
      <Card value={data.lub_oil_pressure} title={"Range"} icon={<AttachMoneyOutlinedIcon />} />
      <Card value={data.coolant_pressure} title={"Liquid"} icon={<OpacityOutlinedIcon />} />
      <Card value={data.tire} title={"tire"} icon={<TireRepairOutlinedIcon />} />



    </Stack>
  )
}
