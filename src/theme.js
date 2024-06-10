// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#191919',
      paper: '#191919',
    },
    text: {
      primary: '#D4D4D4',
      secondary: '#D4D4D4',
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderWidth: 0, 
        },
        columnHeaders: {
          backgroundColor: '#191919',
          borderColor: '#333333',
          color: '#D4D4D4',
        },
        columnHeader: {
            backgroundColor: '#191919',
            color: '#D4D4D4',
            borderLeft: '1px solid #333333',
            borderRight: '1px solid #333333',
            '&:nth-of-type(2)': {
              borderLeft: 'none',
            },
            '&:nth-last-of-type(3)': {
              borderRight: 'none',
            },
          },
        cell: {
          borderColor: '#333333',
          color: '#D4D4D4',
          borderLeft: '1px solid #333333',
          borderRight: '1px solid #333333',
          '&:nth-of-type(2)': {
            borderLeft: 'none',
          },
          '&:last-of-type': {
            borderRight: 'none',
          },
        },
        row: {
          '&:hover': {
            backgroundColor: '#2C2C2C',
          },
          '&.Mui-selected': {
            backgroundColor: '#2C2C2C',
          },
        },
        footerContainer: {
          backgroundColor: '#191919',
          color: '#D4D4D4',
          borderTop: '1px solid #333333',
        },
        toolbarContainer: {
          backgroundColor: '#191919',
          color: '#D4D4D4',
        },
      },
    },
  },
});

export default theme;
