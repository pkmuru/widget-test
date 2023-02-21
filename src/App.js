import { useState } from "react";
import "./styles.css";
import News from "./News";
import Weather from "./Weather";
import Currency from "./Currency";

const widgetsMapping = {
  news: News,
  weather: Weather,
  currency: Currency
};

export default function App() {
  const [widgets, setWidgets] = useState(["weather", "news"]);

  const addWidget = (widget) => {
    setWidgets([...widgets, widget]);
  };

  const removeWidget = (index) => {
    const updated = [...widgets];
    updated.splice(index, 1);
    setWidgets(updated);
  };

  return (
    <div>
      <div>
        {Object.keys(widgetsMapping).map((widget) => (
          <button key={widget} onClick={() => addWidget(widget)}>
            {widget}+
          </button>
        ))}
      </div>
      <div className="App">
        {widgets.map((widget, index) => {
          const Widget = widgetsMapping[widget];
          return (
            <Widget
              key={`${widget}${index}`}
              removeWidget={() => removeWidget(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
