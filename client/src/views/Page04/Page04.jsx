import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function Page04() {

    //? useContext
    const {data} = useContext(Context)

    return (
        <div>
            <p>{data.characterOne} drank the {data.drink}, and then they said, “Tell me a story while I am resting.”</p>
            <p>“All right,” said {data.characterTwo}. “Let me think of a story to tell you.”</p>
            <p>{data.characterTwo} thought and thought.</p>
            <p>But they could not think of a story to tell {data.characterOne}.</p>
            <Link to="/page-05"><button>Next</button></Link>
        </div>
    )
}
