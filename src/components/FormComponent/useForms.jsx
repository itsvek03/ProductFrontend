import { makeStyles } from '@material-ui/core'
import { useState } from 'react'

export function useForms(initialState) {
    console.log("FORM", initialState)
    const [values, setValue] = useState(initialState)
    const [errors, setErrors] = useState({})
    const handleInputChange = e => {
        const { name, value } = e.target
        setValue({
            ...values,
            [name]: value
        })
    }

    const resetForm = () => {
        setValue(initialState)
        setErrors({})
    }

    return {
        values,
        setValue,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Forms(props) {
    const styles = useStyle();
    const { children, ...other } = props
    return (
        <form className={styles.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}