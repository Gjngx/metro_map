import React, { useState, useEffect } from 'react'
import UserService from '../services/userService';
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
import { Link } from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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

const ListAdminComponent = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    useEffect(() => {
        getAllUsers();
    }, []);
    
    const getAllUsers = () => {
        UserService.getAllUser().then((response) => {
            setUsers(response.data);
            console.log(response.data);
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
    
      const slicedUsers = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    
      
    
 return (
  <div className="container-admin">
    <div className='header-content'>
        <h2 className="text-center">Danh sách tài khoản</h2>
        <div className='text-add'>
          <h3>Thêm mới tài khoản</h3>
          <Link className="btn btn-success" style={{textDecoration: "none"}} to = {'/Admin/createadmin'}>
            <AddCircleIcon/>
          </Link>
        </div>
    </div>
      <div className='table-content'>
      <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                      <TableRow>
                          <StyledTableCell>Id</StyledTableCell>
                          <StyledTableCell align="right">Tên tài khoản</StyledTableCell>
                          <StyledTableCell align="right">Email</StyledTableCell>
                          <StyledTableCell align="right">Roles</StyledTableCell>
                          <StyledTableCell align="right">Cập nhật</StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  {Array.isArray(slicedUsers) && slicedUsers.length > 0 ? (
                  slicedUsers.map((user) => (
                      <StyledTableRow key={user.id}>
                        <StyledTableCell component="th" scope="row">
                            {user.id}
                        </StyledTableCell>
                        <StyledTableCell align="right">{user.username}</StyledTableCell>
                        <StyledTableCell align="right">{user.email}</StyledTableCell>
                        <StyledTableCell align="right">
                            {user.roles && user.roles.length > 0 ? (
                                user.roles.map((role) => (
                                    <span key={role.id}>{role.name}; </span>
                                ))
                            ) : (
                                "No roles"
                            )}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                        <Link className="btn btn-success" style={{textDecoration: "none"}} to = {'#'}>
                            <EditIcon/>
                          </Link>
                        </StyledTableCell>
                      </StyledTableRow>
                  ))
              ) : (
                  <StyledTableRow>
                      <StyledTableCell colSpan={4} align="center">Không có dữ liệu hoặc dữ liệu không hợp lệ</StyledTableCell>
                  </StyledTableRow>
              )}
                  </TableBody>
              </Table>
          </TableContainer>
          <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              />
      </div>
    </div>
  )
}
export default ListAdminComponent


