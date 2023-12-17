// module
import {
    CssBaseline,
    GlobalStyles,
    ThemeProvider,
    createTheme,
} from '@mui/material'
import { Route, Routes } from 'react-router-dom'
// custom
import './i18n/config'
import appTheme from './theme/theme'
import appStyle from './theme/app-style'
import CreateEvent from './pages/create-event'
import { ToastContainer } from 'react-toastify'

const theme = createTheme(appTheme)

function App() {
    return (
        <>
            <GlobalStyles styles={appStyle} />
            <ThemeProvider theme={theme}>
                <ToastContainer rtl theme='dark'/>
                <CssBaseline />
                <Routes>
                    <Route path="/create-event" element={<CreateEvent />} />
                </Routes>
            </ThemeProvider>
        </>
    )
}

export default App
