import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff'
    },
    button: {
        margin: theme.spacing(1)
    }
}))


export default function Header() {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid container alignItems="center" >

                        <Grid item sm></Grid>
                        <Grid item>
                            <Link to="/">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Product
                            </Button>

                            </Link>



                            <Link to="/category">
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Category
                            </Button>
                            </Link>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}


/**
 * 1) display
 * 2) position
 * 3) CssFlexBox
 * 4) padding
 * 5) Hover
 * 6) Flex Direction
 * 7) transform
 */