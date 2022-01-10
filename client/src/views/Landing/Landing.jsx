import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/Context'

export default function Landing() {

    //? useContext
    const {nextPageButton, name, setName} = useContext(Context)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
       
    const onClickHandler = () => {
        nextPageButton('name', name)
    }

    return (
        <div className="textContainer">
            <h1>The Story</h1>
            <h3>by Arnold Lobel and <input type="text" id="name" placeholder="Your Name" value={name} onChange={onChangeName}></input> </h3>
            <Link to="/page-01"><button onClick={onClickHandler}>Next</button></Link>
        </div>
    )
}
