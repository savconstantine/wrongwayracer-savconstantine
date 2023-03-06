import React, { useState } from 'react'
import { Box, Grid, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import GameSceneView from './game-scene-view'

const Home = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))

  console.log('isSmallScreen', isSmallScreen) // eslint-disable-line no-console
  console.log('isMediumScreen', isMediumScreen) // eslint-disable-line no-console
  console.log('isLargeScreen', isLargeScreen) // eslint-disable-line no-console

  return (
    <Box sx={{ flexGrow: 1 }} maxWidth={1120} mx="auto">
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <GameSceneView />
        </Grid>

        {/* Second column */}
        <Grid item lg={12}>
          <Grid container spacing={2}>
            {/* Desktop layout with 3 columns */}
            <Grid item xs={12} md={4}>
              <div>tab 1 content</div>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Second column content goes here */}
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Third column content goes here */}
            </Grid>

            {/* Mobile layout with 1 column and 3 tabs */}
            <Grid item xs={12} md={0}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Tab 1" />
                <Tab label="Tab 2" />
                <Tab label="Tab 3" />
              </Tabs>
              <div>
                {value === 0 && <div>tab 1 content</div>}
                {value === 1 && <div>tab 2 content</div>}
                {value === 2 && <div>tab 3 content</div>}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

Home.propTypes = {}

export default Home
