// Wrapper to provide Context to all the components in the App
import React, {useState} from 'react';
import Context from './Context';

// Destructuring props object to access only children
export default function ContextProvider({children}) {

    // State variable that will be needed by several components and views to store user inputs
    const [data, setData] = useState(JSON.parse(localStorage.getItem("storedData")) || null)

    // updating the data
    const setDataToLocalStorage = (storedData) => {
            localStorage.setItem("storedData", JSON.stringify(storedData));
            setData(storedData)
    }

    // Data that will be provided as an object
    // setDtaToLocalStorage Function and data from state variable
    const providedData = {
        setDataToLocalStorage,
        data     
    }
    
    return (
        <Context.Provider value={providedData}>{children}</Context.Provider>
    )
}

