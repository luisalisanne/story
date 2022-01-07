import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/Context'

// import axios from 'axios'

export default function Landing() {

    //? useContext
    const result = useContext(Context)
    console.log(result) // The whole Object provided by Context

    const {data} = result; 
    console.log(data) // Destructured data inside the Object provided by Context

    //? useState to update input values (test)
    const [name, setName] = useState('');

    //? Testing sending data to db, submitHandler
    // const onSubmitHandle = async (e) => {
    //     e.preventDefault()

    //     try {
    //         await axios.post("http://localhost:4000/data/create", {
    //             "name":name
    //         })
    //         console.log(name)
            
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    const onChangeName = (e) => {
        setName(e.target.value)
        // console.log('e.target.value: ', e.target.value)
    }

    const onClickHandler = (e) => {
        const newObject = data;
        newObject.name = name;
        result.setDataToLocalStorage(newObject) 
        console.log(e.target.value)

        // Counter Test
        result.setCounter(result.counter + 1)
        console.log(result.counter)
    }

    return (
        <div className="textContainer">
            <h1>The Story</h1>
            <h3>by Arnold Lobel and <input type="text" id="name" placeholder="Your Name" value={name} onChange={onChangeName}></input> </h3>
            <Link to="/page-01"><button onClick={onClickHandler}>Next</button></Link>
        </div>
    )
}
