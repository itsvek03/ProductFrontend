import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { Alert } from '@material-ui/lab'

export default function Notification(props) {
    const { notify, setNotidy } = props
    const handleClose = (event, reason) => {
        setNotidy({
            ...notify,
            isOpen: false
        })
    }
    return (
        <Snackbar
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
        >
            <Alert
                severity={notify.type}
                onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
