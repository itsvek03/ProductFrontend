import React, { useState } from 'react';
import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer'
        },


    }
}))

export default function useTable(records, headCell) {
    console.log("RECORDS", records)
    const classes = useStyles();


    const pages = [5, 10, 15];
    const [page, setPages] = useState(0);
    const [rowPerPage, setrowPerPage] = useState(pages[page])


    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {
        return (<TableHead>
            <TableRow>
                {
                    headCell.map((item) => (
                        <TableCell key={item.id}>
                            {item.label}
                        </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>)
    }


    const handleChangePage = (event, newPage) => {
        setPages(newPage)
    }

    const handleChangeRowsPage = (event) => {
        setrowPerPage(parseInt(event.target.value, 10))
        setPages(0)
    }

    const TblPagination = () => (
        <TablePagination
            component="div"
            page={page}
            count={records.length}
            rowsPerPageOptions={pages}
            rowsPerPage={rowPerPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPage}
        />
    )

    var recordsPagination = () => {
        return records.slice(page * rowPerPage, (page + 1) * rowPerPage)
    }



    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsPagination
    }
}
