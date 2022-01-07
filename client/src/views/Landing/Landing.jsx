import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/Context'

export default function Landing() {

    //? useContext
    const result = useContext(Context)
    // console.log('Result object provided by Context: ', result) // The whole Object provided by Context

    // const {data} = result; 
    // console.log('Data object: ', data) // Destructured data inside the Object provided by Context

    //? useState to update input values (test)
    const [name, setName] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value)
    }
       
    const onClickHandler = () => {
        result.nextPageButton('name', name)
    }

    return (
        <div className="textContainer">
            <h1>The Story</h1>
            <h3>by Arnold Lobel and <input type="text" id="name" placeholder="Your Name" value={name} onChange={onChangeName}></input> </h3>
            <Link to="/page-01"><button onClick={onClickHandler}>Next</button></Link>
        </div>
    )
}
