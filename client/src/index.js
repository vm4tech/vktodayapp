import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bridge from '@vkontakte/vk-bridge';


// Init VK  Mini App
let response = null;
bridge.send("VKWebAppInit").then(data => response = data);
console.log("VKWebAppInit",response);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}


