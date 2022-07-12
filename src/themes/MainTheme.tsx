import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        mode:'dark',
        primary: {
            main: '#00D0B3',
            dark: '#00AA93',
            light: '#00ffdb',
            contrastText: '#FFF',
        },

        background: {
            default: '#333333',
            paper: '#000',
        }
    },

    typography: {
        allVariants: {
            color: 'white'
        },

        fontSize: 7
    }
});