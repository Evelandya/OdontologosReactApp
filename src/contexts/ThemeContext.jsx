import { createContext, useState } from 'react'


export const ThemeContext = createContext()

function ThemeProvider(props) {

    const [ theme, setTheme] = useState('theme-light')

    function toggleTheme(){
        setTheme((prevTheme)=>(prevTheme === 'theme-light' ? 'theme-dark' : 'theme-light'))
    }

    const returnedValue = {
        value: theme,
        changeValue: toggleTheme
    }

    return(
        <ThemeContext.Provider value={returnedValue}>
            {/*eslint-disable-next-line react/prop-types*/}
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider