import React, {useContext} from 'react'
import Context from '../../context/Context'

export default function Header() {

    //? useContext to access data
    const {data} = useContext(Context); 

    return (
        <header>
            <p>"The Story" by Arnold Lobel and {data.name}.</p>
        </header>
    )
}
