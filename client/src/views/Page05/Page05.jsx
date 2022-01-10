import React, { useState, useContext } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";

export default function Page05() {
  //? useContext
  const { data, nextPageButton } = useContext(Context);

  //? useState to update input values
  const [objOne, setObjOne] = useState("");

  const onChangeObjOne = (e) => {
    setObjOne(e.target.value);
  };

  const onClickHandler = () => {
    nextPageButton("objectOne", objOne);
  };

  return (
    <div className="textContainer">
      <p>
        “I will go out on the front porch and walk up and down,” said{" "}
        {data.characterTwo}.
      </p>
      <p>“Perhaps that will help me to think of a story.”</p>
      <p>
        {data.characterTwo} walked up and down on the porch for a long time.
      </p>
      <p>But they could not think of a story to tell {data.characterOne}.</p>
      <p>
        Then {data.characterTwo} went into the house and stood on their{" "}
        <input
          type="text"
          id="objectOne"
          value={objOne}
          onChange={onChangeObjOne}
          placeholder="..."
        ></input>
        .
      </p>

      <Link to="/page-06">
        <button onClick={onClickHandler}>Next</button>
      </Link>
    </div>
  );
}
