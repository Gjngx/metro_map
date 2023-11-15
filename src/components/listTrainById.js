import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './css/components.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TramIcon from '@mui/icons-material/Tram';
import trainLineService from '../services/trainLineService';
import InfoIcon from '@mui/icons-material/Info';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 350,
  }));
  

export default function InfoTrain() {

  const [train, setTrain] = useState([]);


  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await trainLineService.getAllTrainLine();
        setTrain(response.data);
        console.log (response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const Train = train.map((trainItem)=> {
   return(
    <Item
      sx={{
        my: 2,
        mx: 'auto',
        p: 2,
      }}
      key={trainItem.id}
    >
      <Stack spacing={1} direction="row" justifyContent="space-around" alignItems="center">
        <Avatar><TramIcon/></Avatar>
        <Typography noWrap >{trainItem.soTuyenTau}</Typography>
      </Stack>
    </Item>
   );
  });

  return ( 
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 0.5 }}>
    {Train}
    </Box>
  )
}
