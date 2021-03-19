import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Header from '../src/components/PageHeader/Header'
import Product from '../src/components/ProductForm/Product'
import Category from '../src/components/CategoryForm/Category'
import { Route, Switch } from 'react-router-dom'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3f51b5',
            dark: '#303f9f'
        },
        secondary: {
            main: '#f50057',
            dark: '#c51162'
        }
    }
})


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Product} />
                    <Route exact path="/category" component={Category} />
                </Switch>
            </div>
            <CssBaseline />
        </ThemeProvider>
    )
}
