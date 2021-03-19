import React, { useEffect, useState } from 'react'
import PageHeader from '../PageHeader/PageHeader'

import { makeStyles, Paper, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import Controls from '../Controls/Controls'
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Notification from '../Controls/Notification'
import { useDispatch, useSelector } from 'react-redux';
import useTable from '../Table/useTable';
import CategoryForm from '../CategoryForm/CategoryForm'
import CategoryIcon from '@material-ui/icons/Category';
import {
    getCategoryAction,
    UpdateCategoryAction,
    postCategoryAction,
    DeleteCategoryAction,
} from '../../actions/categoryactions'


const useStyles = makeStyles(theme => ({
    paggingContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(1)
    }
}))

const tblHeader = [
    { id: 'id', label: 'ID' },
    { id: 'CategoryName', label: 'CategoryName' },
    { id: 'Actions', label: 'Actions' }
]


export default function Category() {
    const styles = useStyles();

    const [openPopUp, setOpenPopUp] = useState(false)
    const [notify, setNotidy] = useState({ isOpen: false, message: '', type: '' })
    const dispatch = useDispatch();
    const [EditRecord, setEditRecord] = useState(null)
    const data = useSelector(state => state.GetCategoryReducer)
    const { loading, error, category, success } = data
    const pdata = (category.length === 0) ? [] : category.doc
    const { TblContainer, TblHead, TblPagination, recordsPagination } = useTable(pdata, tblHeader);

    useEffect(() => {
        dispatch(getCategoryAction())
    }, [dispatch])

    const addorEditCategory = (category, resetForm) => {
        console.log("ADD OR EDIT", category)
        if (parseInt(category._id) > 0) {
            dispatch(UpdateCategoryAction(category._id, category))
        }
        else {
            dispatch(postCategoryAction(category))
        }
        console.log("CATEGORY_ID", parseInt(category._id))
        setEditRecord(null)
        resetForm();
        setOpenPopUp(false);
        setNotidy({
            isOpen: true,
            message: "Submitted Successfully",
            type: 'success'
        })

    }

    const OpeninPopUp = (item) => {
        setEditRecord(item)
        setOpenPopUp(true)
    }

    const DeleteCat = (id) => {
        dispatch(DeleteCategoryAction(id))
        setNotidy({
            isOpen: true,
            message: "Deleted Successfully",
            type: 'error'
        })
    }

    return (
        <>
            <PageHeader
                title="Category"
                subTitle="Category Form with validations"
                icon={<CategoryIcon fontSize="large" />}
            />

            <Paper elevation={3} className={styles.paggingContent}>
                <Controls.Button
                    text="Add New"
                    startIcon={<AddIcon />}
                    onClick={() => { setOpenPopUp(true); setEditRecord(null) }}
                />
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {(loading && category.length === 0) ? <Typography variant="h1" color="initial">LOADING</Typography> : recordsPagination().map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item._id}</TableCell>
                                <TableCell>{item.CategoryName}</TableCell>
                                <TableCell>
                                    <Controls.ActionButton
                                        color="primary"
                                        onClick={() => OpeninPopUp(item)}
                                    >
                                        <EditOutlinedIcon fontSize="small" />
                                    </Controls.ActionButton>

                                    <Controls.ActionButton
                                        color="secondary"
                                        onClick={() => DeleteCat(item._id)}
                                    >
                                        <CloseIcon fontSize="small" />
                                    </Controls.ActionButton>
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>

            <Controls.PopUp
                title="Product Form"
                openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}
            >
                <CategoryForm
                    EditRecord={EditRecord}
                    addorEditCategory={addorEditCategory}
                />
            </Controls.PopUp>

            <Notification
                notify={notify}
                setNotidy={setNotidy}
            />
        </>
    )
}
