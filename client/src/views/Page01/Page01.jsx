import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../components/Counter/Counter';
import Context from '../../context/Context';

export default function Page01() {

    //? useContext
    const result = useContext(Context)
    const {data} = result; 

    //? useState to update input values
    const [charOne, setCharOne] = useState('')

    const onChangeCharOne = (e) => {
        setCharOne(e.target.value)
    }

    const onClickHandler = (e) => {
        const newObject = data;
        newObject.characterOne = charOne;
        result.setDataToLocalStorage(newObject) 
    }

    return (
        <div>
            <p>One day in summer <input type="text" id="characterOne" value={charOne} onChange={onChangeCharOne} placeholder="Name"></input> was not feeling well.</p>
            <Link to="/page-02"><button onClick={onClickHandler}>Next</button></Link>
            <Counter/>
        </div>
    )
}
