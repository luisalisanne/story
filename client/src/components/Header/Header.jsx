import React, {useContext} from 'react'
import Context from '../../context/Context'



export default function Header() {

    const result = useContext(Context)
    console.log(result.name)

    return (
        <header>
            "The Story" by Arnold Lobel and {result.name}.
        </header>
    )
}
