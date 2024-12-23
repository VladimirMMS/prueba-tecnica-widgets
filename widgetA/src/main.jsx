import ReactDOM from "react-dom/client";
import App from "./App";

window.renderWidgetA = (elementId) => {
  const root = ReactDOM.createRoot(document.getElementById(elementId));
  root.render(<App />);
};

window.renderWidgetA("root");