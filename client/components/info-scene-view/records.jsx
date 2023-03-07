import React from 'react'
import { useSelector } from 'react-redux'

import { Box } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'


const boxStyles = {
  width: 315,
  height: 286,
  background: 'rgba(16, 12, 74, 0.2)',
  borderRadius: '12px',

  boxShadow: 'inset 3px 4px 63px rgba(255, 255, 255, 0.25)'
}

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 24px',
  background:
    'radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(255, 255, 255, 0.19) 0%, rgba(24, 20, 53, 0.26) 71.87%), #9747FF',
  boxShadow: 'inset 0px 4px 12px #FFFFFF',
  borderRadius: '12px 12px 0px 0px'
}

const lastRecordsStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > div': {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#FFFFFF',
    fontWeight: 500,
    '&:first-of-type': {
      marginBottom: '8px',
      fontWeight: 900,
      fontSize: '40px',
      lineHeight: '36px'
    }
  }
}

const yourRankStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background:
    'radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(78, 32, 130, 0.16) 0%, rgba(12, 12, 76, 0.16) 71.87%), #131444',
  borderRadius: '50%',
  width: '64px',
  height: '67px',
  '& > div': {
    fontSize: '9px',
    lineHeight: '9px',
    color: '#FFFFFF',
    fontWeight: 400,
    '&:first-of-type': {
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 900
    }
  }
}

const tableRowStyles = {
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  '&:last-child, &:last-child td, &:last-child th': {
    border: 0,
    borderBottom: 0
    // background: 'green'
  },

  '& .MuiTableCell-root': {
    border: 'none',
    color: '#FFFFFF',
    fontSize: '12px',
    lineHeight: '19px',
    '& > div': {
      color: '#FFFFFF',
      fontSize: '20px',
      lineHeight: '22px',
      fontWeight: 900,
      textAlign: 'center',
      '&:first-of-type': {
        fontWeight: 400,
        fontSize: '9px',
        textAlign: 'center',
        lineHeight: '9px'
      }
    }
  }
}

const tableCellThStyles = {
  padding: '3px 0 3px 16px'
}

const tableCellRecordsStyles = {
  background: '#261B50',
  padding: '2px 10px',
  width: '60px'
}

const tableCellRankStyles = {
  padding: '3px 10px',
  width: '42px'
}

const Records = () => {
  const { records } = useSelector((state) => state.data) // eslint-disable-line no-unused-vars
  return (
    <Box sx={boxStyles}>
      <Box sx={headerStyles}>
        <Box sx={lastRecordsStyles}>
          <div>3:44</div>
          <div>Your Last record</div>
        </Box>
        <Box sx={yourRankStyles}>
          <div># 144th</div>
          <div>from 15k</div>
        </Box>
      </Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {records.map((row) => (
              <TableRow key={row.name} sx={tableRowStyles}>
                <TableCell component="th" scope="row" sx={tableCellThStyles}>
                  {row.name}
                </TableCell>
                <TableCell sx={tableCellRecordsStyles}>
                  <div>Records</div>
                  <div>{row.record}</div>
                </TableCell>
                <TableCell sx={tableCellRankStyles}>
                  <div>Rank</div>
                  <div>{row.rank}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

Records.propTypes = {}

export default Records
