import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import Controls from './Controls'
import CloseIcon from '@material-ui/icons/Close'

export default function PopUp(props) {
    const { title, children, openPopUp, setOpenPopUp } = props
    return (
        <Dialog open={openPopUp} maxWidth="md">
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>{title}</Typography>
                    <Controls.ActionButton
                        color="secondary"
                        onClick={() => setOpenPopUp(false)}
                    >
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>

            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText>
                    {children}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}
