import React, {useState, useContext} from 'react'
// import axios from 'axios'
// import Context from '../../context/Context'

export default function Page01() {

    // Import Context data with useContext hook
    // const result = useContext(Context)
    // console.log(result)

    // useState to update input values
    const [characterOne, setCharacterOne] = useState('')

    const onChangeCharacterOne = (e) => {
        setCharacterOne(e.target.value)
        console.log('e.target.value: ', e.target.value)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        setCharacterOne(characterOne)
        console.log('Character One:', characterOne)
    }

    // const onSubmitHandle = async (e) => {
    //     e.preventDefault()

    //     try {
    //         await axios.post("http://localhost:4000/data/addCharNameOne", {
    //             "characterOne":characterOne
    //         })
    //         console.log(characterOne)
            
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    return (
        <div>
            <p>One day in summer <input type="text" id="characterOne" value={characterOne} onChange={onChangeCharacterOne} placeholder="Name"></input> was not feeling well.</p>
            <button onClick={onClickHandler}>Next</button>
        </div>
    )
}
