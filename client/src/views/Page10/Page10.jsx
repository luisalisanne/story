import React, {useState, useContext} from 'react'
import Context from '../../context/Context';
import { Link } from 'react-router-dom';

export default function Page10() {

    //? useContext
    const result = useContext(Context)
    const {data} = result; 

    //? useState to update input values
    const [animTwo, setAnimTwo] = useState('')

    const onChangeAnimTwo = (e) => {
        setAnimTwo(e.target.value)
    }

    const onClickHandler = (e) => {
        const newObject = data;
        newObject.animalTwo = animTwo;
        result.setDataToLocalStorage(newObject) 
    }

    return (
        <div className="textContainer">
            <p>“Once upon a time,” said {data.characterOne}, “there were two good friends, a {data.animalOne} and a <input type="text" id="objectTwo" value={animTwo} onChange={onChangeAnimTwo} placeholder="animal"></input>.</p>
            <p>The {data.animalOne} was not feeling well.</p>

            <Link to="/page-11"><button onClick={onClickHandler}>Next</button></Link>
        </div>
    )
}
