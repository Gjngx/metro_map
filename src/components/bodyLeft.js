import { TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export default function BodyLeft() {
  return (
    <div className='BodyLeft'>
        <div className='map-info'>
            <div className='map-control'>
                <div className='tab-control'>
                    <div className='buton-control-map'>
                        <div className='button-map'>
                            <p>Tìm đường</p>
                        </div>
                    </div>
                    <div className='buton-control-map'>
                    <div className='button-map'>
                            <p>Thông tin trạm</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            <div className='info-container'>
                <div className='search-container'>
                    <TextField name = 'search-info' 
                    id="outlined-basic" 
                    label="Tìm tuyến tàu điện"  
                    size="small" ></TextField>
                    <Button size="medium" 
                    variant="contained" 
                    endIcon={<SearchIcon />}>Tìm kiếm</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
