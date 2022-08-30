import { Grid } from '@mui/material'
import React from 'react'
import Card from './common/Card'

const OurCourses = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
        <Grid item md={4}>
            <Card />
        </Grid>
    </Grid>
  )
}

export default OurCourses