import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PreviewIcon from '@mui/icons-material/Preview';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import EditModel from '../DashBoard/EditModal'

import styles from './style.module.css';

const data = [
  { name: 'John Doe', adhaarNumber: '123456789012', panNumber: 'ABCDE1234F', status: 'Active' },
  { name: 'Jane Smith', adhaarNumber: '987654321098', panNumber: 'FGHIJ5678K', status: 'Inactive' },
  { name: 'Alice Johnson', adhaarNumber: '456789012345', panNumber: 'LMNOP5678Q', status: 'Active' },
  { name: 'Bob Brown', adhaarNumber: '789012345678', panNumber: 'RSTUV1234G', status: 'Inactive' },
  { name: 'Eve Williams', adhaarNumber: '234567890123', panNumber: 'WXYZ4567H', status: 'Active' },
  { name: 'Charlie Davis', adhaarNumber: '901234567890', panNumber: 'JKLMN8901P', status: 'Active' },
];

const CustomTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteClick = (rowIndex) => {
    setSelectedRow(rowIndex);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    // Perform delete action here with selectedRow
    console.log('Deleting row:', selectedRow);
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  // editModeal
  // const [dilogOpen, setDilogOpen] = useState(false);
  // function handelOpen(value) {
  //   setDilogOpen(true)
  // }

  return (
    <div style={{ width: '84%' }}>
      <TableContainer component={Paper} className={styles.container}>
        <Table aria-label="customized table" className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHeadCell}>Index</TableCell>
              <TableCell className={styles.tableHeadCell}>Name</TableCell>
              <TableCell className={styles.tableHeadCell}>Adhaar Number</TableCell>
              <TableCell className={styles.tableHeadCell}>Pan Number</TableCell>
              <TableCell className={styles.tableHeadCell}>Status</TableCell>
              <TableCell className={styles.tableHeadCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" className={styles.noData}>
                  No data found
                </TableCell>
              </TableRow>
            ) : (
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={index} className={styles.tableRow}>
                  <TableCell className={styles.tableCell}>{index + 1}</TableCell>
                  <TableCell className={styles.tableCell}>{row.name}</TableCell>
                  <TableCell className={styles.tableCell}>{row.adhaarNumber}</TableCell>
                  <TableCell className={styles.tableCell}>{row.panNumber}</TableCell>
                  <TableCell className={styles.tableCell}>{row.status}</TableCell>
                  <TableCell className={styles.tableCell}>
                    <IconButton aria-label="preview" className={styles.iconButton} color="primary">
                      <PreviewIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={styles.iconButton} color="error" onClick={() => handleDeleteClick(index)}>
                      <DeleteForeverOutlinedIcon />
                    </IconButton>
                    {/*<IconButton aria-label="edit" className={styles.iconButton} color="primary" onClick={handelOpen}>
                      <EditOutlinedIcon />
                    </IconButton> */}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={styles.pagination}
          labelRowsPerPage="Rows per page"
        />
      </TableContainer>
     {/* {dilogOpen && <EditModel dilogOpen={dilogOpen} setDilogOpen={setDilogOpen} />} */}

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleDeleteCancel}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this row?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomTable;
