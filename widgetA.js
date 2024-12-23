
const script = document.createElement('script');
script.src = './widgetA/dist/react-widget.umd.cjs';


document.body.appendChild(script);

window.onload = () => {
    window.renderWidgetA("widgeta-container");
  };


