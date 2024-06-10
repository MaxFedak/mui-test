// src/components/FilterableSortableTable.js
import React from 'react';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { Paper } from '@mui/material';
import { vehicles, columns } from '../data'; // Adjust the import path as necessary

const FilterableSortableTable = () => {
  return (
    <Paper style={{ backgroundColor: '#191919', padding: '16px' }}>
      <div style={{ width: '100%' }}>
        <DataGridPro
          rows={vehicles}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          disableSelectionOnClick
          components={{ Toolbar: GridToolbar }}
          sortingOrder={['asc', 'desc']}
          slots={{ toolbar: GridToolbar }} 
          pagination
          checkboxSelection={false}
          sx={{
            '& .MuiDataGrid-toolbarContainer .MuiButton-root': {
              color: '#D4D4D4',
            },
          }}
        />
      </div>
    </Paper>
  );
};

export default FilterableSortableTable;
