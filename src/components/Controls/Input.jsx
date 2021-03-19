import { TextField } from '@material-ui/core'
import React from 'react'

export default function Input(props) {
    const { value, onChange, label, name, error = null } = props
    return (
        <div>
            <TextField
                variant="outlined"
                value={value}
                label={label}
                name={name}
                onChange={onChange}

                {...(error && { error: true, helperText: error })}
            />
        </div>
    )
}
