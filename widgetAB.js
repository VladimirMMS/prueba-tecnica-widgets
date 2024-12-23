
const script = document.createElement('script');
const script2 = document.createElement('script');
script.src = './widgetA/dist/react-widget.umd.cjs';
script2.src = './widgetB/dist/widgetB.umd.cjs';


document.body.appendChild(script);
document.body.appendChild(script2);

window.onload = () => {
    window.renderWidgetA("widgeta-container");
    window.renderWidgetB("widgetb-container");
  };


