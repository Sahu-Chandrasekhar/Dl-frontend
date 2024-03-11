import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';

const columns = [
  { id: 'id', label: 'Index No.', minWidth: 170 },
  { id: 'Adhaar', label: 'Adhaar Number', minWidth: 13 },
  { id: 'Pan', label: 'Pan Card Number', minWidth: 9, align: 'right' },
  { id: 'DL', label: 'Driving Licence', align: 'right' },
  { id: 'status', label: 'Status', align: 'right' },
];

const DashBoard = () => {
  const [rows, setRows] = useState([
    { id: 1, Adhaar: '1234567890', Pan: 'ABCDE1234F', DL: 'DL123456', status: 'Active' },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className='nav-bar'>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-header">
            <p className='card-titel'> Dl user detail</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: <span>name</span></li>
            <li className="list-group-item">Number: <span>Phone</span></li>
            <li className="list-group-item">Email: <span>email</span></li>
            <li className="list-group-item">Gender: <span>gender</span></li>
          </ul>
        </div>
      </div>

      <Paper sx={{ marginTop: '3rem', marginLeft: '5rem', width: '52rem', boxShadow: '0px 0px 6px 0px #7c7676' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Driving Licence Details
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  <Button className='apply'>apply now</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    No records found
                  </TableCell>
                </TableRow>
              ) : (
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.Adhaar}</TableCell>
                        <TableCell align='right'>{row.Pan}</TableCell>
                        <TableCell align='right'>{row.DL}</TableCell>
                        <TableCell align='right'>{row.status}</TableCell>
                        {/* Add more TableCell components for additional columns */}
                      </TableRow>
                    );
                  })
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default DashBoard;
