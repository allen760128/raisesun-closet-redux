import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

// const currencies = [
//     {
//         value: '1',
//         label: '價格排序',
//     },
//     {
//         value: '3',
//         label: '價格由高到低',
//     },
//     {
//         value: '3',
//         label: '價格由低到高',
//     },
//     {
//         value: '4',
//         label: '人氣排序',
//     }
// ];

export default function SelectTextFields(props) {
    // const [currency, setCurrency] = React.useState(1);

    // const handleChange = (event) => {
    //     setCurrency(event.target.value);
    // };

    const changearrange = props.all.changeArrange;
    const handleArrange = props.all.handlearrange;
    const currencies = [
        // {
        //     id: 1,
        //     value: 1,
        //     label: '價格排序',
        // },
        {
            id: 2,
            value: 2,
            label: '每頁顯示6個',
        },
        {
            id: 3,
            value: 3,
            label: '每頁顯示9個',
        },
        {
            id: 4,
            value: 4,
            label: '每頁顯示12個',
        }
    ];
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="standard-select-currency"
                    select
                    label="顯示個數"
                    value={changearrange}
                    onChange={handleArrange}
                    helperText=""
                    variant="standard"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.id} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            {/* <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Native select"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </div> */}
            {/* <div>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                    variant="filled"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="filled-select-currency-native"
                    select
                    label="Native select"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your currency"
                    variant="filled"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </div> */}
            {/* <div>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                    variant="standard"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Native select"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your currency"
                    variant="standard"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </div> */}
        </Box>
    );
}
