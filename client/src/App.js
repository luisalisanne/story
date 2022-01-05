import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ContextProvider from './context/ContextProvider';

// Import Components
import Header from "./components/Header/Header";
// import NextButton from "./components/NextButton/NextButton"
import Footer from "./components/Footer/Footer";

// Import Views
import Landing from "./views/Landing/Landing";
import Page01 from "./views/Page01/Page01"
import Page02 from "./views/Page02/Page02"


function App() {
  return (

    <Router>
      <ContextProvider>

        <Header/>

        <main>

          <Routes>

            <Route path="/" element={<Landing/>}/>
            <Route path="/page-01" element={<Page01/>}/>
            <Route path="/page-02" element={<Page02/>}/>

          </Routes>

          {/* <NextButton /> */}

        </main>

        <Footer/>

      </ContextProvider>
    </Router>

  );
}

export default App;
