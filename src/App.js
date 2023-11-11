import "./App.css";
import Alert from "./custom components/Alert";
import Navbar from "./custom components/Navbar";
import TextForm from "./custom components/TextForm";
// import About from "./custom components/About";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from "./custom components/Contact";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router>
        <Navbar
          title="Text Utils"
          firstLi="Home"
          mode={mode}
          toggleMode={changeMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text below"
                  mode={mode}
                />
              }
            />
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router> */}
      <Navbar
        title="Text Utils"
        firstLi="Home"
        mode={mode}
        toggleMode={changeMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter your text below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
