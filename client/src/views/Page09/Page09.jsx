import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function Page09() {

    //? useContext
    const {data} = useContext(Context)

    return (
        <div className="textContainer">
            <p>“I am feeling much better now, {data.characterTwo},” said {data.characterOne}.</p>
            <p>“I do not think I need a story anymore.”</p>
            <p>“Then you get out of bed and let me get into it,” said {data.characterTwo}, “because now I feel terrible.”</p>
            <p>{data.characterOne} said, “Would you like me to tell you a story, {data.characterTwo}?”</p>
            <p>“Yes,” said {data.characterTwo}, “if you know one.”</p>
            <Link to="/page-10"><button>Next</button></Link>
        </div>
    )
}