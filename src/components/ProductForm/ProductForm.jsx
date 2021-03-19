import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useForms, Forms } from '../FormComponent/useForms';
import Controls from '../Controls/Controls'
import { getCategoryAction } from '../../actions/categoryactions'
import { useDispatch, useSelector } from 'react-redux';


const initialState = {
    ProductName: '',
    Price: '',
    Category: ''
}
export default function ProductForm(props) {
    const { addorEditProduct, EditRecord } = props
    const { values, setValue, errors, setErrors, handleInputChange, resetForm } = useForms(initialState)
    const dispatch = useDispatch()
    const data = useSelector(state => state.GetCategoryReducer)
    const { category, loading, error } = data;
    useEffect(() => {
        dispatch(getCategoryAction())
    }, [dispatch])

    const Validation = () => {
        let temp = {}
        temp.ProductName = values.ProductName ? "" : "This Field is required"
        temp.Price = values.Price.length < 5 || values.Price ? "" : "Price Must be less than 10000"
        temp.Category = values.Category.length !== 0 ? "" : "This field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (Validation()) {
            addorEditProduct(values, resetForm)
        }
    }

    useEffect(() => {
        if (EditRecord !== null) {
            setValue({
                ...EditRecord
            })
        }
    }, [EditRecord, setValue])

    return (
        <>
            {(error) ? <h1>SOMETHING WENT WRONG</h1> :
                <Forms onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} >
                            <Controls.Input
                                value={values.ProductName}
                                onChange={handleInputChange}
                                name="ProductName"
                                label="Product"
                                error={errors.ProductName}
                            />

                        </Grid>
                        <Grid items xs={12}>
                            <Controls.Input
                                value={values.Price}
                                onChange={handleInputChange}
                                name="Price"
                                label="Price"
                                error={errors.Price}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {loading ? (<h1>Loading</h1>) :
                                <Controls.SelectDropDown
                                    label="Category"
                                    value={values.Category}
                                    name="Category"
                                    onChange={handleInputChange}
                                    options={category.doc}
                                    error={errors.Category}
                                >
                                </Controls.SelectDropDown>}

                            <div>
                                <Controls.Button
                                    type="submit"
                                    text="Submit"
                                >
                                </Controls.Button>
                                <Controls.Button
                                    color="default"
                                    text="Reset"
                                    onClick={resetForm}
                                >
                                </Controls.Button>
                            </div>
                        </Grid>
                    </Grid>
                </Forms>
            }

        </>

    )
}
