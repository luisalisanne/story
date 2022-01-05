// Wrapper to provide Context to all the components in the App

import React, {useState} from 'react';
import Context from './Context';
import Page01 from '../views/Page01/Page01';

// Destructuring props object to access only children
export default function ContextProvider({children}) {

    // State variables that will be needed by several components and views
    const [name, setName] = useState('');
    const [charOneName, setCharOneName] = useState('')

    // Data that will be provided as an object
    const providedData = {
        name,
        charOneName        
    }
    
    return (
        <Context.Provider value={providedData}>

        {children}

        </Context.Provider>
    )
}

