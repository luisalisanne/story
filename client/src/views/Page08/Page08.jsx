import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function Page08() {

    //? useContext
    const {data} = useContext(Context)

    return (
        <div className="textContainer">
            <p>“Why are you banging your head against the {data.objectTwo}?” asked {data.characterOne}.</p>
            <p>“I hope that if I bang my head against the {data.objectTwo} hard enough, it will help me to think of a story,” said {data.characterTwo}.</p>
            <Link to="/page-09"><button>Next</button></Link>
        </div>
    )
}