import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndeterminate = (props) => {
  const Color = props.clo;
  const Size = props.si;
  return (
    <Box>
      <CircularProgress color={Color} size={Size} />
    </Box>
  )
}
export default CircularIndeterminate;