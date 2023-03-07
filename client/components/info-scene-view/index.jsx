import React from 'react'
import { Grid } from '@mui/material'

import Records from './records'
import Chat from './chat'
import Players from './players'

const InfoSceneView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        <Records />
      </Grid>
      <Grid item xs={5}>
        <Chat />
      </Grid>
      <Grid item xs="auto">
        <Players />
      </Grid>
    </Grid>
  )
}

InfoSceneView.propTypes = {}

export default InfoSceneView
