import React, {useState, useContext} from 'react'
import Context from '../../context/Context';
import { Link } from 'react-router-dom';

export default function Page06() {

    //? useContext
    const {data, nextPageButton} = useContext(Context)

    //? useState to update input values
    const [liq, setLiq] = useState('')

    const onChangeLiq = (e) => {
        setLiq(e.target.value)
    }

    const onClickHandler = () => {
        nextPageButton('liquid', liq)
    }

    return (
        <div className="textContainer">
        <p>“Why are you standing on your {data.objectOne}?" asked {data.characterOne}.</p>
        <p>“I hope that if I stand on my {data.objectOne}, it will help me to think of a story,” said {data.characterTwo}.</p>
        <p>{data.characterTwo} stood on their {data.objectOne} for a long time.</p>
        <p>But they could not think of a story to tell {data.characterOne}.</p>
        <p>Then {data.characterTwo} poured a glass of <input type="text" id="liquid" value={liq} onChange={onChangeLiq} placeholder="liquid"></input> over their head.</p>

        <Link to="/page-07"><button onClick={onClickHandler}>Next</button></Link>

        </div>
    )
}