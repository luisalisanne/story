import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function Page01() {

    //? useContext
    const {nextPageButton} = useContext(Context);

    //? useState to update input values
    const [charOne, setCharOne] = useState('');

    const onChangeCharOne = (e) => {
        setCharOne(e.target.value)
    };

    const onClickHandler = () => {
        nextPageButton('characterOne', charOne)
    };

    return (
        <div className="textContainer">
            <p>One day in summer <input type="text" id="characterOne" value={charOne} onChange={onChangeCharOne} placeholder="Name (character one)"></input> was not feeling well.</p>
            <Link to="/page-02"><button onClick={onClickHandler}>Next</button></Link>
        </div>
    )
}