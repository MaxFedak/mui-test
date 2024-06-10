import React from 'react';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { TextField, Paper } from '@mui/material';
import { vehicles, columns } from '../data'; // Adjust the import path as necessary

const FilterableSortableTable = () => {
  return (
    <Paper style={{ backgroundColor: '#191919', padding: '64px' }}>
      <div style={{ width: '100%' }}>
        <DataGridPro
          rows={vehicles}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          slots={{ toolbar: GridToolbar }} 
          disableSelectionOnClick
          components={{ Toolbar: GridToolbar }}
          sortingOrder={['asc', 'desc']}
          pagination
          checkboxSelection={false}
          sx={{
            '& .MuiButtonBase-root': {
                color: '#D4D4D4'
            },
            '&.MuiDataGrid-root': {
                border: 'none',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#191919', // Set the background color for header
              borderColor: '#333333',
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#191919', // Ensure each header cell has the correct background color
              color: '#D4D4D4', // Ensure header text is the correct color
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: '#D4D4D4',
            },
            '& .MuiDataGrid-cell': {
              borderColor: '#333333',
              borderWidth: 1,
              color: '#D4D4D4',
            },
            '& .MuiDataGrid-row': {
              '&:hover': {
                backgroundColor: '#2C2C2C',
              },
              '&.Mui-selected': {
                backgroundColor: '#2C2C2C',
              },
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#191919',
              color: '#D4D4D4',
            },
            '& .MuiDataGrid-toolbarContainer': {
              backgroundColor: '#191919',
              color: '#D4D4D4',
            },
            '& .MuiTablePagination-root': {
              color: '#D4D4D4',
            },
            '& .MuiSvgIcon-root': {
              color: '#D4D4D4',
            },
          }}
        />
      </div>
    </Paper>
  );
};

export default FilterableSortableTable;
