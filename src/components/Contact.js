import * as React from 'react'
import { styled, createTheme } from '@mui/material/styles'
import { Grid, Paper, Typography, ButtonBase, ThemeProvider, Avatar } from '@mui/material'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
})

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

export default function Contact({name, text}) {
  return (
    <ThemeProvider theme={darkTheme}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </ThemeProvider>
  );
}