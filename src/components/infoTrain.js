import React from 'react'
import './css/infoListTrain.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TramIcon from '@mui/icons-material/Tram';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 350,
  }));
  
  const nameTrain = `Tuyến số Metro số 1`;

export default function InfoTrain() {
  
  return (
    // <div className='info-train'>
    //     <ButtonStyled> info train 1 </ButtonStyled>
    // </div>
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 0.5 }}>
    <Item
      sx={{
        my: 2,
        mx: 'auto',
        p: 2,
      }}
    >
      <Stack spacing={1} direction="row" alignItems="center">
        <Avatar><TramIcon/></Avatar>
        <Typography noWrap >{nameTrain}</Typography>
      </Stack>
    </Item>
  </Box>
  )
}
