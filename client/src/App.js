import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Import scss styles
import "../src/assets/style.scss";

// Import Context
import ContextProvider from "./context/ContextProvider";

// Import Components
import Header from "./components/Header/Header";
// import NextButton from "./components/NextButton/NextButton"
import Footer from "./components/Footer/Footer";
// Not Found
import NotFound from "./components/NotFound/NotFound";

// Import Views
import Landing from "./views/Landing/Landing";
import Page01 from "./views/Page01/Page01";
import Page02 from "./views/Page02/Page02";
import Page03 from "./views/Page03/Page03";
import Page04 from "./views/Page04/Page04";
import Page05 from "./views/Page05/Page05";
import Page06 from "./views/Page06/Page06";
import Page07 from "./views/Page07/Page07";
import Page08 from "./views/Page08/Page08";
import Page09 from "./views/Page09/Page09";
import Page10 from "./views/Page10/Page10";
import Page11 from "./views/Page11/Page11";
import Page12 from "./views/Page12/Page12";
import Page13 from "./views/Page13/Page13";

function App() {
  useEffect(() => {
    initializeData();
  }, []);

  // set default
  const initializeData = () => {
    const storedData = {
      name: "you",
      characterOne: "Frog",
      characterTwo: "Toad",
      animalOne: "frog",
      drink: "hot tea",
      objectOne: "head",
      liquid: "water",
      objectTwo: "wall",
      animalTwo: "toad",
    };

    if (localStorage.getItem(storedData) === null) {
      localStorage.setItem("storedData", JSON.stringify(storedData));
    }
  };

  return (
    <Router>
      <ContextProvider>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/page-01" element={<Page01 />} />
            <Route path="/page-02" element={<Page02 />} />
            <Route path="/page-03" element={<Page03 />} />
            <Route path="/page-04" element={<Page04 />} />
            <Route path="/page-05" element={<Page05 />} />
            <Route path="/page-06" element={<Page06 />} />
            <Route path="/page-07" element={<Page07 />} />
            <Route path="/page-08" element={<Page08 />} />
            <Route path="/page-09" element={<Page09 />} />
            <Route path="/page-10" element={<Page10 />} />
            <Route path="/page-11" element={<Page11 />} />
            <Route path="/page-12" element={<Page12 />} />
            <Route path="/page-13" element={<Page13 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </ContextProvider>
    </Router>
  );
}

export default App;
