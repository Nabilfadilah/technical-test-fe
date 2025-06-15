import "./App.css";
import Soal14 from "./components/soal14";
import Soal15 from "./components/Soal15";
import Soal16 from "./components/Soal16";
import Soal17 from "./components/Soal17";
import Soal18 from "./components/Soal18";
import Soal19 from "./components/Soal19";
import Soal20 from "./components/live-code/Soal20";
import Soal24 from "./components/debug/Soal24";
import Soal21 from "./components/mini-project/Soal21";
import Soal22 from "./components/mini-project/Soal22";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="soal14">
                <p className="bgP">Soal 14:</p>
                <Soal14 />
              </div>

              <div className="soal15">
                <p className="bgP">Soal 15:</p>
                <Soal15 />
              </div>

              <div className="soal16">
                <p className="bgP">Soal 16:</p>
                <Soal16 />
              </div>

              <div className="soal17">
                <p className="bgP">Soal 17:</p>
                <Soal17 />
              </div>

              <div className="soal18">
                <p className="bgP">Soal 18:</p>
                <Soal18 />
              </div>

              <div className="soal19">
                <p className="bgP">Soal 19:</p>
                <Soal19 />
              </div>

              <div className="soal20">
                <p className="bgP">Soal 20:</p>
                <Soal20 />
              </div>

              <div className="soal24">
                <p className="bgP">Soal 24:</p>
                <Soal24 />
              </div>
            </>
          }
        />

        <Route
          path="/mini-project"
          element={
            <>
              <div className="soal21">
                <p className="bgP">Soal 21:</p>
                <Soal21 />
              </div>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/navbar"
          element={
            <div className="soal22">
              <p className="bgP">Soal 22:</p>
              <Soal22 />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
