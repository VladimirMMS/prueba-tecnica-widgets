
const script2 = document.createElement('script');
script2.src = './widgetB/dist/widgetB.umd.cjs';


document.body.appendChild(script2);

window.onload = () => {
    window.renderWidgetB("widgetb-container");
  };


