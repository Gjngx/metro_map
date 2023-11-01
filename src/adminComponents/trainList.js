import React, { useState, useEffect } from 'react'
import TrainService from '../services/trainService';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import './adminComponents.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const ListTrainComponent = () => {
    const [trains, setTrains] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    useEffect(() => {
        getAllTrain();
      }, []);
    
      const getAllTrain = () => {
        TrainService.getAllTrain().then((response) => {
          setTrains(response.data);
        }).catch(error => {
          console.log(error);
        });
      };
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const slicedTrains = trains.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    
      
    
 return (
    <div className="container-admin">
        <div className='header-content'>
            <h2 className="text-center">Danh sách ga</h2>
        </div>
        <div className='table-content'>
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Mã ga</StyledTableCell>
                            <StyledTableCell align="right">Tên ga</StyledTableCell>
                            <StyledTableCell align="right">Địa chỉ</StyledTableCell>
                            <StyledTableCell align="right">Mô tả</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {slicedTrains.map((trains) => (
                        <StyledTableRow key={trains.id}>
                        <StyledTableCell component="th" scope="row">
                            {trains.id}
                        </StyledTableCell>
                        <StyledTableCell align="right">{trains.tenGa}</StyledTableCell>
                        <StyledTableCell align="right">{trains.diaChi}</StyledTableCell>
                        <StyledTableCell align="right">{trains.moTa}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={trains.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
        </div>
    </div>
  )
}
export default ListTrainComponent


