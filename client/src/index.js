import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bridge from '@vkontakte/vk-bridge';


// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}


