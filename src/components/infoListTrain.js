import React from 'react'
import { TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InfoTrain from './infoTrain';
import styled from 'styled-components';

export default function InfoListTrain() {
    const TextFieldStyled = styled(TextField)`
    width: 68%;
    `
    const ButtonSearchStyled = styled(Button)`
    width: 30%;
    `
  return (
    <div>
      <div className='search-container'>
                    <TextFieldStyled name = 'search-info' 
                    id="outlined-basic" 
                    label="Tìm tuyến tàu điện"  
                    size="small" 
                    ></TextFieldStyled>
                    <ButtonSearchStyled size="small" 
                    variant="contained" 
                    endIcon={<SearchIcon />}
                    >Tìm</ButtonSearchStyled>
                </div>
                <div className='info-list-train'>
                    <InfoTrain/>
                </div>
    </div>
  )
}
