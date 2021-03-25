import { Box, Grid, Hidden, Paper } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <Box m={[0, 1, 2, 3]} bgcolor={'red'}>
      <Grid container spacing={2} alignItems={'stretch'}>
        <Hidden xsDown>
          <Grid item sm={4} md={4} lg={3}>
            <Paper style={{ height: '100%' }}>
              <Box p={2}></Box>
            </Paper>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={8} md={8} lg={9}>
          <Paper style={{ height: '100%' }}>
            <Box p={2}></Box>
          </Paper>
        </Grid>
      </Grid>
      <Link to={'/signIn'}>SignIn</Link>
      <Link to={'/signUp'}>SignUp</Link>
    </Box>
  )
}
