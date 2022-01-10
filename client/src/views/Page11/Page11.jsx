import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

export default function Page11() {
  //? useContext
  const { data } = useContext(Context);

  return (
    <div className="textContainer">
      <p>
        They asked their friend {data.characterTwo} the {data.animalTwo} to tell
        them a story.
      </p>
      <p>
        {data.characterTwo} the {data.animalTwo} could not think of a story.
      </p>
      <p>
        They walked up and down on the porch, but they could not think of a
        story.
      </p>
      <p>
        They stood on their {data.objectOne}, but they could not think of a
        story.
      </p>
      <p>
        They poured {data.liquid} over their head, but they could not think of a
        story.
      </p>
      <p>
        They banged their head against the {data.objectTwo}, but they could not
        think of a story.
      </p>

      <Link to="/page-12">
        <button>Next</button>
      </Link>
    </div>
  );
}
