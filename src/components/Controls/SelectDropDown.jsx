import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { FormHelperText, InputLabel, Select } from '@material-ui/core'

export default function SelectDropDown(props) {
    console.log("DROP", props)
    const { name, label, onChange, value, options, error = null } = props
    return (
        <>
            <FormControl
                variant="outlined"
                {...(error && { error: true })}
            >
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <MenuItem value="">None</MenuItem>
                    {
                        options.map((item) => {
                            return <MenuItem key={item._id} value={item._id}>{item.CategoryName}</MenuItem>
                        })
                    }
                </Select>
                {error && <FormHelperText>{error}</FormHelperText>}

            </FormControl>
        </>
    )
}
