import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bridge from '@vkontakte/vk-bridge';

bridge.send('VKWebAppInit',{})
  bridge.subscribe((e) => {
  console.log('bridge event', e);
});
console.log(window.location.search.slice(1))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


