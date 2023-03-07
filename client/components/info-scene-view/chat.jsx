import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { styled } from '@mui/material/styles'
import { Box, Container } from '@mui/material'
import Button from '@mui/material/Button'
import { purple } from '@mui/material/colors'
import TextField from '@mui/material/TextField'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  background: 'linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)',
  borderRadius: '4px',
  textTransform: 'none',
  width: '155px',
  height: '40px',
  border: '3px solid'
}))

const CssTextField = styled(TextField)({
  background: '#180C3C',
  color: '#FFFFFF',
  fontcolor: '#FFFFFF',
  width: '100%',
  borderRadius: '4px',
  border: '1px solid linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)',
  '& .MuiInput-underline:after': {
    border: '1px solid linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)'
    },

    '&.Mui-focused fieldset': {
      border: '1px solid linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)'
    }
  },
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
    padding: '7px 14px'
  }
})

const chatContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',
  paddingLeft: '10px !important',
  paddingRight: '10px !important'
}

const boxChatListStyles = {
  width: '100%',
  marginRight: '20px',
  padding: '3px',
  background: 'linear-gradient(180deg, #1F115B 0%, #E5D7FF 100%)',
  borderRadius: '18px'
}

const chatListStyles = {
  height: '215px',
  background: '#180C3C',
  borderRadius: '16px',
  color: '#FFFFFF',
  overflowY: 'scroll',
  overflowAnchor: 'none',
  padding: '16px'
}

const inputStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px'
}

const boxTextFieldStyles = {
  width: '100%',
  marginRight: '20px',
  padding: '3px',
  background: 'linear-gradient(180deg, #1F115B 0%, #E5D7FF 100%)',
  borderRadius: '4px'
}

const Chat = () => {
  const { chat } = useSelector((state) => state.data)
  const messagesRef = useRef(null)

  useEffect(() => {
    // Scroll to the bottom of the container when new messages are added
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
  }, [chat])

  return (
    <Container sx={chatContainerStyles}>
      <Box sx={boxChatListStyles}>
        <Box sx={chatListStyles} ref={messagesRef}>
          {chat.map((message, index) => {
            return <div key={message + index}>{message}</div>
          })}
        </Box>
      </Box>
      <Box sx={inputStyles}>
        <Box sx={boxTextFieldStyles}>
          <CssTextField id="custom-css-outlined-input" />
        </Box>
        <ColorButton variant="contained">Send</ColorButton>
      </Box>
    </Container>
  )
}

Chat.propTypes = {}

export default Chat
