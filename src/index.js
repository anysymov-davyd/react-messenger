import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header'
import Contact from './components/Contact'
import { Grid, ThemeProvider, createTheme, Paper, Typography, ButtonBase } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <div style={{background:'#121212', height:'100vh'}}>
      <Header title={"PostWord"}/>
      <Grid sx={{m:3}} container spacing={3} fullWidth justify="space-between">
        <Grid container xs={3} spacing={3}>
          <Grid item><Contact name={'Gustav Keha'} text={'Вчера узнал о значении того загадочного для меня отрывка текст Лорем Ипсум.'}/></Grid>
          <Grid item><Contact name={'Gustav Keha'} text={'Вчера узнал о значении того загадочного для меня отрывка текст Лорем Ипсум.'}/></Grid>
        </Grid>
        <Grid xs={9}></Grid>
      </Grid>
    </div>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
