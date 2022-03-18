import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, minWidth: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              min: 0, max: 99
            }
          }}
        />

      </div>

    </Box>
  );
}
