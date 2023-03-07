import React from 'react'
import { Box } from '@mui/material'

const Chat = () => {
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
      chat
    </Box>
  )
}

Chat.propTypes = {}

export default Chat
