import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


export default function SelectTextFields(props) {
    const [currency, setCurrency] = React.useState(1);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    // const changeprice = props.all.changePrice;
    // const pricehighArrange = props.all.priceHighArrange;
    // const pricelowArrange = props.all.priceLowArrange;
    // const ratearrange = props.all.rateArrange;
    // const handlepropChange = props.all.handlePropChange;
    const currencies = [
        // {
        //     id: 1,
        //     value: 1,
        //     label: '價格排序',
        // },
        {
            id: 2,
            value: 'pricehighArrange',
            label: '此店',
        },
        {
            id: 3,
            value: 'pricelowArrange',
            label: 'Facebook',
        },
        {
            id: 4,
            value: 'ratearrange',
            label: 'Instagram',
        }
    ];
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="standard-select-currency"
                    select
                    label="評價來源"
                    value={currency}
                    onChange={handleChange}
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
