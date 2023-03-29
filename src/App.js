import "./App.css";
import { useState } from "react";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold')

  const increaseTempValue = () => {
    const newTemperatureValue = temperatureValue + 1;

    if(temperatureValue === 30) return;

    setTemperatureValue(newTemperatureValue);

    if(newTemperatureValue >= 15 & newTemperatureValue <=24){
      setTemperatureColor('hot')
    }else if(newTemperatureValue >= 25){
      setTemperatureColor('burning')
    }else if(newTemperatureValue < 15 & newTemperatureValue >=5){
      setTemperatureColor('cold')
    }
  }

  const decreaseTempValue = () => {
    const newTemperatureValue = temperatureValue - 1;

    if(temperatureValue === 0) return;

    setTemperatureValue(newTemperatureValue);

    if(newTemperatureValue < 15 & newTemperatureValue >=5){
      setTemperatureColor('cold')
    }else if(newTemperatureValue <= 5){
      setTemperatureColor('freezing')
    }else if(newTemperatureValue >= 15 & newTemperatureValue <=24){
      setTemperatureColor('hot')
    }
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTempValue}>+</button>
        <button onClick={decreaseTempValue}>-</button>
      </div>
    </div>
  );
}

export default App;
