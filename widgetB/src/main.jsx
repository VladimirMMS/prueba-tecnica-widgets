
import ReactDOM from "react-dom/client";
import App from "./App";

window.renderWidgetB = (elementId) => {
  const root = ReactDOM.createRoot(document.getElementById(elementId));
  root.render(<App />);
};

window.renderWidgetB("root");