import React, {useState, useContext} from 'react'
import NextButton from '../../components/NextButton/NextButton'

// import Context from '../../context/Context'

// import axios from 'axios'
// import NextButton from '../../components/NextButton/NextButton'

export default function Landing() {

    //? testing useContext
    // const result = useContext(Context)
    // console.log(result)
    // console.log(result.name)

    //? useState to update input values (test)
    const [name, setName] = useState('');

    //? submitHandler (test)
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
        console.log('e.target.value: ', e.target.value)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        setName(name)
        console.log('Name:', name)
    }

    return (
        <div>
            <h1>The Story</h1>
            <h3>by Arnold Lobel and <input type="text" id="name" placeholder="Your Name" value={name} onChange={onChangeName}></input> </h3>
            <button onClick={onClickHandler}>Next</button>
        </div>
    )
}
