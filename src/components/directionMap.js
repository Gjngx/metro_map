import React from 'react'
import { TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import './css/directionMap.css'

import styled from 'styled-components';

export default function DirectionMap() {
    const TextFieldStyled = styled(TextField)`
    width: 80%;
    `
    
    const ButtonSearchStyled = styled(Button)`
    width: 40%;
    `
   
  return (
    <div>
        <div className='search-container' >
            <div className="direction-container">
                    <TextFieldStyled name = 'search-info' 
                        id="outlined-basic" 
                        margin="dense"
                        label="Điểm xuất phát"  
                        size="small" ></TextFieldStyled>  
                    <TextFieldStyled name = 'search-info' 
                        id="outlined-basic" 
                        margin="dense"
                        label="Điểm kết thúc"  
                        size="small" ></TextFieldStyled>
                    <div className='button'>      
                             
                    <ButtonSearchStyled size="small" 
                    variant="contained" 
                    >Bắt đầu</ButtonSearchStyled>
                    <ButtonSearchStyled size="small" 
                    variant="contained" 
                    ><SwapVerticalCircleIcon/></ButtonSearchStyled>
                    </div>
                    
            </div>
        </div>

    </div>
  )
}
