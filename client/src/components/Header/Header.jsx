import React, {useContext} from 'react'
import Context from '../../context/Context'

export default function Header() {

    //? useContext to access data
    const {name} = useContext(Context);

    return (
        <header>
            <p>"The Story" by Arnold Lobel and {name ? name : 'you'}.</p>
        </header>
    )
}
