import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function Page12() {

    //? useContext
    const {data} = useContext(Context)

    return (
        <div className="textContainer">
            <p>Then {data.characterTwo} the {data.animalTwo} did not feel so well, and {data.characterOne} the {data.animalOne} was feeling better.</p>
            <p>So {data.characterTwo} the {data.animalTwo} went to bed and {data.characterOne} the {data.animalOne} got up and told them a story.</p>
            <p>The end.</p>       
            <Link to="/page-13"><button>Next</button></Link>
        </div>
    )
}