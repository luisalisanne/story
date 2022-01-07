import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function Page02() {

    //? useContext
    const result = useContext(Context)
    const {data} = result; 
    // console.log(data)

    //? useState to update input values
    const [charTwo, setCharTwo] = useState('');
    const [animOne, setAnimOne] = useState('');

    const onChangeCharTwo = (e) => {
        setCharTwo(e.target.value)
    }

    const onChangeAnimOne = (e) => {
        setAnimOne(e.target.value)
    }

     const onClickHandler = () => {
        result.nextPageButton('characterTwo', charTwo)
        result.nextPageButton('animalOne', animOne)
    }

    return (
        <div className="textContainer">
            <p><input type="text" id="characterOne" value={charTwo} onChange={onChangeCharTwo} placeholder="Name (character two)"></input> said, "{data.characterOne}, you are looking quite green."</p>
            <p>"But I always look green", said {data.characterOne}. "I am a <input type="text" id="animalOne" value={animOne} onChange={onChangeAnimOne} placeholder="green animal"></input>."</p>
            <Link to="/page-03"><button onClick={onClickHandler}>Next</button></Link>
        </div>
    )
}
