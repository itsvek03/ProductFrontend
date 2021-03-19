import React, { useEffect, useState } from 'react'
import PageHeader from '../PageHeader/PageHeader'
import ProductForm from '../ProductForm/ProductForm'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { makeStyles, Paper, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import useTable from '../Table/useTable'
import { getProductAction } from '../../actions/productactions'
import { useDispatch, useSelector } from 'react-redux';
import Controls from '../Controls/Controls'
import AddIcon from '@material-ui/icons/Add';
import { postProductAction, UpdateProductAction, DeleteProductAction } from '../../actions/productactions.js'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Notification from '../Controls/Notification'

const useStyles = makeStyles(theme => ({
    paggingContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(1)
    }
}))

const tblHeader = [
    { id: 'ProductName', label: 'Product Name' },
    { id: 'Price', label: 'Price' },
    { id: 'Category', label: 'Category' },
    { id: 'Actions', label: 'Actions' },
]

export default function Product() {
    const styles = useStyles();
    const [openPopUp, setOpenPopUp] = useState(false)
    const [notify, setNotidy] = useState({ isOpen: false, message: '', type: '' })
    const dispatch = useDispatch();
    const data = useSelector(state => state.GetProductReducer)
    const [EditRecord, setEditRecord] = useState(null)
    const { loading, error, product, success } = data
    const pdata = (product.length === 0) ? [] : product.doc
    const { TblContainer, TblHead, TblPagination, recordsPagination } = useTable(pdata, tblHeader);


    useEffect(() => {
        dispatch(getProductAction())
    }, [dispatch])


    const addorEditProduct = (product, resetForm) => {
        console.log("ADD OR EDIT", product)
        if (parseInt(product._id) > 0) {
            dispatch(UpdateProductAction(product._id, product))
        }
        else {
            dispatch(postProductAction(product))
        }
        console.log("PRODUCT_ID", parseInt(product._id))
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

    const DeletePd = (id) => {
        dispatch(DeleteProductAction(id))
        setNotidy({
            isOpen: true,
            message: "Deleted Successfully",
            type: 'error'
        })
    }

    return (
        <>
            <PageHeader
                title="Product"
                subTitle="Product Form with validations"
                icon={<PeopleAltIcon fontSize="large" />}
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
                        {(loading && product.length === 0) ? <Typography variant="h1" color="initial">LOADING</Typography> : recordsPagination().map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item.ProductName}</TableCell>
                                <TableCell>{item.Price}</TableCell>
                                <TableCell>{(!item.Category ? null : item.Category.CategoryName)}</TableCell>
                                <TableCell>
                                    <Controls.ActionButton
                                        color="primary"
                                        onClick={() => OpeninPopUp(item)}
                                    >
                                        <EditOutlinedIcon fontSize="small" />
                                    </Controls.ActionButton>

                                    <Controls.ActionButton
                                        color="secondary"
                                        onClick={() => DeletePd(item._id)}
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
                <ProductForm
                    EditRecord={EditRecord}
                    addorEditProduct={addorEditProduct}
                />
            </Controls.PopUp>

            <Notification
                notify={notify}
                setNotidy={setNotidy}
            />
        </>
    )
}
