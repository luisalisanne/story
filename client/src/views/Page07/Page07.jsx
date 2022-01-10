import React, { useState, useContext } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";

export default function Page07() {
  //? useContext
  const { data, nextPageButton } = useContext(Context);

  //? useState to update input values
  const [objTwo, setObjTwo] = useState("");

  const onChangeObjTwo = (e) => {
    setObjTwo(e.target.value);
  };

  const onClickHandler = () => {
    nextPageButton("objectTwo", objTwo);
  };

  return (
    <div className="textContainer">
      <p>
        “Why are you pouring {data.liquid} over your head?” asked{" "}
        {data.characterOne}.
      </p>
      <p>
        “I hope that if I pour {data.liquid} over my head, it will help me to
        think of a story,” said {data.characterTwo}.
      </p>
      <p>
        {data.characterTwo} poured many glasses of {data.liquid} over their
        head.
      </p>
      <p>But they could not think of a story to tell {data.characterOne}.</p>
      <p>
        Then {data.characterTwo} began to bang their head against the{" "}
        <input
          type="text"
          id="objectTwo"
          value={objTwo}
          onChange={onChangeObjTwo}
          placeholder="object"
        ></input>
        .
      </p>

      <Link to="/page-08">
        <button onClick={onClickHandler}>Next</button>
      </Link>
    </div>
  );
}
