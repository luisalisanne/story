import { useLocation } from "react-router-dom";

export default function CurrentPage() {
  //? useLocation to access current url
  let location = useLocation();
  // console.log(location)
  // console.log((location.pathname).slice(-2))

  //? Display the last two characters of the current url
  const slicedLocation = location.pathname.slice(-2);

  //? Conditional Rendering to not display the current page on Landing.jsx
  if (slicedLocation.includes("/") === false) {
    return <p className="currentPage">{slicedLocation}/13</p>;
  } else {
    return <p>&#128525;</p>;
  }
}
