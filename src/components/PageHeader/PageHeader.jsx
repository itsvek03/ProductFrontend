import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const usestyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff',
        margin: theme.spacing(1.5)
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(3)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))

export default function PageHeader(props) {

    const classes = usestyles();
    const { title, subTitle, icon } = props;

    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <div className={classes.pageHeader}>
                    <Card className={classes.pageIcon}>
                        {icon}
                    </Card>
                    <div className={classes.pageTitle}>
                        <Typography variant="h6" color="initial" component="div">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" color="initial" component="div">
                            {subTitle}
                        </Typography>
                    </div>
                </div>
            </Paper>
        </>
    );
}
