import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function Page13() {

    //? useContext
    const {data} = useContext(Context)

    return (
        <div>
            <p>How was that, {data.characterTwo}?” said {data.characterOne}.</p>
            <p>But {data.characterTwo} did not answer.</p>
            <p>They had fallen asleep.</p>       
            <Link to="/page-13"><button>Next</button></Link>
            <Link to="/"><button>Start again</button></Link>
        </div>
    )
}