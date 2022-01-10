import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StorySaver from "../../components/StorySaver/StorySaver";
import Context from "../../context/Context";

export default function Page13() {
  //? useContext
  const { data } = useContext(Context);

  return (
    <div className="textContainer">
      <p>
        How was that, {data.characterTwo}?” said {data.characterOne}.
      </p>
      <p>But {data.characterTwo} did not answer.</p>
      <p>They had fallen asleep.</p>
      <Link to="/">
        <button className="backToStart">Start again</button>
      </Link>
      <StorySaver />
    </div>
  );
}
