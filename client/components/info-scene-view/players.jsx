import React from 'react'
import { useSelector } from 'react-redux'

import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { purple } from '@mui/material/colors'
import SettingsIcon from '@mui/icons-material/Settings'

const boxStyles = {
  width: 315,
  height: 286,
  background: 'rgba(16, 12, 74, 0.2)',
  borderRadius: '12px',
  padding: '4px 16px',
  boxShadow: 'inset 3px 4px 63px rgba(255, 255, 255, 0.25)'
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  background: 'linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)',
  borderRadius: '4px',
  textTransform: 'none',
  height: '36px',
  width: '100%'
}))

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '16px',
  '& > span': {
    fontSize: '16px',
    lineHeight: '16px',
    color: '#FFFFFF',
    fontWeight: 700,
    '&:first-of-type': {
      marginRight: '8px'
    }
  }
}

const listStyles = {
  padding: '0px',
  overflow: 'scroll',
  height: '206px'
}

const listItemStyles = {
  padding: '2px 0px'
}

const listItemTextStyles = {
  color: '#FFFFFF'
}

const listItemAvatarStyles = {
  minWidth: '24px',
  paddingRight: '8px'
}

const avatarStyles = {
  width: '24px',
  height: '24px',
  fontSize: '1rem'
}

const Players = () => {
  const { players } = useSelector((state) => state.data) // eslint-disable-line no-unused-vars
  return (
    <Box sx={boxStyles}>
      <Box sx={headerStyles}>
        <span>Players</span>
        <span>9/12</span>
      </Box>
      <ColorButton variant="contained" startIcon={<SettingsIcon />}>
        Settings
      </ColorButton>
      <List sx={listStyles} component="nav" aria-labelledby="nested-list-subheader">
        {players.map((player) => {
          return (
            <ListItem sx={listItemStyles} key={player.name + player.record}>
              <ListItemAvatar sx={listItemAvatarStyles}>
                <Avatar sx={avatarStyles} alt={player.name} src={player.avatar} />
              </ListItemAvatar>
              <ListItemText sx={listItemTextStyles} primary={player.name} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

Players.propTypes = {}

export default Players
