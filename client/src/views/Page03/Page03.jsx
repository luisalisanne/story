import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function Page03() {

    //? useContext
    const result = useContext(Context)
    const {data} = result; 

    //? useState to update input values
    const [drink, setDrink] = useState('')

    const onChangeDrink = (e) => {
        setDrink(e.target.value)
    }

    const onClickHandler = (e) => {
        const newObject = data;
        newObject.drink = drink;
        result.setDataToLocalStorage(newObject) 
    }

    return (
        <div>
            <p>"Today you look very green, even for a {data.animalOne}", said {data.characterTwo}. “Get into my bed and rest.”</p>
            <p>{data.characterTwo} made {data.characterOne} a cup of <input type="text" id="characterOne" value={drink} onChange={onChangeDrink} placeholder="Name"></input>.</p>
            <Link to="/page-04"><button onClick={onClickHandler}>Next</button></Link>
        </div>
    )
}
