import React from 'react'
import { Grid } from '@mui/material'

import Records from './records'
import Chat from './chat'
import Players from './players'

const InfoSceneView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Records />
      </Grid>
      <Grid item xs={12} md={4}>
        <Chat />
      </Grid>
      <Grid item xs={12} md={4}>
        <Players />
      </Grid>
    </Grid>
  )
}

InfoSceneView.propTypes = {}

export default InfoSceneView
