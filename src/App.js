import { useState } from "react";
import "./App.css";
import FormPrediction from "./Components/FormPrediction";
import Charts from "./Components/Charts";
function App() {
  const [predict, setPredict] = useState(-1)
  const [newdata, setNewdata] = useState([{x:-2,y:-2,z:400}])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clasificación de Casos Positivos de Covid según síntomas</h1>
        <FormPrediction func={setPredict} func2={setNewdata}/>
        <p>Cluster al que pertenece: {predict + 1}</p>
        <Charts className="Charts" newdata={newdata}/>
      </header>
    </div>
  );
}

export default App;
