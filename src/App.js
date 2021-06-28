import { useState } from "react";
import "./App.css";
import FormPrediction from "./Components/FormPrediction";
import Charts from "./Components/Charts";
function App() {
  const [predict, setPredict] = useState(-1)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clasificación de Feminicidios utilizando K Means</h1>
        <FormPrediction func={setPredict}/>
        <p>Cluster al que pertenece: {predict + 1}</p>
        <Charts className="Charts"/>
      </header>
    </div>
  );
}

export default App;
