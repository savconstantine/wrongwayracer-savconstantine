import React from 'react'
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import GameSceneView from './game-scene-view'
import InfoSceneView from './info-scene-view'

const Home = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))

  console.log('isSmallScreen', isSmallScreen) // eslint-disable-line no-console
  console.log('isMediumScreen', isMediumScreen) // eslint-disable-line no-console
  console.log('isLargeScreen', isLargeScreen) // eslint-disable-line no-console

  const mainBoxStyles = {
    flexGrow: 1,
    background:
      'linear-gradient(234.36deg, rgba(12, 12, 76, 0.5) 2.69%, rgba(6, 6, 6, 0) 43.67%), radial-gradient(168.67% 168.67% at 48.89% 54.41%, rgba(78, 32, 130, 0.5) 0%, rgba(12, 12, 76, 0.5) 71.88%), #080817;',
    py: '42px',
    minHeight: '100vh',
    width: '100vw'
  }

  const wrapperBoxStyles = {
    flexGrow: 1,
    maxWidth: '1122px',
    mx: 'auto'
  }

  const gameSceneViewGridStyles = {
    filter: 'drop-shadow(0px 4px 90px #542899)',
    borderRadius: '20px',
    background: 'linear-gradient(180deg, #3D1B74 0%, #9A78D0 77.08%)',
    p: '1px'
  }

  return (
    <Box sx={mainBoxStyles}>
      <Box sx={wrapperBoxStyles}>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Box sx={gameSceneViewGridStyles}>
              <GameSceneView />
            </Box>
          </Grid>

          <Grid item lg={12}>
            <InfoSceneView />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

Home.propTypes = {}

export default Home
