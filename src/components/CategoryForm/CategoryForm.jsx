import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Controls from '../Controls/Controls'
import { Forms, useForms } from '../FormComponent/useForms'
import { getCategoryAction } from '../../actions/categoryactions'

const initialState = {
    CategoryName: '',
}


export default function CategoryForm(props) {
    const { addorEditCategory, EditRecord } = props
    const { values, setValue, errors, setErrors, handleInputChange, resetForm } = useForms(initialState)
    const dispatch = useDispatch()
    const data = useSelector(state => state.GetCategoryReducer)

    const { category, loading, error } = data;

    useEffect(() => {
        dispatch(getCategoryAction())
    }, [dispatch])

    const Validation = () => {
        let temp = {}
        temp.CategoryName = values.CategoryName ? "" : "This Field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (Validation()) {
            addorEditCategory(values, resetForm)
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
            <Forms onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12} >
                        <Controls.Input
                            value={values.CategoryName}
                            onChange={handleInputChange}
                            name="CategoryName"
                            label="Category"
                            error={errors.CategoryName}
                        />
                    </Grid>
                    <Grid item xs={12}>
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
        </>
    )

}
