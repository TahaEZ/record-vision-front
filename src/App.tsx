// module
import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from '@mui/material'
// custom
import DatePicker from './components/date-picker'
import './i18n/config'
import appTheme from './theme/theme'
import appStyle from './theme/app-style'

const theme = createTheme(appTheme)

function App() {    
    return (
        <>
            <GlobalStyles styles={appStyle} />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <DatePicker />
            </ThemeProvider>
        </>
    )
}

export default App
