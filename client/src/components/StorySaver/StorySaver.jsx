import React, { useContext } from "react";
import Context from "../../context/Context";
import axios from "axios";

export default function StorySaver() {
  const { data } = useContext(Context);

  //  ? Testing sending data to db, submitHandler
  const submitStoryDataToDatabase = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/data/create", {
        name: data.name,
        characterOne: data.characterOne,
        characterTwo: data.characterTwo,
        drink: data.drink,
        animalOne: data.animalOne,
        objectOne: data.objectOne,
        liquid: data.liquid,
        objectTwo: data.objectTwo,
        animalTwo: data.animalTwo,
      });

      // localStorage.clear();
      alert("Your story was saved to the database!");
      localStorage.clear();
    } catch (error) {
      console.log(error);
      alert("Oops, something went wrong ....");
    }
  };

  return (
    <button
      className="saveStoryBtn"
      type="submit"
      onClick={submitStoryDataToDatabase}
    >
      Save this Story
    </button>
  );
}
