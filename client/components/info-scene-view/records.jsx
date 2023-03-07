import React from 'react'
import { Box } from '@mui/material'

const Records = () => {
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

Records.propTypes = {}

export default Records
