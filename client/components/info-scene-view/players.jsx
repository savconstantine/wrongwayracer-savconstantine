import React from 'react'
import { Box } from '@mui/material'

const Players = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}
    >
      players
    </Box>
  )
}

Players.propTypes = {}

export default Players
