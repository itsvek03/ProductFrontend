import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))



export default function Button(props) {
    console.log("BUTTON", props)
    const { text, variant, size, color, onClick, ...other } = props

    const classes = useStyles();

    return (

        <MuiButton
            variant={variant || "contained"}
            color={color || "primary"}
            size={size || "large"}
            onClick={onClick}

            classes={{ root: classes.root, label: classes.label }}
            {...other}
        >
            {text}
        </MuiButton>

    )
}
