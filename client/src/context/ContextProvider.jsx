// Wrapper to provide Context to all the components in the App
import React, { useState } from "react";
import Context from "./Context";

// Destructuring props object to access only children
export default function ContextProvider({ children }) {
  // State variables that will be needed by several components and views to store user inputs
  //? user data object
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("storedData")) || null
  );
  //? current page counter
  const [counter, setCounter] = useState("");
  //? user name
  const [name, setName] = useState("");

  // updating the data
  const setDataToLocalStorage = (storedData) => {
    localStorage.setItem("storedData", JSON.stringify(storedData));
    setData(storedData);
  };

  //? NEXT PAGE BUTTON CENTRAL LOGIC TO UPDATE DATA IN LOCAL STORAGE
  const nextPageButton = (objectKey, newValue) => {
    const newObject = data;
    // console.log('New object before updating (cloned data object): ', newObject);
    // console.log('objectKey: ', objectKey);
    // console.log('newValue:', newValue);

    // If there is a user input, update the object:
    if (newValue) {
      newObject[objectKey] = newValue;
      // console.log('newObject[objectKey]: ', newObject[objectKey])
      setDataToLocalStorage(newObject);
      // console.log('Object after updating: ', data)
    }
  };

  //? Data that will be provided as an object
  // setDtaToLocalStorage Function and data from state variable
  const providedData = {
    name,
    setName,
    setDataToLocalStorage,
    data,
    setCounter,
    counter,
    nextPageButton,
  };

  return <Context.Provider value={providedData}>{children}</Context.Provider>;
}
